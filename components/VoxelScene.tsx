import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Stage, Center, Grid, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { VoxelModel } from '../types';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      lineSegments: any;
      edgesGeometry: any;
      lineBasicMaterial: any;
      group: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      planeGeometry: any;
      meshBasicMaterial: any;
      gridHelper: any;
    }
  }
}

interface VoxelSceneProps {
  model: VoxelModel | null;
  buildProgress: number; // 0 to 1
  autoRotate?: boolean;
  isEditor?: boolean;
  editorColor?: string;
  isDeleting?: boolean;
  onVoxelAdd?: (x: number, y: number, z: number) => void;
  onVoxelRemove?: (id: string) => void;
  interactionMode?: 'orbit' | 'build';
}

const Box = ({ position, color, visible, onClick, onPointerMove }: { 
    position: [number, number, number], 
    color: string, 
    visible: boolean,
    onClick?: (e: any) => void,
    onPointerMove?: (e: any) => void
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  if (!visible) return null;

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={onClick}
      onPointerOver={(e) => { e.stopPropagation(); setHover(true); }}
      onPointerOut={() => setHover(false)}
      onPointerMove={onPointerMove}
      scale={hovered ? 1.0 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.3} 
        metalness={0.1}
        emissive={hovered ? '#444444' : '#000000'}
      />
      {/* Raycast set to null ensures clicks pass through the lines to the box geometry */}
      <lineSegments raycast={() => null}>
        <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial color="rgba(0,0,0,0.15)" linewidth={1} />
      </lineSegments>
    </mesh>
  );
};

// Ghost block to show where the next block will be placed
const GhostBlock = ({ position, color, isDeleting }: { position: [number, number, number] | null, color: string, isDeleting: boolean }) => {
    if (!position) return null;
    return (
        <mesh position={position} raycast={() => null}> {/* Crucial: Ignore clicks so we can click 'through' to the block underneath */}
            <boxGeometry args={[1.005, 1.005, 1.005]} />
            <meshBasicMaterial 
                color={isDeleting ? '#FF0000' : color} 
                transparent 
                opacity={0.6} 
                depthTest={false} // Always render on top
                depthWrite={false}
            />
             <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(1.005, 1.005, 1.005)]} />
                <lineBasicMaterial color={isDeleting ? "#990000" : "#ffffff"} linewidth={1} transparent opacity={0.8} />
            </lineSegments>
        </mesh>
    );
};

const SceneContent = ({ model, buildProgress, isEditor, editorColor, isDeleting, onVoxelAdd, onVoxelRemove, interactionMode = 'orbit' }: VoxelSceneProps) => {
  const [hoverPos, setHoverPos] = useState<[number, number, number] | null>(null);

  if (!model) return null;

  const totalVoxels = model.voxels.length;
  const visibleCount = Math.floor(totalVoxels * buildProgress);
  
  const displayVoxels = useMemo(() => {
     if (isEditor) return model.voxels;
     return [...model.voxels].sort((a, b) => a.y - b.y);
  }, [model, isEditor]);

  // Only allow interactions if we are in Editor Mode AND Build Mode (not Orbit Mode)
  // OR if we are on Desktop (inferred by orbit enabled? No, keep logic strict for now)
  const canInteract = isEditor && interactionMode === 'build';

  const handlePointerMove = (e: any) => {
    if (!canInteract) return;
    e.stopPropagation();
    
    // Check if hitting the ground plane
    if (e.object.name === 'ground-plane') {
        const x = Math.round(e.point.x);
        const z = Math.round(e.point.z);
        setHoverPos([x, 0, z]);
    } 
    // Check if hitting an existing voxel
    else if (e.object.parent) { 
        if (isDeleting) {
             const { x, y, z } = e.object.position;
             setHoverPos([x, y, z]);
        } else if (e.face) {
            const normal = e.face.normal;
            const { x, y, z } = e.object.position;
            // Add normal to position to get the adjacent empty cell
            setHoverPos([
                x + Math.round(normal.x), 
                y + Math.round(normal.y), 
                z + Math.round(normal.z)
            ]);
        }
    }
  };

  const handleBlockClick = (e: any, voxelId: string) => {
      if (!canInteract) return;
      e.stopPropagation();
      
      if (isDeleting && onVoxelRemove) {
          onVoxelRemove(voxelId);
          setHoverPos(null); 
      } else if (!isDeleting && onVoxelAdd && e.face) {
          const normal = e.face.normal;
          const { x, y, z } = e.object.position;
          onVoxelAdd(
              x + Math.round(normal.x), 
              y + Math.round(normal.y), 
              z + Math.round(normal.z)
          );
      }
  };

  const handleGroundClick = (e: any) => {
      if (!canInteract || isDeleting || !onVoxelAdd) return;
      e.stopPropagation();
      const x = Math.round(e.point.x);
      const z = Math.round(e.point.z);
      onVoxelAdd(x, 0, z);
  };

  return (
    <group>
      <group>
        {displayVoxels.map((voxel, index) => (
          <Box
            key={voxel.id}
            position={[voxel.x, voxel.y, voxel.z]}
            color={voxel.color}
            visible={isEditor ? true : index < visibleCount}
            onPointerMove={handlePointerMove}
            onClick={(e) => handleBlockClick(e, voxel.id)}
          />
        ))}
        {canInteract && hoverPos && (
            <GhostBlock position={hoverPos} color={editorColor || '#fff'} isDeleting={!!isDeleting} />
        )}
      </group>

      {/* Invisible Plane for Ground Interaction in Editor */}
      {isEditor && (
        <>
            <mesh 
                name="ground-plane" 
                rotation={[-Math.PI / 2, 0, 0]} 
                position={[0, -0.5, 0]} 
                onPointerMove={handlePointerMove}
                onClick={handleGroundClick}
                visible={false} 
            >
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="red" wireframe />
            </mesh>
            
            {/* Visual Grid Helper on Ground specifically for editing */}
            <gridHelper args={[20, 20, 0x888888, 0xcccccc]} position={[0, -0.49, 0]} />
        </>
      )}
    </group>
  );
};

export const VoxelScene: React.FC<VoxelSceneProps> = (props) => {
  // If in editor, only enable orbit when in 'orbit' mode
  // If not in editor (Viewer/Builder), always enable orbit
  const orbitEnabled = props.isEditor ? props.interactionMode === 'orbit' : true;

  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white relative">
      <Canvas shadows camera={{ position: [10, 8, 10], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -5, -10]} intensity={0.5} />
        
        {props.isEditor ? (
             <group position={[0, 0, 0]}>
                 <SceneContent {...props} />
             </group>
        ) : (
            <Center top>
                <SceneContent {...props} />
            </Center>
        )}

        {/* Global Reference Grid */}
        <Grid 
            position={[0, -0.51, 0]} 
            args={[20, 20]} 
            cellSize={1} 
            cellThickness={0.5} 
            cellColor="#cbd5e1" 
            sectionSize={5} 
            sectionThickness={1}
            sectionColor="#94a3b8"
            fadeDistance={30}
        />

        <Environment preset="city" />
        <OrbitControls 
            autoRotate={props.autoRotate} 
            autoRotateSpeed={2} 
            makeDefault 
            maxPolarAngle={Math.PI / 2} 
            enableDamping
            enabled={orbitEnabled}
        />
      </Canvas>
    </div>
  );
};