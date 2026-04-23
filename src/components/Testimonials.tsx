import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Star, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    role: 'المدير التنفيذي، شركة الأمل',
    content: 'تعاملنا مع power infinity - باور انفينتي لتطوير تطبيقنا الخاص، وكانت النتيجة مذهلة. احترافية عالية ودقة في المواعيد.',
    rating: 5,
    avatar: 'https://tse2.mm.bing.net/th/id/OIP.NqqVMg8xic_tuJPWMK8cpwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 2,
    name: 'محمود خالد',
    role: 'مدير التسويق، براند نيمو',
    content: 'فريق عمل مبدع جداً. حولوا فكرتنا المعقدة إلى موقع إلكتروني بسيط وجذاب وسهل الاستخدام.',
    rating: 5,
    avatar: 'https://m.media-amazon.com/images/S/amazon-avatars-global/652d54e8-b840-4e9f-858c-22369158b5ad._CR0%2C0%2C429%2C429_UX460_.jpg',
  },
  {
    id: 3,
    name: 'ياسين علي',
    role: 'مؤسس، شركة فود اغذية',
    content: 'أفضل استثمار قمنا به هو اختيار power infinity - باور انفينتي لتطوير بنيتنا التحتية السحابية. الأمان والسرعة لا يعلى عليهما.',
    rating: 5,
    avatar: 'https://assets.clevelandclinic.org/transform/6f5c40a8-1e9b-45fa-8618-c4135904b9df/mohammad-jamil-j-ahmad-md',
  },
];

export default function Testimonials() {
  const container = useRef(null);
  const pathRef = useRef(null);

  useGSAP(() => {
    // Initial state for sections
    gsap.set('.testimonial-item', { opacity: 0, y: 30 });

    // Animation for each testimonial
    const items = gsap.utils.toArray('.testimonial-item');
    items.forEach((item: any, i) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out'
      });
    });

    // Vertical line animation (connecting path)
    gsap.from('.connecting-line', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: 1
      },
      scaleY: 0,
      transformOrigin: 'top center',
      ease: 'none'
    });
  }, { scope: container });

  return (
    <section id="testimonials" ref={container} className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-6 py-2 rounded-full bg-white shadow-sm border border-emerald-100 text-emerald-600 font-bold text-base mb-4">
            آراء عملائنا
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-6">
            ماذا يقولون <span className="text-gradient">عن باور انفينتي؟</span>
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto font-medium">
            نحن نفخر ببناء علاقات طويلة الأمد مع عملائنا من خلال تقديم قيمة حقيقية ونتائج ملموسة.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Vertical Line */}
          <div className="connecting-line absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 block" style={{ transform: 'translateX(-50%)' }} />

          <div className="space-y-32">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`testimonial-item flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`inline-block overflow-hidden rounded-xl shadow-xl bg-white w-full max-w-md ${i % 2 === 0 ? 'ml-0 mr-auto' : 'ml-auto mr-0'}`}>
                    {/* Colored Header */}
                    <div className={`px-6 py-3 text-white font-bold text-xl ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-purple-600'}`}>
                      {t.name}
                    </div>
                    {/* Card Content */}
                    <div className="p-8">
                      <h4 className="font-bold text-slate-800 text-lg mb-2">{t.role}</h4>
                      <div className={`flex gap-1 mb-4 ${i % 2 === 0 ? '' : 'justify-end'}`}>
                        {[...Array(5)].map((_, starI) => (
                          <Star
                            key={starI}
                            className={`w-4 h-4 ${starI < t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
                          />
                        ))}
                      </div>
                      <p className="text-slate-600 text-lg leading-relaxed italic">
                        "{t.content}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Avatar Side (Center) */}
                <div className="relative z-20 shrink-0">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-2xl overflow-hidden relative group">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  {/* Glowing Ring around image */}
                  <div className={`absolute inset-[-10px] border-2 border-dashed rounded-full -z-10 animate-[spin_20s_linear_infinite] ${i % 2 === 0 ? 'border-emerald-400/50' : 'border-purple-400/50'}`} />
                </div>

                {/* Empty side for layout balance on desktop */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
