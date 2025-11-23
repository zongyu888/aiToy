import { GoogleGenAI, Type } from "@google/genai";
import { Voxel, VoxelModel } from '../types';

const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API Key is missing. Please set REACT_APP_GEMINI_API_KEY.");
    }
    return new GoogleGenAI({ apiKey });
};

// Response schema for structured output
const voxelSchema = {
    type: Type.OBJECT,
    properties: {
        modelName: { type: Type.STRING, description: "A creative name for the voxel model" },
        voxels: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    x: { type: Type.INTEGER, description: "X coordinate (approx -5 to 5)" },
                    y: { type: Type.INTEGER, description: "Y coordinate (approx -5 to 5)" },
                    z: { type: Type.INTEGER, description: "Z coordinate (approx -5 to 5)" },
                    color: { type: Type.STRING, description: "Hex color code, e.g. #FF0000" }
                },
                required: ["x", "y", "z", "color"]
            }
        }
    },
    required: ["modelName", "voxels"]
};

export const generateVoxelModel = async (prompt: string, imageBase64?: string): Promise<VoxelModel> => {
    const ai = getClient();
    
    // Determine model based on input type. 
    // Flash is great for logic, but Pro Vision or Flash Image is needed for images.
    // gemini-2.5-flash handles multimodal input very well.
    const modelId = 'gemini-2.5-flash';

    const finalPrompt = `
    You are an expert voxel artist. 
    Create a 3D voxel representation of the requested object.
    Keep the scale small, fitting within a 10x10x10 grid (coordinates roughly -5 to +5).
    Use vibrant, toy-like colors.
    Ensure structural integrity (blocks should mostly connect).
    Output valid JSON matching the schema.
    Request: ${prompt}
    `;

    try {
        const parts: any[] = [];
        
        if (imageBase64) {
            // Remove header if present (e.g., data:image/png;base64,)
            const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
            parts.push({
                inlineData: {
                    mimeType: "image/png", // Assuming PNG/JPEG, API is flexible usually
                    data: cleanBase64
                }
            });
        }
        
        parts.push({ text: finalPrompt });

        const response = await ai.models.generateContent({
            model: modelId,
            contents: { parts },
            config: {
                responseMimeType: "application/json",
                responseSchema: voxelSchema,
                temperature: 0.7,
            }
        });

        const text = response.text;
        if (!text) throw new Error("No response from AI");

        const parsed = JSON.parse(text);
        
        const newModel: VoxelModel = {
            id: Math.random().toString(36).substr(2, 9),
            name: parsed.modelName || "AI Creation",
            category: 'custom',
            voxels: parsed.voxels.map((v: any, idx: number) => ({
                id: `ai-${idx}`,
                x: v.x,
                y: v.y,
                z: v.z,
                color: v.color
            }))
        };

        return newModel;

    } catch (error) {
        console.error("Gemini Generation Error:", error);
        throw error;
    }
};
