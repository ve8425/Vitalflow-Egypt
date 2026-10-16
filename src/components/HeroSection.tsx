import { Droplet, Heart, ArrowRight, ShieldCheck, Clock, Users, Sparkles, MapPin, Share2 } from 'lucide-react';
import { EGYPT_NATIONAL_STATS } from '../data/campaignData';

interface HeroSectionProps {
  onOpenPledge: () => void;
  pledgeCount: number;
}

export default function HeroSection({ onOpenPledge, pledgeCount }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-rose-50/70 via-white to-white">
      {/* Decorative background blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-red-100/60 via-rose-100/40 to-amber-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Campaign Banner / Tag */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-900 text-xs sm:text-sm font-bold mb-6 shadow-xs animate-in fade-in zoom-in duration-500">
            <span className="flex h-2 w-2 rounded-full bg-rose-600 animate-pulse"></span>
            <span>Egypt National Blood Donation Campaign</span>
            <span className="text-rose-400 font-normal">|</span>
            <span className="text-rose-700">#GiveBloodEgypt</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
            Blood Cannot Be Manufactured. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-rose-700 via-red-600 to-rose-500 bg-clip-text text-transparent">
              You Are the Lifeline for Patients in Egypt.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mb-8 font-medium">
            Hospitals across Egypt require over <strong className="text-rose-700 font-bold">1.8 million blood units each year</strong> to support emergency surgeries, road trauma, and more than <strong className="text-gray-900 font-bold">10,000 children battling Beta-Thalassemia</strong>, alongside young champions at Hospital 57357 and the National Cancer Institute.
            <span className="block text-sm sm:text-base text-gray-500 mt-2">
              There is zero factory substitute for human blood. Learn the facts, bust the myths, explore regional blood hubs across Egypt, and help reach our verified campaign goal of 5,000 donors.
            </span>
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <button
              onClick={onOpenPledge}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold text-base shadow-lg shadow-rose-600/25 hover:shadow-rose-600/40 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 cursor-pointer group"
            >
              <Heart className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span>Take the Donor Pledge</span>
              <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full ml-1">
                {pledgeCount} Pledged
              </span>
            </button>

            <a
              href="#centers"
              className="px-5 py-3.5 rounded-xl bg-white border border-gray-300 hover:border-rose-300 text-gray-800 hover:text-rose-600 font-bold text-base shadow-xs hover:shadow-md transition-all flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-rose-600" />
              <span>Donation Centers Across Egypt</span>
            </a>

            <a
              href="#share"
              className="px-5 py-3.5 rounded-xl bg-rose-50 border border-rose-200 hover:bg-rose-100 text-rose-800 font-bold text-base transition-all flex items-center gap-2"
            >
              <Share2 className="w-4 h-4 text-rose-600" />
              <span>Create Social Story Card</span>
            </a>
          </div>

          {/* Egypt Key Numbers Bar */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-xs hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">1.8M Units</div>
              <div className="text-xs sm:text-sm font-semibold text-rose-600 uppercase tracking-wider mt-0.5">Annual Egypt Demand</div>
              <p className="text-xs text-gray-500 mt-1">Needed for emergencies, surgeries, and chronic patients.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-xs hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">10,000+</div>
              <div className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mt-0.5">Thalassemia Children</div>
              <p className="text-xs text-gray-500 mt-1">Require red blood cell transfusions every 3 weeks in Egypt.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-xs hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Droplet className="w-5 h-5 fill-red-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">5 Days Only</div>
              <div className="text-xs sm:text-sm font-semibold text-red-600 uppercase tracking-wider mt-0.5">57357 Platelets Limit</div>
              <p className="text-xs text-gray-500 mt-1">Platelets for cancer patients expire in less than a week.</p>
            </div>

            <div className="bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-xs hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Hotline 15335</div>
              <div className="text-xs sm:text-sm font-semibold text-emerald-600 uppercase tracking-wider mt-0.5">Egyptian NBTS Support</div>
              <p className="text-xs text-gray-500 mt-1">Ministry of Health official blood donor hotline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
