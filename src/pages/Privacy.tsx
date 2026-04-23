import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 text-right"
      >
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">سياسة الخصوصية</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="mb-6">
            في <strong>power infinity - باور انفينتي</strong>، نولي أهمية قصوى لخصوصية زوارنا وعملائنا. توضح سياسة الخصوصية هذه أنواع المعلومات الشخصية التي نتلقاها ونجمعها وكيفية استخدامها.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. جمع المعلومات</h2>
          <p className="mb-6">
            نقوم بجمع المعلومات التي تقدمها لنا طواعية عند التواصل معنا، أو عند استخدام خدماتنا. قد تشمل هذه المعلومات الاسم، البريد الإلكتروني، ورقم الهاتف وغيرها من البيانات اللازمة لتقديم أفضل خدمة.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. استخدام المعلومات</h2>
          <p className="mb-6">
            نستخدم المعلومات التي نجمعها لفهم احتياجاتك بشكل أفضل، ولتقديم خدمات مخصصة، ولتحسين موقعنا وتجربة المستخدم، وللتواصل معك بخصوص التحديثات والعروض التي قد تهمك.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. حماية البيانات</h2>
          <p className="mb-6">
            نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح. نستخدم تقنيات التشفير الحديثة لضمان أمان بياناتك.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. مشاركة المعلومات</h2>
          <p className="mb-6">
            نحن لا نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك المعلومات فقط مع شركاء موثوقين يساعدوننا في تشغيل موقعنا أو تقديم خدماتنا، بشرط أن يوافقوا على الحفاظ على سرية هذه المعلومات.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
