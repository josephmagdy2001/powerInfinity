import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCloud from './ServiceCloud';

const slides = [
  {
    image: '/power.jpeg',
    title: 'نبتكر حلولاً برمجية',
    subtitle: 'لمستقبل أفضل لأعمالك',
    description: 'نحن نساعد الشركات على التحول الرقمي باستخدام أحدث التقنيات العالمية.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920',
    title: 'تطبيقات الهاتف الذكي',
    subtitle: 'تجربة مستخدم استثنائية',
    description: 'نصمم ونطور تطبيقات موبايل تتجاوز التوقعات وتلبي احتياجات عملائك.',
  },
  {
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920',
    title: 'حلول السحابة المتقدمة',
    subtitle: 'أمان وسرعة لا تضاهى',
    description: 'بنية تحتية سحابية قوية تدعم نمو شركتك وتضمن استمرارية أعمالك.',
  },
];

const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-slate-950/60 z-10" />
          <img
            src={slides[current].image}
            alt="Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6 pt-14 lg:pt-20 overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          <div className="text-center lg:text-right order-2 lg:order-1">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-2 lg:mb-4"
            >
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] md:text-sm font-medium uppercase tracking-wider">
                مرحباً بكم في power infinity - باور انفينتي
              </span>
            </motion.div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-4 lg:mb-6 leading-tight text-white drop-shadow-md">
              <TypingEffect text={slides[current].title} />
              <br />
              <span className="text-gradient leading-relaxed">{slides[current].subtitle}</span>
            </h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-lg lg:text-xl text-slate-300 mb-6 lg:mb-10 max-w-2xl mx-auto lg:mr-0 lg:ml-auto"
            >
              {slides[current].description}
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
            >
              <a href="tel:+201099024184">
                <Button size="lg" className="w-full sm:w-fit bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-12 md:h-14 text-sm md:text-lg rounded-xl shadow-lg shadow-emerald-600/20">
                  اتصل بنا الآن
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-fit glass border-white/20 text-white hover:bg-white/10 px-8 h-12 md:h-14 text-sm md:text-lg rounded-xl transition-all duration-300">
                  تعرف على خدماتنا
                </Button>
              </a>
            </motion.div>
          </div>

          <div className="relative h-[220px] md:h-[450px] lg:h-[600px] w-full order-1 lg:order-2 flex items-center justify-center">
            <div className="w-full h-full scale-100 sm:scale-100">
              <ServiceCloud />
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-30 flex justify-center items-center gap-6">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i ? 'w-8 bg-emerald-500' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
