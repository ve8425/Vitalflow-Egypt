import { useState, useEffect } from 'react';
import { Droplet, Heart, CheckCircle2, MapPin, Sparkles, Share2, HelpCircle, GitFork, Trophy } from 'lucide-react';

interface NavbarProps {
  pledgeCount: number;
  onOpenPledge: () => void;
  onOpenEligibility: () => void;
}

export default function Navbar({ pledgeCount, onOpenPledge, onOpenEligibility }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Blood Facts', href: '#facts', icon: Droplet },
    { name: 'Myth vs Fact', href: '#quiz', icon: HelpCircle },
    { name: 'The Journey', href: '#journey', icon: GitFork },
    { name: 'Human Stories', href: '#stories', icon: Heart },
    { name: '5K Goal', href: '#pledge-progress', icon: Trophy },
    { name: 'Share Card', href: '#share', icon: Share2 },
    { name: 'Find Centers', href: '#centers', icon: MapPin },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-700 via-red-600 to-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-600/30 group-hover:scale-105 transition-transform">
              <Droplet className="w-5 h-5 fill-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-gray-900 font-display">VitalFlow Egypt</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">Campaign</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">National Blood Donation Awareness</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-rose-600 px-3 py-2 rounded-lg hover:bg-rose-50 transition-colors flex items-center gap-1.5"
              >
                <link.icon className="w-4 h-4 text-gray-400 group-hover:text-rose-600" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenEligibility}
              className="text-xs font-bold text-gray-700 hover:text-rose-700 bg-gray-100 hover:bg-gray-200 px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Can I Donate?
            </button>

            <button
              onClick={onOpenPledge}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-br from-rose-600 to-red-700 text-white shadow-sm hover:shadow-rose-600/30 hover:scale-102 transition-all cursor-pointer"
            >
              <span className="px-4 py-2 rounded-[10px] bg-gradient-to-r from-rose-600 to-red-600 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 fill-white animate-pulse" />
                <span>Pledge to Donate</span>
                <span className="bg-white/20 text-[11px] px-1.5 py-0.5 rounded-full font-bold ml-1">
                  {pledgeCount.toLocaleString()} / 5,000
                </span>
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenPledge}
              className="text-xs bg-rose-600 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Heart className="w-3 h-3 fill-white" />
              <span>{pledgeCount.toLocaleString()}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-rose-100 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-4">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 text-gray-800 text-xs font-semibold hover:bg-rose-50 hover:text-rose-700"
              >
                <link.icon className="w-4 h-4 text-rose-600" />
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEligibility();
              }}
              className="w-full text-center py-2.5 text-xs font-bold text-gray-700 bg-gray-100 rounded-xl"
            >
              Check My Eligibility (60s)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPledge();
              }}
              className="w-full text-center py-2.5 text-xs font-bold text-white bg-rose-600 rounded-xl flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              Take the Donor Pledge ({pledgeCount.toLocaleString()} / 5,000 Goal)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
