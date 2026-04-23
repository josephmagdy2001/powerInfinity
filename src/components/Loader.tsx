import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setLoading(false), 500);
    }, 2500); // Slightly longer to appreciate the animation
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-slate-50 flex items-center justify-center transition-opacity duration-500 ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        {/* Ninja Character Container */}
        <div className="relative mb-8 group" data-aos="zoom-in">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full scale-110 animate-pulse" />
          
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            {/* The Ninja Image */}
            <img 
              src="/ninja.png" 
              alt="Ninjawi Loader" 
              className="w-full h-full object-contain relative z-10"
            />

            {/* Moving Eyes Overlay */}
            {/* We place two "pupils" that move left and right to simulate scanning */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* Left Eye Pupil */}
              <motion.div 
                className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-900 rounded-full"
                style={{ top: '38%', left: '33.5%' }}
                animate={{ 
                  x: [-3, 3, -3],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              {/* Right Eye Pupil */}
              <motion.div 
                className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-900 rounded-full"
                style={{ top: '38%', left: '59.5%' }}
                animate={{ 
                  x: [-3, 3, -3],
                  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>
          </div>
        </div>

        {/* Text and Progress */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-wider mb-6">
            power infinity <span className="text-emerald-600">- باور انفينتي</span>
          </h1>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden" dir="ltr">
              <motion.div 
                className="h-full bg-emerald-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
            <span className="text-emerald-600 font-mono text-sm font-bold tracking-widest animate-pulse uppercase">
              Initializing...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
