import React from 'react';
import { VoxelModel } from '../types';
import { PRESET_MODELS } from '../constants';

interface GalleryProps {
  onSelect: (model: VoxelModel) => void;
  selectedId?: string;
  savedModels?: VoxelModel[];
  onDelete?: (id: string, e: React.MouseEvent) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelect, selectedId, savedModels = [], onDelete }) => {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-100 w-full md:w-80 shadow-lg z-10 relative">
      <div className="p-6 pt-20 md:pt-6 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md z-10 sticky top-0">
        <h1 className="text-2xl font-extrabold tracking-tight">🧸 Toy Box</h1>
        <p className="text-blue-100 text-sm mt-1 font-medium">Pick a model to build</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide pb-32 md:pb-4 bg-white">
        
        {/* Saved Creations Section */}
        {savedModels && savedModels.length > 0 && (
            <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">My Creations</h3>
                <div className="grid grid-cols-2 gap-3">
                    {savedModels.map((model) => (
                        <button
                        key={model.id}
                        onClick={() => onSelect(model)}
                        className={`
                            group relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-200 bg-white
                            ${selectedId === model.id 
                            ? 'border-purple-500 bg-purple-50 shadow-md ring-2 ring-purple-200 ring-offset-1' 
                            : 'border-gray-100 hover:border-purple-200 hover:bg-gray-50 hover:shadow-sm'
                            }
                        `}
                        >
                        {onDelete && (
                            <div 
                                onClick={(e) => onDelete(model.id, e)}
                                className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors z-10"
                                title="Delete"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </div>
                        )}
                        <div className="w-14 h-14 mb-3 rounded-full bg-purple-100 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                            🎨
                        </div>
                        <span className="text-sm font-bold text-gray-700 truncate w-full text-center">{model.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        )}

        {/* Presets Section */}
        <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">Presets</h3>
            <div className="grid grid-cols-2 gap-3">
            {PRESET_MODELS && PRESET_MODELS.map((model) => (
                <button
                key={model.id}
                onClick={() => onSelect(model)}
                className={`
                    group relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all duration-200 bg-white
                    ${selectedId === model.id 
                    ? 'border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200 ring-offset-1' 
                    : 'border-gray-100 hover:border-blue-200 hover:bg-gray-50 hover:shadow-sm'
                    }
                `}
                >
                <div className="w-14 h-14 mb-3 rounded-full bg-gray-100 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">
                    {model.id === 'duck' && '🦆'}
                    {model.id === 'heart' && '❤️'}
                    {model.id === 'tree' && '🌲'}
                    {model.id === 'penguin' && '🐧'}
                    {model.id === 'house' && '🏠'}
                    {model.id === 'car' && '🏎️'}
                    {model.id === 'castle' && '🏰'}
                    {model.id === 'robot' && '🤖'}
                    {model.id === 'rocket' && '🚀'}
                    {model.id === 'fox' && '🦊'}
                    {model.id === 'cake' && '🎂'}
                    {model.id === 'flower' && '🌻'}
                </div>
                <span className="text-sm font-bold text-gray-700">{model.name}</span>
                </button>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};