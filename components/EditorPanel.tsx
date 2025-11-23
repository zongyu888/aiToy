import React from 'react';
import { PALETTE_COLORS } from '../constants';

interface EditorPanelProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
  isDeleting: boolean;
  setIsDeleting: (val: boolean) => void;
  onClear: () => void;
  modelName: string;
  onNameChange: (name: string) => void;
  onSave: () => void;
  onSaveAsNew: () => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({ 
    selectedColor, 
    onColorSelect, 
    isDeleting, 
    setIsDeleting,
    onClear,
    modelName,
    onNameChange,
    onSave,
    onSaveAsNew,
    isMobile,
    onClose
}) => {
  return (
    <div className="p-6 bg-white flex flex-col h-full pt-20 md:pt-6">
        <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                ⚙️ Project Settings
            </h2>
            <p className="text-sm text-gray-500 mt-1">
                Manage your creation.
            </p>
        </div>
        
        {/* Name Input */}
        <div className="mb-6">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Model Name</label>
            <input 
                type="text" 
                value={modelName}
                onChange={(e) => onNameChange(e.target.value)}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-base font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                placeholder="My Awesome Creation"
            />
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto pr-1 pb-4">
            
            {/* Desktop Tools / Palette (Hidden on mobile if handled by HUD) */}
            <div className="md:block hidden">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tools</label>
                    <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
                        <button
                            onClick={() => setIsDeleting(false)}
                            className={`flex-1 py-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${!isDeleting ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <span className="text-xl">🧱</span> Build
                        </button>
                        <button
                            onClick={() => setIsDeleting(true)}
                            className={`flex-1 py-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${isDeleting ? 'bg-white shadow-sm text-red-500' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <span className="text-xl">🧹</span> Erase
                        </button>
                    </div>
                </div>

                <div className={`transition-opacity duration-200 ${isDeleting ? 'opacity-40 pointer-events-none grayscale' : ''}`}>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Palette</label>
                    <div className="grid grid-cols-5 gap-3">
                        {PALETTE_COLORS.map(color => (
                            <button
                                key={color}
                                onClick={() => onColorSelect(color)}
                                className={`
                                    aspect-square rounded-full border-2 transition-all duration-200 hover:scale-105 active:scale-95
                                    ${selectedColor === color ? 'border-gray-800 scale-105 shadow-md ring-2 ring-gray-200' : 'border-transparent hover:border-gray-200'}
                                `}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Helper Text */}
            <div className="md:hidden p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> Use the toolbar at the bottom of the screen to select colors and tools while building!
                </p>
            </div>

        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-gray-100 mt-2 space-y-3 pb-8 md:pb-0">
             <div className="grid grid-cols-2 gap-3">
                 <button
                    onClick={onSave}
                    className="py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg shadow-green-200 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                    <span className="text-lg">💾</span> Save
                </button>
                 <button
                    onClick={onSaveAsNew}
                    className="py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg shadow-blue-200 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                    <span className="text-lg">📋</span> Copy
                </button>
            </div>

            <button
                onClick={() => {
                    if(window.confirm("Clear the grid? This cannot be undone.")) {
                        onClear();
                        if (onClose) onClose();
                    }
                }}
                className="w-full py-3 rounded-2xl font-bold text-red-500 bg-red-50 hover:bg-red-100 transition-colors active:scale-95 text-sm"
            >
                Clear Grid
            </button>
        </div>
    </div>
  );
};