import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'آراء العملاء', href: '#testimonials' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Cpu className={`w-8 h-8 ${scrolled ? 'text-emerald-600' : 'text-emerald-400'}`} />
          <span className={`text-xl md:text-2xl font-display font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            power infinity <span className={scrolled ? 'text-emerald-600' : 'text-emerald-400'}>- باور انفينتي</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-bold transition-all hover:-translate-y-1 ${scrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-slate-200 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/201099024184" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className={`transition-all ${scrolled ? 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white' : 'border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'}`}>
              ابدأ مشروعك
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-emerald-600"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/201099024184" target="_blank" rel="noopener noreferrer">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">ابدأ مشروعك</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
