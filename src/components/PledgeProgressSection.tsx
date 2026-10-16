import { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Trophy, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Droplet, 
  Activity, 
  MapPin, 
  Clock, 
  TrendingUp 
} from 'lucide-react';

export interface VerifiedPledge {
  id: string;
  name: string;
  affiliation: string;
  governorate: string;
  commitment: string;
  timeAgo: string;
}

interface PledgeProgressSectionProps {
  pledgeCount: number;
  onOpenPledgeModal: () => void;
  onQuickPledge: () => void;
  hasPledged: boolean;
  recentPledges: VerifiedPledge[];
}

export default function PledgeProgressSection({
  pledgeCount,
  onOpenPledgeModal,
  onQuickPledge,
  hasPledged,
  recentPledges
}: PledgeProgressSectionProps) {
  const goal = 5000; // Updated national target: 5,000 donors
  const clampedCount = Math.min(pledgeCount, goal);
  const percentage = Math.min(100, +((pledgeCount / goal) * 100).toFixed(1));
  const remaining = Math.max(0, goal - pledgeCount);
  const livesSavedEst = (pledgeCount * 3).toLocaleString();
  const litersPromised = ((pledgeCount * 450) / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 });

  // SVG circular ring calculations
  const size = 260;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const [ringOffset, setRingOffset] = useState(circumference);
  const [justPledgedAnim, setJustPledgedAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRingOffset(strokeDashoffset);
    }, 150);
    return () => clearTimeout(timer);
  }, [strokeDashoffset]);

  const handleQuickPledgeClick = () => {
    if (!hasPledged) {
      setJustPledgedAnim(true);
      onQuickPledge();
      setTimeout(() => setJustPledgedAnim(false), 2000);
    }
  };

  return (
    <section id="pledge-progress" className="py-20 bg-stone-50 border-t border-b border-rose-100/70 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-rose-600" />
            <span>National Verified Goal: 5,000 Donors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Live Campaign Progress: 5,000 Donors for Egypt
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
            Every time a donor commits, our verified registry updates in real-time. Track live registered donors, blood volume pledged, and hospital impact across all 27 governorates.
          </p>
        </div>

        {/* Real-time Statistics KPI Bar */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-1">
              <span>Verified Pledges</span>
              <Users className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-gray-900">
              {pledgeCount.toLocaleString()}
            </div>
            <div className="text-[11px] font-bold text-rose-600 mt-0.5">
              Goal: 5,000 Donors
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-1">
              <span>Liters Pledged</span>
              <Droplet className="w-4 h-4 text-red-600 fill-red-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-gray-900">
              {litersPromised} L
            </div>
            <div className="text-[11px] font-bold text-emerald-600 mt-0.5">
              450ml per donation
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-1">
              <span>Est. Patients Helped</span>
              <Activity className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-gray-900">
              {livesSavedEst}
            </div>
            <div className="text-[11px] font-bold text-rose-600 mt-0.5">
              Up to 3 patients per unit
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-rose-100 shadow-2xs">
            <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-1">
              <span>Remaining to Goal</span>
              <TrendingUp className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-gray-900">
              {remaining.toLocaleString()}
            </div>
            <div className="text-[11px] font-bold text-amber-600 mt-0.5">
              To reach 5,000 threshold
            </div>
          </div>
        </div>

        {/* Progress Card Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: The Animated Circular Progress Ring */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center">
                <svg
                  width={size}
                  height={size}
                  className="transform -rotate-90 drop-shadow-md"
                >
                  {/* Background Track Circle */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#f3f4f6"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="pledgeGradient5000" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" />
                      <stop offset="50%" stopColor="#e11d48" />
                      <stop offset="100%" stopColor="#9f1239" />
                    </linearGradient>
                  </defs>

                  {/* Animated Active Progress Circle */}
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#pledgeGradient5000)"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={ringOffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                {/* Inner Content inside Ring */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-rose-600 mb-0.5">
                    <Heart className={`w-3.5 h-3.5 fill-rose-600 ${justPledgedAnim ? 'animate-ping' : ''}`} />
                    <span>Live Progress</span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                    {percentage}%
                  </div>
                  <div className="text-xs font-bold text-gray-500 mt-0.5">
                    {pledgeCount.toLocaleString()} of 5,000 Donors
                  </div>
                </div>
              </div>

              {/* Status pill under ring */}
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{remaining > 0 ? `${remaining.toLocaleString()} more pledges to 5,000 target` : '5,000 National Goal Reached!'}</span>
                </span>
              </div>
            </div>

            {/* Right: Impact Breakdown & Interactive Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                  <span>Verified National Registration</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 leading-snug">
                  What 5,000 Committed Donors Mean for Egypt
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  When 5,000 individuals donate blood in Egypt, over <strong className="text-rose-700 font-extrabold">2,250 Liters of blood</strong> are collected and separated into <strong className="text-gray-900 font-bold">15,000 component bags</strong>. That guarantees continuous platelet support for 300+ children at Hospital 57357, emergency trauma units at Kasr Al-Ainy, and regular red cells for Thalassemia children in Tanta and Mansoura.
                </p>
              </div>

              {/* 5,000 Goal Milestones */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-gray-600">
                  <span>Verified Milestones</span>
                  <span className="text-rose-600">{pledgeCount.toLocaleString()} / 5,000 Total Goal</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold">
                  {[
                    { target: 1250, label: '1,250 (25%)' },
                    { target: 2500, label: '2,500 (50%)' },
                    { target: 3750, label: '3,750 (75%)' },
                    { target: 5000, label: '5,000 (Target)' }
                  ].map((m) => {
                    const isReached = pledgeCount >= m.target;
                    return (
                      <div
                        key={m.target}
                        className={`p-2.5 rounded-xl border transition-all ${
                          isReached
                            ? 'bg-rose-50 border-rose-300 text-rose-900 font-extrabold shadow-2xs'
                            : 'bg-stone-50 border-stone-200 text-gray-400'
                        }`}
                      >
                        <div className="text-xs font-black">{m.target.toLocaleString()}</div>
                        <div className="text-[10px] truncate mt-0.5">{m.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onOpenPledgeModal}
                  className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold text-sm shadow-md shadow-rose-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Heart className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                  <span>{hasPledged ? 'View My Verified Pledge Card' : 'Take the 5,000 Donor Pledge'}</span>
                </button>

                <button
                  onClick={handleQuickPledgeClick}
                  disabled={hasPledged}
                  className={`py-3.5 px-5 rounded-2xl font-bold text-sm border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    hasPledged
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 cursor-default'
                      : 'bg-white border-gray-300 hover:border-rose-300 text-gray-800 hover:text-rose-600 shadow-2xs'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{hasPledged ? '✓ Registered in Live Total' : '+1 Quick Pledge'}</span>
                </button>
              </div>

              {justPledgedAnim && (
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold flex items-center gap-2 animate-in zoom-in-95">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your verified pledge was recorded and the progress ring updated in real-time toward 5,000 donors!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Real-Time Registry Feed */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <h4 className="text-base sm:text-lg font-black text-gray-900">
                Live Verified Donor Registry (Real-Time Feed)
              </h4>
            </div>
            <span className="text-xs text-gray-500 font-semibold">
              Logging actual user commitments across Egypt
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {recentPledges.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start justify-between text-xs"
              >
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <span className="text-[10px] font-normal text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-md border border-rose-100">
                      {item.governorate}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{item.affiliation}</div>
                  <div className="text-[11px] font-semibold text-emerald-700 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{item.commitment}</span>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 flex items-center gap-0.5 shrink-0 ml-2">
                  <Clock className="w-3 h-3" />
                  {item.timeAgo}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
            <div>
              Total registered pledges: <strong className="text-gray-900">{pledgeCount.toLocaleString()}</strong> across 27 Egyptian Governorates
            </div>
            <div className="text-rose-600 font-bold">
              National Verified Goal: 5,000 Donors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
