
import React from 'react';
import { User, Code, Palette, Gamepad2 } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Gamepad2 className="text-purple-400" />, label: '遊戲策劃', val: '5+ 年' },
    { icon: <Code className="text-cyan-400" />, label: '程式開發', val: 'React/RN' },
    { icon: <Palette className="text-pink-400" />, label: '視覺設計', val: 'UI/UX' },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/profile/800/1000" 
              alt="Sigrid Peng Profile" 
              className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative Frames */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-purple-500/20 rounded-3xl -z-10"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-cyan-500/20 rounded-3xl -z-10"></div>
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 text-purple-400 font-orbitron text-sm font-bold tracking-widest uppercase">
            <User size={18} /> About The Narrator
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-slate-100">
            Sigrid Peng<br />體驗設計師
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            我一直相信，最好的故事不僅僅是被「聽」到的，而是被「經歷」到的。
            我的設計哲學核心在於「沉浸」，無論是實體空間的佈局、劇本中情感的轉折，
            或是 App 介面的直覺反應，都應該為同一個目標服務：讓使用者忘記現實。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {stats.map((s, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center text-center space-y-2 hover:border-purple-500/50 transition-colors">
                {s.icon}
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">{s.label}</span>
                <span className="text-lg font-orbitron font-bold text-slate-100">{s.val}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 italic border-l-2 border-purple-500 pl-4 py-2">
            「在我的世界裡，沒有無意義的線索，只有尚未被發現的關聯。」
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
