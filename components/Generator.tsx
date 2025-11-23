import React, { useState } from 'react';
import { VoxelModel } from '../types';
import { generateVoxelModel } from '../services/geminiService';

interface GeneratorProps {
  onGenerated: (model: VoxelModel) => void;
}

export const Generator: React.FC<GeneratorProps> = ({ onGenerated }) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!prompt && !selectedImage) return;

    setIsLoading(true);
    setError(null);

    try {
      const desc = prompt || "A random object";
      const model = await generateVoxelModel(desc, selectedImage || undefined);
      onGenerated(model);
      // Reset after success
      setPrompt('');
      setSelectedImage(null);
    } catch (err) {
      setError("Failed to generate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white border-t border-gray-100 md:border-t-0 md:border-l md:w-80 shadow-lg z-10 flex flex-col h-full pt-20 md:pt-6">
        <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                ✨ AI Builder
            </h2>
            <p className="text-sm text-gray-500 mt-1">Describe it or upload a photo.</p>
        </div>

      <div className="space-y-6 flex-1 overflow-y-auto pr-1">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Text Description</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A blue race car"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-24"
          />
        </div>

        <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Reference Image (Optional)</label>
            <div className="relative group">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="image-upload"
                />
                <label 
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-blue-400 transition-colors"
                >
                    {selectedImage ? (
                        <img src={selectedImage} alt="Preview" className="h-full w-full object-contain p-2 rounded-xl" />
                    ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <span className="text-3xl mb-2 text-gray-400">📷</span>
                            <p className="text-xs text-gray-500 font-medium">Click to upload</p>
                        </div>
                    )}
                </label>
                {selectedImage && (
                    <button 
                        onClick={(e) => { e.preventDefault(); setSelectedImage(null); }}
                        className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-red-50 text-red-500"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                )}
            </div>
        </div>

        {error && (
            <div className="p-3 bg-red-50 text-red-600 text-xs font-medium rounded-xl border border-red-100">
                {error}
            </div>
        )}
      </div>

      <div className="pt-4 pb-24 md:pb-0">
        <button
            onClick={handleGenerate}
            disabled={isLoading || (!prompt && !selectedImage)}
            className={`
                w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all
                ${isLoading || (!prompt && !selectedImage) ? 'bg-gray-300 cursor-not-allowed shadow-none' : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-xl hover:scale-[1.02] active:scale-95 shadow-indigo-200'}
            `}
        >
            {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Dreaming...
                </span>
            ) : 'Generate Voxel Art'}
        </button>
      </div>
    </div>
  );
};