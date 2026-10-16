import { Droplet, Heart, Shield, ArrowUp, MapPin, Share2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold">
                <Droplet className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-black text-white font-display">VitalFlow</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              An educational blood donation awareness campaign dedicated to dispelling myths, explaining the biological wonder of human blood, and connecting student donors with local patients.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Grounded in World Health Organization & Red Cross medical consensus.</span>
            </div>
          </div>

          {/* Campaign Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Campaign
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#facts" className="hover:text-rose-400 transition-colors">Mind-Opening Blood Facts</a></li>
              <li><a href="#quiz" className="hover:text-rose-400 transition-colors">Myth vs Fact Student Quiz</a></li>
              <li><a href="#journey" className="hover:text-rose-400 transition-colors">Where Does Donated Blood Go?</a></li>
              <li><a href="#stories" className="hover:text-rose-400 transition-colors">Human Stories & Gratitude Wall</a></li>
              <li><a href="#share" className="hover:text-rose-400 transition-colors">Social Awareness Card Generator</a></li>
              <li><a href="#centers" className="hover:text-rose-400 transition-colors">Find Local Donation Centers</a></li>
            </ul>
          </div>

          {/* Medical Guidance References */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Official Blood Authorities in Egypt
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="https://mohp.gov.eg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">National Blood Transfusion Services (NBTS Egypt)</a></li>
              <li><a href="https://www.57357.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Children’s Cancer Hospital 57357</a></li>
              <li><a href="https://egyptianrc.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Egyptian Red Crescent</a></li>
              <li><a href="https://medicine.cu.edu.eg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kasr Al-Ainy Cairo University Blood Bank</a></li>
              <li><a href="https://www.emro.who.int" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WHO Eastern Mediterranean (EMRO)</a></li>
            </ul>
          </div>

          {/* Student Organization Tips */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Student Club Toolkit
            </h4>
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60 text-xs space-y-2">
              <p className="text-stone-300 font-semibold">
                Want to organize a drive at your university?
              </p>
              <p className="text-stone-400 text-[11px] leading-relaxed">
                Contact your regional blood network 6-8 weeks in advance to schedule a donor mobile bus on campus.
              </p>
              <a href="#share" className="text-rose-400 hover:text-rose-300 font-bold block pt-1">
                Download Campaign Graphics →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} VitalFlow Blood Donation Awareness Campaign. Designed for community and educational impact.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
