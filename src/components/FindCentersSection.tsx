import { useState } from 'react';
import { 
  MapPin, 
  Search, 
  Clock, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Filter,
  Navigation,
  Heart,
  Sparkles,
  Building2
} from 'lucide-react';
import { DonationCenter, searchEgyptDonationCenters, EGYPT_DONATION_CENTERS } from '../data/donationCenters';
import AppointmentModal from './AppointmentModal';

export default function FindCentersSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGov, setSelectedGov] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [expandedHoursId, setExpandedHoursId] = useState<string | null>(null);
  const [selectedCenterForBooking, setSelectedCenterForBooking] = useState<DonationCenter | null>(null);

  const { centers, locationMatchedDescription } = searchEgyptDonationCenters(searchQuery, filterType, selectedGov);

  const egyptianGovernorates = [
    { label: 'All Egypt Governorates', value: 'All' },
    { label: 'Cairo', value: 'Cairo' },
    { label: 'Giza / Greater Cairo', value: 'Giza' },
    { label: 'Alexandria', value: 'Alexandria' },
    { label: 'Gharbia (Tanta / Delta)', value: 'Gharbia' },
    { label: 'Dakahlia (Mansoura / Delta)', value: 'Dakahlia' },
    { label: 'Assiut (Upper Egypt)', value: 'Assiut' },
    { label: 'Ismailia & Canal Region', value: 'Ismailia' },
    { label: 'Aswan (Southern Egypt)', value: 'Aswan' }
  ];

  const quickCities = [
    { label: 'Hospital 57357', query: '57357' },
    { label: 'Agouza NBTS', query: 'Agouza' },
    { label: 'Kasr Al-Ainy', query: 'Kasr Al-Ainy' },
    { label: 'Alexandria Hub', query: 'Alexandria' },
    { label: 'Tanta Center', query: 'Tanta' },
    { label: 'Mansoura Center', query: 'Mansoura' },
    { label: 'Assiut Regional', query: 'Assiut' }
  ];

  const toggleHours = (centerId: string) => {
    setExpandedHoursId(prev => prev === centerId ? null : centerId);
  };

  return (
    <section id="centers" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-rose-600" />
            <span>Certified Egypt Blood Centers & University Hospitals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Find Blood Donation Centers Across Egypt
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 leading-relaxed">
            Locate accredited blood banks under the Egyptian Ministry of Health (NBTS), major University Hospitals (Kasr Al-Ainy, Alexandria Main, Mansoura, Assiut), and Hospital 57357.
          </p>

          {/* National Hotline Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-stone-100 border border-stone-200 text-xs font-bold text-gray-800">
            <Phone className="w-4 h-4 text-rose-600" />
            <span>Ministry of Health Blood Donor Hotline:</span>
            <span className="text-rose-600 font-black text-sm">15335</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">Hospital 57357 Hotline: <strong>19057</strong></span>
          </div>
        </div>

        {/* Search & Filter Control Card */}
        <div className="max-w-4xl mx-auto bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city, district, or hospital name (e.g. Cairo, Agouza, 57357, Alexandria, Tanta)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-300 bg-white text-sm sm:text-base font-medium text-gray-900 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-700 bg-gray-100 px-2 py-1 rounded-md cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Governorate selector */}
            <div className="sm:w-64">
              <select
                value={selectedGov}
                onChange={(e) => setSelectedGov(e.target.value)}
                className="w-full px-3.5 py-3.5 rounded-2xl border border-gray-300 bg-white text-xs sm:text-sm font-bold text-gray-800 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-rose-500"
              >
                {egyptianGovernorates.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Egyptian Landmarks Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 mr-1">Major Hubs:</span>
            {quickCities.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setSearchQuery(item.query);
                  setSelectedGov('All');
                }}
                className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  searchQuery.toLowerCase() === item.query.toLowerCase()
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Filter By Donation Type */}
          <div className="mt-5 pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
              <Filter className="w-4 h-4 text-rose-600" />
              <span>Filter Donation Type:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: 'All Types', value: 'All' },
                { label: 'Whole Blood', value: 'Whole Blood' },
                { label: 'Platelets (57357 & NCI)', value: 'Platelets' },
                { label: 'Plasma', value: 'Plasma' }
              ].map((t) => (
                <button
                  key={t.value}
                  onClick={() => setFilterType(t.value)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    filterType === t.value
                      ? 'bg-gray-900 text-white shadow-2xs'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Feedback Header */}
        <div className="max-w-4xl mx-auto flex items-center justify-between mb-6 px-2">
          <div className="text-sm font-bold text-gray-800">
            {locationMatchedDescription}
          </div>
          <span className="text-xs text-rose-700 font-extrabold uppercase tracking-wider bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-100">
            Egyptian Ministry of Health & University Networks
          </span>
        </div>

        {/* Centers Cards List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {centers.map((center) => {
            const isHoursOpen = expandedHoursId === center.id;
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${center.name} ${center.address} Egypt`
            )}`;

            return (
              <div
                key={center.id}
                className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  {/* Left Center info */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-100">
                        {center.organization}
                      </span>
                      <span className="text-xs font-bold text-stone-700 bg-stone-100 px-2 py-0.5 rounded-md">
                        📍 {center.governorate}
                      </span>
                      {center.isPediatricOncologyHub && (
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          <span>Pediatric Oncology Hub (Hospital 57357 / NCI)</span>
                        </span>
                      )}
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                        ✓ {center.walkInsAllowed ? 'Walk-ins Welcome' : 'By Appointment'}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 leading-snug">
                      {center.name}
                    </h3>
                    <div className="text-xs font-bold text-gray-500">
                      {center.subtitle}
                    </div>

                    {/* Address & Phone */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 pt-1">
                      <div className="flex items-center gap-1.5 font-medium">
                        <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{center.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600 font-semibold">
                        <Phone className="w-3.5 h-3.5 text-rose-600" />
                        <span>{center.phone} (Hotline: {center.hotline})</span>
                      </div>
                    </div>

                    {/* Today's Operating Hours Display */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 bg-stone-50 border border-stone-200/80 px-3.5 py-1.5 rounded-xl text-xs">
                        <Clock className="w-3.5 h-3.5 text-rose-600" />
                        <span className="font-bold text-gray-900">Today's Hours:</span>
                        <span className="text-gray-700 font-semibold">{center.operatingHours.today}</span>
                        <button
                          onClick={() => toggleHours(center.id)}
                          className="ml-2 text-rose-600 hover:text-rose-800 font-bold inline-flex items-center gap-0.5 cursor-pointer underline underline-offset-2"
                        >
                          <span>{isHoursOpen ? 'Hide Schedule' : 'Full Weekly Hours'}</span>
                          {isHoursOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>

                      {/* Dropdown Full Weekly Schedule */}
                      {isHoursOpen && (
                        <div className="mt-3 p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs space-y-1.5 max-w-md animate-in fade-in duration-200">
                          <div className="font-bold text-gray-900 uppercase text-[10px] tracking-wider mb-1">
                            Operating Schedule in Egypt:
                          </div>
                          <div className="flex justify-between text-gray-700">
                            <span>Weekdays:</span>
                            <span className="font-semibold text-gray-900">{center.operatingHours.weekdays}</span>
                          </div>
                          <div className="flex justify-between text-gray-700">
                            <span>Weekend (Friday & Saturday):</span>
                            <span className="font-semibold text-gray-900">{center.operatingHours.weekend}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Accepted Types */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold text-gray-500">Accepted:</span>
                      {center.acceptedDonationTypes.map((type) => (
                        <span key={type} className="px-2 py-0.5 rounded-md bg-stone-100 text-gray-800 text-[11px] font-semibold">
                          {type}
                        </span>
                      ))}
                    </div>

                    {center.urgentNeeds.length > 0 && (
                      <div className="mt-2 text-xs font-bold text-rose-800 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-100 inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
                        <span>Current Urgent Need: {center.urgentNeeds.join(' • ')}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Actions column */}
                  <div className="lg:w-56 shrink-0 flex flex-col gap-2.5 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                    <div className="text-right text-[11px] text-gray-500 hidden lg:block">
                      Next Slot: <span className="text-emerald-700 font-bold">{center.nextAvailableSlot}</span>
                    </div>

                    {/* Schedule Appointment Primary Button */}
                    <button
                      onClick={() => setSelectedCenterForBooking(center)}
                      className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Schedule Appointment</span>
                    </button>

                    {/* Direct Call to Center */}
                    <a
                      href={`tel:${center.phone.replace(/\s+/g, '')}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-gray-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-rose-600" />
                      <span>Call Center Directly</span>
                    </a>

                    {/* Google Maps Directions */}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 text-center text-xs font-semibold text-rose-700 hover:text-rose-900 flex items-center justify-center gap-1 hover:underline"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Appointment Booking Modal */}
        <AppointmentModal
          center={selectedCenterForBooking}
          onClose={() => setSelectedCenterForBooking(null)}
        />
      </div>
    </section>
  );
}
