
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Updated initial state to the user provided image URL
  const avatarUrl = 'https://media.cake.me/image/upload/s--psgFJFLc--/c_fill,g_face,h_300,w_300/v1667312104/ykeypc13aeu28qk3uwcw.jpg';
  const isGenerating = false;

  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('portfolio');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20 scroll-mt-20">
      {/* Animated Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[80px] animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto space-y-6">
        {/* Avatar Area */}
        <div className="relative inline-block mb-4 group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyan-500/50 p-1 bg-slate-900/50 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-transform duration-500 group-hover:scale-105">
            <img
              src={avatarUrl}
              alt="Sigrid Peng Profile"
              className={`w-full h-full object-cover rounded-full transition-all duration-500 ${isGenerating ? 'blur-sm opacity-50' : 'brightness-100'}`}
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-[10px] font-semibold tracking-widest text-purple-400 uppercase">
          Welcome to my digital realm
        </div>

        <h1 className="text-5xl md:text-8xl font-orbitron font-bold tracking-tight leading-none">
          <span className="block text-slate-100 mb-2">Sigrid Peng</span>
        </h1>

        <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed tracking-wider opacity-80">
          具遊戲思維的 Android 工程師｜解謎 × 劇本 × App互動
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group neon-border-purple"
          >
            探索我的作品集
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="mailto:sigridpeng.dev@gmail.com"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 font-bold rounded-xl transition-all duration-300"
          >
            與我聊聊
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
