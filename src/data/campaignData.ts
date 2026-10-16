export interface BloodFact {
  id: string;
  category: 'science' | 'urgency' | 'impact' | 'body';
  title: string;
  statHighlight: string;
  shortDescription: string;
  deepDive: string;
  iconName: string;
  badge: string;
  clinicalOverview: string;
  pathophysiology: string;
  hospitalImpactEgypt: string;
  keyClinicalMetrics: { label: string; value: string }[];
  doctorTakeaway: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  isFact: boolean;
  correctAnswer: 'myth' | 'fact';
  officialGuidance: string;
  explanation: string;
  keyTakeaway: string;
  sourceAuthority: string;
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  duration: string;
  temperature: string;
  summary: string;
  details: string[];
  equipment: string;
  safetyFact: string;
}

export interface BloodComponentInfo {
  name: string;
  colorName: string;
  shelfLife: string;
  storageTemp: string;
  primaryPatients: string[];
  keyFunction: string;
  percentageOfBlood: string;
}

export interface PatientStory {
  id: string;
  name: string;
  age: number;
  condition: string;
  location: string;
  hospital: string;
  unitsReceived: string;
  quote: string;
  story: string;
  recipientCategory: 'Thalassemia Major' | 'Pediatric Cancer (57357)' | 'Maternal Emergency (Kasr Al-Ainy)' | 'Trauma Surgery';
  outcome: string;
  donorGratitudeQuote: string;
  tag: string;
}

export const EGYPT_NATIONAL_STATS = {
  annualUnitsNeeded: '1.8+ Million Units',
  annualUnitsCollected: '~1.1 Million Units',
  deficitGap: '~700,000 Units Annual Shortage',
  thalassemiaPatients: '10,000+ Children & Youth',
  childrenCancerDailyNeed: '300+ Units Daily (Hospital 57357 & NCI)',
  voluntaryDonorPercentage: 'Only ~1.5% - 2% of Eligible Population',
  monthlyGoal: 5000,
  hotline: '15335 (Egyptian Ministry of Health NBTS)'
};

export const BLOOD_FACTS: BloodFact[] = [
  {
    id: 'thalassemia-egypt',
    category: 'urgency',
    title: 'The Thalassemia Crisis in Egypt: Over 10,000 Children',
    statHighlight: '10,000+ Thalassemia Patients',
    shortDescription: 'Egypt has one of the highest rates of Beta-Thalassemia in the Mediterranean (~9% carrier rate). Over 10,000 Egyptian children need regular transfusions every 3-4 weeks.',
    deepDive: 'In Egypt, Beta-Thalassemia major is an inherited hemoglobin disorder where the child’s body cannot synthesize healthy red blood cells. Without a blood transfusion every 21 to 28 days, these children suffer from severe anemia, bone deformities, and heart failure. Each child consumes approximately 24 to 30 blood units every year of their life. When regional blood banks in Cairo, Tanta, or Mansoura run low, these children’s transfusions are delayed, directly threatening their organ functions.',
    iconName: 'Users',
    badge: 'Egypt High-Priority',
    clinicalOverview: 'Beta-Thalassemia Major is an autosomal recessive hemoglobinopathy characterized by the absent or severely reduced synthesis of beta-globin chains on chromosome 11, resulting in ineffective erythropoiesis and severe chronic hemolytic anemia.',
    pathophysiology: 'The precipitation of unbound alpha-globin chains causes premature destruction of erythroid precursors within the bone marrow (ineffective erythropoiesis) and peripheral hemolysis. Massive bone marrow expansion leads to skeletal deformities ("chipmunk facies"), severe hepatosplenomegaly, and high-output congestive cardiac failure if transfusions are delayed.',
    hospitalImpactEgypt: 'Specialized transfusion clinics at Tanta University Pediatric Hospital, Kasr Al-Ainy Children’s Hospital (Abu El-Reesh), and Mansoura Pediatric Hematology Unit provide over 250,000 units of leukoreduced packed red cells annually specifically for registered Thalassemia patients.',
    keyClinicalMetrics: [
      { label: 'Carrier Frequency in Egypt', value: '8.5% - 10.0% of Population' },
      { label: 'Transfusion Frequency', value: 'Every 21 to 28 Days Lifelong' },
      { label: 'Target Pre-Transfusion Hb', value: '9.5 to 10.5 g/dL' },
      { label: 'Annual Blood Consumption', value: '24 to 30 Units per Child' }
    ],
    doctorTakeaway: 'Because Thalassemia children require regular lifelong transfusions, they are at high risk for red cell alloimmunization. Blood banks require a steady pool of repeated voluntary donors with known Rh and Kell phenotypes to guarantee exact antigenic matches.'
  },
  {
    id: 'manufacture-impossible',
    category: 'science',
    title: 'Why Blood Cannot Be Manufactured in Any Lab',
    statHighlight: '0 Artificial Substitutes',
    shortDescription: 'No factory or pharmaceutical laboratory in Egypt or the world can manufacture real human red blood cells or platelets.',
    deepDive: 'A single human erythrocyte contains over 270 million hemoglobin molecules encased in an ultra-flexible lipid membrane. It squeezes through microscopic 5-micrometer capillaries in the human brain without bursting, regulates nitric oxide to control blood pressure, and avoids immune attack. Decades of artificial hemoglobin trials (HBOCs) caused coronary spasms and kidney failure. There is zero factory replacement: patients in Egypt depend 100% on the generosity of voluntary human donors.',
    iconName: 'FlaskConical',
    badge: 'Biological Marvel',
    clinicalOverview: 'Despite six decades of intensive bioengineering research, human whole blood and living erythrocytes possess physiological feedback mechanisms that current chemical and synthetic technologies cannot safely reproduce.',
    pathophysiology: 'Natural red blood cells have a unique biconcave spectrin-actin cytoskeleton that allows them to deform through microcapillaries half their diameter. When free hemoglobin solutions (Hemoglobin-Based Oxygen Carriers, or HBOCs) were introduced in clinical trials, the unencapsulated tetramers extravasated through vascular endothelium and scavenged endothelial nitric oxide (NO). This caused severe systemic vasoconstriction, coronary spasms, a 30% surge in myocardial infarctions, and acute renal tubular obstruction.',
    hospitalImpactEgypt: 'Every emergency bay in Egypt—from Kasr Al-Ainy to Alexandria Main Emergency—relies 100% on pre-donated human blood units. Synthetic oxygen carriers are not FDA, EMA, or Egyptian MOHP approved for routine patient transfusions.',
    keyClinicalMetrics: [
      { label: 'Hemoglobin Molecules / Cell', value: '270 Million Molecules' },
      { label: 'Capillary Passage Diameter', value: 'As narrow as 5.0 μm' },
      { label: 'Synthetic HBOC Trial Failure', value: '30% Increase in Mortality' },
      { label: 'Bioreactor Culturing Cost', value: '>$15,000 for 50ml' }
    ],
    doctorTakeaway: 'There is no assembly line for blood. Nature’s delivery system remains inimitable. If volunteer human donors do not donate, hospital operating suites simply run dry.'
  },
  {
    id: 'platelet-expiration',
    category: 'urgency',
    title: 'The 5-Day Platelet Race at Hospital 57357 & NCI',
    statHighlight: 'Expires in 5 to 7 Days',
    shortDescription: 'Platelets needed by Egyptian children fighting leukemia at Hospital 57357 cannot be stockpiled. They expire within 5 days.',
    deepDive: 'While frozen plasma lasts up to 1 year, platelets—the microscopic clotting cells essential to keep cancer and leukemia patients from fatal internal bleeds—must be stored at room temperature (20-24°C) with continuous gentle agitation. Because bacteria could multiply at room temperature, platelets expire in merely 5 to 7 days. Even a short 3-day holiday in Egypt causes emergency platelet shortages in pediatric oncology wards across Cairo, Alexandria, and Tanta.',
    iconName: 'Hourglass',
    badge: 'Urgent Daily Need',
    clinicalOverview: 'Platelets (thrombocytes) are fragile, anucleate cellular fragments derived from bone marrow megakaryocytes that mediate primary hemostasis and clot retraction.',
    pathophysiology: 'Intensive induction chemotherapy for childhood Acute Lymphoblastic Leukemia (ALL) and Acute Myeloid Leukemia (AML) obliterates bone marrow cellularity. When a child’s platelet count drops below 10,000 to 20,000 / μL (severe thrombocytopenia), the risk of spontaneous, fatal intracranial or pulmonary hemorrhage skyrockets. Prophylactic platelet transfusions are essential to keep counts above safe hemostatic thresholds.',
    hospitalImpactEgypt: 'Hospital 57357 (Children’s Cancer Hospital Egypt) and the National Cancer Institute (NCI) in Cairo administer over 300+ units of single-donor apheresis and pooled platelets daily. Because platelets must be kept on room-temperature agitators (20-24°C) to prevent cold-induced activation, bacterial proliferation limits their shelf life strictly to 5 days.',
    keyClinicalMetrics: [
      { label: 'Normal Platelet Count', value: '150,000 - 450,000 / μL' },
      { label: 'Severe Critical Bleed Level', value: '< 10,000 / μL' },
      { label: 'Platelet Shelf Life', value: 'Strictly 5 to 7 Days' },
      { label: '57357 Daily Platelet Units', value: '300+ Units Daily' }
    ],
    doctorTakeaway: 'A regular donor who gives platelets via apheresis directly saves a leukemia child within 48 to 72 hours of collection. Because platelets cannot be stockpiled for next week, weekly donor consistency is the only way children survive chemo.'
  },
  {
    id: 'egypt-deficit-gap',
    category: 'impact',
    title: 'Egypt’s 1.8 Million Unit Demand vs The Supply Gap',
    statHighlight: '1.8 Million Units Needed Yearly',
    shortDescription: 'Hospitals across Egypt require over 1.8 million blood units each year, yet voluntary donations cover barely two-thirds of this need.',
    deepDive: 'In Egypt, approximately 1 in 7 patients admitted to hospital emergency, surgical, or maternity wards will require blood products. Currently, a substantial portion of donations are "replacement donations", where panicked families must urgently recruit relatives when a patient is in the OR. The Egyptian Ministry of Health aims to shift the nation toward 100% voluntary, regular non-remunerated donors to eliminate life-threatening delays.',
    iconName: 'Activity',
    badge: 'National Goal',
    clinicalOverview: 'Transfusion services across Egypt’s 27 governorates face a structural deficit between total therapeutic demand (1.8 - 2.0 million units) and annual collection (~1.1 million units), generating a shortfall of over 700,000 units.',
    pathophysiology: 'Severe blood loss (hemorrhagic shock class III and IV) causes catastrophic cellular hypoxia, lactic acidosis, hypothermia, and trauma-induced coagulopathy (the lethal triad). Immediate availability of packed red cells and plasma restores microcirculatory oxygen extraction ratio and stops irreversible multi-organ failure.',
    hospitalImpactEgypt: 'Heavy trauma from regional highway corridors (Cairo-Alex Desert Road, Agricultural Highway, Upper Egypt axis) and obstetric postpartum hemorrhage cases place round-the-clock strain on central hospital blood banks. Relying on "replacement donation" forces surgical delays while relatives are screened in real time.',
    keyClinicalMetrics: [
      { label: 'Annual Egypt Demand', value: '1,800,000+ Units' },
      { label: 'Current National Supply', value: '~1,100,000 Units' },
      { label: 'Annual Supply Shortfall', value: '~700,000 Units Deficit' },
      { label: 'Voluntary Donors in Egypt', value: 'Less than 2% of population' }
    ],
    doctorTakeaway: 'The Egyptian Ministry of Health’s strategic target is to convert hospital blood banking from crisis-driven family replacement to 100% regular voluntary donation, ensuring that whenever a surgeon opens a trauma bay cooler, safe blood is already tested and waiting.'
  },
  {
    id: 'three-lives-saved',
    category: 'impact',
    title: 'The Rule of Three: One Pint Multiplied Across Wards',
    statHighlight: '1 Donation = Up to 3 Lives',
    shortDescription: 'Your single 450ml donation at an Egyptian Regional Blood Center is separated into 3 distinct therapeutic medicines.',
    deepDive: 'At regional blood centers (like Agouza, Abbassia, or Kom El-Dikka in Alexandria), high-speed centrifuges divide your donation into concentrated Packed Red Blood Cells (for trauma victims and thalassemia children), Platelets (for leukemia chemotherapy patients at Hospital 57357), and Fresh Frozen Plasma (for burn survivors and surgical clotting). A 15-minute donation helps three different people across Egyptian hospitals.',
    iconName: 'Sparkles',
    badge: '3 Lives Saved',
    clinicalOverview: 'Modern transfusion medicine practices component therapy: whole blood is virtually never transfused in its raw state, but fractionated into targeted cellular and plasma derivatives according to specific patient pathologies.',
    pathophysiology: 'Whole blood consists of cellular elements (~45%) suspended in protein-rich plasma (~55%). Administering whole blood to an anemic patient without hypovolemia creates volume overload and cardiac failure. Fractionating components allows tailored hemodynamic therapy: packed red cells restore oxygen-carrying capacity, platelets restore primary clotting, and plasma restores secondary fibrin mesh formation.',
    hospitalImpactEgypt: 'At Egyptian NBTS laboratories (Agouza, Abbassia, Kom El-Dikka, Tanta), precision refrigerated centrifuges spin whole blood at 4,000 RPM. A single 450ml donation is separated into three sterile barcoded bags: 1 unit of Packed Red Blood Cells (PRBCs), 1 unit of Platelets, and 1 unit of Fresh Frozen Plasma (FFP).',
    keyClinicalMetrics: [
      { label: 'Red Blood Cell Life', value: '35 to 42 Days (2°C - 6°C)' },
      { label: 'Platelet Shelf Life', value: '5 to 7 Days (20°C - 24°C)' },
      { label: 'Fresh Frozen Plasma Life', value: '12 Months (-25°C or colder)' },
      { label: 'Patients Treated / Bag', value: 'Up to 3 Distinct Individuals' }
    ],
    doctorTakeaway: 'By separating blood into components, Egyptian blood banks maximize the therapeutic yield of every single donor visit. Your 10 minutes in the phlebotomy chair literally helps a trauma victim in the ER, a child in the cancer ward, and a burn patient in ICU simultaneously.'
  },
  {
    id: 'body-regeneration',
    category: 'body',
    title: 'Your Body Replenishes the Lost Fluid in 24–48 Hours',
    statHighlight: '24-48h Fluid Recovery',
    shortDescription: 'Donating blood takes under 10% of your body’s supply, and your cardiovascular system replenishes plasma volume within 48 hours.',
    deepDive: 'An average adult has 5 liters of circulating blood. The ~450ml collected is easily tolerated. Drinking water, hibiscus (karkadeh), or fresh juice promptly restores plasma volume within 24 to 48 hours, while your bone marrow is stimulated to produce brand-new red blood cells over the subsequent 4 to 6 weeks, which improves circulation and natural cell renewal.',
    iconName: 'Clock',
    badge: 'Natural Renewal',
    clinicalOverview: 'The human cardiovascular and hematopoietic systems possess highly evolved physiological compensation mechanisms that fully restore blood volume and cellular elements with zero adverse health impact on healthy adults.',
    pathophysiology: 'Immediately post-donation, carotid and aortic baroreceptors detect an acute intravascular volume reduction (~450ml, <10% of total volume). Interstitial fluid shifts into the intravascular space, while renal tubules upregulate renin-angiotensin-aldosterone signaling to conserve water and electrolytes, restoring full plasma volume within 24 to 48 hours. Mild renal tissue hypoxia stimulates Erythropoietin (EPO) secretion, activating stem cell erythropoiesis in bone marrow to produce fresh erythrocytes within 4 to 6 weeks.',
    hospitalImpactEgypt: 'Egyptian NBTS protocol ensures donors undergo pre-donation hemoglobin checks (≥ 12.5 g/dL for women, ≥ 13.0 g/dL for men) and blood pressure screening. Post-donation rest and hydration stations with water, juices, and biscuits guarantee that donors leave the center hemodynamically stable.',
    keyClinicalMetrics: [
      { label: 'Plasma Volume Recovery', value: '24 to 48 Hours' },
      { label: 'EPO Peak Secretion', value: '24 to 48 Hours Post-Donation' },
      { label: 'Full Red Cell Mass Renewal', value: '4 to 6 Weeks' },
      { label: 'Safe Whole Blood Frequency', value: 'Every 8 to 12 Weeks' }
    ],
    doctorTakeaway: 'Donating blood stimulates natural bone marrow activity and releases fresh, supple red blood cells into circulation. Studies also indicate that regular donation reduces excess iron storage (ferritin), supporting long-term vascular health.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Donating blood in Egypt always makes you chronically weak and unable to study or work for days.',
    isFact: false,
    correctAnswer: 'myth',
    officialGuidance: 'Egyptian Ministry of Health & WHO Guidelines',
    explanation: 'A healthy adult has approximately 5 liters of blood, and a donation takes less than 10% (~450ml). Your fluid volume is fully replaced within 24 to 48 hours simply by drinking extra water and having a meal. Most Egyptian university students resume their lectures and daily activities within an hour of resting and having a light juice and snack.',
    keyTakeaway: 'The human body naturally replenishes donation fluid within 48 hours. You do not stay weak for days.',
    sourceAuthority: 'Egyptian National Blood Transfusion Services (NBTS)'
  },
  {
    id: 'q2',
    question: 'People with tattoos, microblading, or piercings can never donate blood for the rest of their lives.',
    isFact: false,
    correctAnswer: 'myth',
    officialGuidance: 'Updated NBTS & WHO Blood Safety Protocols',
    explanation: 'This is a persistent myth! Under modern Egyptian Ministry of Health and WHO guidelines, having a tattoo or piercing does NOT disqualify you permanently. As long as it has been at least 4 to 6 months since the procedure and all routine viral screen tests (HCV, HBV, HIV) are clear, you are fully eligible to donate.',
    keyTakeaway: 'Tattoos do not ban you for life! You only need to wait 4-6 months before donating safely.',
    sourceAuthority: 'Ministry of Health and Population (MOHP Egypt)'
  },
  {
    id: 'q3',
    question: 'One single blood donation in Egypt can save up to three different patients.',
    isFact: true,
    correctAnswer: 'fact',
    officialGuidance: 'Component Therapy Medical Standard',
    explanation: 'Regional Egyptian blood banks (like Agouza, Kom El-Dikka, or Kasr Al-Ainy) never waste whole blood. Automated centrifuges separate every donated bag into 3 life-saving components: Packed Red Cells (for surgery & thalassemia), Platelets (for childhood cancer at Hospital 57357), and Plasma (for burns & coagulopathy). One donation treats up to three individuals.',
    keyTakeaway: '1 donation = Red cells + Platelets + Plasma = up to 3 patients helped.',
    sourceAuthority: 'Egyptian National Blood Transfusion Center (Agouza)'
  },
  {
    id: 'q4',
    question: 'Taking common daily medications like seasonal allergy pills, vitamins, or thyroid hormones automatically bans you.',
    isFact: false,
    correctAnswer: 'myth',
    officialGuidance: 'Egyptian Donor Medication Safety Protocols',
    explanation: 'Most common medications do NOT prevent you from donating! Over-the-counter antihistamines, vitamins, controlled blood pressure medication, and hormone supplements are generally acceptable. Deferrals apply only to specific drugs such as active antibiotic courses, certain blood thinners, or recent severe infection treatments.',
    keyTakeaway: 'Common everyday vitamins, allergy medications, and mild treatments do not disqualify you.',
    sourceAuthority: 'Egyptian Red Crescent & NBTS'
  },
  {
    id: 'q5',
    question: 'Synthetic lab-grown blood is already mass-produced and used in Egyptian emergency rooms.',
    isFact: false,
    correctAnswer: 'myth',
    officialGuidance: 'Hematology Medical Reality',
    explanation: 'There is zero artificial blood in Egyptian emergency rooms or anywhere else in the world for routine care. Synthetic oxygen carriers have repeatedly failed in human trials due to toxicity and stroke risks. Egyptian hospitals rely 100% on living human donors to save lives.',
    keyTakeaway: 'There is no factory blood. Egyptian patients depend entirely on voluntary community donors.',
    sourceAuthority: 'World Health Organization (WHO) Eastern Mediterranean Region'
  },
  {
    id: 'q6',
    question: 'If you have Type O-Positive blood, your blood is not as urgently needed as O-Negative in Egypt.',
    isFact: false,
    correctAnswer: 'myth',
    officialGuidance: 'Egyptian Blood Type Demographics',
    explanation: 'Type O-Positive is the most common blood type in Egypt (~30% to 35% of the population) and is by far the most heavily consumed blood type in Egyptian trauma centers, surgeries, and pediatric hospitals! While O-Negative is the universal donor for emergencies, O-Positive has the highest daily volume demand.',
    keyTakeaway: 'Type O+ is in massive daily demand across all Egyptian emergency and surgical wards.',
    sourceAuthority: 'Egyptian National Blood Transfusion Services'
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    title: 'Registration & Mini-Physical in Egypt',
    subtitle: 'Strict Safety Check for Donor and Recipient',
    duration: '~15 minutes',
    temperature: 'Room Temp',
    summary: 'At an Egyptian NBTS center or mobile blood drive bus, you fill out a confidential medical questionnaire. A doctor checks your blood pressure, pulse, and performs a rapid finger-prick hemoglobin test to verify your iron levels are strong.',
    details: [
      'Hemoglobin check (must be ≥ 12.5 g/dL for women, ≥ 13.0 g/dL for men)',
      'Confidential screening for infectious exposure and travel history',
      'Free mini-health checkup verifying your vitals'
    ],
    equipment: 'Digital hemoglobinometer, calibrated sphygmomanometer',
    safetyFact: 'If your hemoglobin is slightly low today, our Egyptian medical team advises you on iron-rich nutrition.'
  },
  {
    stepNumber: 2,
    title: 'The Collection (The 10-Minute Gift)',
    subtitle: 'Completely Sterile, 100% Infection-Free',
    duration: '8-10 minutes',
    temperature: 'Body Temp (37°C)',
    summary: 'You recline in an ergonomic donor chair. An Egyptian certified phlebotomist opens a brand-new, sterile, single-use needle kit sealed in tamper-proof plastic. Exactly 450ml of whole blood flows into an anticoagulant bag on an automated mixer scale.',
    details: [
      'Needles are strictly single-use and incinerated immediately after—zero risk of infection',
      'Small side-tubes are filled first for central laboratory testing',
      'Relax with fruit juice, biscuits, and water for 10 minutes right after'
    ],
    equipment: 'Automated blood mixer scale, sealed sterile blood collection pack with CPDA-1',
    safetyFact: 'It is medically impossible to contract Hepatitis C, B, or HIV by donating blood.'
  },
  {
    stepNumber: 3,
    title: 'Rigorous Central Laboratory Testing',
    subtitle: 'Screened to Egyptian & International Standards',
    duration: '~12-24 hours',
    temperature: '4°C Controlled',
    summary: 'Test tubes are sent to central testing labs (such as the Central Public Health Laboratories in Cairo or Regional NBTS labs). Automated robotic machines perform ABO/Rh blood typing and ultra-sensitive screening for Hepatitis B, Hepatitis C, HIV, and Syphilis.',
    details: [
      'Mandatory screening for HCV, HBV, HIV 1 & 2, and Syphilis using ELISA and NAT',
      'High-precision ABO/Rh typing and irregular red cell antibody screening',
      'If any unit tests reactive, it is safely destroyed and the donor is contacted confidentially'
    ],
    equipment: 'Automated chemiluminescence analyzers, Nucleic Acid Testing (NAT) cyclers',
    safetyFact: 'Egyptian blood banking follows strict WHO viral clearance and testing protocols.'
  },
  {
    stepNumber: 4,
    title: 'Component Fractionation & Separation',
    subtitle: 'Formulating Three Distinct Medicines in Egypt',
    duration: '~2 hours',
    temperature: 'Specific to each component',
    summary: 'The whole blood unit is placed into high-capacity refrigerated centrifuges. Spinning at thousands of RPM separates the blood into Packed Red Cells, Platelets, and Fresh Frozen Plasma based on their density.',
    details: [
      'Red Blood Cells: Kept at 2°C to 6°C with preservative solution (shelf life 35-42 days)',
      'Platelets: Kept on continuous gentle mechanical rocking agitators at 20°C to 24°C (expires in 5-7 days)',
      'Plasma: Flash-frozen at -25°C or colder to preserve clotting factors (shelf life up to 1 year)'
    ],
    equipment: 'Refrigerated blood bank centrifuges, automated optical plasma extractors',
    safetyFact: 'Each component receives a national barcoded Egyptian label for complete vein-to-vein traceability.'
  },
  {
    stepNumber: 5,
    title: 'Emergency Delivery to Egyptian Hospitals',
    subtitle: 'Reaching Trauma Bays, Cancer Wards, and Delivery Rooms',
    duration: '24/7 Rapid Logistics',
    temperature: 'Insulated Cold-Chain',
    summary: 'Cold-chain delivery vehicles dispatch units 24/7 to hospital blood banks across Egyptian governorates—Kasr Al-Ainy, Hospital 57357, Ain Shams, Alexandria Main, Mansoura Emergency, and Assiut University Hospitals.',
    details: [
      'Delivered to Hospital 57357 and NCI for pediatric leukemia chemotherapy patients',
      'Sent to Kasr Al-Ainy and provincial emergency hospitals for highway collision trauma',
      'Rushed to maternity units across Egypt to prevent maternal postpartum hemorrhage'
    ],
    equipment: 'Temperature-monitored refrigerated transport boxes, hospital cross-matching analyzers',
    safetyFact: 'Transfused through sterile bedside micro-filters to ensure safety for the patient.'
  }
];

export const BLOOD_COMPONENTS: BloodComponentInfo[] = [
  {
    name: 'Packed Red Blood Cells',
    colorName: 'Deep Crimson',
    shelfLife: '35 to 42 Days',
    storageTemp: '2°C to 6°C (Refrigerated)',
    primaryPatients: [
      '10,000+ Thalassemia children across Egypt',
      'Highway collision & trauma victims at Kasr Al-Ainy & Alexandria Emergency',
      'Open-heart and major surgical patients',
      'Severe sickle cell and chronic anemia patients'
    ],
    keyFunction: 'Carries oxygen from the lungs to vital organs and brain tissue throughout the entire body.',
    percentageOfBlood: '~44% of whole blood volume'
  },
  {
    name: 'Platelets (Thrombocytes)',
    colorName: 'Golden Straw',
    shelfLife: '5 to 7 Days Only',
    storageTemp: '20°C to 24°C (Continuous Rocking)',
    primaryPatients: [
      'Children battling leukemia at Hospital 57357',
      'Cancer patients at the National Cancer Institute (NCI) in Cairo',
      'Bone marrow transplant recipients at Ain Shams & Alexandria',
      'Massive hemorrhagic trauma patients'
    ],
    keyFunction: 'Microscopic cell fragments that stick together to form clots and stop bleeding.',
    percentageOfBlood: '<1% of whole blood volume'
  },
  {
    name: 'Fresh Frozen Plasma',
    colorName: 'Clear Amber',
    shelfLife: 'Up to 12 Months',
    storageTemp: '-25°C or colder (Deep Frozen)',
    primaryPatients: [
      'Severe burn shock victims at Ahl Masr Burn Hospital',
      'Mothers experiencing postpartum obstetric hemorrhage',
      'Liver failure and cirrhosis patients with clotting deficiencies',
      'Major surgical bleeding complications'
    ],
    keyFunction: 'Contains vital coagulation factors, albumin, and antibodies to restore blood volume and stop runaway bleeding.',
    percentageOfBlood: '~55% of whole blood volume'
  },
  {
    name: 'Cryoprecipitate',
    colorName: 'Frosted Amber Concentrate',
    shelfLife: 'Up to 12 Months',
    storageTemp: '-25°C (Frozen concentrate)',
    primaryPatients: [
      'Egyptian Hemophilia A patients lacking Factor VIII',
      'Catastrophic maternal hemorrhage cases',
      'Massive trauma with fibrinogen depletion'
    ],
    keyFunction: 'Concentrated fibrinogen and clotting factors that rapidly halt catastrophic bleeding.',
    percentageOfBlood: 'Concentrate derived from frozen plasma'
  }
];

export const PATIENT_STORIES: PatientStory[] = [
  {
    id: 'youssef-story',
    name: 'Youssef M.',
    age: 7,
    condition: 'Beta-Thalassemia Major',
    location: 'Tanta / Gharbia Governorate',
    hospital: 'Tanta Regional Blood Center & University Hospital',
    unitsReceived: '2 units of Packed Red Cells every 21 days (~28 units/year)',
    recipientCategory: 'Thalassemia Major',
    quote: 'Every month when I get my blood, I get my energy back to run and play with my classmates in school.',
    story: 'Youssef was diagnosed with Beta-Thalassemia Major at 8 months old. In Egypt, thousands of children inherit this condition, meaning their bodies cannot produce enough functional red blood cells. To stay alive and avoid severe bone and heart damage, Youssef visits the regional blood bank in Tanta every three weeks for an automated transfusion of 2 units of washed red cells. When blood banks face shortages during exam or holiday seasons, his family anxiously waits for matching donors.',
    outcome: 'Thanks to regular donors at the Tanta Regional Center, Youssef is thriving in primary school and dreams of becoming a pediatrician.',
    donorGratitudeQuote: 'To the Egyptian donor who gave blood without knowing my boy: you are giving him a normal childhood and a future.',
    tag: 'Thalassemia Hero'
  },
  {
    id: 'ziad-story',
    name: 'Ziad A.',
    age: 9,
    condition: 'Acute Lymphoblastic Leukemia (ALL)',
    location: 'Cairo (Sayeda Zeinab)',
    hospital: 'Hospital 57357 (Children’s Cancer Hospital Egypt)',
    unitsReceived: '42 Platelet Transfusions & 18 Red Cell Units',
    recipientCategory: 'Pediatric Cancer (57357)',
    quote: 'The yellow platelet bags stopped my nose and gums from bleeding so I could finish my chemotherapy.',
    story: 'At age eight, Ziad was admitted to Hospital 57357 with acute leukemia. Intensive chemotherapy was required to wipe out the cancer cells, but it also temporarily wiped out his bone marrow’s ability to generate platelets. With a platelet count dropping to dangerously low levels, even a light scratch or nosebleed could cause fatal internal hemorrhaging. Over 14 months of treatment, Ziad relied on 42 platelet donations—each collected by Egyptian volunteer donors within 48 hours of infusion.',
    outcome: 'Ziad has completed his active chemo protocol, is in full remission, and proudly holds his 57357 graduation certificate.',
    donorGratitudeQuote: 'Hospital 57357 relies entirely on donations. The young Egyptian university students who come to donate platelets are true heroes.',
    tag: '57357 Remission'
  },
  {
    id: 'nour-story',
    name: 'Nour E.',
    age: 26,
    condition: 'Severe Postpartum Hemorrhage',
    location: 'Cairo',
    hospital: 'Kasr Al-Ainy Maternity & Obstetrics Hospital',
    unitsReceived: '4 units of Red Blood Cells & 2 units of Fresh Frozen Plasma',
    recipientCategory: 'Maternal Emergency (Kasr Al-Ainy)',
    quote: 'Those 6 bags of blood gave my newborn son Kareem his mother.',
    story: 'Nour was delivering her first child at Kasr Al-Ainy Hospital when an unexpected uterine atony triggered sudden, massive postpartum hemorrhage. Within 15 minutes, her blood pressure collapsed into hypovolemic shock. The obstetrics team immediately activated the emergency blood transfusion protocol. Because the hospital blood bank had pre-tested O-positive red cells and fresh plasma on hand, the surgical team stabilized Nour in time.',
    outcome: 'Nour recovered completely and was discharged with baby Kareem. Her husband and family have pledged to donate blood every 3 months at Kasr Al-Ainy.',
    donorGratitudeQuote: 'Without anonymous Egyptian donors who gave blood beforehand, I would not be here to hold my son.',
    tag: 'Kasr Al-Ainy Survivor'
  },
  {
    id: 'dr-tamer-story',
    name: 'Dr. Tamer El-Sayed',
    age: 44,
    condition: 'Trauma & Emergency Surgery Consultant',
    location: 'Alexandria',
    hospital: 'Alexandria Main University Emergency Hospital',
    unitsReceived: 'Administers ~70 blood and plasma units weekly',
    recipientCategory: 'Trauma Surgery',
    quote: 'When highway accident victims arrive at 3 AM, donor blood already in the refrigerator is what stands between life and death.',
    story: 'Serving at the Alexandria Main University Hospital—which receives severe trauma cases from the Cairo-Alexandria Desert Road and Agricultural Highway—Dr. Tamer deals with acute hemorrhagic shock daily. "Saline solutions cannot carry oxygen to a damaged brain. Blood is our only medical salvation. When an emergency happens, there is no time to test a family member on the spot—we must pull safe, pre-tested blood directly from our cold storage."',
    outcome: 'Proactive regional youth donation campaigns in Alexandria have increased their emergency blood reserve by 35% this year.',
    donorGratitudeQuote: 'Do not wait for a crisis to donate. Donate regularly so that when our pager beeps tonight, our shelves are ready.',
    tag: 'Emergency Frontline'
  }
];

export const BLOOD_TYPES_COMPATIBILITY = [
  { type: 'O-', canGiveRedCellsTo: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'], canReceiveRedCellsFrom: ['O-'], canGivePlasmaTo: ['O-'], badge: 'Universal Red Cell Donor', emergencyRole: 'First-line emergency trauma blood in Egyptian ERs before typing is done' },
  { type: 'O+', canGiveRedCellsTo: ['O+', 'A+', 'B+', 'AB+'], canReceiveRedCellsFrom: ['O-', 'O+'], canGivePlasmaTo: ['O-', 'O+'], badge: 'Most Common in Egypt (~35%)', emergencyRole: 'Heaviest daily demand in all Egyptian surgical and emergency hospitals' },
  { type: 'A-', canGiveRedCellsTo: ['A-', 'A+', 'AB-', 'AB+'], canReceiveRedCellsFrom: ['O-', 'A-'], canGivePlasmaTo: ['A-', 'A+', 'O-', 'O+'], badge: 'Rare in Egypt (~3%)', emergencyRole: 'Vital for specialized surgical matches and chronic anemia' },
  { type: 'A+', canGiveRedCellsTo: ['A+', 'AB+'], canReceiveRedCellsFrom: ['O-', 'O+', 'A-', 'A+'], canGivePlasmaTo: ['A+', 'AB+'], badge: 'High Demand in Egypt (~32%)', emergencyRole: 'Essential for frequent transfusions, cancer support, and operations' },
  { type: 'B-', canGiveRedCellsTo: ['B-', 'B+', 'AB-', 'AB+'], canReceiveRedCellsFrom: ['O-', 'B-'], canGivePlasmaTo: ['B-', 'B+', 'O-', 'O+'], badge: 'Rare Blood Type (~2%)', emergencyRole: 'Crucial for thalassemia children and emergency obstetrics' },
  { type: 'B+', canGiveRedCellsTo: ['B+', 'AB+'], canReceiveRedCellsFrom: ['O-', 'O+', 'B-', 'B+'], canGivePlasmaTo: ['B+', 'AB+'], badge: 'Common in Egypt (~18%)', emergencyRole: 'High demand across Egyptian delta and upper Egypt blood centers' },
  { type: 'AB-', canGiveRedCellsTo: ['AB-', 'AB+'], canReceiveRedCellsFrom: ['O-', 'A-', 'B-', 'AB-'], canGivePlasmaTo: ['AB-', 'AB+'], badge: 'Rare Universal Plasma Donor', emergencyRole: 'Plasma can be given to all blood types safely' },
  { type: 'AB+', canGiveRedCellsTo: ['AB+'], canReceiveRedCellsFrom: ['Everyone (Universal Recipient)'], canGivePlasmaTo: ['All Blood Types (Universal Plasma Donor)'], badge: 'Universal Plasma Gold', emergencyRole: 'Golden standard for burn and trauma plasma transfusions in Egypt' }
];

export const CARD_SLOGANS = [
  { id: '1', text: 'A single drop equals a life. Save a patient in Egypt today.', category: 'National Impact' },
  { id: '2', text: 'Blood cannot be manufactured. Only you can give it.', category: 'Scientific' },
  { id: '3', text: '1 Blood Unit = Up to 3 Children and Patients Saved in Egypt.', category: 'Action' },
  { id: '4', text: 'Be the reason an Egyptian heart keeps beating.', category: 'Inspirational' },
  { id: '5', text: 'I pledged to donate blood for patients in Egypt. Will you? #GiveBloodEgypt', category: 'Youth Movement' }
];
