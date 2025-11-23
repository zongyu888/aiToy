export interface Voxel {
  id: string;
  x: number;
  y: number;
  z: number;
  color: string;
}

export interface VoxelModel {
  id: string;
  name: string;
  category: 'animal' | 'object' | 'vehicle' | 'custom';
  voxels: Voxel[];
}

export enum AppMode {
  GALLERY = 'GALLERY',
  VIEWER = 'VIEWER', // Inspecting / Rotating
  BUILDER = 'BUILDER', // Step-by-step assembly
  GENERATOR = 'GENERATOR', // AI Creation
  EDITOR = 'EDITOR' // Manual Building
}

export interface GenerationConfig {
  prompt: string;
  image?: string; // base64
}