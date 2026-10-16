import { useState } from 'react';
import { X, CheckCircle2, XCircle, AlertCircle, Sparkles, ShieldCheck } from 'lucide-react';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFindCenters: () => void;
}

export default function EligibilityModal({ isOpen, onClose, onFindCenters }: EligibilityModalProps) {
  if (!isOpen) return null;

  const [answers, setAnswers] = useState<{
    age: boolean | null;
    weight: boolean | null;
    wellness: boolean | null;
    tattoo: boolean | null;
  }>({
    age: null,
    weight: null,
    wellness: null,
    tattoo: null
  });

  const isEligible = answers.age === true && answers.weight === true && answers.wellness === true && answers.tattoo === true;
  const isAnsweredAll = answers.age !== null && answers.weight !== null && answers.wellness !== null && answers.tattoo !== null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-rose-100 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Quick 60-Second Check</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
          Can I Donate Blood?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
          Most healthy college students and community members qualify! Answer 4 quick questions based on standard Red Cross & WHO donor guidelines.
        </p>

        <div className="space-y-4">
          {/* Question 1: Age */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-sm font-bold text-gray-900 mb-1">
              1. Are you at least 16 or 17 years old?
            </div>
            <p className="text-xs text-gray-500 mb-3">
              (16 requires parental consent in some states; 17+ can donate independently in almost all areas)
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setAnswers(prev => ({ ...prev, age: true }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.age === true ? 'bg-emerald-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Yes, 16+ or older
              </button>
              <button
                onClick={() => setAnswers(prev => ({ ...prev, age: false }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.age === false ? 'bg-rose-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Under 16
              </button>
            </div>
          </div>

          {/* Question 2: Weight */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-sm font-bold text-gray-900 mb-1">
              2. Do you weigh at least 110 lbs (50 kg)?
            </div>
            <p className="text-xs text-gray-500 mb-3">
              This ensures your total circulating blood volume safely tolerates a ~470ml pint.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setAnswers(prev => ({ ...prev, weight: true }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.weight === true ? 'bg-emerald-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Yes, 110+ lbs (50kg+)
              </button>
              <button
                onClick={() => setAnswers(prev => ({ ...prev, weight: false }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.weight === false ? 'bg-rose-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Under 110 lbs
              </button>
            </div>
          </div>

          {/* Question 3: Feeling well today */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-sm font-bold text-gray-900 mb-1">
              3. Are you feeling well and symptom-free today?
            </div>
            <p className="text-xs text-gray-500 mb-3">
              No active cold, flu, fever, or acute illness in the last 24 hours.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setAnswers(prev => ({ ...prev, wellness: true }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.wellness === true ? 'bg-emerald-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Feeling Great & Healthy
              </button>
              <button
                onClick={() => setAnswers(prev => ({ ...prev, wellness: false }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.wellness === false ? 'bg-rose-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Currently Sick / Feverish
              </button>
            </div>
          </div>

          {/* Question 4: Tattoo status */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
            <div className="text-sm font-bold text-gray-900 mb-1">
              4. Tattoo or Piercing Status
            </div>
            <p className="text-xs text-gray-500 mb-3">
              Did you get a tattoo in an unlicensed shop in the last 3 months? (Tattoos done in licensed state-regulated facilities or older than 3 months are eligible!)
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setAnswers(prev => ({ ...prev, tattoo: true }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.tattoo === true ? 'bg-emerald-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Eligible (Licensed or 3+ mos)
              </button>
              <button
                onClick={() => setAnswers(prev => ({ ...prev, tattoo: false }))}
                className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                  answers.tattoo === false ? 'bg-rose-600 text-white' : 'bg-white border text-gray-700 hover:bg-gray-100'
                }`}
              >
                Recent Unregulated Tattoo
              </button>
            </div>
          </div>
        </div>

        {/* Results Box */}
        {isAnsweredAll && (
          <div className="mt-6 p-4 rounded-2xl border animate-in zoom-in-95 duration-200">
            {isEligible ? (
              <div className="bg-emerald-50 border-emerald-200 text-emerald-950 p-4 rounded-xl space-y-3">
                <div className="flex items-center gap-2 font-black text-base text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>You are likely fully eligible to donate!</span>
                </div>
                <p className="text-xs leading-relaxed text-emerald-900">
                  You meet all primary criteria for whole blood donation. Your single visit can save up to 3 lives!
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onFindCenters();
                  }}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all cursor-pointer"
                >
                  Find Nearby Centers to Book
                </button>
              </div>
            ) : (
              <div className="bg-amber-50 border-amber-200 text-amber-950 p-4 rounded-xl space-y-2">
                <div className="flex items-center gap-2 font-black text-sm text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>Temporary Deferral or Age Limit</span>
                </div>
                <p className="text-xs leading-relaxed text-amber-900">
                  You may need to wait until you recover from illness, pass the 3-month tattoo window, or reach the age/weight requirements. In the meantime, you can champion blood drives by sharing awareness graphics!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
