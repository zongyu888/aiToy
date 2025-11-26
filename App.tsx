
import React, { useState, useEffect } from 'react';
import { VoxelScene } from './components/VoxelScene';
import { Gallery } from './components/Gallery';
import { Generator } from './components/Generator';
import { EditorPanel } from './components/EditorPanel';
import { VoxelModel, AppMode } from './types';
import { PRESET_MODELS, PALETTE_COLORS } from './constants';

const App: React.FC = () => {
  const [currentModel, setCurrentModel] = useState<VoxelModel | null>(PRESET_MODELS[0]);
  const [buildProgress, setBuildProgress] = useState<number>(1);
  const [mode, setMode] = useState<AppMode>(AppMode.VIEWER);
  
  // UI Visibility State
  const [showGallery, setShowGallery] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);
  const [showEditorSettings, setShowEditorSettings] = useState(false);
  
  // Editor State
  const [editorColor, setEditorColor] = useState<string>('#FCD34D');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [interactionMode, setInteractionMode] = useState<'orbit' | 'build'>('orbit');
  const [isPaletteOpen, setIsPaletteOpen] = useState(true);

  // Saved Models State
  const [savedModels, setSavedModels] = useState<VoxelModel[]>([]);

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('toybox_saved_models');
    if (saved) {
        try {
            setSavedModels(JSON.parse(saved));
        } catch (e) {
            console.error("Failed to load saved models", e);
        }
    }
  }, []);

  // Persist to LocalStorage whenever savedModels changes
  useEffect(() => {
    localStorage.setItem('toybox_saved_models', JSON.stringify(savedModels));
  }, [savedModels]);

  // Reset to orbit mode when entering editor
  useEffect(() => {
    if (mode === AppMode.EDITOR) {
        setInteractionMode('orbit');
        setShowEditorSettings(false);
        setIsPaletteOpen(true);
    }
  }, [mode]);

  // Auto-play build animation when mode switches to BUILDER
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (mode === AppMode.BUILDER) {
      setBuildProgress(0);
      interval = setInterval(() => {
        setBuildProgress((prev) => {
          if (prev >= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev + 0.05; // Speed of auto-build
        });
      }, 50);
    } else {
      setBuildProgress(1);
    }
    return () => {
        if (interval) clearInterval(interval);
    };
  }, [mode, currentModel]);

  const handleSelectModel = (model: VoxelModel) => {
    setCurrentModel(model);
    setMode(AppMode.VIEWER);
    setShowGallery(false);
  };

  const handleGenerated = (model: VoxelModel) => {
    setCurrentModel(model);
    setMode(AppMode.BUILDER); 
    setShowGenerator(false);
  };

  // Editor Actions
  const handleEditorVoxelAdd = (x: number, y: number, z: number) => {
      if (!currentModel) return;
      // Prevent duplicates
      const exists = currentModel.voxels.some(v => v.x === x && v.y === y && v.z === z);
      if (exists) return;

      const newVoxel = {
          id: `manual-${Date.now()}-${Math.random()}`,
          x, y, z,
          color: editorColor
      };
      
      setCurrentModel({
          ...currentModel,
          voxels: [...currentModel.voxels, newVoxel]
      });
  };

  const handleEditorVoxelRemove = (id: string) => {
      if (!currentModel) return;
      setCurrentModel({
          ...currentModel,
          voxels: currentModel.voxels.filter(v => v.id !== id)
      });
  };

  const handleModelNameChange = (name: string) => {
      if (!currentModel) return;
      setCurrentModel({ ...currentModel, name });
  };

  const handleSaveModel = () => {
      if (!currentModel) return;

      const isPreset = PRESET_MODELS.some(m => m.id === currentModel.id);
      
      let newModel: VoxelModel;
      let newSavedModels = [...savedModels];

      if (isPreset) {
          // Clone preset as new custom model
          newModel = {
              ...currentModel,
              id: `custom-${Date.now()}`,
              category: 'custom'
          };
          newSavedModels.push(newModel);
      } else {
          // Update existing custom model or add if not found (e.g. from AI)
          const index = savedModels.findIndex(m => m.id === currentModel.id);
          if (index >= 0) {
              newSavedModels[index] = currentModel;
              newModel = currentModel;
          } else {
              newModel = { ...currentModel, category: 'custom' };
              newSavedModels.push(newModel);
          }
      }

      setSavedModels(newSavedModels);
      setCurrentModel(newModel); // Update current reference to the saved version
      alert(`已保存 "${newModel.name}"!`);
  };

  const handleSaveAsNewModel = () => {
      if (!currentModel) return;
      
      const newModel: VoxelModel = {
          ...currentModel,
          id: `custom-${Date.now()}`,
          name: `${currentModel.name} (Copy)`,
          category: 'custom'
      };
      
      setSavedModels([newModel, ...savedModels]);
      setCurrentModel(newModel);
      alert(`已保存副本: "${newModel.name}"`);
  };

  const handleDeleteModel = (id: string, e: React.MouseEvent) => {
      e.stopPropagation();
      if (window.confirm("确定要删除此模型吗？")) {
          setSavedModels(savedModels.filter(m => m.id !== id));
          if (currentModel?.id === id) {
              setCurrentModel(PRESET_MODELS[0]);
          }
      }
  };

  const handleClearEditor = () => {
      if (currentModel) {
          setCurrentModel({ ...currentModel, voxels: [] });
      }
  };

  const enterEditor = () => {
      setMode(AppMode.EDITOR);
      setShowGallery(false);
      setShowGenerator(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden font-sans text-gray-800 bg-gray-50 fixed inset-0">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden absolute top-0 left-0 right-0 z-30 p-4 flex justify-between items-center pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm pointer-events-auto border border-white/50">
           <h1 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 truncate max-w-[150px]">
               {currentModel?.name || 'Toy Box'}
           </h1>
        </div>
        
        {/* Top Right Controls */}
        <div className="flex gap-2 pointer-events-auto">
            {/* Show Gallery Button if NOT in Editor/Generator */}
            {mode !== AppMode.EDITOR && mode !== AppMode.GENERATOR && (
                <button 
                    onClick={() => setShowGallery(true)}
                    className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md text-gray-600 active:scale-95 transition-transform border border-white/50"
                >
                    <span className="text-xl">🧸</span>
                </button>
            )}

            {/* In Editor: Show Settings Button */}
            {(mode as AppMode) === AppMode.EDITOR && (
                 <button 
                    onClick={() => setShowEditorSettings(true)}
                    className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md text-gray-600 active:scale-95 transition-transform border border-white/50"
                >
                    <span className="text-xl">⚙️</span>
                </button>
            )}
            
            {/* In Editor: Exit Button */}
            {(mode as AppMode) === AppMode.EDITOR && (
                 <button 
                    onClick={() => setMode(AppMode.VIEWER)}
                    className="bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md text-red-500 active:scale-95 transition-transform border border-white/50"
                >
                    <span className="text-xl">✕</span>
                </button>
            )}
        </div>
      </div>

      {/* Left Panel - Gallery */}
      <div className={`
        fixed inset-0 z-50 md:relative md:inset-auto md:z-10 md:h-full md:block
        transition-transform duration-300 ease-in-out bg-white md:bg-transparent
        ${showGallery ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-auto'}
        ${(mode as AppMode) === AppMode.EDITOR ? 'md:hidden' : ''}
      `}>
          {/* Mobile Close Button for Gallery */}
          <div className="md:hidden absolute top-4 right-4 z-50">
             <button onClick={() => setShowGallery(false)} className="p-2 bg-gray-100 rounded-full shadow-sm">✕</button>
          </div>

         <div className="h-full w-full md:w-80 shadow-2xl md:shadow-none bg-white">
             <Gallery 
                onSelect={(m) => { handleSelectModel(m); }} 
                selectedId={currentModel?.id} 
                savedModels={savedModels}
                onDelete={handleDeleteModel}
             />
         </div>
      </div>

      {/* Center - 3D Scene */}
      <div className="flex-1 relative h-full w-full">
        <VoxelScene 
            model={currentModel} 
            buildProgress={buildProgress} 
            autoRotate={mode === AppMode.VIEWER}
            isEditor={mode === AppMode.EDITOR}
            editorColor={editorColor}
            isDeleting={isDeleting}
            onVoxelAdd={handleEditorVoxelAdd}
            onVoxelRemove={handleEditorVoxelRemove}
            interactionMode={interactionMode}
        />
        
        {/* ---- EDITOR MOBILE HUD ---- */}
        {mode === AppMode.EDITOR && (
            <>
                {/* Floating Toggle: Move vs Interact */}
                <div className="absolute top-14 left-1/2 -translate-x-1/2 z-40 bg-white/90 backdrop-blur rounded-full p-1 shadow-lg border border-gray-200 flex gap-1 pointer-events-auto">
                    <button 
                        onClick={() => setInteractionMode('orbit')}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${interactionMode === 'orbit' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        <span>🖐️</span> 移动
                    </button>
                    <button 
                        onClick={() => setInteractionMode('build')}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${interactionMode === 'build' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        <span>{isDeleting ? '🧹' : '✏️'}</span> 互动
                    </button>
                </div>

                {/* Mobile Editor Toolbar (Palette & Tools) */}
                <div className={`absolute bottom-4 z-40 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-3 pointer-events-auto md:hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isPaletteOpen ? 'left-4 right-4' : 'right-4 w-auto'}`}>
                    <div className="flex items-center gap-3">
                        {/* Tool Toggle: Paint / Erase */}
                        <div className={`flex flex-col gap-1 ${isPaletteOpen ? 'min-w-[3rem]' : ''}`}>
                             <button 
                                onClick={() => setIsDeleting(false)}
                                className={`p-2 rounded-lg flex justify-center items-center transition-all ${!isDeleting ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-500' : 'bg-gray-100 text-gray-400'}`}
                                title="绘画模式"
                            >
                                <span className="text-lg">🖌️</span>
                            </button>
                             <button 
                                onClick={() => setIsDeleting(true)}
                                className={`p-2 rounded-lg flex justify-center items-center transition-all ${isDeleting ? 'bg-red-100 text-red-600 ring-2 ring-red-500' : 'bg-gray-100 text-gray-400'}`}
                                title="擦除模式"
                            >
                                <span className="text-lg">🗑️</span>
                            </button>
                        </div>

                        {/* Divider */}
                        {isPaletteOpen && <div className="w-px h-16 bg-gray-200 animate-in fade-in"></div>}

                        {/* Palette Scroll */}
                        {isPaletteOpen && (
                            <div className="flex-1 overflow-x-auto scrollbar-hide flex gap-2 py-1 items-center animate-in slide-in-from-right-5 fade-in duration-300">
                                {PALETTE_COLORS.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => { setEditorColor(color); setIsDeleting(false); }}
                                        className={`
                                            flex-shrink-0 w-10 h-10 rounded-full border-2 transition-all duration-200
                                            ${editorColor === color && !isDeleting ? 'border-gray-800 scale-110 shadow-md' : 'border-transparent hover:border-gray-300'}
                                        `}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        )}
                        
                        {/* Collapse/Expand Toggle */}
                        <button 
                            onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                            className="ml-1 p-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-500 border border-gray-200 shadow-sm transition-all"
                            title={isPaletteOpen ? "收起菜单" : "展开颜色"}
                        >
                            {isPaletteOpen ? (
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            ) : (
                                <div className="w-6 h-6 rounded-full border border-gray-300 shadow-sm" style={{ backgroundColor: editorColor }}></div>
                            )}
                        </button>
                    </div>
                </div>
            </>
        )}

        {/* ---- STANDARD BOTTOM DOCK (Not Editor) ---- */}
        {mode !== AppMode.EDITOR && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-md bg-white/80 backdrop-blur-xl border border-white/40 p-2 rounded-2xl shadow-2xl z-40 pointer-events-auto flex justify-between md:justify-center md:gap-6 items-center">
                
                <button 
                    onClick={() => setMode(AppMode.VIEWER)}
                    className={`flex flex-col md:flex-row items-center justify-center p-3 rounded-xl transition-all flex-1 md:flex-none ${mode === AppMode.VIEWER ? 'bg-blue-500 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-white/50'}`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span className="text-[10px] md:hidden mt-1 font-medium">查看</span>
                </button>
                
                <button 
                    onClick={() => setMode(AppMode.BUILDER)}
                    className={`flex flex-col md:flex-row items-center justify-center p-3 rounded-xl transition-all flex-1 md:flex-none ${mode === AppMode.BUILDER ? 'bg-orange-500 text-white shadow-lg shadow-orange-200' : 'text-gray-500 hover:bg-white/50'}`}
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                <span className="text-[10px] md:hidden mt-1 font-medium">建造</span>
                </button>

                <button
                    onClick={toggleFullscreen}
                    className="flex flex-col md:flex-row items-center justify-center p-3 rounded-xl transition-all flex-1 md:flex-none text-gray-500 hover:bg-white/50"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    <span className="text-[10px] md:hidden mt-1 font-medium">全屏</span>
                </button>

                <button
                    onClick={enterEditor}
                    className="flex flex-col md:flex-row items-center justify-center p-3 rounded-xl transition-all flex-1 md:flex-none text-gray-500 hover:bg-white/50"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    <span className="text-[10px] md:hidden mt-1 font-medium">编辑</span>
                </button>
                
                {mode === AppMode.BUILDER && (
                    <div className="hidden md:flex items-center px-2 w-32">
                        <input 
                            type="range" 
                            min="0" 
                            max="1" 
                            step="0.01" 
                            value={buildProgress} 
                            onChange={(e) => setBuildProgress(parseFloat(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                    </div>
                )}
            </div>
        )}
      </div>

      {/* Right Panel - Generator (Desktop/Mobile) & Editor Settings (Desktop/Mobile Modal) */}
      {/* Logic: 
         - Generator: visible if showGenerator is true. 
         - Editor Settings: visible if showEditorSettings is true (Mobile) OR mode is EDITOR (Desktop).
      */}
      <div className={`
        fixed inset-0 z-50 md:relative md:inset-auto md:z-10 md:h-full
        transition-all duration-300 ease-in-out bg-white md:bg-transparent
        ${(showGenerator || ((mode as AppMode) === AppMode.EDITOR && !showEditorSettings)) ? '' : 'pointer-events-none md:pointer-events-auto'}
        ${/* Visibility logic */ ''}
        ${showGenerator ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 md:hidden'}
      `}>
          {/* Mobile Close Button */}
          <div className="md:hidden absolute top-4 right-4 z-50">
             <button onClick={() => setShowGenerator(false)} className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200">✕</button>
          </div>
        
          <div className="h-full w-full md:w-80 shadow-2xl md:shadow-none bg-white md:border-l md:border-gray-100">
             <Generator onGenerated={handleGenerated} />
          </div>
      </div>

      {/* Editor Settings / Panel (Desktop Side, Mobile Drawer) */}
      <div className={`
         fixed inset-0 z-50 md:relative md:inset-auto md:z-10 md:h-full
         transition-all duration-300 ease-in-out bg-white md:bg-transparent
         ${mode === AppMode.EDITOR ? 'md:block' : 'md:hidden'}
         ${showEditorSettings ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 md:translate-y-0 md:opacity-100'}
      `}>
           {/* Mobile Close Button for Settings */}
           <div className="md:hidden absolute top-4 right-4 z-50">
             <button onClick={() => setShowEditorSettings(false)} className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200">✕</button>
          </div>

          <div className="h-full w-full md:w-80 shadow-2xl md:shadow-none bg-white md:border-l md:border-gray-100">
                <EditorPanel 
                    selectedColor={editorColor} 
                    onColorSelect={setEditorColor}
                    isDeleting={isDeleting}
                    setIsDeleting={setIsDeleting}
                    onClear={handleClearEditor}
                    modelName={currentModel?.name || ''}
                    onNameChange={handleModelNameChange}
                    onSave={() => { handleSaveModel(); setShowEditorSettings(false); }}
                    onSaveAsNew={() => { handleSaveAsNewModel(); setShowEditorSettings(false); }}
                    isMobile={true} // Hint to component to adapt layout if needed
                    onClose={() => setShowEditorSettings(false)}
                    onExit={() => setMode(AppMode.VIEWER)}
                />
          </div>
      </div>

    </div>
  );
};

export default App;