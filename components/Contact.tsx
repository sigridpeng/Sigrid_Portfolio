
import React from 'react';
import { Mail, Github, Send, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const email = "sigridpeng.dev@gmail.com";
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: <Github size={24} />, label: 'GitHub', url: 'https://github.com/sigridpeng', color: 'hover:text-slate-100' },
    { icon: <Mail size={24} />, label: 'Email', url: `mailto:${email}`, color: 'hover:text-cyan-400' },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto text-center scroll-mt-20">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold neon-text-cyan">開啟新的冒險</h2>
          <p className="text-slate-400 text-lg">
            不論是商業合作、有趣的專案開發，或只是想聊聊最新的沉浸式技術，我都非常歡迎。
          </p>
          
          <div className="group relative inline-flex items-center gap-4 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl mt-6 hover:border-cyan-500/50 transition-all">
            <p className="text-cyan-400 font-orbitron tracking-widest text-lg md:text-2xl">
              {email}
            </p>
            <button 
              onClick={copyToClipboard}
              className="p-2 text-slate-500 hover:text-cyan-400 transition-colors"
              title="複製 Email"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a 
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-1"
          >
            <Send size={24} /> 傳送郵件給我
          </a>
        </div>

        <div className="pt-8 space-y-6">
          <p className="text-sm font-orbitron text-slate-500 tracking-widest uppercase font-bold">Follow The Path</p>
          <div className="flex justify-center gap-10">
            {socials.map((social, idx) => (
              <a 
                key={idx}
                href={social.url}
                target={social.url.startsWith('http') ? "_blank" : undefined}
                rel={social.url.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`text-slate-500 transition-all duration-300 transform hover:scale-125 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Grid Background for this section only */}
        <div className="absolute left-0 w-full h-full -z-20 opacity-5 pointer-events-none overflow-hidden">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #22D3EE 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
