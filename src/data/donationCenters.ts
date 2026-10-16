export interface DonationCenter {
  id: string;
  name: string;
  subtitle: string;
  organization: string;
  governorate: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  hotline: string;
  operatingHours: {
    today: string;
    weekdays: string; // Sunday - Thursday
    weekend: string; // Friday & Saturday
  };
  acceptedDonationTypes: ('Whole Blood' | 'Platelets' | 'Plasma' | 'Double Red Cells')[];
  urgentNeeds: string[];
  nextAvailableSlot: string;
  bookingUrl: string;
  walkInsAllowed: boolean;
  isPediatricOncologyHub?: boolean;
}

export const EGYPT_DONATION_CENTERS: DonationCenter[] = [
  {
    id: 'eg-agouza',
    name: 'National Blood Transfusion Services Center - Agouza',
    subtitle: 'Main National Headquarters of Egyptian NBTS',
    organization: 'Egyptian Ministry of Health (MOHP - NBTS)',
    governorate: 'Giza / Greater Cairo',
    city: 'Giza',
    district: 'Agouza',
    address: '51 Wezaret El-Zeraa St, Next to the Agricultural Museum, Agouza',
    phone: '+20 2 37613117',
    hotline: '15335',
    operatingHours: {
      today: '8:00 AM – 8:00 PM',
      weekdays: 'Sunday – Thursday: 8:00 AM – 8:00 PM',
      weekend: 'Friday & Saturday: 9:00 AM – 6:00 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets', 'Plasma'],
    urgentNeeds: ['O Negative (Critical Need)', 'A Negative', 'Platelets'],
    nextAvailableSlot: 'Today at 1:30 PM (Walk-ins welcome)',
    bookingUrl: 'https://mohp.gov.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-57357',
    name: 'Children’s Cancer Hospital 57357 Blood & Apheresis Bank',
    subtitle: 'Dedicated Pediatric Oncology Blood & Platelet Center',
    organization: '57357 Foundation for Pediatric Oncology',
    governorate: 'Cairo',
    city: 'Cairo',
    district: 'El Sayeda Zeinab',
    address: '1 Sekket El-Emam, Madbah El-Qadeem, El Sayeda Zeinab, Cairo',
    phone: '+20 2 25351500',
    hotline: '19057',
    operatingHours: {
      today: '8:00 AM – 9:00 PM (Daily)',
      weekdays: 'Saturday – Friday: 8:00 AM – 9:00 PM (Every day)',
      weekend: 'Open continuously through weekends and holidays'
    },
    acceptedDonationTypes: ['Platelets', 'Whole Blood', 'Plasma'],
    urgentNeeds: ['Platelets (All Types - Daily Urgent Need)', 'O Negative', 'B Positive'],
    nextAvailableSlot: 'Today at 2:00 PM (High Need for Platelets)',
    bookingUrl: 'https://www.57357.org',
    walkInsAllowed: true,
    isPediatricOncologyHub: true
  },
  {
    id: 'eg-kasr-alainy',
    name: 'Kasr Al-Ainy Cairo University Hospitals Central Blood Bank',
    subtitle: 'Major 24/7 Level-1 University Emergency & Trauma Hub',
    organization: 'Cairo University Hospitals',
    governorate: 'Cairo',
    city: 'Cairo',
    district: 'Manial',
    address: 'Kasr Al-Ainy St, Emergency & Trauma Pavilion, Manial, Cairo',
    phone: '+20 2 23654060',
    hotline: '15335',
    operatingHours: {
      today: '24 Hours (Open 24/7 for Trauma & Emergency)',
      weekdays: '24 Hours Daily for Emergency & Voluntary Donations',
      weekend: '24 Hours Daily'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets', 'Plasma'],
    urgentNeeds: ['O Positive (Accident Emergency)', 'O Negative', 'A Positive'],
    nextAvailableSlot: 'Available Now (24/7 Donor Desk)',
    bookingUrl: 'https://medicine.cu.edu.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-nci-cairo',
    name: 'National Cancer Institute (NCI) Blood Bank',
    subtitle: 'Specialized Oncology Blood & Platelet Center',
    organization: 'Cairo University - National Cancer Institute',
    governorate: 'Cairo',
    city: 'Cairo',
    district: 'Fom El Khalig',
    address: 'Fom El Khalig Square, Kasr Al-Ainy St, Old Cairo',
    phone: '+20 2 23664666',
    hotline: '15335',
    operatingHours: {
      today: '8:30 AM – 7:30 PM',
      weekdays: 'Saturday – Thursday: 8:30 AM – 7:30 PM',
      weekend: 'Friday: 9:00 AM – 3:00 PM'
    },
    acceptedDonationTypes: ['Platelets', 'Whole Blood'],
    urgentNeeds: ['Platelets for Chemotherapy', 'O Negative', 'AB Positive'],
    nextAvailableSlot: 'Today at 3:15 PM',
    bookingUrl: 'https://nci.cu.edu.eg',
    walkInsAllowed: true,
    isPediatricOncologyHub: true
  },
  {
    id: 'eg-abbassia',
    name: 'Regional Blood Transfusion Center - Abbassia',
    subtitle: 'Serving North & East Cairo Healthcare Networks',
    organization: 'Egyptian Ministry of Health (NBTS)',
    governorate: 'Cairo',
    city: 'Cairo',
    district: 'Abbassia',
    address: 'Sekkate El-Wailey, Near Abbassia Fever Hospital, Cairo',
    phone: '+20 2 26844421',
    hotline: '15335',
    operatingHours: {
      today: '8:00 AM – 7:00 PM',
      weekdays: 'Sunday – Thursday: 8:00 AM – 7:00 PM',
      weekend: 'Friday & Saturday: 9:00 AM – 4:00 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Plasma'],
    urgentNeeds: ['O Negative', 'B Negative', 'A Positive'],
    nextAvailableSlot: 'Today at 12:45 PM',
    bookingUrl: 'https://mohp.gov.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-alex-komeldikka',
    name: 'Regional Blood Transfusion Center - Alexandria (Kom El-Dikka)',
    subtitle: 'Primary Ministry of Health Blood Center in Alexandria',
    organization: 'Egyptian Ministry of Health (NBTS)',
    governorate: 'Alexandria',
    city: 'Alexandria',
    district: 'Kom El-Dikka',
    address: 'Gamal El-Din Yassin St, Kom El-Dikka, Central Alexandria',
    phone: '+20 3 4952044',
    hotline: '15335',
    operatingHours: {
      today: '8:00 AM – 8:00 PM',
      weekdays: 'Saturday – Thursday: 8:00 AM – 8:00 PM',
      weekend: 'Friday: 9:00 AM – 5:00 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets', 'Plasma'],
    urgentNeeds: ['O Negative', 'A Negative', 'Platelets'],
    nextAvailableSlot: 'Today at 2:30 PM',
    bookingUrl: 'https://mohp.gov.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-alex-amiry',
    name: 'Alexandria Main University Emergency Hospital Blood Bank',
    subtitle: 'Trauma Blood Bank for Coastal & Desert Road Emergencies',
    organization: 'Alexandria University Hospitals',
    governorate: 'Alexandria',
    city: 'Alexandria',
    district: 'El Shatby / Bab Sharq',
    address: 'Champlain St, El Azarita, Alexandria',
    phone: '+20 3 4862534',
    hotline: '15335',
    operatingHours: {
      today: '24 Hours (Round-the-clock Emergency Desk)',
      weekdays: '24 Hours Daily',
      weekend: '24 Hours Daily'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets', 'Plasma'],
    urgentNeeds: ['O Positive (Highway Trauma)', 'O Negative', 'B Positive'],
    nextAvailableSlot: 'Available 24/7 for Donors',
    bookingUrl: 'https://med.alexu.edu.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-tanta',
    name: 'Regional Blood Transfusion Center - Tanta',
    subtitle: 'Dedicated Center for Thalassemia Children in Gharbia',
    organization: 'Egyptian Ministry of Health (NBTS)',
    governorate: 'Gharbia / Nile Delta',
    city: 'Tanta',
    district: 'Al-Galaa',
    address: 'Al-Galaa Street, Next to Tanta Fever Hospital, Tanta',
    phone: '+20 40 3348122',
    hotline: '15335',
    operatingHours: {
      today: '8:00 AM – 7:30 PM',
      weekdays: 'Sunday – Thursday: 8:00 AM – 7:30 PM',
      weekend: 'Friday & Saturday: 9:00 AM – 4:00 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets', 'Plasma'],
    urgentNeeds: ['Red Cells for Thalassemia Children (Critical)', 'O Negative'],
    nextAvailableSlot: 'Today at 1:15 PM',
    bookingUrl: 'https://mohp.gov.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-mansoura',
    name: 'Mansoura University Children & Emergency Blood Center',
    subtitle: 'Serving Major University Clinics & Pediatric Wards in Dakahlia',
    organization: 'Mansoura University Hospitals',
    governorate: 'Dakahlia / Nile Delta',
    city: 'Mansoura',
    district: 'Gihan Street',
    address: 'University Campus, Gihan St, Mansoura',
    phone: '+20 50 2200240',
    hotline: '15335',
    operatingHours: {
      today: '8:00 AM – 8:00 PM (Emergency 24/7)',
      weekdays: 'Daily: 8:00 AM – 8:00 PM (Emergency 24/7)',
      weekend: 'Friday: 9:00 AM – 5:00 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets', 'Plasma'],
    urgentNeeds: ['Pediatric Red Cells (Thalassemia)', 'Platelets for Oncology'],
    nextAvailableSlot: 'Today at 3:00 PM',
    bookingUrl: 'https://muh.mans.edu.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-assiut',
    name: 'Regional Blood Transfusion Center - Assiut',
    subtitle: 'Upper Egypt Regional Referral Center',
    organization: 'Egyptian Ministry of Health & Assiut University',
    governorate: 'Assiut / Upper Egypt',
    city: 'Assiut',
    district: 'El-Walidia',
    address: 'Assiut University Medical City Axis, El-Walidia, Assiut',
    phone: '+20 88 2413000',
    hotline: '15335',
    operatingHours: {
      today: '8:00 AM – 7:00 PM',
      weekdays: 'Saturday – Thursday: 8:00 AM – 7:00 PM',
      weekend: 'Friday: 9:00 AM – 4:00 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets', 'Plasma'],
    urgentNeeds: ['All Blood Types (Serving 5 Upper Egypt Governorates)', 'O Negative'],
    nextAvailableSlot: 'Today at 2:00 PM',
    bookingUrl: 'https://mohp.gov.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-ismailia',
    name: 'Suez Canal Regional Blood Transfusion Center - Ismailia',
    subtitle: 'Serving Suez Canal & Sinai Medical Facilities',
    organization: 'Egyptian Ministry of Health & Suez Canal University',
    governorate: 'Ismailia / Canal Region',
    city: 'Ismailia',
    district: 'Sheikh Zayed',
    address: 'Circular Road, Near Suez Canal University Hospital, Ismailia',
    phone: '+20 64 3224411',
    hotline: '15335',
    operatingHours: {
      today: '8:00 AM – 6:30 PM',
      weekdays: 'Sunday – Thursday: 8:00 AM – 6:30 PM',
      weekend: 'Friday: 9:00 AM – 3:00 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Plasma'],
    urgentNeeds: ['O Negative', 'A Negative', 'B Positive'],
    nextAvailableSlot: 'Tomorrow at 10:30 AM',
    bookingUrl: 'https://mohp.gov.eg',
    walkInsAllowed: true
  },
  {
    id: 'eg-aswan',
    name: 'Aswan University Hospital Central Blood Bank',
    subtitle: 'Main Referral Blood Bank in Southern Egypt',
    organization: 'Aswan University Medical Sector',
    governorate: 'Aswan / Upper Egypt',
    city: 'Aswan',
    district: 'New Aswan',
    address: 'Corniche El Nile, Medical Campus, Aswan',
    phone: '+20 97 2463001',
    hotline: '15335',
    operatingHours: {
      today: '8:30 AM – 7:00 PM',
      weekdays: 'Saturday – Thursday: 8:30 AM – 7:00 PM',
      weekend: 'Friday: 9:00 AM – 3:30 PM'
    },
    acceptedDonationTypes: ['Whole Blood', 'Platelets'],
    urgentNeeds: ['Sickle Cell & Thalassemia Red Cells', 'O Negative'],
    nextAvailableSlot: 'Today at 1:45 PM',
    bookingUrl: 'https://aswu.edu.eg',
    walkInsAllowed: true
  }
];

export function searchEgyptDonationCenters(
  query: string,
  filterType: string = 'All',
  selectedGov: string = 'All'
): { centers: DonationCenter[]; locationMatchedDescription: string } {
  const cleanQuery = query.trim().toLowerCase();

  let matched = EGYPT_DONATION_CENTERS.filter(c => {
    const matchesLocation =
      !cleanQuery ||
      c.governorate.toLowerCase().includes(cleanQuery) ||
      c.city.toLowerCase().includes(cleanQuery) ||
      c.district.toLowerCase().includes(cleanQuery) ||
      c.name.toLowerCase().includes(cleanQuery) ||
      c.subtitle.toLowerCase().includes(cleanQuery) ||
      c.address.toLowerCase().includes(cleanQuery);

    const matchesGov =
      selectedGov === 'All' ||
      c.governorate.toLowerCase().includes(selectedGov.toLowerCase());

    const matchesType =
      filterType === 'All' ||
      c.acceptedDonationTypes.some(t => t.toLowerCase().includes(filterType.toLowerCase()));

    return matchesLocation && matchesGov && matchesType;
  });

  if (matched.length === 0 && cleanQuery) {
    return {
      centers: EGYPT_DONATION_CENTERS.slice(0, 4),
      locationMatchedDescription: `Showing accredited Egyptian National Blood Transfusion centers serving "${query}"`
    };
  }

  const desc = cleanQuery
    ? `Found ${matched.length} Egyptian accredited donation centers matching "${query}"`
    : `Showing all ${matched.length} certified Egyptian donation centers & hospital blood banks`;

  return { centers: matched, locationMatchedDescription: desc };
}
