
import React from 'react';
import { User, Code, Puzzle, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Puzzle className="text-purple-400" />, label: '遊戲製作', val: '實境解謎' },
    { icon: <Code className="text-cyan-400" />, label: 'App開發', val: 'Kotlin/Java' },
    { icon: <BookOpen className="text-pink-400" />, label: '劇本撰寫', val: '劇本殺/小說' },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-purple-400 font-orbitron text-sm font-bold tracking-widest uppercase">
            <User size={18} /> About Me
          </div>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-slate-100">
            Sigrid Peng<br />
            <span className="text-cyan-400 text-3xl md:text-5xl mt-2 block">
              Android工程師/謎題設計師
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          從 Android 架構到情境觸發邏輯，我追求的不只是完成任務，<br />
          而是讓每一次互動，都成為一段記得住的體驗。
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl flex flex-col items-center text-center space-y-3 hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-300 group">
              <div className="transform group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">{s.label}</span>
              <span className="text-xl font-orbitron font-bold text-slate-100">{s.val}</span>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="pt-8">
          <p className="text-slate-400 italic border-l-4 md:border-l-0 md:border-t-2 border-purple-500 pl-4 md:pl-0 md:pt-6 inline-block max-w-lg">
            「在我的世界裡，沒有無意義的線索，只有尚未被發現的關聯。」
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
