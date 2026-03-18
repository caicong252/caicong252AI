/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Zap, Users, ArrowRight, Quote } from 'lucide-react';

const BrandPoster = () => {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] font-sans selection:bg-[#FF4D4D] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-[#F5F2ED]/80 backdrop-blur-md border-b border-[#1A1A1A]/10">
        <div className="text-2xl font-serif font-bold tracking-tighter">卿心红娘</div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          <a href="#vision" className="hover:text-[#FF4D4D] transition-colors">使命愿景</a>
          <a href="#service" className="hover:text-[#FF4D4D] transition-colors">海报展示</a>
          <a href="#values" className="hover:text-[#FF4D4D] transition-colors">核心价值</a>
        </div>
        <button className="bg-[#1A1A1A] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#FF4D4D] transition-all duration-300">
          立即寻爱
        </button>
      </nav>

      {/* Hero Section / Poster */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background Artistic Element: The Silky Red Ribbon */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full opacity-40">
            <defs>
              <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF4D4D" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF4D4D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M-100,400 C200,200 400,600 720,400 C1040,200 1240,600 1540,400"
              fill="none"
              stroke="url(#ribbonGradient)"
              strokeWidth="40"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M-100,450 C250,250 450,650 720,450 C990,250 1190,650 1540,450"
              fill="none"
              stroke="#FF4D4D"
              strokeWidth="2"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            />
            {/* Floating Hearts along the ribbon */}
            {[200, 500, 800, 1100].map((x, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: i * 0.5, duration: 1 }}
              >
                <Heart 
                  x={x} 
                  y={350 + Math.sin(x/100) * 100} 
                  size={24} 
                  className="text-[#FF4D4D] fill-[#FF4D4D]" 
                />
              </motion.g>
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl w-full text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 font-medium text-[#FF4D4D]">
              卿心红娘 · 成全真心
            </h2>
            <h1 className="text-[10vw] md:text-[7rem] lg:text-[8rem] font-serif leading-[0.9] mb-8 tracking-tighter">
              爱比<br />
              <span className="italic text-[#FF4D4D]">天大</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-block border-2 border-[#1A1A1A] px-8 md:px-12 py-4 md:py-6 rounded-2xl bg-white shadow-[10px_10px_0px_0px_rgba(26,26,26,1)]"
          >
            <div className="text-3xl md:text-6xl font-bold mb-2">¥799</div>
            <div className="text-xs md:text-sm uppercase tracking-widest font-bold opacity-60">单次服务 · 拒绝套路</div>
          </motion.div>
        </div>

        {/* Floating Labels */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-10 md:bottom-20 left-6 md:left-10"
        >
          <div className="flex items-center space-x-3 md:space-x-4 border border-[#1A1A1A]/20 p-3 md:p-4 rounded-xl backdrop-blur-sm bg-white/30">
            <ShieldCheck className="text-[#FF4D4D] w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">真实认证 · 诚信至上</span>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section id="vision" className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
        {/* Decorative Ribbon Element */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
          <Heart className="w-full h-full text-[#FF4D4D]" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.5em] text-[#FF4D4D] mb-4 font-bold">我们的使命 · MISSION</h3>
                <p className="text-2xl md:text-4xl font-serif leading-tight">
                  以真诚为桥，<br />
                  让每一颗渴望爱的心<br />
                  都能被温柔以待。
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-[0.5em] text-[#FF4D4D] mb-4 font-bold">我们的愿景 · VISION</h3>
                <p className="text-lg md:text-2xl font-serif leading-relaxed text-[#1A1A1A]/80">
                  成为中国最受信赖的情感连接品牌，<br />
                  让"遇见对的人"不再是奢望。
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div 
                whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
                className="aspect-square bg-[#F5F2ED] rounded-full flex items-center justify-center p-8 md:p-12 border border-[#1A1A1A]/5 relative"
              >
                <Quote className="absolute top-0 left-0 text-[#FF4D4D]/10 w-24 h-24 md:w-40 md:h-40 -translate-x-4 -translate-y-4 md:-translate-x-10 md:-translate-y-10" />
                <div className="text-center space-y-4 md:space-y-6">
                  <p className="text-base md:text-lg italic leading-relaxed">
                    “在这个金钱为重的年代，我坚信爱比天大。有爱的人会更有幸福感，获得感。”
                  </p>
                  <div className="h-px w-12 bg-[#FF4D4D] mx-auto"></div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold tracking-widest uppercase">蔡聪</p>
                    <p className="text-[10px] opacity-50 uppercase tracking-widest">卿心红娘 创始人</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Concepts Gallery */}
      <section id="service" className="py-32 px-6 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#FF4D4D] mb-4 font-bold">海报展示集 · Poster Showcase</h2>
            <h3 className="text-4xl md:text-6xl font-serif">三种视觉冲击力展示</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Concept 1: The Red Thread (Minimalist) */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-white border border-[#1A1A1A]/10 rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between">
                <div className="text-xs uppercase tracking-widest opacity-40">Concept 01 / Minimalist</div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full h-px bg-[#1A1A1A]/10">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-[#FF4D4D]" 
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                      className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-[#FF4D4D]" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart className="w-4 h-4 text-[#FF4D4D] fill-[#FF4D4D]" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="text-2xl font-serif mb-2">卿心红娘</h5>
                  <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">成全真心 · 纯粹寻爱</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-bold text-center">展示一：极简红线 · 缘分天定</p>
            </div>

            {/* Concept 2: Bold Typography (Editorial) */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#FF4D4D] rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 p-12 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start relative z-10">
                  <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">Poster 02</div>
                  <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">2026 Edition</div>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-[5.5rem] font-serif font-bold leading-[0.8] tracking-tighter mb-2">
                    成全<br />真心
                  </h4>
                  <p className="text-sm font-light tracking-[0.2em] opacity-80 italic ml-1">Sincere Love Match</p>
                </div>
                
                <div className="flex items-end justify-between relative z-10">
                  <div className="space-y-1">
                    <div className="text-3xl font-serif">¥799</div>
                    <div className="h-px w-12 bg-white/40"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 text-right leading-tight">
                    卿心红娘<br />纯粹寻爱
                  </div>
                </div>

                {/* Subtle Background Character */}
                <div className="absolute -bottom-10 -left-10 text-[18rem] font-serif font-bold text-white/[0.03] leading-none select-none pointer-events-none">
                  卿
                </div>
              </div>
              <p className="mt-6 text-sm font-bold text-center">展示二：高级感 · 杂志排版</p>
            </div>

            {/* Concept 3: Modern Brutalist (The Truth) */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] bg-[#1A1A1A] rounded-2xl overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between text-white border-4 border-[#FF4D4D]">
                <div className="text-xs uppercase tracking-widest text-[#FF4D4D] font-bold">Concept 03 / Brutalist</div>
                <div className="space-y-4">
                  <div className="text-5xl font-bold tracking-tighter leading-none">拒绝<br />套路</div>
                  <div className="text-5xl font-bold tracking-tighter leading-none text-[#FF4D4D]">真诚<br />无价</div>
                </div>
                <div>
                  <div className="text-sm font-bold mb-4 opacity-60">致力于改变行业乱象</div>
                  <div className="flex justify-between items-end">
                    <div className="text-3xl font-serif">卿心红娘</div>
                    <div className="bg-[#FF4D4D] text-white px-3 py-1 text-[10px] font-bold rounded">¥799</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm font-bold text-center">展示三：新锐主义 · 行业清流</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section id="values" className="py-32 px-6 bg-white text-[#1A1A1A] border-t border-[#1A1A1A]/5 relative overflow-hidden">
        {/* Artistic Background: The Flowing Red Ribbon (Unique to Values) */}
        <div className="absolute inset-0 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="w-full h-full opacity-[0.15]">
            <defs>
              <linearGradient id="valuesRibbonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF4D4D" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF4D4D" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF4D4D" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* A more vertical, swirling ribbon for this section */}
            <motion.path
              d="M1200,-100 Q1000,200 1300,400 T1100,900"
              fill="none"
              stroke="url(#valuesRibbonGradient)"
              strokeWidth="60"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            <motion.path
              d="M150,-100 Q350,200 50,400 T250,900"
              fill="none"
              stroke="#FF4D4D"
              strokeWidth="1"
              strokeDasharray="5 15"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 5, ease: "linear" }}
            />
            
            {/* Scattered Hearts with different animation */}
            {[
              { x: 100, y: 150, s: 16 },
              { x: 1300, y: 250, s: 24 },
              { x: 1150, y: 600, s: 20 },
              { x: 250, y: 700, s: 18 }
            ].map((h, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{ delay: i * 0.3, duration: 1 }}
              >
                <Heart 
                  x={h.x} 
                  y={h.y} 
                  size={h.s} 
                  className="text-[#FF4D4D] fill-[#FF4D4D]/20" 
                />
              </motion.g>
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-sm uppercase tracking-[0.5em] text-[#FF4D4D] mb-4 font-bold">核心价值观 · VALUES</h2>
            <h3 className="text-4xl md:text-6xl font-serif">真诚 · 尊重 · 专业 · 温暖 · 成全</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: '真诚', desc: '以诚相待，拒绝一切虚伪与套路。', icon: Heart },
              { title: '尊重', desc: '尊重每一个灵魂的独特性与选择。', icon: ShieldCheck },
              { title: '专业', desc: '十年经验，精准匹配，科学引导。', icon: Zap },
              { title: '温暖', desc: '如沐春风的服务，让爱不再冰冷。', icon: Users },
              { title: '成全', desc: '成人之美，见证每一份真心的圆满。', icon: Quote },
            ].map((v, i) => (
              <div key={i} className="p-8 border border-[#1A1A1A]/5 rounded-2xl hover:bg-[#F5F2ED] transition-colors group text-center">
                <v.icon className="w-8 h-8 mb-6 text-[#FF4D4D] mx-auto group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-serif mb-3">{v.title}</h4>
                <p className="text-[#1A1A1A]/60 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-20 px-6 bg-[#F5F2ED] border-t border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-serif mb-2">卿心红娘</h2>
            <p className="text-[#1A1A1A]/60 tracking-widest uppercase text-xs font-bold">卿心红娘 · 成全真心</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <button className="group flex items-center space-x-4 bg-[#FF4D4D] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#1A1A1A] transition-all duration-500 shadow-xl hover:shadow-2xl">
              <span>开启你的寻爱之旅</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-[#1A1A1A]/40">© 2026 卿心红娘 · 纯粹为爱</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return <BrandPoster />;
}
