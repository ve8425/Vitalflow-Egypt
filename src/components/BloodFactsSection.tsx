import { useState } from 'react';
import { 
  FlaskConical, 
  Hourglass, 
  Users, 
  Clock, 
  Sparkles, 
  Activity, 
  ChevronRight, 
  CheckCircle2, 
  X,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Hospital,
  Microscope,
  Stethoscope,
  MapPin
} from 'lucide-react';
import { BLOOD_FACTS, BLOOD_TYPES_COMPATIBILITY, BloodFact } from '../data/campaignData';

export default function BloodFactsSection() {
  const [selectedFact, setSelectedFact] = useState<BloodFact>(BLOOD_FACTS[0]);
  const [isDeepDiveModalOpen, setIsDeepDiveModalOpen] = useState(false);
  const [selectedBloodType, setSelectedBloodType] = useState('O-');
  const [activeTab, setActiveTab] = useState<'cards' | 'science' | 'types'>('cards');

  const currentTypeData = BLOOD_TYPES_COMPATIBILITY.find(t => t.type === selectedBloodType) || BLOOD_TYPES_COMPATIBILITY[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className="w-6 h-6 text-rose-600" />;
      case 'Hourglass': return <Hourglass className="w-6 h-6 text-amber-600" />;
      case 'Users': return <Users className="w-6 h-6 text-indigo-600" />;
      case 'Clock': return <Clock className="w-6 h-6 text-red-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-emerald-600" />;
      case 'Activity': return <Activity className="w-6 h-6 text-cyan-600" />;
      default: return <Activity className="w-6 h-6 text-rose-600" />;
    }
  };

  const handleOpenDeepDive = (fact: BloodFact) => {
    setSelectedFact(fact);
    setIsDeepDiveModalOpen(true);
  };

  return (
    <section id="facts" className="py-20 bg-stone-50 border-t border-b border-rose-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600"></span>
            Part 1: The Reality Check
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Blood Facts in Egypt That Make People Stop & Think
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
            From over 10,000 Egyptian children living with Beta-Thalassemia to the daily platelet needs at Hospital 57357 and emergency bays at Kasr Al-Ainy—here is the unvarnished science and medical reality.
          </p>

          {/* Interactive view toggle */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white border border-gray-200 shadow-xs">
            <button
              onClick={() => setActiveTab('cards')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Eye-Opening Realities
            </button>
            <button
              onClick={() => setActiveTab('science')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'science'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Why Blood Can't Be Made
            </button>
            <button
              onClick={() => setActiveTab('types')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'types'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blood Type Matcher
            </button>
          </div>
        </div>

        {/* Tab 1: Cards View */}
        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOOD_FACTS.map((fact) => {
              const isSelected = selectedFact?.id === fact.id;
              return (
                <div
                  key={fact.id}
                  onClick={() => setSelectedFact(fact)}
                  className={`bg-white rounded-2xl p-6 border transition-all cursor-pointer flex flex-col justify-between hover:shadow-lg ${
                    isSelected
                      ? 'border-rose-500 ring-2 ring-rose-500/20 shadow-md'
                      : 'border-gray-200/80 hover:border-rose-200'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                        {getIcon(fact.iconName)}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                        {fact.badge}
                      </span>
                    </div>

                    <div className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                      {fact.title}
                    </div>

                    <div className="text-sm font-extrabold text-rose-600 mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                      {fact.statHighlight}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {fact.shortDescription}
                    </p>
                  </div>

                  {/* Explicit Clickable Clinical Deep-Dive Button */}
                  <div className="pt-3 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenDeepDive(fact);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-rose-50/80 hover:bg-rose-100/90 text-rose-700 hover:text-rose-900 font-bold text-xs transition-all flex items-center justify-between group cursor-pointer border border-rose-200/60"
                      title={`Explore full clinical details for: ${fact.title}`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Microscope className="w-4 h-4 text-rose-600" />
                        <span>Explore clinical deep-dive</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Selected Fact Detailed View (Inline Preview) */}
        {activeTab === 'cards' && selectedFact && (
          <div className="mt-8 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/30 rounded-3xl border border-rose-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-rose-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-black shadow-md shadow-rose-600/20">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                      Clinical Dossier
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      Verified by Egyptian NBTS & WHO
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                    {selectedFact.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-rose-100 text-rose-800 text-xs font-black border border-rose-200">
                  {selectedFact.statHighlight}
                </span>
                <button
                  onClick={() => setIsDeepDiveModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open Full Clinical Modal</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
              {selectedFact.keyClinicalMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-rose-100 shadow-2xs">
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-sm sm:text-base font-black text-gray-900 mt-0.5">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Main Clinical Mechanism */}
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed font-normal">
              <div className="bg-white p-4 rounded-2xl border border-rose-100">
                <strong className="text-gray-900 block mb-1 font-extrabold flex items-center gap-1.5">
                  <Microscope className="w-4 h-4 text-rose-600" />
                  Clinical & Cellular Mechanism:
                </strong>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {selectedFact.pathophysiology}
                </p>
              </div>

              <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200/80">
                <strong className="text-rose-950 block mb-1 font-extrabold flex items-center gap-1.5">
                  <Hospital className="w-4 h-4 text-rose-700" />
                  Hospital Impact in Egypt:
                </strong>
                <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                  {selectedFact.hospitalImpactEgypt}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-rose-100 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Egyptian Ministry of Health (MOHP - NBTS) Standards</span>
              </div>
              <a href="#centers" className="font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1">
                Find local blood bank for this need
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Tab 2: Science Deep Dive - Why Blood Can't Be Manufactured */}
        {activeTab === 'science' && (
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                Biological Marvel vs Lab Limitations
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
                Why Can't We Just Synthesize Blood in a Lab?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
                We can 3D-print bone grafts, synthesize insulin, and bioengineer vaccines. Yet after more than 60 years and billions of research dollars, artificial blood substitutes for routine hospital transfusions remain fundamentally out of reach. Here is why:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Natural Blood Card */}
              <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-200">
                <div className="flex items-center gap-2.5 text-rose-900 font-black text-lg mb-4">
                  <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Natural Human Blood (Donated)</span>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                    <span><strong>270 Million Hemoglobin Molecules per Cell:</strong> Wrapped safely inside a flexible lipid membrane that shields surrounding blood vessel walls from oxidative poisoning.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                    <span><strong>5-Micron Microcapillary Deformability:</strong> Erythrocytes fold and squeeze smoothly through capillaries half their diameter without rupturing or clogging.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                    <span><strong>Active Nitric Oxide Regulation:</strong> Real cells sense tissue acidity and automatically trigger local vasodilation, preventing blood pressure spikes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                    <span><strong>Complete Cellular Harmony:</strong> Contains living platelets for clotting and hundreds of essential plasma proteins that cannot be mimicked in a beaker.</span>
                  </li>
                </ul>
              </div>

              {/* Synthetic Attempts Card */}
              <div className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200">
                <div className="flex items-center gap-2.5 text-amber-900 font-black text-lg mb-4">
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <span>Synthetic Attempts (HBOCs & PFCs)</span>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span><strong>Vascular Constriction & Stroke Risk:</strong> Free cell-free synthetic hemoglobin rapidly scavenges nitric oxide from blood vessels, causing coronary spasms and high stroke rates in human clinical trials.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span><strong>Renal Filtration Toxicity:</strong> Without a cell wall, synthetic hemoglobin molecules slip into kidney tubules, triggering acute tubular necrosis and organ strain.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span><strong>Zero Clotting or Immune Factor:</strong> Chemical oxygen carriers cannot replace platelets. Patients with trauma would still bleed out without real human blood.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span><strong>Astronomical Cost & Micro-Scales:</strong> Culturing stem-cell red blood cells in bioreactors costs over $15,000 for a few tablespoons—completely impractical for routine healthcare.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>
                <strong>The Bottom Line:</strong> Medical science cannot fabricate your blood in a factory. The only factory on Earth capable of producing life-saving red cells, platelets, and plasma is <em>the human body</em>.
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Blood Type Matcher */}
        {activeTab === 'types' && (
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                Interactive Compatibility Matrix
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
                Select Your Blood Type
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                See who you can save with red blood cells and who you can save with golden liquid plasma.
              </p>
            </div>

            {/* Type selector buttons */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5 mb-8">
              {BLOOD_TYPES_COMPATIBILITY.map((item) => (
                <button
                  key={item.type}
                  onClick={() => setSelectedBloodType(item.type)}
                  className={`py-3 px-2 rounded-xl text-center font-black transition-all cursor-pointer ${
                    selectedBloodType === item.type
                      ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-rose-50 hover:text-rose-600'
                  }`}
                >
                  <div className="text-base sm:text-lg">{item.type}</div>
                  <div className="text-[10px] font-normal opacity-80">
                    {item.type === 'O-' ? 'Universal' : item.type === 'AB+' ? 'Golden' : 'Essential'}
                  </div>
                </button>
              ))}
            </div>

            {/* Type profile card */}
            <div className="bg-gradient-to-r from-rose-50/70 to-amber-50/40 rounded-2xl border border-rose-200 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-rose-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center font-black text-2xl shadow-md shadow-rose-600/30">
                    {currentTypeData.type}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900">Type {currentTypeData.type}</h4>
                    <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full">
                      {currentTypeData.badge}
                    </span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-700 bg-white px-3.5 py-2 rounded-xl border border-rose-200">
                  🏥 {currentTypeData.emergencyRole}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                    Can Donate Red Cells To
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {currentTypeData.canGiveRedCellsTo.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 text-xs font-bold border border-rose-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    Can Receive Red Cells From
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {currentTypeData.canReceiveRedCellsFrom.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    Plasma Donation Match
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {currentTypeData.canGivePlasmaTo.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Clinical Deep-Dive Interactive Modal */}
      {isDeepDiveModalOpen && selectedFact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-rose-100 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsDeepDiveModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
              <Microscope className="w-4 h-4 text-rose-600" />
              <span>Clinical Hematology Dossier</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2 pr-8">
              {selectedFact.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs font-extrabold border border-rose-200">
                {selectedFact.statHighlight}
              </span>
              <span className="px-3 py-1 rounded-lg bg-stone-100 text-gray-700 text-xs font-bold">
                Category: {selectedFact.badge}
              </span>
            </div>

            {/* Clinical Overview Paragraph */}
            <div className="mb-6 p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-rose-600" />
                <span>Clinical Overview</span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed font-medium">
                {selectedFact.clinicalOverview}
              </p>
            </div>

            {/* Key Clinical Metrics */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Key Medical & Epidemiological Metrics:
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {selectedFact.keyClinicalMetrics.map((m, idx) => (
                  <div key={idx} className="bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                    <div className="text-[11px] font-bold text-gray-600">{m.label}</div>
                    <div className="text-sm sm:text-base font-black text-rose-900 mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cellular & Pathophysiological Mechanism */}
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                Physiological & Cellular Mechanism:
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-white p-3.5 rounded-xl border border-gray-200">
                {selectedFact.pathophysiology}
              </p>
            </div>

            {/* Hospital Impact in Egypt */}
            <div className="mb-6 p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-amber-950">
              <div className="font-extrabold text-amber-900 mb-1 flex items-center gap-1.5">
                <Hospital className="w-4 h-4 text-amber-700" />
                <span>Egyptian Healthcare & Hospital Impact:</span>
              </div>
              <p className="leading-relaxed">
                {selectedFact.hospitalImpactEgypt}
              </p>
            </div>

            {/* Hematologist Clinical Takeaway */}
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
              <div className="font-extrabold text-emerald-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Clinical Takeaway for Donors:</span>
              </div>
              <p className="leading-relaxed">
                {selectedFact.doctorTakeaway}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <a
                href="#centers"
                onClick={() => setIsDeepDiveModalOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Nearest Center for This Need</span>
              </a>
              <button
                onClick={() => setIsDeepDiveModalOpen(false)}
                className="py-3 px-5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
