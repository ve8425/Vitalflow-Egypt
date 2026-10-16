import { useState } from 'react';
import { 
  GitFork, 
  Droplet, 
  Thermometer, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  ChevronRight,
  HeartHandshake
} from 'lucide-react';
import { JOURNEY_STEPS, BLOOD_COMPONENTS, JourneyStep } from '../data/campaignData';

export default function WhereDoesBloodGoSection() {
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [selectedComponent, setSelectedComponent] = useState<string>('Red Blood Cells');

  const activeStepData = JOURNEY_STEPS.find(s => s.stepNumber === selectedStep) || JOURNEY_STEPS[0];
  const activeComponentData = BLOOD_COMPONENTS.find(c => c.name === selectedComponent) || BLOOD_COMPONENTS[0];

  return (
    <section id="journey" className="py-20 bg-stone-50 border-t border-b border-rose-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <GitFork className="w-3.5 h-3.5 text-rose-600" />
            Part 3: The Infographic
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Where Does Donated Blood Go?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
            Follow the 24-hour journey of a single pint: from your arm into robotic centrifuges, through rigorous molecular safety screens, and directly to hospital bedsides.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {JOURNEY_STEPS.map((step) => {
            const isActive = selectedStep === step.stepNumber;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setSelectedStep(step.stepNumber)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer relative overflow-hidden group ${
                  isActive
                    ? 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/30 ring-2 ring-rose-600/20'
                    : 'bg-white border-gray-200 text-gray-800 hover:border-rose-200 hover:bg-rose-50/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-700'
                  }`}>
                    0{step.stepNumber}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isActive ? 'text-rose-100' : 'text-gray-400'
                  }`}>
                    {step.duration}
                  </span>
                </div>
                <div className="text-sm font-bold line-clamp-1">{step.title}</div>
                <div className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-rose-100' : 'text-gray-500'}`}>
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Infographic Display */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Graphic representation */}
            <div className="lg:col-span-5 bg-gradient-to-br from-rose-50 via-rose-100/40 to-stone-100 rounded-2xl p-6 sm:p-8 border border-rose-100 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-rose-700 px-3 py-1 bg-white rounded-full shadow-2xs border border-rose-200">
                    Step {activeStepData.stepNumber} of 5
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-600 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                    <Thermometer className="w-3.5 h-3.5 text-rose-600" />
                    <span>{activeStepData.temperature}</span>
                  </div>
                </div>

                {/* Illustrated visual indicator for step */}
                <div className="py-6 flex flex-col items-center justify-center text-center">
                  <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-tr from-rose-600 to-red-500 text-white flex items-center justify-center shadow-lg shadow-rose-600/30 mb-4 animate-in zoom-in-75 duration-300">
                    {activeStepData.stepNumber === 1 && <Droplet className="w-14 h-14 fill-white" />}
                    {activeStepData.stepNumber === 2 && <HeartHandshake className="w-14 h-14" />}
                    {activeStepData.stepNumber === 3 && <ShieldCheck className="w-14 h-14" />}
                    {activeStepData.stepNumber === 4 && <Layers className="w-14 h-14" />}
                    {activeStepData.stepNumber === 5 && <Sparkles className="w-14 h-14" />}
                  </div>
                  <h4 className="text-xl font-black text-gray-900">{activeStepData.title}</h4>
                  <p className="text-xs text-rose-700 font-bold mt-1">{activeStepData.subtitle}</p>
                </div>
              </div>

              {/* Equipment & Safety Box */}
              <div className="space-y-2 pt-4 border-t border-rose-200/60">
                <div className="text-[11px] text-gray-600">
                  <strong className="text-gray-900">Equipment in Action:</strong> {activeStepData.equipment}
                </div>
                <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200/80 flex items-start gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{activeStepData.safetyFact}</span>
                </div>
              </div>
            </div>

            {/* Right Detailed narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                  {activeStepData.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
                  {activeStepData.summary}
                </p>

                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Milestones at This Stage:
                </div>
                <ul className="space-y-3 mb-8">
                  {activeStepData.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-stone-50 p-3.5 rounded-xl border border-stone-200/80">
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-800 leading-normal">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step Navigation Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  disabled={selectedStep === 1}
                  onClick={() => setSelectedStep(prev => Math.max(1, prev - 1))}
                  className="text-xs font-bold text-gray-500 hover:text-gray-800 disabled:opacity-30 cursor-pointer"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={selectedStep === 5}
                  onClick={() => setSelectedStep(prev => Math.min(5, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-30"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Component Fractionation Deep Explorer */}
        <div className="bg-white rounded-3xl border border-rose-200 p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
              Fractionation Explorer
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
              Inside the Centrifuge: The 3 Primary Components
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Whole blood is rarely transfused directly. Select a component below to see who receives it and why its storage conditions dictate hospital donation needs.
            </p>
          </div>

          {/* Component Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {BLOOD_COMPONENTS.map((comp) => {
              const isSelected = selectedComponent === comp.name;
              return (
                <button
                  key={comp.name}
                  onClick={() => setSelectedComponent(comp.name)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'border-rose-600 bg-rose-600 text-white shadow-md shadow-rose-600/25'
                      : 'border-gray-200 bg-stone-50 hover:bg-rose-50/50 text-gray-800'
                  }`}
                >
                  <div className="text-sm font-black line-clamp-1">{comp.name}</div>
                  <div className={`text-xs mt-1 font-semibold ${isSelected ? 'text-rose-100' : 'text-gray-500'}`}>
                    ⏳ {comp.shelfLife}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Component Spec Sheet */}
          <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <div className="text-xs font-extrabold text-rose-600 uppercase tracking-widest">
                  Component Breakdown
                </div>
                <h4 className="text-2xl font-black text-gray-900 mt-0.5">
                  {activeComponentData.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Volume: {activeComponentData.percentageOfBlood} | Color Appearance: {activeComponentData.colorName}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <span className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 border border-amber-200">
                  ⏱️ Shelf Life: {activeComponentData.shelfLife}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-cyan-100 text-cyan-900 border border-cyan-200">
                  ❄️ Temp: {activeComponentData.storageTemp}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  What It Does in the Body:
                </div>
                <p className="text-sm text-gray-800 font-medium leading-relaxed bg-white p-4 rounded-xl border border-stone-200">
                  {activeComponentData.keyFunction}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Who Receives This Life-Saving Component:
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {activeComponentData.primaryPatients.map((patient, i) => (
                    <div key={i} className="text-xs sm:text-sm font-semibold text-gray-800 bg-white p-3 rounded-xl border border-stone-200 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                      <span>{patient}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
