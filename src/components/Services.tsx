import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import { Smartphone, Globe, Cloud, Code, Shield, BarChart, Database, Users, UserCheck, GraduationCap, Palette, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'mobile', name: 'تطبيقات الجوال' },
  { id: 'web', name: 'تطوير المواقع' },
  { id: 'systems', name: 'أنظمة الأعمال' },
  { id: 'cloud', name: 'الحلول السحابية' },
  { id: 'design', name: 'التصميم والتسويق' },
];

const services = [
  {
    id: 1,
    category: 'mobile',
    title: 'تطبيقات iOS & Android',
    description: 'تطوير تطبيقات أصلية وهجينة بأداء عالٍ وتصميم عصري.',
    icon: <Smartphone className="w-10 h-10 text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'web',
    title: 'مواقع التجارة الإلكترونية',
    description: 'بناء متاجر إلكترونية متكاملة مع بوابات دفع آمنة وتجربة شراء سلسة.',
    icon: <Globe className="w-10 h-10 text-cyan-400" />,
    image: 'https://miro.medium.com/v2/resize:fit:800/1*v-q3KXIb44A3DB-Y72GpGA.png'
  },
  {
    id: 3,
    category: 'cloud',
    title: 'استضافة سحابية',
    description: 'حلول استضافة مرنة وقابلة للتوسع تضمن سرعة موقعك وتوفره الدائم.',
    icon: <Cloud className="w-10 h-10 text-indigo-400" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 7,
    category: 'systems',
    title: 'أنظمة ERP',
    description: 'حلول تخطيط موارد المؤسسات لإدارة العمليات بكفاءة عالية.',
    icon: <Database className="w-10 h-10 text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 8,
    category: 'systems',
    title: 'أنظمة CRM',
    description: 'إدارة علاقات العملاء لتعزيز المبيعات وتحسين خدمة العملاء.',
    icon: <Users className="w-10 h-10 text-cyan-400" />,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 9,
    category: 'systems',
    title: 'أنظمة HR & HRMS',
    description: 'أتمتة إدارة الموارد البشرية وشؤون الموظفين بذكاء.',
    icon: <UserCheck className="w-10 h-10 text-indigo-400" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 10,
    category: 'systems',
    title: 'أنظمة ED Systems',
    description: 'حلول تعليمية متطورة لإدارة المؤسسات التعليمية والتدريب.',
    icon: <GraduationCap className="w-10 h-10 text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    category: 'web',
    title: 'تطوير مخصص (Custom Dev)',
    description: 'برمجة أنظمة خاصة تلبي احتياجات شركتك الفريدة بدقة متناهية.',
    icon: <Code className="w-10 h-10 text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    category: 'cloud',
    title: 'الأمن السيبراني',
    description: 'حماية بياناتك وأصولك الرقمية من التهديدات والاختراقات الأمنية.',
    icon: <Shield className="w-10 h-10 text-cyan-500" />,
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 11,
    category: 'design',
    title: 'تصميم جرافيك وموشن جرافيك',
    description: 'نحول أفكارك إلى تصاميم بصرية مبهرة وفيديوهات موشن جرافيك تجذب الانتباه وتعزز هويتك.',
    icon: <Palette className="w-10 h-10 text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 12,
    category: 'design',
    title: 'مونتاج فيديو وتسويق رقمي',
    description: 'خدمات مونتاج احترافية وإدارة حملات تسويقية ذكية لضمان وصولك لجمهورك المستهدف.',
    icon: <Video className="w-10 h-10 text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800'
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('all');
  const container = React.useRef(null);

  useGSAP(() => {
    gsap.from('.gsap-service-text', {
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

  const filteredServices = activeTab === 'all' 
    ? services.slice(0, 6) 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" ref={container} className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gsap-service-text opacity-100">
            خدماتنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-400">المتميزة</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg gsap-service-text opacity-100">
            نقدم مجموعة متكاملة من الحلول التقنية المصممة خصيصاً لدفع عجلة نمو أعمالك.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              variant={activeTab === cat.id ? 'default' : 'outline'}
              className={`rounded-full px-8 transition-all ${
                activeTab === cat.id 
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 text-white' 
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-emerald-600'
              }`}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div data-aos="fade-up" data-aos-delay={service.id * 50} className="[perspective:1000px] h-full">
                  <Card className="glass shadow-lg hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 group h-full overflow-hidden flex flex-col transform hover:-translate-y-3 hover:rotate-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none z-0" />
                    <div className="relative h-48 w-full overflow-hidden z-10">
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <CardHeader className="flex-none">
                      <div className="mb-4 p-3 rounded-2xl bg-slate-50 w-fit group-hover:bg-emerald-500/10 transition-colors [&>svg]:text-emerald-500 -mt-12 relative z-20 shadow-sm border border-slate-100">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl font-display text-slate-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between gap-6">
                      <CardDescription className="text-slate-600 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                      
                      <a 
                        href={`https://wa.me/201099024184?text=أريد طلب خدمة ${encodeURIComponent(service.title)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full relative z-20 mt-4"
                      >
                        <Button className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white shadow-lg hover:shadow-green-500/40 font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.02] py-6 text-lg">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                          اطلب عبر واتساب
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
