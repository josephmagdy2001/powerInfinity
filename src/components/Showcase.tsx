import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the container (-1 to 1)
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Transforms for laptop (subtle movement)
  const laptopRotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const laptopRotateY = useTransform(smoothX, [-1, 1], [-8, 8]);
  const laptopTranslateX = useTransform(smoothX, [-1, 1], [-15, 15]);
  const laptopTranslateY = useTransform(smoothY, [-1, 1], [-15, 15]);

  // Transforms for phone (moves more, creating parallax effect)
  const phoneRotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const phoneRotateY = useTransform(smoothX, [-1, 1], [-15, 15]);
  const phoneTranslateX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const phoneTranslateY = useTransform(smoothY, [-1, 1], [-40, 40]);

  return (
    <section 
      id="showcase" 
      className="py-24 px-6 bg-[#0B1120] relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Image - You can change the src here */}
        <img 
          src="/power.jpeg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          loading="lazy"
        />
        {/* Colored Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            أعمالنا <span className="text-emerald-400">التي نفخر بها</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            نجمع بين قوة البرمجة وجمال التصميم لنصنع لك تطبيقات ومواقع لا تقتصر فقط على أداء المهام، بل تبهر مستخدميك من اللحظة الأولى.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center mt-10">
          
          {/* Laptop Mockup */}
          <motion.div 
            className="absolute z-10 w-[90%] md:w-[80%] max-w-[800px]"
            style={{
              rotateX: laptopRotateX,
              rotateY: laptopRotateY,
              x: laptopTranslateX,
              y: laptopTranslateY,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative w-full pb-[60%] bg-slate-800 rounded-xl md:rounded-2xl shadow-2xl shadow-emerald-500/10 border-4 border-slate-700 overflow-hidden group">
              <div className="absolute inset-0 bg-slate-800 p-1 md:p-2">
                <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden relative">
                  {/* Fake Window Header */}
                  <div className="h-4 md:h-6 w-full bg-slate-800 flex items-center px-2 md:px-3 gap-1 md:gap-1.5 border-b border-slate-700">
                    <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-amber-400" />
                    <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  {/* Image inside Laptop */}
                  <img 
                    src="https://s3-alpha.figma.com/hub/file/4240772167/40852082-1474-4866-a131-60b57a7d69c5-cover.png" 
                    alt="Web Dashboard" 
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
              {/* Laptop Base (Creates 3D depth illusion) */}
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 w-[105%] h-2 md:h-4 bg-slate-600 rounded-b-2xl md:rounded-b-3xl" style={{ transform: "translateZ(-10px)" }} />
            </div>
          </motion.div>

          {/* Mobile Phone Mockup */}
          <motion.div 
            className="absolute z-20 w-[30%] md:w-[22%] max-w-[220px] right-[5%] md:right-[15%] bottom-[-10%] md:bottom-[-5%]"
            style={{
              rotateX: phoneRotateX,
              rotateY: phoneRotateY,
              x: phoneTranslateX,
              y: phoneTranslateY,
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative w-full pb-[200%] bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[4px] md:border-[6px] border-slate-800 overflow-hidden group">
              {/* Fake iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-3 md:h-5 bg-slate-800 rounded-b-lg md:rounded-b-xl z-30 shadow-sm" />
              
              <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                <img 
                  src="https://tse1.mm.bing.net/th/id/OIP.iaX_fwaNpAdV-K3DP1bk7gHaLT?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Mobile App" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
