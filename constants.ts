
import { VoxelModel } from './types';

export const PRESET_MODELS: VoxelModel[] = [
  {
    id: 'duck',
    name: 'Rubber Duck',
    category: 'animal',
    voxels: [
      // Body Base (Water level)
      { id: 'd_b1', x: 0, y: 0, z: 0, color: '#FCD34D' }, { id: 'd_b2', x: 1, y: 0, z: 0, color: '#FCD34D' }, { id: 'd_b3', x: -1, y: 0, z: 0, color: '#FCD34D' },
      { id: 'd_b4', x: 0, y: 0, z: 1, color: '#FCD34D' }, { id: 'd_b5', x: 1, y: 0, z: 1, color: '#FCD34D' }, { id: 'd_b6', x: -1, y: 0, z: 1, color: '#FCD34D' },
      { id: 'd_b7', x: 0, y: 0, z: -1, color: '#FCD34D' }, { id: 'd_b8', x: 1, y: 0, z: -1, color: '#FCD34D' }, { id: 'd_b9', x: -1, y: 0, z: -1, color: '#FCD34D' },
      { id: 'd_b10', x: -2, y: 0, z: 0, color: '#FCD34D' }, // Tail base
      
      // Body Middle
      { id: 'd_m1', x: 0, y: 1, z: 0, color: '#FCD34D' }, { id: 'd_m2', x: 1, y: 1, z: 0, color: '#FCD34D' }, { id: 'd_m3', x: -1, y: 1, z: 0, color: '#FCD34D' },
      { id: 'd_m4', x: 0, y: 1, z: 1, color: '#FCD34D' }, { id: 'd_m5', x: 1, y: 1, z: 1, color: '#FCD34D' }, 
      { id: 'd_m7', x: 0, y: 1, z: -1, color: '#FCD34D' }, { id: 'd_m8', x: 1, y: 1, z: -1, color: '#FCD34D' },
      { id: 'd_m10', x: -2, y: 1, z: 0, color: '#FCD34D' }, // Tail tip

      // Wings (Orange-ish tint for contrast)
      { id: 'd_w1', x: -1, y: 1, z: 2, color: '#FBBF24' }, { id: 'd_w2', x: 0, y: 1, z: 2, color: '#FBBF24' },
      { id: 'd_w3', x: -1, y: 1, z: -2, color: '#FBBF24' }, { id: 'd_w4', x: 0, y: 1, z: -2, color: '#FBBF24' },

      // Neck
      { id: 'd_n1', x: 2, y: 1, z: 0, color: '#FCD34D' },
      { id: 'd_n2', x: 2, y: 2, z: 0, color: '#FCD34D' }, 

      // Head
      { id: 'd_h1', x: 2, y: 3, z: 0, color: '#FCD34D' }, 
      { id: 'd_h2', x: 1, y: 3, z: 0, color: '#FCD34D' },
      { id: 'd_h3', x: 2, y: 3, z: 1, color: '#FCD34D' }, 
      { id: 'd_h4', x: 2, y: 3, z: -1, color: '#FCD34D' },
      
      // Beak
      { id: 'd_bk1', x: 3, y: 3, z: 0, color: '#F97316' },

      // Eyes
      { id: 'd_e1', x: 2, y: 4, z: 1, color: '#1F2937' },
      { id: 'd_e2', x: 2, y: 4, z: -1, color: '#1F2937' },
      { id: 'd_top', x: 2, y: 4, z: 0, color: '#FCD34D' },
    ]
  },
  {
    id: 'robot',
    name: 'Retro Robot',
    category: 'custom',
    voxels: [
        // Feet
        { id: 'r_fl', x: -2, y: 0, z: 0, color: '#4B5563' }, { id: 'r_fl2', x: -2, y: 0, z: 1, color: '#4B5563' },
        { id: 'r_fr', x: 2, y: 0, z: 0, color: '#4B5563' }, { id: 'r_fr2', x: 2, y: 0, z: 1, color: '#4B5563' },

        // Legs
        { id: 'r_l1', x: -2, y: 1, z: 0, color: '#9CA3AF' }, { id: 'r_l2', x: -2, y: 2, z: 0, color: '#9CA3AF' }, { id: 'r_l3', x: -2, y: 3, z: 0, color: '#9CA3AF' },
        { id: 'r_r1', x: 2, y: 1, z: 0, color: '#9CA3AF' }, { id: 'r_r2', x: 2, y: 2, z: 0, color: '#9CA3AF' }, { id: 'r_r3', x: 2, y: 3, z: 0, color: '#9CA3AF' },

        // Hips
        { id: 'r_h1', x: -2, y: 4, z: 0, color: '#374151' }, { id: 'r_h2', x: -1, y: 4, z: 0, color: '#374151' }, { id: 'r_h3', x: 0, y: 4, z: 0, color: '#374151' }, 
        { id: 'r_h4', x: 1, y: 4, z: 0, color: '#374151' }, { id: 'r_h5', x: 2, y: 4, z: 0, color: '#374151' },

        // Torso
        { id: 'r_t1', x: -2, y: 5, z: 0, color: '#3B82F6' }, { id: 'r_t2', x: -1, y: 5, z: 0, color: '#3B82F6' }, { id: 'r_t3', x: 0, y: 5, z: 0, color: '#FCD34D' }, { id: 'r_t4', x: 1, y: 5, z: 0, color: '#3B82F6' }, { id: 'r_t5', x: 2, y: 5, z: 0, color: '#3B82F6' },
        { id: 'r_t6', x: -2, y: 6, z: 0, color: '#3B82F6' }, { id: 'r_t7', x: -1, y: 6, z: 0, color: '#3B82F6' }, { id: 'r_t8', x: 0, y: 6, z: 0, color: '#EF4444' }, { id: 'r_t9', x: 1, y: 6, z: 0, color: '#3B82F6' }, { id: 'r_t10', x: 2, y: 6, z: 0, color: '#3B82F6' },
        { id: 'r_t11', x: -2, y: 7, z: 0, color: '#3B82F6' }, { id: 'r_t12', x: -1, y: 7, z: 0, color: '#3B82F6' }, { id: 'r_t13', x: 0, y: 7, z: 0, color: '#3B82F6' }, { id: 'r_t14', x: 1, y: 7, z: 0, color: '#3B82F6' }, { id: 'r_t15', x: 2, y: 7, z: 0, color: '#3B82F6' },
        
        // Backpack/Jetpack
        { id: 'r_bp1', x: -1, y: 5, z: -1, color: '#9CA3AF' }, { id: 'r_bp2', x: 1, y: 5, z: -1, color: '#9CA3AF' },
        { id: 'r_bp3', x: -1, y: 6, z: -1, color: '#9CA3AF' }, { id: 'r_bp4', x: 1, y: 6, z: -1, color: '#9CA3AF' },

        // Arms
        { id: 'r_la1', x: -3, y: 7, z: 0, color: '#9CA3AF' }, { id: 'r_la2', x: -3, y: 6, z: 0, color: '#9CA3AF' }, { id: 'r_la3', x: -3, y: 5, z: 1, color: '#9CA3AF' }, // Left Arm forward
        { id: 'r_ra1', x: 3, y: 7, z: 0, color: '#9CA3AF' }, { id: 'r_ra2', x: 3, y: 6, z: 0, color: '#9CA3AF' }, { id: 'r_ra3', x: 3, y: 5, z: 0, color: '#9CA3AF' }, // Right arm down

        // Head
        { id: 'r_hd1', x: -1, y: 8, z: 0, color: '#E5E7EB' }, { id: 'r_hd2', x: 0, y: 8, z: 0, color: '#E5E7EB' }, { id: 'r_hd3', x: 1, y: 8, z: 0, color: '#E5E7EB' },
        { id: 'r_hd4', x: -1, y: 9, z: 0, color: '#E5E7EB' }, { id: 'r_hd5', x: 0, y: 9, z: 0, color: '#E5E7EB' }, { id: 'r_hd6', x: 1, y: 9, z: 0, color: '#E5E7EB' },
        { id: 'r_hd7', x: -1, y: 9, z: 1, color: '#22C55E' }, { id: 'r_hd8', x: 1, y: 9, z: 1, color: '#22C55E' }, // Eyes

        // Antenna
        { id: 'r_an1', x: 0, y: 10, z: 0, color: '#EF4444' },
    ]
  },
  {
    id: 'castle',
    name: 'Magic Castle',
    category: 'custom',
    voxels: [
        // Base
        { id: 'c_b1', x: -2, y: 0, z: -2, color: '#57534E' }, { id: 'c_b2', x: -2, y: 0, z: 2, color: '#57534E' }, { id: 'c_b3', x: 2, y: 0, z: -2, color: '#57534E' }, { id: 'c_b4', x: 2, y: 0, z: 2, color: '#57534E' }, // Corners
        { id: 'c_b5', x: 0, y: 0, z: 0, color: '#78716C' }, { id: 'c_b6', x: -1, y: 0, z: 0, color: '#78716C' }, { id: 'c_b7', x: 1, y: 0, z: 0, color: '#78716C' }, // Floor
        
        // Corner Towers
        { id: 'c_t1_1', x: -2, y: 1, z: -2, color: '#A8A29E' }, { id: 'c_t1_2', x: -2, y: 2, z: -2, color: '#A8A29E' }, { id: 'c_t1_3', x: -2, y: 3, z: -2, color: '#A8A29E' }, { id: 'c_t1_4', x: -2, y: 4, z: -2, color: '#A8A29E' },
        { id: 'c_t2_1', x: 2, y: 1, z: -2, color: '#A8A29E' }, { id: 'c_t2_2', x: 2, y: 2, z: -2, color: '#A8A29E' }, { id: 'c_t2_3', x: 2, y: 3, z: -2, color: '#A8A29E' }, { id: 'c_t2_4', x: 2, y: 4, z: -2, color: '#A8A29E' },
        { id: 'c_t3_1', x: -2, y: 1, z: 2, color: '#A8A29E' }, { id: 'c_t3_2', x: -2, y: 2, z: 2, color: '#A8A29E' }, { id: 'c_t3_3', x: -2, y: 3, z: 2, color: '#A8A29E' }, { id: 'c_t3_4', x: -2, y: 4, z: 2, color: '#A8A29E' },
        { id: 'c_t4_1', x: 2, y: 1, z: 2, color: '#A8A29E' }, { id: 'c_t4_2', x: 2, y: 2, z: 2, color: '#A8A29E' }, { id: 'c_t4_3', x: 2, y: 3, z: 2, color: '#A8A29E' }, { id: 'c_t4_4', x: 2, y: 4, z: 2, color: '#A8A29E' },

        // Walls
        { id: 'c_w1', x: 0, y: 1, z: -2, color: '#78716C' }, { id: 'c_w2', x: 0, y: 2, z: -2, color: '#78716C' },
        { id: 'c_w3', x: 0, y: 1, z: 2, color: '#78716C' }, { id: 'c_w4', x: 0, y: 2, z: 2, color: '#78716C' }, // Gate area
        { id: 'c_w5', x: -2, y: 1, z: 0, color: '#78716C' }, { id: 'c_w6', x: -2, y: 2, z: 0, color: '#78716C' },
        { id: 'c_w7', x: 2, y: 1, z: 0, color: '#78716C' }, { id: 'c_w8', x: 2, y: 2, z: 0, color: '#78716C' },

        // Gate
        { id: 'c_g1', x: 0, y: 0, z: 2, color: '#78350F' }, { id: 'c_g2', x: 0, y: 1, z: 2, color: '#78350F' },

        // Central Keep
        { id: 'c_k1', x: -1, y: 1, z: -1, color: '#D6D3D1' }, { id: 'c_k2', x: 0, y: 1, z: -1, color: '#D6D3D1' }, { id: 'c_k3', x: 1, y: 1, z: -1, color: '#D6D3D1' },
        { id: 'c_k4', x: -1, y: 1, z: 0, color: '#D6D3D1' }, { id: 'c_k6', x: 1, y: 1, z: 0, color: '#D6D3D1' },
        { id: 'c_k7', x: -1, y: 1, z: 1, color: '#D6D3D1' }, { id: 'c_k8', x: 0, y: 1, z: 1, color: '#D6D3D1' }, { id: 'c_k9', x: 1, y: 1, z: 1, color: '#D6D3D1' },
        
        // Keep Height
        { id: 'c_kh1', x: -1, y: 2, z: -1, color: '#D6D3D1' }, { id: 'c_kh2', x: 1, y: 2, z: -1, color: '#D6D3D1' }, { id: 'c_kh3', x: 1, y: 2, z: 1, color: '#D6D3D1' }, { id: 'c_kh4', x: -1, y: 2, z: 1, color: '#D6D3D1' },
        { id: 'c_kh5', x: -1, y: 3, z: -1, color: '#D6D3D1' }, { id: 'c_kh6', x: 1, y: 3, z: -1, color: '#D6D3D1' }, { id: 'c_kh7', x: 1, y: 3, z: 1, color: '#D6D3D1' }, { id: 'c_kh8', x: -1, y: 3, z: 1, color: '#D6D3D1' },
        { id: 'c_kh9', x: -1, y: 4, z: -1, color: '#D6D3D1' }, { id: 'c_kh10', x: 1, y: 4, z: -1, color: '#D6D3D1' }, { id: 'c_kh11', x: 1, y: 4, z: 1, color: '#D6D3D1' }, { id: 'c_kh12', x: -1, y: 4, z: 1, color: '#D6D3D1' },
        { id: 'c_kh13', x: 0, y: 4, z: 0, color: '#D6D3D1' },

        // Roofs (Blue)
        { id: 'c_r1', x: -2, y: 5, z: -2, color: '#2563EB' }, { id: 'c_r2', x: 2, y: 5, z: -2, color: '#2563EB' },
        { id: 'c_r3', x: -2, y: 5, z: 2, color: '#2563EB' }, { id: 'c_r4', x: 2, y: 5, z: 2, color: '#2563EB' },
        { id: 'c_r5', x: 0, y: 5, z: 0, color: '#1D4ED8' }, { id: 'c_r6', x: 0, y: 6, z: 0, color: '#1D4ED8' },
        
        // Flag
        { id: 'c_f1', x: 0, y: 7, z: 0, color: '#EF4444' }, { id: 'c_f2', x: 1, y: 7, z: 0, color: '#EF4444' },
    ]
  },
  {
    id: 'fox',
    name: 'Orange Fox',
    category: 'animal',
    voxels: [
        // Rear Body/Legs
        { id: 'f_b1', x: 0, y: 0, z: -1, color: '#F97316' }, { id: 'f_b2', x: 1, y: 0, z: -1, color: '#F97316' }, { id: 'f_b3', x: -1, y: 0, z: -1, color: '#F97316' },
        { id: 'f_b4', x: 0, y: 1, z: -1, color: '#F97316' }, { id: 'f_b5', x: 1, y: 1, z: -1, color: '#F97316' }, { id: 'f_b6', x: -1, y: 1, z: -1, color: '#F97316' },
        { id: 'f_b7', x: 0, y: 2, z: -1, color: '#F97316' },

        // Front Legs
        { id: 'f_fl1', x: -1, y: 0, z: 1, color: '#1F2937' }, { id: 'f_fl2', x: 1, y: 0, z: 1, color: '#1F2937' },
        { id: 'f_fl3', x: -1, y: 1, z: 1, color: '#F97316' }, { id: 'f_fl4', x: 1, y: 1, z: 1, color: '#F97316' },

        // Body Center
        { id: 'f_c1', x: 0, y: 1, z: 0, color: '#F97316' }, { id: 'f_c2', x: -1, y: 1, z: 0, color: '#F97316' }, { id: 'f_c3', x: 1, y: 1, z: 0, color: '#F97316' },
        { id: 'f_c4', x: 0, y: 2, z: 0, color: '#F97316' }, 

        // Head
        { id: 'f_h1', x: 0, y: 3, z: 1, color: '#F97316' }, { id: 'f_h2', x: -1, y: 3, z: 1, color: '#F97316' }, { id: 'f_h3', x: 1, y: 3, z: 1, color: '#F97316' },
        { id: 'f_h4', x: 0, y: 4, z: 1, color: '#F97316' }, { id: 'f_h5', x: -1, y: 4, z: 1, color: '#F97316' }, { id: 'f_h6', x: 1, y: 4, z: 1, color: '#F97316' },
        { id: 'f_snout', x: 0, y: 3, z: 2, color: '#FFFFFF' }, { id: 'f_nose', x: 0, y: 3, z: 3, color: '#1F2937' },
        
        // Ears
        { id: 'f_e1', x: -1, y: 5, z: 1, color: '#F97316' }, { id: 'f_e2', x: 1, y: 5, z: 1, color: '#F97316' },

        // Tail
        { id: 'f_t1', x: 2, y: 0, z: -1, color: '#F97316' }, { id: 'f_t2', x: 3, y: 1, z: -1, color: '#F97316' }, { id: 'f_t3', x: 3, y: 2, z: -1, color: '#F97316' }, 
        { id: 'f_t4', x: 3, y: 3, z: -1, color: '#FFFFFF' }, // White tip
    ]
  },
  {
    id: 'cake',
    name: 'Birthday Cake',
    category: 'object',
    voxels: [
        // Bottom Tier (5x5)
        { id: 'ck_b1', x: 0, y: 0, z: 0, color: '#FBCFE8' }, { id: 'ck_b2', x: 1, y: 0, z: 0, color: '#FBCFE8' }, { id: 'ck_b3', x: -1, y: 0, z: 0, color: '#FBCFE8' }, { id: 'ck_b4', x: 0, y: 0, z: 1, color: '#FBCFE8' }, { id: 'ck_b5', x: 0, y: 0, z: -1, color: '#FBCFE8' },
        { id: 'ck_b6', x: 2, y: 0, z: 0, color: '#FBCFE8' }, { id: 'ck_b7', x: -2, y: 0, z: 0, color: '#FBCFE8' }, { id: 'ck_b8', x: 0, y: 0, z: 2, color: '#FBCFE8' }, { id: 'ck_b9', x: 0, y: 0, z: -2, color: '#FBCFE8' },
        { id: 'ck_b10', x: 1, y: 0, z: 1, color: '#FBCFE8' }, { id: 'ck_b11', x: 1, y: 0, z: -1, color: '#FBCFE8' }, { id: 'ck_b12', x: -1, y: 0, z: 1, color: '#FBCFE8' }, { id: 'ck_b13', x: -1, y: 0, z: -1, color: '#FBCFE8' },
        
        // Middle Tier (3x3)
        { id: 'ck_m1', x: 0, y: 1, z: 0, color: '#F472B6' }, { id: 'ck_m2', x: 1, y: 1, z: 0, color: '#F472B6' }, { id: 'ck_m3', x: -1, y: 1, z: 0, color: '#F472B6' },
        { id: 'ck_m4', x: 0, y: 1, z: 1, color: '#F472B6' }, { id: 'ck_m5', x: 0, y: 1, z: -1, color: '#F472B6' },
        { id: 'ck_m6', x: 1, y: 1, z: 1, color: '#F472B6' }, { id: 'ck_m7', x: -1, y: 1, z: -1, color: '#F472B6' }, { id: 'ck_m8', x: 1, y: 1, z: -1, color: '#F472B6' }, { id: 'ck_m9', x: -1, y: 1, z: 1, color: '#F472B6' },

        // Top Tier (1x1)
        { id: 'ck_t1', x: 0, y: 2, z: 0, color: '#EC4899' },
        
        // Candles
        { id: 'ck_c1', x: 0, y: 3, z: 0, color: '#60A5FA' }, { id: 'ck_f1', x: 0, y: 4, z: 0, color: '#FCD34D' }, // Center
        { id: 'ck_c2', x: 1, y: 2, z: 1, color: '#60A5FA' }, { id: 'ck_f2', x: 1, y: 3, z: 1, color: '#FCD34D' },
        { id: 'ck_c3', x: -1, y: 2, z: -1, color: '#60A5FA' }, { id: 'ck_f3', x: -1, y: 3, z: -1, color: '#FCD34D' },
    ]
  },
  {
    id: 'rocket',
    name: 'Space Rocket',
    category: 'vehicle',
    voxels: [
        // Fins
        { id: 'ro_f1', x: 0, y: 0, z: 2, color: '#EF4444' }, { id: 'ro_f2', x: 0, y: 1, z: 2, color: '#EF4444' }, { id: 'ro_f3', x: 0, y: 2, z: 1, color: '#EF4444' },
        { id: 'ro_f4', x: 0, y: 0, z: -2, color: '#EF4444' }, { id: 'ro_f5', x: 0, y: 1, z: -2, color: '#EF4444' }, { id: 'ro_f6', x: 0, y: 2, z: -1, color: '#EF4444' },
        { id: 'ro_f7', x: 2, y: 0, z: 0, color: '#EF4444' }, { id: 'ro_f8', x: 2, y: 1, z: 0, color: '#EF4444' }, { id: 'ro_f9', x: 1, y: 2, z: 0, color: '#EF4444' },
        { id: 'ro_f10', x: -2, y: 0, z: 0, color: '#EF4444' }, { id: 'ro_f11', x: -2, y: 1, z: 0, color: '#EF4444' }, { id: 'ro_f12', x: -1, y: 2, z: 0, color: '#EF4444' },

        // Thruster
        { id: 'ro_th', x: 0, y: 0, z: 0, color: '#F59E0B' },

        // Body
        { id: 'ro_b1', x: 0, y: 1, z: 0, color: '#F3F4F6' }, { id: 'ro_b2', x: 1, y: 1, z: 0, color: '#F3F4F6' }, { id: 'ro_b3', x: -1, y: 1, z: 0, color: '#F3F4F6' }, { id: 'ro_b4', x: 0, y: 1, z: 1, color: '#F3F4F6' }, { id: 'ro_b5', x: 0, y: 1, z: -1, color: '#F3F4F6' },
        { id: 'ro_b6', x: 0, y: 2, z: 0, color: '#F3F4F6' }, { id: 'ro_b7', x: 1, y: 2, z: 0, color: '#F3F4F6' }, { id: 'ro_b8', x: -1, y: 2, z: 0, color: '#F3F4F6' }, { id: 'ro_b9', x: 0, y: 2, z: 1, color: '#F3F4F6' }, { id: 'ro_b10', x: 0, y: 2, z: -1, color: '#F3F4F6' },
        { id: 'ro_b11', x: 0, y: 3, z: 0, color: '#F3F4F6' }, { id: 'ro_b12', x: 1, y: 3, z: 0, color: '#F3F4F6' }, { id: 'ro_b13', x: -1, y: 3, z: 0, color: '#F3F4F6' }, { id: 'ro_b14', x: 0, y: 3, z: 1, color: '#F3F4F6' }, { id: 'ro_b15', x: 0, y: 3, z: -1, color: '#F3F4F6' },
        { id: 'ro_b16', x: 0, y: 4, z: 0, color: '#F3F4F6' }, { id: 'ro_b17', x: 1, y: 4, z: 0, color: '#F3F4F6' }, { id: 'ro_b18', x: -1, y: 4, z: 0, color: '#F3F4F6' }, { id: 'ro_b19', x: 0, y: 4, z: 1, color: '#F3F4F6' }, { id: 'ro_b20', x: 0, y: 4, z: -1, color: '#F3F4F6' },
        { id: 'ro_b21', x: 0, y: 5, z: 0, color: '#F3F4F6' }, { id: 'ro_b22', x: 1, y: 5, z: 0, color: '#F3F4F6' }, { id: 'ro_b23', x: -1, y: 5, z: 0, color: '#F3F4F6' }, { id: 'ro_b24', x: 0, y: 5, z: 1, color: '#F3F4F6' }, { id: 'ro_b25', x: 0, y: 5, z: -1, color: '#F3F4F6' },
        { id: 'ro_b26', x: 0, y: 6, z: 0, color: '#F3F4F6' }, { id: 'ro_b27', x: 1, y: 6, z: 0, color: '#F3F4F6' }, { id: 'ro_b28', x: -1, y: 6, z: 0, color: '#F3F4F6' }, { id: 'ro_b29', x: 0, y: 6, z: 1, color: '#F3F4F6' }, { id: 'ro_b30', x: 0, y: 6, z: -1, color: '#F3F4F6' },

        // Window
        { id: 'ro_w1', x: 0, y: 4, z: 1, color: '#3B82F6' }, 

        // Nose Cone
        { id: 'ro_n1', x: 0, y: 7, z: 0, color: '#EF4444' }, { id: 'ro_n2', x: 1, y: 7, z: 0, color: '#EF4444' }, { id: 'ro_n3', x: -1, y: 7, z: 0, color: '#EF4444' }, { id: 'ro_n4', x: 0, y: 7, z: 1, color: '#EF4444' }, { id: 'ro_n5', x: 0, y: 7, z: -1, color: '#EF4444' },
        { id: 'ro_n6', x: 0, y: 8, z: 0, color: '#EF4444' },
    ]
  },
  {
    id: 'duck',
    name: 'Rubber Duck',
    category: 'animal',
    voxels: [
      // Body Base (Water level)
      { id: 'd_b1', x: 0, y: 0, z: 0, color: '#FCD34D' }, { id: 'd_b2', x: 1, y: 0, z: 0, color: '#FCD34D' }, { id: 'd_b3', x: -1, y: 0, z: 0, color: '#FCD34D' },
      { id: 'd_b4', x: 0, y: 0, z: 1, color: '#FCD34D' }, { id: 'd_b5', x: 1, y: 0, z: 1, color: '#FCD34D' }, { id: 'd_b6', x: -1, y: 0, z: 1, color: '#FCD34D' },
      { id: 'd_b7', x: 0, y: 0, z: -1, color: '#FCD34D' }, { id: 'd_b8', x: 1, y: 0, z: -1, color: '#FCD34D' }, { id: 'd_b9', x: -1, y: 0, z: -1, color: '#FCD34D' },
      { id: 'd_b10', x: -2, y: 0, z: 0, color: '#FCD34D' }, // Tail base
      
      // Body Middle
      { id: 'd_m1', x: 0, y: 1, z: 0, color: '#FCD34D' }, { id: 'd_m2', x: 1, y: 1, z: 0, color: '#FCD34D' }, { id: 'd_m3', x: -1, y: 1, z: 0, color: '#FCD34D' },
      { id: 'd_m4', x: 0, y: 1, z: 1, color: '#FCD34D' }, { id: 'd_m5', x: 1, y: 1, z: 1, color: '#FCD34D' }, 
      { id: 'd_m7', x: 0, y: 1, z: -1, color: '#FCD34D' }, { id: 'd_m8', x: 1, y: 1, z: -1, color: '#FCD34D' },
      { id: 'd_m10', x: -2, y: 1, z: 0, color: '#FCD34D' }, // Tail tip

      // Wings (Orange-ish tint for contrast)
      { id: 'd_w1', x: -1, y: 1, z: 2, color: '#FBBF24' }, { id: 'd_w2', x: 0, y: 1, z: 2, color: '#FBBF24' },
      { id: 'd_w3', x: -1, y: 1, z: -2, color: '#FBBF24' }, { id: 'd_w4', x: 0, y: 1, z: -2, color: '#FBBF24' },

      // Neck
      { id: 'd_n1', x: 2, y: 1, z: 0, color: '#FCD34D' },
      { id: 'd_n2', x: 2, y: 2, z: 0, color: '#FCD34D' }, 

      // Head
      { id: 'd_h1', x: 2, y: 3, z: 0, color: '#FCD34D' }, 
      { id: 'd_h2', x: 1, y: 3, z: 0, color: '#FCD34D' },
      { id: 'd_h3', x: 2, y: 3, z: 1, color: '#FCD34D' }, 
      { id: 'd_h4', x: 2, y: 3, z: -1, color: '#FCD34D' },
      
      // Beak
      { id: 'd_bk1', x: 3, y: 3, z: 0, color: '#F97316' },

      // Eyes
      { id: 'd_e1', x: 2, y: 4, z: 1, color: '#1F2937' },
      { id: 'd_e2', x: 2, y: 4, z: -1, color: '#1F2937' },
      { id: 'd_top', x: 2, y: 4, z: 0, color: '#FCD34D' },
    ]
  },
  {
    id: 'penguin',
    name: 'Penguin',
    category: 'animal',
    voxels: [
      // Feet
      { id: 'p_f1', x: -1, y: 0, z: 1, color: '#F59E0B' }, { id: 'p_f2', x: 1, y: 0, z: 1, color: '#F59E0B' },
      
      // Body Base (White Belly, Black Sides/Back)
      { id: 'p_b1', x: 0, y: 1, z: 1, color: '#F3F4F6' }, // Belly
      { id: 'p_b2', x: -1, y: 1, z: 1, color: '#1F2937' }, 
      { id: 'p_b3', x: 1, y: 1, z: 1, color: '#1F2937' },
      { id: 'p_b4', x: 0, y: 1, z: 0, color: '#1F2937' }, 
      { id: 'p_b5', x: -1, y: 1, z: 0, color: '#1F2937' }, 
      { id: 'p_b6', x: 1, y: 1, z: 0, color: '#1F2937' },

      // Body Mid
      { id: 'p_m1', x: 0, y: 2, z: 1, color: '#F3F4F6' }, // Belly
      { id: 'p_m2', x: -1, y: 2, z: 1, color: '#1F2937' }, 
      { id: 'p_m3', x: 1, y: 2, z: 1, color: '#1F2937' },
      { id: 'p_m4', x: 0, y: 2, z: 0, color: '#1F2937' }, 
      { id: 'p_m5', x: -1, y: 2, z: 0, color: '#1F2937' }, 
      { id: 'p_m6', x: 1, y: 2, z: 0, color: '#1F2937' },
      
      // Flippers (Wings)
      { id: 'p_w1', x: -2, y: 1, z: 0, color: '#1F2937' },
      { id: 'p_w2', x: 2, y: 1, z: 0, color: '#1F2937' },

      // Head
      { id: 'p_h1', x: 0, y: 3, z: 0, color: '#1F2937' },
      { id: 'p_h2', x: -1, y: 3, z: 0, color: '#1F2937' },
      { id: 'p_h3', x: 1, y: 3, z: 0, color: '#1F2937' },
      { id: 'p_h4', x: 0, y: 3, z: 1, color: '#1F2937' }, 
      
      // Face Details
      { id: 'p_eye1', x: -1, y: 3, z: 1, color: '#F3F4F6' }, // Eye patches
      { id: 'p_eye2', x: 1, y: 3, z: 1, color: '#F3F4F6' },
      { id: 'p_bk', x: 0, y: 3, z: 2, color: '#F59E0B' }, // Beak
    ]
  },
  {
    id: 'heart',
    name: '3D Heart',
    category: 'object',
    voxels: [
      // Center Layer (z=0) - Darker Red
      { id: 'h_c1', x: -1, y: 1, z: 0, color: '#DC2626' }, { id: 'h_c2', x: 1, y: 1, z: 0, color: '#DC2626' },
      { id: 'h_c3', x: -2, y: 0, z: 0, color: '#DC2626' }, { id: 'h_c4', x: -1, y: 0, z: 0, color: '#DC2626' }, { id: 'h_c5', x: 0, y: 0, z: 0, color: '#DC2626' }, { id: 'h_c6', x: 1, y: 0, z: 0, color: '#DC2626' }, { id: 'h_c7', x: 2, y: 0, z: 0, color: '#DC2626' },
      { id: 'h_c8', x: -1, y: -1, z: 0, color: '#DC2626' }, { id: 'h_c9', x: 0, y: -1, z: 0, color: '#DC2626' }, { id: 'h_c10', x: 1, y: -1, z: 0, color: '#DC2626' },
      { id: 'h_c11', x: 0, y: -2, z: 0, color: '#DC2626' },

      // Front Layer (z=1) - Bright Red
      { id: 'h_f1', x: -1, y: 1, z: 1, color: '#EF4444' }, { id: 'h_f2', x: 1, y: 1, z: 1, color: '#EF4444' },
      { id: 'h_f3', x: -2, y: 0, z: 1, color: '#EF4444' }, { id: 'h_f4', x: -1, y: 0, z: 1, color: '#EF4444' }, { id: 'h_f5', x: 0, y: 0, z: 1, color: '#EF4444' }, { id: 'h_f6', x: 1, y: 0, z: 1, color: '#EF4444' }, { id: 'h_f7', x: 2, y: 0, z: 1, color: '#EF4444' },
      { id: 'h_f8', x: -1, y: -1, z: 1, color: '#EF4444' }, { id: 'h_f9', x: 0, y: -1, z: 1, color: '#EF4444' }, { id: 'h_f10', x: 1, y: -1, z: 1, color: '#EF4444' },
      { id: 'h_f11', x: 0, y: -2, z: 1, color: '#EF4444' },

      // Back Layer (z=-1) - Dark Red
      { id: 'h_b1', x: -1, y: 1, z: -1, color: '#991B1B' }, { id: 'h_b2', x: 1, y: 1, z: -1, color: '#991B1B' },
      { id: 'h_b3', x: -2, y: 0, z: -1, color: '#991B1B' }, { id: 'h_b4', x: -1, y: 0, z: -1, color: '#991B1B' }, { id: 'h_b5', x: 0, y: 0, z: -1, color: '#991B1B' }, { id: 'h_b6', x: 1, y: 0, z: -1, color: '#991B1B' }, { id: 'h_b7', x: 2, y: 0, z: -1, color: '#991B1B' },
      { id: 'h_b8', x: -1, y: -1, z: -1, color: '#991B1B' }, { id: 'h_b9', x: 0, y: -1, z: -1, color: '#991B1B' }, { id: 'h_b10', x: 1, y: -1, z: -1, color: '#991B1B' },
      { id: 'h_b11', x: 0, y: -2, z: -1, color: '#991B1B' },

      // Highlight (White reflection)
      { id: 'h_hl', x: -1, y: 1, z: 2, color: '#FFFFFF' },
    ]
  },
  {
    id: 'tree',
    name: 'Pine Tree',
    category: 'object',
    voxels: [
        // Trunk
        { id: 't1', x: 0, y: 0, z: 0, color: '#78350F' },
        { id: 't2', x: 0, y: 1, z: 0, color: '#78350F' },
        
        // Lower Leaves (Dark Green)
        { id: 'l1_1', x: 1, y: 2, z: 0, color: '#14532D' }, { id: 'l1_2', x: -1, y: 2, z: 0, color: '#14532D' },
        { id: 'l1_3', x: 0, y: 2, z: 1, color: '#14532D' }, { id: 'l1_4', x: 0, y: 2, z: -1, color: '#14532D' },
        { id: 'l1_c1', x: 1, y: 2, z: 1, color: '#166534' }, { id: 'l1_c2', x: -1, y: 2, z: 1, color: '#166534' },
        { id: 'l1_c3', x: 1, y: 2, z: -1, color: '#166534' }, { id: 'l1_c4', x: -1, y: 2, z: -1, color: '#166534' },
        { id: 'l1_m', x: 0, y: 2, z: 0, color: '#78350F' }, // Trunk hidden

        // Middle Leaves (Mid Green)
        { id: 'l2_1', x: 1, y: 3, z: 0, color: '#15803D' }, { id: 'l2_2', x: -1, y: 3, z: 0, color: '#15803D' },
        { id: 'l2_3', x: 0, y: 3, z: 1, color: '#15803D' }, { id: 'l2_4', x: 0, y: 3, z: -1, color: '#15803D' },
        { id: 'l2_m', x: 0, y: 3, z: 0, color: '#15803D' },

        // Upper Leaves (Light Green)
        { id: 'l3_1', x: 0, y: 4, z: 0, color: '#22C55E' },
        { id: 'l3_2', x: 1, y: 4, z: 0, color: '#22C55E' }, { id: 'l3_3', x: -1, y: 4, z: 0, color: '#22C55E' },
        { id: 'l3_4', x: 0, y: 4, z: 1, color: '#22C55E' }, { id: 'l3_5', x: 0, y: 4, z: -1, color: '#22C55E' },

        // Top
        { id: 'l4', x: 0, y: 5, z: 0, color: '#4ADE80' },
        { id: 'l5', x: 0, y: 6, z: 0, color: '#86EFAC' },
    ]
  },
  {
    id: 'house',
    name: 'Cozy Cottage',
    category: 'object',
    voxels: [
        // Grass Base
        { id: 'g1', x: -2, y: 0, z: -2, color: '#4ADE80' }, { id: 'g2', x: -1, y: 0, z: -2, color: '#4ADE80' }, { id: 'g3', x: 0, y: 0, z: -2, color: '#4ADE80' }, { id: 'g4', x: 1, y: 0, z: -2, color: '#4ADE80' }, { id: 'g5', x: 2, y: 0, z: -2, color: '#4ADE80' },
        { id: 'g6', x: -2, y: 0, z: -1, color: '#4ADE80' }, { id: 'g7', x: 2, y: 0, z: -1, color: '#4ADE80' },
        { id: 'g8', x: -2, y: 0, z: 0, color: '#4ADE80' }, { id: 'g9', x: 2, y: 0, z: 0, color: '#4ADE80' },
        { id: 'g10', x: -2, y: 0, z: 1, color: '#4ADE80' }, { id: 'g11', x: 2, y: 0, z: 1, color: '#4ADE80' },
        { id: 'g12', x: -2, y: 0, z: 2, color: '#4ADE80' }, { id: 'g13', x: -1, y: 0, z: 2, color: '#4ADE80' }, { id: 'g14', x: 0, y: 0, z: 2, color: '#888' }, { id: 'g15', x: 1, y: 0, z: 2, color: '#4ADE80' }, { id: 'g16', x: 2, y: 0, z: 2, color: '#4ADE80' },

        // Floor
        { id: 'fl1', x: -1, y: 0, z: -1, color: '#78350F' }, { id: 'fl2', x: 0, y: 0, z: -1, color: '#78350F' }, { id: 'fl3', x: 1, y: 0, z: -1, color: '#78350F' },
        { id: 'fl4', x: -1, y: 0, z: 0, color: '#78350F' }, { id: 'fl5', x: 0, y: 0, z: 0, color: '#78350F' }, { id: 'fl6', x: 1, y: 0, z: 0, color: '#78350F' },
        { id: 'fl7', x: -1, y: 0, z: 1, color: '#78350F' }, { id: 'fl8', x: 0, y: 0, z: 1, color: '#78350F' }, { id: 'fl9', x: 1, y: 0, z: 1, color: '#78350F' },

        // Walls
        { id: 'w1', x: -1, y: 1, z: -1, color: '#FEF3C7' }, { id: 'w2', x: 0, y: 1, z: -1, color: '#FEF3C7' }, { id: 'w3', x: 1, y: 1, z: -1, color: '#FEF3C7' },
        { id: 'w4', x: -1, y: 1, z: 0, color: '#FEF3C7' }, { id: 'w6', x: 1, y: 1, z: 0, color: '#FEF3C7' },
        { id: 'w7', x: -1, y: 1, z: 1, color: '#FEF3C7' }, { id: 'w9', x: 1, y: 1, z: 1, color: '#FEF3C7' },
        
        { id: 'w10', x: -1, y: 2, z: -1, color: '#FEF3C7' }, { id: 'w11', x: 0, y: 2, z: -1, color: '#87CEEB' }, { id: 'w12', x: 1, y: 2, z: -1, color: '#FEF3C7' }, // Back Window
        { id: 'w13', x: -1, y: 2, z: 0, color: '#FEF3C7' }, { id: 'w15', x: 1, y: 2, z: 0, color: '#FEF3C7' },
        { id: 'w16', x: -1, y: 2, z: 1, color: '#FEF3C7' }, { id: 'w17', x: 0, y: 2, z: 1, color: '#FEF3C7' }, { id: 'w18', x: 1, y: 2, z: 1, color: '#FEF3C7' },

        // Door
        { id: 'dr1', x: 0, y: 1, z: 1, color: '#9A3412' },

        // Roof
        { id: 'r1', x: -2, y: 3, z: 0, color: '#991B1B' }, { id: 'r2', x: -1, y: 3, z: 0, color: '#B91C1C' }, { id: 'r3', x: 0, y: 3, z: 0, color: '#B91C1C' }, { id: 'r4', x: 1, y: 3, z: 0, color: '#B91C1C' }, { id: 'r5', x: 2, y: 3, z: 0, color: '#991B1B' },
        { id: 'r6', x: -2, y: 3, z: 1, color: '#991B1B' }, { id: 'r7', x: -1, y: 3, z: 1, color: '#B91C1C' }, { id: 'r8', x: 0, y: 3, z: 1, color: '#B91C1C' }, { id: 'r9', x: 1, y: 3, z: 1, color: '#B91C1C' }, { id: 'r10', x: 2, y: 3, z: 1, color: '#991B1B' },
        { id: 'r11', x: -2, y: 3, z: -1, color: '#991B1B' }, { id: 'r12', x: -1, y: 3, z: -1, color: '#B91C1C' }, { id: 'r13', x: 0, y: 3, z: -1, color: '#B91C1C' }, { id: 'r14', x: 1, y: 3, z: -1, color: '#B91C1C' }, { id: 'r15', x: 2, y: 3, z: -1, color: '#991B1B' },
        
        // Roof Top
        { id: 'rt1', x: -1, y: 4, z: 0, color: '#B91C1C' }, { id: 'rt2', x: 0, y: 4, z: 0, color: '#B91C1C' }, { id: 'rt3', x: 1, y: 4, z: 0, color: '#B91C1C' },

        // Chimney
        { id: 'ch1', x: 1, y: 4, z: -1, color: '#555' }, { id: 'ch2', x: 1, y: 5, z: -1, color: '#555' },
        // Smoke
        { id: 'sm1', x: 1, y: 6, z: -1, color: '#EEE' }, { id: 'sm2', x: 2, y: 7, z: -1, color: '#FFF' },
    ]
  },
  {
    id: 'flower',
    name: 'Sunflower',
    category: 'object',
    voxels: [
        // Pot
        { id: 'fl_p1', x: 0, y: 0, z: 0, color: '#92400E' }, { id: 'fl_p2', x: 1, y: 0, z: 0, color: '#92400E' }, { id: 'fl_p3', x: -1, y: 0, z: 0, color: '#92400E' }, { id: 'fl_p4', x: 0, y: 0, z: 1, color: '#92400E' }, { id: 'fl_p5', x: 0, y: 0, z: -1, color: '#92400E' },
        { id: 'fl_p6', x: 1, y: 1, z: 0, color: '#B45309' }, { id: 'fl_p7', x: -1, y: 1, z: 0, color: '#B45309' }, { id: 'fl_p8', x: 0, y: 1, z: 1, color: '#B45309' }, { id: 'fl_p9', x: 0, y: 1, z: -1, color: '#B45309' },
        { id: 'fl_soil', x: 0, y: 1, z: 0, color: '#3f2212' },

        // Stem
        { id: 'fl_s1', x: 0, y: 2, z: 0, color: '#16A34A' },
        { id: 'fl_s2', x: 0, y: 3, z: 0, color: '#16A34A' },
        { id: 'fl_s3', x: 0, y: 4, z: 0, color: '#16A34A' },
        { id: 'fl_s4', x: 0, y: 5, z: 0, color: '#16A34A' },
        
        // Leaves
        { id: 'fl_l1', x: 1, y: 3, z: 0, color: '#4ADE80' }, { id: 'fl_l2', x: 2, y: 4, z: 0, color: '#22C55E' },
        { id: 'fl_l3', x: -1, y: 3, z: 0, color: '#4ADE80' }, { id: 'fl_l4', x: -2, y: 4, z: 0, color: '#22C55E' },

        // Flower Center
        { id: 'fl_c1', x: 0, y: 6, z: 0, color: '#78350F' }, { id: 'fl_c2', x: 1, y: 6, z: 0, color: '#78350F' }, { id: 'fl_c3', x: -1, y: 6, z: 0, color: '#78350F' }, { id: 'fl_c4', x: 0, y: 6, z: 1, color: '#78350F' }, { id: 'fl_c5', x: 0, y: 6, z: -1, color: '#78350F' },
        { id: 'fl_c6', x: 0, y: 7, z: 0, color: '#78350F' },

        // Petals
        { id: 'fl_pe1', x: 2, y: 6, z: 0, color: '#FACC15' }, { id: 'fl_pe2', x: -2, y: 6, z: 0, color: '#FACC15' }, { id: 'fl_pe3', x: 0, y: 6, z: 2, color: '#FACC15' }, { id: 'fl_pe4', x: 0, y: 6, z: -2, color: '#FACC15' },
        { id: 'fl_pe5', x: 1, y: 7, z: 1, color: '#FACC15' }, { id: 'fl_pe6', x: 1, y: 7, z: -1, color: '#FACC15' }, { id: 'fl_pe7', x: -1, y: 7, z: 1, color: '#FACC15' }, { id: 'fl_pe8', x: -1, y: 7, z: -1, color: '#FACC15' },
        { id: 'fl_pe9', x: 0, y: 8, z: 0, color: '#FACC15' }, { id: 'fl_pe10', x: 1, y: 8, z: 0, color: '#FACC15' }, { id: 'fl_pe11', x: -1, y: 8, z: 0, color: '#FACC15' },
    ]
  },
  {
    id: 'car',
    name: 'Race Car',
    category: 'vehicle',
    voxels: [
        // Wheels (Black with White Hubs)
        { id: 'wh1', x: -2, y: 0, z: 1, color: '#111827' }, { id: 'wh1_h', x: -2, y: 0, z: 2, color: '#E5E7EB' }, // FL
        { id: 'wh2', x: 2, y: 0, z: 1, color: '#111827' }, { id: 'wh2_h', x: 2, y: 0, z: 2, color: '#E5E7EB' }, // RL
        { id: 'wh3', x: -2, y: 0, z: -1, color: '#111827' }, { id: 'wh3_h', x: -2, y: 0, z: -2, color: '#E5E7EB' }, // FR
        { id: 'wh4', x: 2, y: 0, z: -1, color: '#111827' }, { id: 'wh4_h', x: 2, y: 0, z: -2, color: '#E5E7EB' }, // RR

        // Chassis Base (Dark Grey)
        { id: 'c_b1', x: -2, y: 0, z: 0, color: '#374151' }, { id: 'c_b2', x: -1, y: 0, z: 0, color: '#374151' }, 
        { id: 'c_b3', x: 0, y: 0, z: 0, color: '#374151' }, { id: 'c_b4', x: 1, y: 0, z: 0, color: '#374151' }, 
        { id: 'c_b5', x: 2, y: 0, z: 0, color: '#374151' },
        { id: 'c_f', x: -3, y: 0, z: 0, color: '#EF4444' }, // Front Wing

        // Body (Red)
        { id: 'bd1', x: -2, y: 1, z: 0, color: '#EF4444' }, { id: 'bd2', x: -1, y: 1, z: 0, color: '#EF4444' }, 
        { id: 'bd3', x: 0, y: 1, z: 0, color: '#EF4444' }, { id: 'bd4', x: 1, y: 1, z: 0, color: '#EF4444' }, 
        { id: 'bd5', x: 2, y: 1, z: 0, color: '#EF4444' },
        
        { id: 'bd6', x: -1, y: 1, z: 1, color: '#EF4444' }, { id: 'bd7', x: 0, y: 1, z: 1, color: '#EF4444' }, { id: 'bd8', x: 1, y: 1, z: 1, color: '#EF4444' },
        { id: 'bd9', x: -1, y: 1, z: -1, color: '#EF4444' }, { id: 'bd10', x: 0, y: 1, z: -1, color: '#EF4444' }, { id: 'bd11', x: 1, y: 1, z: -1, color: '#EF4444' },

        // Cabin/Windshield
        { id: 'cb1', x: -1, y: 2, z: 0, color: '#60A5FA' }, // Glass
        { id: 'cb2', x: 0, y: 2, z: 0, color: '#EF4444' }, // Roof
        
        // Spoiler
        { id: 'sp1', x: 2, y: 2, z: 0, color: '#111827' }, { id: 'sp2', x: 2, y: 2, z: 1, color: '#111827' }, { id: 'sp3', x: 2, y: 2, z: -1, color: '#111827' },
    ]
  }
];

export const PALETTE_COLORS = [
  '#EF4444', // Red
  '#F97316', // Orange
  '#FCD34D', // Yellow
  '#84CC16', // Lime
  '#22C55E', // Green
  '#06B6D4', // Cyan
  '#3B82F6', // Blue
  '#6366F1', // Indigo
  '#8B5CF6', // Violet
  '#EC4899', // Pink
  '#F3F4F6', // White
  '#9CA3AF', // Gray
  '#1F2937', // Black
  '#78350F', // Brown
];
