import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "ما هي الخدمات البرمجية التي تقدمها شركة power infinity - باور انفينتي؟",
    answer: "نقدم مجموعة واسعة تشمل تطوير تطبيقات الجوال (iOS & Android)، تطوير المواقع الإلكترونية المخصصة، أنظمة إدارة الشركات (ERP, CRM, HRMS)، وحلول الأمن السيبراني المتقدمة."
  },
  {
    question: "كم من الوقت يستغرق تنفيذ مشروع برمجى؟",
    answer: "تختلف المدة بناءً على تعقيد المشروع؛ المواقع البسيطة قد تستغرق أسبوعين، بينما الأنظمة الضخمة تستغرق من 3 إلى 6 أشهر. نلتزم دائماً بجدول زمني واضح منذ البداية."
  },
  {
    question: "هل تقدمون دعماً فنياً بعد تسليم المشروع؟",
    answer: "نعم، الدعم الفني جزء أساسي من خدماتنا. نوفر فترة ضمان مجانية بعد الإطلاق، بالإضافة إلى خطط صيانة سنوية لضمان استقرار وتطور نظامك."
  },
  {
    question: "كيف يتم تحديد تكلفة المشروع؟",
    answer: "يتم تحديد التكلفة بناءً على المتطلبات الوظيفية، حجم البيانات، والتقنيات المستخدمة. نقدم دراسة جدوى فنية وعرض سعر تفصيلي بعد الجلسة الاستشارية الأولى."
  },
  {
    question: "هل يمكنني التعديل على المشروع أثناء فترة التنفيذ؟",
    answer: "نتبع منهجية الـ Agile التي تسمح بالمرونة؛ يمكنك طلب تعديلات وسنناقش تأثيرها على الجدول الزمني والتكلفة لضمان أفضل نتيجة نهائية."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 blur-[100px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>لديك استفسار؟</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
            الأسئلة <span className="text-gradient">الشائعة</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            كل ما تود معرفته عن خدمات power infinity - باور انفينتي وكيفية البدء في رحلة نجاحك الرقمي.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-right p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                  openIndex === index
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-600/20'
                    : 'bg-slate-50 border-slate-200 text-slate-900 hover:border-emerald-300 hover:bg-white'
                }`}
              >
                <span className="text-xl font-bold flex-1">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-500 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 text-lg text-slate-600 leading-relaxed bg-slate-50/50 rounded-b-2xl border-x border-b border-emerald-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="zoom-in">
          <p className="text-slate-500 mb-6 font-medium">لم تجد إجابة لسؤالك؟</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all"
          >
            تواصل معنا مباشرة
            <span className="text-2xl">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
