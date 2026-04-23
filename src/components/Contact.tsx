import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';

/**
 * Clean Code Implementation for Ninjawi System Contact Form
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // --- Logic Helpers ---
  
  const isValidEmail = (email: string) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    
    if (!name.trim()) {
      toast.error('يرجى إدخال الاسم الكامل');
      return false;
    }

    if (!email.trim()) {
      toast.error('يرجى إدخال البريد الإلكتروني');
      return false;
    }

    if (!isValidEmail(email)) {
      toast.error('يرجى إدخال بريد إلكتروني صحيح');
      return false;
    }

    if (!message.trim()) {
      toast.error('يرجى كتابة رسالتك');
      return false;
    }

    return true;
  };

  const triggerCelebration = () => {
    const duration = 2 * 1000; // 2 Seconds celebration
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // --- Balloons effect (Larger circles) ---
      confetti({
        ...defaults,
        particleCount: particleCount * 0.4,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        shapes: ['circle'],
        scalar: 2,
        colors: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6']
      });
      
      // --- Snippets effect (Smaller squares) ---
      confetti({
        ...defaults,
        particleCount: particleCount * 0.6,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        shapes: ['square'],
        scalar: 0.8,
        colors: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6']
      });
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Data Validation Check
    if (!validateForm()) return;

    setLoading(true);

    // 2. Simulate Professional Submission
    setTimeout(() => {
      setLoading(false);
      
      // 3. Feedback (Confetti + Bottom Toast)
      triggerCelebration();
      toast.success('تم الارسال بنجاح شكرا لك', {
        position: "bottom-center",
        autoClose: 5000,
        theme: "light",
      });
      
      // 4. Reset Form to initial state
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
              لنبدأ <span className="text-gradient">رحلة النجاح</span> معاً
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              هل لديك فكرة مشروع؟ أو تريد تطوير أعمالك الحالية؟ نحن هنا لمساعدتك في تحويل رؤيتك إلى واقع رقمي ملموس.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">راسلنا على</p>
                  <p className="text-base sm:text-lg md:text-xl text-slate-900 font-medium font-sans break-all">powerinfinity.company@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">اتصل بنا</p>
                  <p className="text-xl text-slate-900 font-medium font-sans">+20 10 990 24184</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">موقعنا</p>
                  <p className="text-xl text-slate-900 font-medium leading-relaxed">القاهرة، مصر <br/> مدينة نصر - المنطقة الأولى</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 rounded-3xl bg-slate-100 border-slate-200 overflow-hidden relative group shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634796245!2d31.277983804825945!3d30.129334861445778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e29bb31d279%3A0x64e2d3393b6eabd1!2sHeliopolis%2C%20Al%20Matariyah%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1703042503289!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Form Side */}
          <div
            data-aos="fade-right"
            className="bg-white shadow-xl p-8 md:p-12 rounded-[2rem] border border-slate-100 relative overflow-hidden"
          >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-1">الاسم الكامل</label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="أدخل اسمك هنا" 
                    className="h-14 bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-emerald-500/50 transition-all font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mr-1">البريد الإلكتروني</label>
                  <Input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com" 
                    className="h-14 bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-emerald-500/50 transition-all font-sans"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mr-1">الموضوع</label>
                <Input 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="كيف يمكننا مساعدتك؟" 
                  className="h-14 bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-emerald-500/50 transition-all font-sans"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mr-1">الرسالة</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="اكتب تفاصيل مشروعك هنا..." 
                  className="min-h-[150px] bg-slate-50 border-slate-200 text-slate-900 rounded-xl focus:border-emerald-500/50 transition-all resize-none font-sans"
                />
              </div>
              <Button 
                type="submit"
                disabled={loading}
                className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold rounded-xl shadow-lg shadow-emerald-600/20 group relative overflow-hidden"
              >
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin mx-auto" />
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    إرسال الرسالة
                    <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
