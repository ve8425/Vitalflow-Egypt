import { useState } from 'react';
import { X, Heart, Award, Sparkles, CheckCircle2, Share2, Trophy, MapPin } from 'lucide-react';

export interface PledgeSubmitPayload {
  name: string;
  affiliation: string;
  governorate: string;
  commitment: string;
}

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPledgeSubmit: (payload: PledgeSubmitPayload) => void;
  currentPledgeCount: number;
}

export default function PledgeModal({ isOpen, onClose, onPledgeSubmit, currentPledgeCount }: PledgeModalProps) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [governorate, setGovernorate] = useState('Cairo');
  const [pledgeType, setPledgeType] = useState('donate');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onPledgeSubmit({
      name: name.trim(),
      affiliation: affiliation.trim() || 'Community Donor',
      governorate,
      commitment: pledgeType === 'donate' ? 'Pledged to Donate Blood' : pledgeType === 'bring' ? 'Pledged to Bring a Friend' : 'Pledged to Share Awareness'
    });
    setIsSubmitted(true);
  };

  const governoratesList = [
    'Cairo', 'Giza', 'Alexandria', 'Gharbia (Tanta)', 'Dakahlia (Mansoura)',
    'Assiut', 'Ismailia', 'Aswan', 'Sharqia (Zagazig)', 'Qalyubia', 'Other Egyptian Governorate'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-rose-100 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
              <Trophy className="w-4 h-4 text-rose-600" />
              <span>National Goal: 5,000 Verified Donors</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
              Register Your Verified Pledge
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
              Join <span className="font-extrabold text-rose-600">{currentPledgeCount.toLocaleString()}</span> real registered donors across Egypt progressing toward our verified goal of <strong>5,000 donors</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samy El-Gohary or Mariam Adel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Governorate in Egypt</label>
                  <select
                    value={governorate}
                    onChange={(e) => setGovernorate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm font-semibold bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                  >
                    {governoratesList.map((gov) => (
                      <option key={gov} value={gov}>{gov}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">University / Role</label>
                  <input
                    type="text"
                    placeholder="e.g. Cairo Univ, Class of '27"
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your Pledge Action</label>
                <div className="space-y-2">
                  {[
                    { id: 'donate', label: 'I pledge to donate blood this semester in Egypt' },
                    { id: 'bring', label: 'I pledge to bring a first-time donor friend' },
                    { id: 'advocate', label: 'I pledge to share awareness graphics online' }
                  ].map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        pledgeType === option.id
                          ? 'border-rose-600 bg-rose-50 text-rose-950'
                          : 'border-gray-200 bg-stone-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="pledgeType"
                        value={option.id}
                        checked={pledgeType === option.id}
                        onChange={(e) => setPledgeType(e.target.value)}
                        className="text-rose-600 focus:ring-rose-500"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-bold text-sm shadow-md shadow-rose-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Submit Verified Pledge to Live Registry</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Award className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Pledge Registered in Live Registry</span>
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-1">
              Thank You, {name}!
            </h3>

            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Your pledge has been officially added to the verified real-time statistics as lifesaver <strong>#{(currentPledgeCount + 1).toLocaleString()}</strong> toward our national goal of <strong>5,000 donors</strong>.
            </p>

            {/* Virtual Pledge Badge */}
            <div className="bg-gradient-to-br from-rose-900 to-red-950 text-white p-5 rounded-2xl text-left shadow-lg border border-rose-500/30 mb-6">
              <div className="flex items-center justify-between text-[10px] text-rose-300 font-bold uppercase tracking-wider mb-2">
                <span>VITALFLOW EGYPT VERIFIED BADGE</span>
                <span>NATIONAL 5,000 GOAL</span>
              </div>
              <div className="text-lg font-black text-white">{name}</div>
              <div className="text-xs text-rose-200">
                {affiliation} • {governorate}
              </div>
              <div className="mt-3 text-xs text-gray-300 border-t border-white/10 pt-2 flex items-center justify-between">
                <span>Lifesaver #{(currentPledgeCount + 1).toLocaleString()} of 5,000</span>
                <span className="text-rose-400 font-bold">#GiveBloodEgypt</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all cursor-pointer"
              >
                Close & View Progress
              </button>
              <a
                href="#share"
                onClick={onClose}
                className="py-3 px-4 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition-all flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share My Badge</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
