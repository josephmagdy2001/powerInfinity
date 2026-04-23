import React, { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef(null);
  const features = [
    'خبرة تتجاوز 10 سنوات في السوق',
    'فريق عمل متكامل من الخبراء',
    'حلول برمجية مخصصة وعصرية',
    'دعم فني متواصل 24/7',
    'خبرة كبيرة في السوق الخليجي والمصري '
  ];

  useGSAP(() => {
    gsap.from('.gsap-text', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-24 px-6 bg-white overflow-hidden relative">
      {/* Green Bubbles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-500" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div data-aos="fade-left" className="relative group perspective-1000">
            <div className="absolute inset-0 bg-emerald-600/10 translate-x-4 translate-y-4 rounded-[2rem] -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920" 
              alt="About power infinity - باور انفينتي" 
              className="rounded-[2rem] shadow-xl w-full object-cover h-[500px] border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce">
              <div className="text-4xl font-bold text-emerald-600">+10</div>
              <div className="text-sm font-bold text-slate-600 leading-tight">سنوات من <br/>الخبرة والنجاح</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-600 font-medium text-sm mb-4 gsap-text opacity-100">
              من نحن
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900 leading-tight gsap-text opacity-100">
              نحن شركاؤك في <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400">التحول الرقمي</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 gsap-text opacity-100">
              power infinity - باور انفينتي ليست مجرد شركة برمجيات، بل هي شريكك التقني الموثوق. نحن نجمع بين الابتكار التقني والفهم العميق لاحتياجات الأعمال لتقديم حلول مبتكرة تضيف قيمة حقيقية لمشروعك.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 gsap-text opacity-100">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/201099024184?text=أريد التواصل معكم للحصول على استشارة" target="_blank" rel="noopener noreferrer" className="inline-block gsap-text opacity-100">
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-1 font-bold text-lg flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                تواصل معانا الآن
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
