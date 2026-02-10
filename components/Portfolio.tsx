
import React, { useState, useMemo } from 'react';
import { Category } from '../types';
import { PROJECTS } from '../constants';
import { ExternalLink, Layers, Box, Smartphone } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category | 'ALL'>('ALL');

  const categories = [
    { name: '全部', id: 'ALL', icon: <Layers size={18} /> },
    { name: Category.REAL_LIFE, id: Category.REAL_LIFE, icon: <Box size={18} /> },
    { name: Category.LARP, id: Category.LARP, icon: <Layers size={18} /> },
    { name: Category.MOBILE, id: Category.MOBILE, icon: <Smartphone size={18} /> },
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'ALL') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text-purple">精選作品</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        <p className="mt-6 text-slate-400 max-w-xl mx-auto">
          每一項作品都是對互動邊界的探索。從空間配置到代碼架構，我追求極致的體驗細節。
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id as any)}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-semibold text-sm tracking-wide ${
              activeTab === cat.id 
              ? 'bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.5)]' 
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-slate-200'
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div 
            key={project.id}
            className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 animate-in fade-in zoom-in duration-500"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-md text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded-full border border-cyan-500/30">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors font-orbitron">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-slate-500 uppercase tracking-tighter">#{tag}</span>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button className="text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors group/btn">
                  查看詳情
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 -z-10 transition-opacity blur-sm"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
