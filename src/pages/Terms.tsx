import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-slate-50" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 text-right"
      >
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8 text-center">الشروط والأحكام</h1>
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p className="mb-6">
            مرحباً بك في <strong>power infinity - باور انفينتي</strong>. باستخدامك لموقعنا أو خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية.
          </p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. قبول الشروط</h2>
          <p className="mb-6">
            يعتبر استخدامك لهذا الموقع موافقة صريحة منك على كافة الشروط والأحكام المذكورة هنا. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. حقوق الملكية الفكرية</h2>
          <p className="mb-6">
            جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والتصميمات والشعارات والصور، هي ملك حصري لشركة باور انفينتي ومحمية بقوانين حقوق النشر.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. استخدام الخدمات</h2>
          <p className="mb-6">
            تتعهد باستخدام خدمات الموقع لأغراض قانونية فقط، وتمتنع عن أي تصرف قد يلحق الضرر بالموقع أو يؤثر على توفره للمستخدمين الآخرين.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. حدود المسؤولية</h2>
          <p className="mb-6">
            لا تتحمل الشركة أي مسؤولية عن أي أضرار مباشرة أو غير مباشرة قد تنشأ عن استخدامك للموقع أو الخدمات المقدمة عليه، وتُقدم الخدمات "كما هي" دون أي ضمانات صريحة أو ضمنية.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
