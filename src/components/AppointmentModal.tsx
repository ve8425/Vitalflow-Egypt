import { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Heart, ExternalLink, Phone, ShieldCheck } from 'lucide-react';
import { DonationCenter } from '../data/donationCenters';

interface AppointmentModalProps {
  center: DonationCenter | null;
  onClose: () => void;
}

export const APPOINTMENT_TIMES = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:30 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'
];

export default function AppointmentModal({ center, onClose }: AppointmentModalProps) {
  if (!center) return null;

  const [donorName, setDonorName] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [nationalIdOrStudentId, setNationalIdOrStudentId] = useState('');
  const [donationType, setDonationType] = useState<string>(center.acceptedDonationTypes[0] || 'Whole Blood');
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorPhone) return;
    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-rose-100 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isBooked ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
              <Calendar className="w-4 h-4" />
              <span>Schedule Blood Donation in Egypt</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">
              {center.name}
            </h3>
            <div className="text-xs font-semibold text-gray-500 mb-3">
              {center.subtitle}
            </div>

            <div className="flex items-start gap-2 text-xs text-gray-600 mb-6 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
              <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-gray-900">{center.address}</span>
                <span className="block text-gray-500 mt-0.5">Governorate: {center.governorate} | Hours: {center.operatingHours.today}</span>
                <span className="block text-rose-600 font-bold mt-1">NBTS Hotline: {center.hotline} • Center Tel: {center.phone}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ahmed Mahmoud or Sara Hassan"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Egyptian Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="010 / 011 / 012 / 015..."
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">National ID / Student ID</label>
                  <input
                    type="text"
                    placeholder="For donor verification"
                    value={nationalIdOrStudentId}
                    onChange={(e) => setNationalIdOrStudentId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Donation Type</label>
                <select
                  value={donationType}
                  onChange={(e) => setDonationType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm font-medium bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                >
                  {center.acceptedDonationTypes.map((type) => (
                    <option key={type} value={type}>
                      {type} {type.includes('Platelets') ? '(Crucial for Hospital 57357 & NCI Cancer Patients)' : type === 'Whole Blood' ? '(Saves up to 3 patients in Egypt)' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Arrival Time Slot</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-500"
                  >
                    {APPOINTMENT_TIMES.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {center.urgentNeeds.length > 0 && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-600 fill-amber-600 shrink-0" />
                  <span>
                    <strong>Current Urgent Need at Center:</strong> {center.urgentNeeds.join(' • ')}
                  </span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Confirm Appointment Reservation</span>
                </button>
              </div>

              <div className="text-center pt-1 text-xs text-gray-500">
                You can also call the Egyptian MOHP NBTS hotline <strong className="text-rose-600 font-bold">15335</strong> directly.
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-gray-900 mb-1">
              Your Appointment is Confirmed!
            </h3>
            <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-4">
              Reservation Code: #EG-BLOOD-{Math.floor(100000 + Math.random() * 900000)}
            </p>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 text-left text-xs space-y-2 mb-6">
              <div>
                <span className="text-gray-500">Donor:</span>{' '}
                <strong className="text-gray-900">{donorName} ({donorPhone})</strong>
              </div>
              <div>
                <span className="text-gray-500">Center:</span>{' '}
                <strong className="text-gray-900">{center.name}</strong>
              </div>
              <div>
                <span className="text-gray-500">Location:</span>{' '}
                <strong className="text-gray-900">{center.address}, {center.governorate}</strong>
              </div>
              <div>
                <span className="text-gray-500">Scheduled:</span>{' '}
                <strong className="text-gray-900">{selectedDate} at {selectedTime} ({donationType})</strong>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-100 text-xs text-rose-900 mb-6 text-left space-y-1">
              <div className="font-bold">Donor Preparation Tips in Egypt:</div>
              <div>• Drink plenty of water or juices and have a light, nutritious meal beforehand.</div>
              <div>• Please bring your National ID card or University Student ID for verification.</div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all cursor-pointer"
              >
                Close & Return
              </button>
              <a
                href={`tel:${center.phone.replace(/\s+/g, '')}`}
                className="py-3 px-4 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold hover:bg-rose-100 transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Center</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
