
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askGemini(prompt: string, context: string = "") {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Contexto para o estudante de Serviço Social: ${context}\n\nPergunta do usuário: ${prompt}`,
      config: {
        systemInstruction: "Você é um assistente acadêmico especializado em Serviço Social no Brasil. Responda de forma clara, técnica e alinhada ao Projeto Ético-Político profissional. Use referências como Iamamoto, Netto e as legislações vigentes (ECA, LOAS, etc).",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Desculpe, ocorreu um erro ao processar sua pergunta. Verifique sua conexão.";
  }
}
