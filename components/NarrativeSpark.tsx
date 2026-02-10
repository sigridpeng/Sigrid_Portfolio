
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Wand2, Loader2, Sparkles, MessageCircleCode } from 'lucide-react';

const NarrativeSpark: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `你是一位資深的遊戲設計師與劇本殺創作者。根據使用者的關鍵字「${prompt}」，提供一個創新的遊戲概念或劇本殺主題。包含：1.作品名稱 2.世界觀設定 3.核心玩法機制。請用繁體中文回答，並保持神祕、科幻或懸疑的口吻，字數控制在200字內。`,
        config: {
          temperature: 0.8,
          topP: 0.9,
        }
      });
      setResponse(result.text || "無法生成概念，請稍後再試。");
    } catch (error) {
      console.error('Error generating idea:', error);
      setResponse("系統連線異常，請檢查環境設定。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"></div>

        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-cyan-400 mb-2">
              <MessageCircleCode size={24} />
              <span className="font-orbitron tracking-widest text-sm font-bold">NARRATIVE AI SPARK</span>
            </div>
            <h2 className="text-3xl font-bold font-orbitron text-slate-100">靈感探針：AI 共同創作</h2>
            <p className="text-slate-400">
              輸入一個關鍵字（例如：廢墟、時間旅行、貓、密室），讓我為你生成一個獨特的遊戲概念雛形。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && generateIdea()}
                placeholder="輸入關鍵字..."
                className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 focus:border-cyan-500 outline-none transition-all text-slate-100 placeholder:text-slate-600"
              />
              <button
                onClick={generateIdea}
                disabled={loading}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Wand2 size={20} />}
                啟動生成
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 min-h-[200px] flex flex-col">
            <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6 h-full flex flex-col justify-center items-center text-center relative">
              {!response && !loading && (
                <div className="space-y-4 opacity-40">
                  <Sparkles size={40} className="mx-auto" />
                  <p className="text-xs uppercase tracking-widest font-orbitron">Waiting for spark...</p>
                </div>
              )}
              {loading && (
                <div className="space-y-4">
                  <Loader2 size={40} className="mx-auto animate-spin text-cyan-400" />
                  <p className="text-xs text-slate-500 animate-pulse">正在穿梭時空尋找靈感...</p>
                </div>
              )}
              {response && !loading && (
                <div className="animate-in fade-in duration-700">
                  <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap italic">
                    「{response}」
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSpark;
