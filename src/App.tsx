import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodeBlueprint from './components/CodeBlueprint';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Showcase from './components/Showcase';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { Cpu, Github, Twitter, Linkedin, Facebook, Music2, Instagram } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });

    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      if (hash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash) {
        // Allow a short delay for React to render the components before scrolling
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isPrivacy = currentHash === '#/privacy';
  const isTerms = currentHash === '#/terms';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500/30 overflow-x-hidden">
      <Loader />
      <Navbar />
      <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={true} pauseOnFocusLoss draggable pauseOnHover theme="light" />

      <main>
        {isPrivacy ? (
          <Privacy />
        ) : isTerms ? (
          <Terms />
        ) : (
          <>
            <Hero />
            <CodeBlueprint />
            <About />
            <Services />
            <Showcase />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        )}
      </main>

      {/* Floating Buttons */}
      <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-4">
        <a href="https://wa.me/201099024184" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
        </a>
        <a href="tel:+201099024184" className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-8 h-8 text-emerald-600" />
                <span className="text-xl md:text-2xl font-display font-bold tracking-tighter">
                  power infinity <span className="text-emerald-600">- باور انفينتي</span>
                </span>
              </div>
              <p className="text-slate-600 max-w-sm mb-6 leading-relaxed">
                نحن شركة برمجيات رائدة نهدف إلى تمكين الشركات من خلال حلول تقنية مبتكرة وعصرية تساعدهم على التفوق في العصر الرقمي.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Music2, link: "https://www.tiktok.com/@powerinfinity.company?" },
                  { Icon: Linkedin, link: "https://www.linkedin.com/in/power-infinity-83982a404/" },
                  { Icon: Facebook, link: "https://www.facebook.com/people/Power-Infinity/61569735423312/" },
                  { Icon: Instagram, link: "https://www.instagram.com/powerinfinity.company/" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-600 transition-all border border-slate-200 bg-slate-100"
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900">روابط سريعة</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#home" className="hover:text-emerald-600 transition-colors">الرئيسية</a></li>
                <li><a href="#about" className="hover:text-emerald-600 transition-colors">من نحن</a></li>
                <li><a href="#services" className="hover:text-emerald-600 transition-colors">خدماتنا</a></li>
                <li><a href="#testimonials" className="hover:text-emerald-600 transition-colors">آراء العملاء</a></li>
                <li><a href="#contact" className="hover:text-emerald-600 transition-colors">اتصل بنا</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900">خدماتنا</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">تطوير الويب</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">تطبيقات الجوال</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">الحلول السحابية</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">الأمن السيبراني</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-slate-900">قانوني</h4>
              <ul className="space-y-4 text-slate-600">
                <li><a href="#/privacy" className="hover:text-emerald-600 transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#/terms" className="hover:text-emerald-600 transition-colors">الشروط والأحكام</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} power infinity - باور انفينتي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
