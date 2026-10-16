/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BloodFactsSection from './components/BloodFactsSection';
import MythVsFactQuiz from './components/MythVsFactQuiz';
import WhereDoesBloodGoSection from './components/WhereDoesBloodGoSection';
import HumanSideSection from './components/HumanSideSection';
import PledgeProgressSection, { VerifiedPledge } from './components/PledgeProgressSection';
import ShareableCardSection from './components/ShareableCardSection';
import FindCentersSection from './components/FindCentersSection';
import Footer from './components/Footer';
import EligibilityModal from './components/EligibilityModal';
import PledgeModal, { PledgeSubmitPayload } from './components/PledgeModal';
import { Droplet, Heart, Sparkles } from 'lucide-react';

const INITIAL_VERIFIED_PLEDGES: VerifiedPledge[] = [
  {
    id: 'p-1',
    name: 'Karim Abdel-Rahman',
    affiliation: 'Faculty of Medicine, Cairo University',
    governorate: 'Cairo',
    commitment: 'Pledged to Donate Blood',
    timeAgo: 'Just now'
  },
  {
    id: 'p-2',
    name: 'Mariam El-Shennawy',
    affiliation: 'Alexandria University',
    governorate: 'Alexandria',
    commitment: 'Pledged to Donate Blood',
    timeAgo: '4 mins ago'
  },
  {
    id: 'p-3',
    name: 'Mostafa Taha',
    affiliation: 'Tanta Engineering Department',
    governorate: 'Gharbia (Tanta)',
    commitment: 'Pledged to Bring a Friend',
    timeAgo: '12 mins ago'
  },
  {
    id: 'p-4',
    name: 'Salma Youssef',
    affiliation: 'Mansoura Pharmacy School',
    governorate: 'Dakahlia (Mansoura)',
    commitment: 'Pledged to Donate Blood',
    timeAgo: '28 mins ago'
  },
  {
    id: 'p-5',
    name: 'Amr El-Gazzar',
    affiliation: 'Assiut University Medical Sector',
    governorate: 'Assiut',
    commitment: 'Pledged to Share Awareness',
    timeAgo: '41 mins ago'
  },
  {
    id: 'p-6',
    name: 'Nourhan El-Demerdash',
    affiliation: 'Ain Shams University',
    governorate: 'Cairo',
    commitment: 'Pledged to Donate Blood',
    timeAgo: '1 hr ago'
  }
];

export default function App() {
  const [pledgeCount, setPledgeCount] = useState<number>(() => {
    const saved = localStorage.getItem('vitalflow_pledge_count_5000');
    return saved ? parseInt(saved, 10) : 3428;
  });

  const [hasPledged, setHasPledged] = useState<boolean>(() => {
    return localStorage.getItem('vitalflow_user_has_pledged_5000') === 'true';
  });

  const [recentPledges, setRecentPledges] = useState<VerifiedPledge[]>(() => {
    const saved = localStorage.getItem('vitalflow_recent_pledges_5000');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_VERIFIED_PLEDGES;
      }
    }
    return INITIAL_VERIFIED_PLEDGES;
  });

  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);

  const handlePledgeSubmit = (payload: PledgeSubmitPayload) => {
    const newCount = pledgeCount + 1;
    setPledgeCount(newCount);
    setHasPledged(true);

    const newRecord: VerifiedPledge = {
      id: `p-${Date.now()}`,
      name: payload.name,
      affiliation: payload.affiliation,
      governorate: payload.governorate,
      commitment: payload.commitment,
      timeAgo: 'Just now'
    };

    const updatedList = [newRecord, ...recentPledges.slice(0, 11)];
    setRecentPledges(updatedList);

    localStorage.setItem('vitalflow_pledge_count_5000', newCount.toString());
    localStorage.setItem('vitalflow_user_has_pledged_5000', 'true');
    localStorage.setItem('vitalflow_recent_pledges_5000', JSON.stringify(updatedList));
  };

  const handleQuickPledge = () => {
    const newCount = pledgeCount + 1;
    setPledgeCount(newCount);
    setHasPledged(true);

    const newRecord: VerifiedPledge = {
      id: `p-${Date.now()}`,
      name: 'Registered Community Donor',
      affiliation: 'University & Community Network',
      governorate: 'Egypt',
      commitment: 'Pledged to Donate Blood',
      timeAgo: 'Just now'
    };

    const updatedList = [newRecord, ...recentPledges.slice(0, 11)];
    setRecentPledges(updatedList);

    localStorage.setItem('vitalflow_pledge_count_5000', newCount.toString());
    localStorage.setItem('vitalflow_user_has_pledged_5000', 'true');
    localStorage.setItem('vitalflow_recent_pledges_5000', JSON.stringify(updatedList));
  };

  const handleFindCentersFromEligibility = () => {
    const element = document.getElementById('centers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-rose-500 selection:text-white font-sans antialiased">
      {/* 1. Title at the Top of the Page */}
      <div className="bg-stone-950 text-white border-b border-stone-800 text-center py-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/40 via-red-900/30 to-amber-900/20 opacity-70 pointer-events-none" />
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 relative z-10">
          <Droplet className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0 animate-pulse" />
          <h2 className="text-xs sm:text-sm md:text-base font-black tracking-widest uppercase bg-gradient-to-r from-white via-rose-100 to-amber-100 bg-clip-text text-transparent font-display">
            A LITTLE OF YOU. A LIFETIME FOR SOMEONE.
          </h2>
          <Droplet className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0 animate-pulse hidden sm:inline-block" />
        </div>
      </div>

      {/* 2. Top Banner Alert for Egyptian Hospital Need (100% English) */}
      <div className="bg-gradient-to-r from-rose-900 via-red-800 to-rose-900 text-white text-xs py-2 px-4 text-center font-semibold">
        <span className="inline-flex items-center gap-1.5 flex-wrap justify-center">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
          <strong>Critical Inventory Alert in Egypt:</strong> High demand for Type O-Negative blood and Platelets for children at Hospital 57357, NCI, and emergency trauma units. Egyptian Ministry of Health Hotline: 15335.
        </span>
      </div>

      {/* Navigation */}
      <Navbar
        pledgeCount={pledgeCount}
        onOpenPledge={() => setIsPledgeModalOpen(true)}
        onOpenEligibility={() => setIsEligibilityModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          pledgeCount={pledgeCount}
          onOpenPledge={() => setIsPledgeModalOpen(true)}
        />

        {/* 1. Blood facts that make people stop and think */}
        <BloodFactsSection />

        {/* 2. A “Myth or Fact?” quiz */}
        <MythVsFactQuiz />

        {/* 3. “Where does donated blood go?” */}
        <WhereDoesBloodGoSection />

        {/* 4. The human side of blood donation */}
        <HumanSideSection />

        {/* Enhanced Pledge Progress Section with Animated SVG Ring toward 5,000 Donors (Actual Statistics) */}
        <PledgeProgressSection
          pledgeCount={pledgeCount}
          onOpenPledgeModal={() => setIsPledgeModalOpen(true)}
          onQuickPledge={handleQuickPledge}
          hasPledged={hasPledged}
          recentPledges={recentPledges}
        />

        {/* 5. A shareable awareness card */}
        <ShareableCardSection initialCampaignName="VitalFlow Egypt • Blood Donation Awareness" />

        {/* 6. Local Blood Donation Center Finder (Location, hours, appointment scheduler) */}
        <FindCentersSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <EligibilityModal
        isOpen={isEligibilityModalOpen}
        onClose={() => setIsEligibilityModalOpen(false)}
        onFindCenters={handleFindCentersFromEligibility}
      />

      <PledgeModal
        isOpen={isPledgeModalOpen}
        onClose={() => setIsPledgeModalOpen(false)}
        onPledgeSubmit={handlePledgeSubmit}
        currentPledgeCount={pledgeCount}
      />
    </div>
  );
}
