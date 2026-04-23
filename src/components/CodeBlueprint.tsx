import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Layout, Lock } from 'lucide-react';

export default function CodeBlueprint() {
  const [mode, setMode] = useState<'stability' | 'fluidity' | 'security'>('stability');

  const modes = [
    { 
      id: 'stability', 
      label: 'الاستقرار - Stability', 
      desc: 'قوة  والـ  تضمن أنظمة لا تتأثر بالضغوط وتتحمل آلاف المستخدمين في وقت واحد.',
      icon: <Shield className="w-8 h-8" />,
      features: ['هيكلية برمجية متينة', 'قواعد بيانات سريعة', 'أداء ثابت']
    },
    { 
      id: 'fluidity', 
      label: 'الانسيابية - Fluidity', 
      desc: 'جمال  وواجهات عصرية تتحرك بانسيابية تامة مع المستخدم لتعطي تجربة فريدة.',
      icon: <Layout className="w-8 h-8" />,
      features: ['واجهات تفاعلية', 'سرعة استجابة فائقة', 'تصميم عصري']
    },
    { 
      id: 'security', 
      label: 'الحماية - Security', 
      desc: 'طبقات حماية متطورة تجعل بيانات عملائك في حصن رقمي منيع ضد أي محاولات اختراق.',
      icon: <Lock className="w-8 h-8" />,
      features: ['تشفير بيانات متقدم', 'أنظمة كشف اختراق', 'خصوصية مطلقة']
    }
  ];

  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden" id="blueprint">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[120px] transition-colors duration-1000 ${
          mode === 'stability' ? 'bg-emerald-500/10' : mode === 'fluidity' ? 'bg-blue-500/10' : 'bg-amber-500/10'
        }`} />
        <div className={`absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[120px] transition-colors duration-1000 ${
          mode === 'stability' ? 'bg-emerald-600/5' : mode === 'fluidity' ? 'bg-blue-600/5' : 'bg-amber-600/5'
        }`} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Visual Experience */}
          <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              {/* Animated Rings */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Outer Orbit */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 border-2 border-dashed rounded-full opacity-20 ${
                      mode === 'stability' ? 'border-emerald-400' : mode === 'fluidity' ? 'border-blue-400' : 'border-amber-400'
                    }`}
                  />
                  
                  {/* Middle Orbit */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-10 border border-dotted rounded-full opacity-30 ${
                      mode === 'stability' ? 'border-emerald-500' : mode === 'fluidity' ? 'border-blue-500' : 'border-amber-500'
                    }`}
                  />

                  {/* Core Content */}
                  <div className={`relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-[2rem] glass-dark border-2 flex items-center justify-center overflow-hidden transition-colors duration-500 ${
                    mode === 'stability' ? 'border-emerald-500/30 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]' : 
                    mode === 'fluidity' ? 'border-blue-500/30 shadow-[0_0_50px_-12px_rgba(59,130,246,0.3)]' : 
                    'border-amber-500/30 shadow-[0_0_50px_-12px_rgba(245,158,11,0.3)]'
                  }`}>
                    <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${
                      mode === 'stability' ? 'from-emerald-500' : mode === 'fluidity' ? 'from-blue-500' : 'from-amber-500'
                    } to-transparent`} />
                    
                    <motion.img 
                      layoutId="logo"
                      src="/powerlogo.jpeg" 
                      alt="Power Infinity" 
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl shadow-2xl relative z-10" 
                    />
                  </div>

                  {/* Feature Tags */}
                  {modes.find(m => m.id === mode)?.features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className={`absolute glass-dark px-4 py-2 rounded-xl border border-white/10 text-xs font-bold text-white shadow-xl z-20 whitespace-nowrap ${
                        i === 0 ? '-top-4 -right-4' : i === 1 ? 'top-1/2 -right-12' : '-bottom-4 left-0'
                      }`}
                    >
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        mode === 'stability' ? 'bg-emerald-400' : mode === 'fluidity' ? 'bg-blue-400' : 'bg-amber-400'
                      }`} />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Interaction UI */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 text-right">
            <motion.span 
              className={`inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-white/5 border rounded-full transition-colors duration-500 ${
                mode === 'stability' ? 'text-emerald-400 border-emerald-400/20' : 
                mode === 'fluidity' ? 'text-blue-400 border-blue-400/20' : 
                'text-amber-400 border-amber-400/20'
              }`}
            >
              البصمة البرمجية
            </motion.span>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              كود يُبنى <br />
              <span className={`transition-colors duration-500 ${
                mode === 'stability' ? 'text-emerald-400' : 
                mode === 'fluidity' ? 'text-blue-400' : 
                'text-amber-400'
              }`}>بمعايير عالمية</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id as any)}
                  className={`w-full group text-right p-5 md:p-6 rounded-2xl transition-all duration-500 border relative overflow-hidden ${
                    mode === m.id 
                      ? mode === 'stability' ? 'bg-emerald-500/10 border-emerald-500/50 translate-x-[-12px]' 
                        : mode === 'fluidity' ? 'bg-blue-500/10 border-blue-500/50 translate-x-[-12px]'
                        : 'bg-amber-500/10 border-amber-500/50 translate-x-[-12px]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:translate-x-[-6px]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 justify-end mb-2">
                        <h3 className={`text-lg md:text-xl font-bold transition-colors ${mode === m.id ? 'text-white' : 'text-slate-400'}`}>
                          {m.label}
                        </h3>
                        <div className={`p-2 rounded-lg transition-colors ${
                          mode === m.id 
                            ? mode === 'stability' ? 'bg-emerald-500/20 text-emerald-400' 
                              : mode === 'fluidity' ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-amber-500/20 text-amber-400'
                            : 'bg-white/5 text-slate-500'
                        }`}>
                          {m.icon}
                        </div>
                      </div>
                      <AnimatePresence mode="wait">
                        {mode === m.id && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-slate-400 text-sm leading-relaxed"
                          >
                            {m.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  {mode === m.id && (
                    <motion.div 
                      layoutId="active-indicator"
                      className={`absolute inset-y-0 right-0 w-1 ${
                        mode === 'stability' ? 'bg-emerald-500' : 
                        mode === 'fluidity' ? 'bg-blue-500' : 
                        'bg-amber-500'
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
