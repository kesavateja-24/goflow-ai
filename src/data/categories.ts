export interface ServiceCategory {
  id: string;
  name: {
    en: string;
    te: string;
    hi: string;
  };
  description: {
    en: string;
    te: string;
    hi: string;
  };
  iconName: string;
  count: number;
  featuredServices: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'certificates',
    name: {
      en: 'Certificates & Identity',
      te: 'ధ్రువీకరణ పత్రాలు & గుర్తింపు',
      hi: 'प्रमाणपत्र और पहचान'
    },
    description: {
      en: 'Integrated caste, income, residence, nativity, and legal heir certificates issued by Revenue & MeeSeva.',
      te: 'రెవెన్యూ మరియు మీసేవ ద్వారా జారీ చేయబడే కుల, ఆదాయ, నివాస మరియు వారసత్వ ధ్రువపత్రాలు.',
      hi: 'राजस्व और मीसेवा द्वारा जारी एकीकृत जाति, आय, निवास और कानूनी वारिस प्रमाण पत्र।'
    },
    iconName: 'FileText',
    count: 14,
    featuredServices: ['ap-caste-cert', 'ap-income-cert', 'ap-residence-cert']
  },
  {
    id: 'education',
    name: {
      en: 'Education & Scholarships',
      te: 'విద్య & ఉపకార వేతనాలు',
      hi: 'शिक्षा और छात्रवृत्ति'
    },
    description: {
      en: 'Jnanabhumi post-matric fee reimbursement (Vidya Deevena), pre-matric aid, and academic verifications.',
      te: 'జ్ఞానభూమి పోస్ట్-మెట్రిక్ ఫీజు రీయింబర్స్‌మెంట్ (విద్యా దీవెన), హాస్టల్ వసతి మరియు ఉపకార వేతనాలు.',
      hi: 'ज्ञानभूमि पोस्ट-मैट्रिक शुल्क प्रतिपूर्ति (विद्या दीवेना), प्री-मैट्रिक सहायता।'
    },
    iconName: 'GraduationCap',
    count: 8,
    featuredServices: ['ap-jnanabhumi-scholarship']
  },
  {
    id: 'welfare',
    name: {
      en: 'Welfare & Social Security',
      te: 'సంక్షేమం & సామాజిక భద్రత',
      hi: 'कल्याण और सामाजिक सुरक्षा'
    },
    description: {
      en: 'NTR Bharosa pensions for elderly, widows, weavers, and disabled, delivered directly via Secretariats.',
      te: 'వృద్ధాప్య, వితంతు, చేనేత మరియు దివ్యాంగుల పింఛన్లు — గ్రామ/వార్డు సచివాలయాల ద్వారా పంపిణీ.',
      hi: 'बुजुर्गों, विधवाओं, बुनकरों और दिव्यांगों के लिए पेंशन।'
    },
    iconName: 'HeartHandshake',
    count: 12,
    featuredServices: ['ap-social-pension', 'ap-rice-card']
  },
  {
    id: 'revenue',
    name: {
      en: 'Revenue & Land Records',
      te: 'రెవెన్యూ & భూ రికార్డులు',
      hi: 'राजस्व और भूमि अभिलेख'
    },
    description: {
      en: 'Meebhoomi Adangal (Pahani), 1-B ROR, Pattadar passbook, and land mutation through CCLA AP.',
      te: 'మీభూమి అడంగల్, 1-బి ఖాతా రికార్డులు, పట్టాదార్ పాస్‌పుస్తకం మరియు మ్యుటేషన్ సేవలు.',
      hi: 'मीभूमि अडंगल, 1-बी खाता रिकॉर्ड, पट्टादार पासबुक और भूमि नामांतरण।'
    },
    iconName: 'Scroll',
    count: 16,
    featuredServices: ['ap-meebhoomi-adangal', 'ap-igrs-ec']
  },
  {
    id: 'transport',
    name: {
      en: 'Transport & Driving Licences',
      te: 'రవాణా & డ్రైవింగ్ లైసెన్సులు',
      hi: 'परिवहन और ड्राइविंग लाइसेंस'
    },
    description: {
      en: 'Learners licence (LLR), driving licence renewal, international permits, and vehicle RC transfer.',
      te: 'లెర్నర్ లైసెన్స్ (LLR), శాశ్వత డ్రైవింగ్ లైసెన్స్, వాహన నమోదు మరియు యాజమాన్య బదిలీ.',
      hi: 'लर्नर लाइसेंस, ड्राइविंग लाइसेंस नवीनीकरण, वाहन पंजीकरण।'
    },
    iconName: 'Car',
    count: 11,
    featuredServices: ['ap-driving-licence']
  },
  {
    id: 'utilities',
    name: {
      en: 'Utilities & Power Connections',
      te: 'విద్యుత్ & మౌలిక సదుపాయాలు',
      hi: 'उपयोगिताएँ और बिजली कनेक्शन'
    },
    description: {
      en: 'New domestic/commercial LT electricity connection across APCPDCL, APEPDCL, and APSPDCL.',
      te: 'APCPDCL, APEPDCL, APSPDCL పరిధిలో నూతన విద్యుత్ కనెక్షన్ మరియు పేరు మార్పు.',
      hi: 'नए घरेलू/वाणिज्यिक एलटी बिजली कनेक्शन।'
    },
    iconName: 'Zap',
    count: 9,
    featuredServices: ['ap-electricity-connection']
  },
  {
    id: 'civil_supplies',
    name: {
      en: 'Civil Supplies & Ration Cards',
      te: 'పౌర సరఫరాలు & బియ్యం కార్డులు',
      hi: 'नागरिक आपूर्ति और राशन कार्ड'
    },
    description: {
      en: 'New Rice Card application, member split, member addition, and ePDS Public Distribution.',
      te: 'కొత్త బియ్యం కార్డు దరఖాస్తు, కుటుంబ సభ్యుల చేరిక/తొలగింపు మరియు చిరునామా మార్పు.',
      hi: 'नया चावल कार्ड आवेदन, सदस्य जोड़ना और ईपीडीएस सार्वजनिक वितरण।'
    },
    iconName: 'ShoppingBag',
    count: 6,
    featuredServices: ['ap-rice-card']
  },
  {
    id: 'municipal',
    name: {
      en: 'Municipal & Urban Services',
      te: 'పురపాలక & నగర సేవలు',
      hi: 'नगरपालिका और शहरी सेवाएं'
    },
    description: {
      en: 'Birth and death certificates, property tax assessments, and CDMA online trade licenses.',
      te: 'జనన మరియు మరణ ధ్రువీకరణ పత్రాలు, ఆస్తి పన్ను అసెస్‌మెంట్ మరియు వాణిజ్య లైసెన్సులు.',
      hi: 'जन्म और मृत्यु प्रमाण पत्र, संपत्ति कर मूल्यांकन और व्यापार लाइसेंस।'
    },
    iconName: 'Building2',
    count: 10,
    featuredServices: ['ap-birth-cert', 'ap-trade-licence']
  },
  {
    id: 'housing',
    name: {
      en: 'Housing & Colonization',
      te: 'గృహనిర్మాణం & పట్టాలు',
      hi: 'आवास और कालोनाइजेशन'
    },
    description: {
      en: 'Affordable housing allotment, house site patta registration, and possession certificates.',
      te: 'పేదలందరికీ ఇళ్లు పథకం, ఇళ్ల స్థలాల పట్టాలు మరియు స్వాధీన ధ్రువీకరణ పత్రాలు.',
      hi: 'किफायती आवास आवंटन, घर की जमीन का पट्टा।'
    },
    iconName: 'Home',
    count: 7,
    featuredServices: ['ap-house-site-patta']
  },
  {
    id: 'agriculture',
    name: {
      en: 'Agriculture & Rythu Bharosa',
      te: 'వ్యవసాయం & రైతు సేవలు',
      hi: 'कृषि और किसान सेवाएं'
    },
    description: {
      en: 'Rythu Seva Kendram (RSK) services, e-Crop booking, input subsidy, and soil health cards.',
      te: 'రైతు సేవా కేంద్రాలు (RSK), ఈ-క్రాప్ బుకింగ్, ఇన్‌పుట్ సబ్సిడీ మరియు విత్తనాల పంపిణీ.',
      hi: 'किसान सेवा केंद्र, ई-क्रॉप बुकिंग, इनपुट सब्सिडी।'
    },
    iconName: 'Sprout',
    count: 9,
    featuredServices: ['ap-ecrop-booking']
  },
  {
    id: 'health',
    name: {
      en: 'Health & Aarogyasri',
      te: 'వైద్యం & ఆరోగ్యశ్రీ',
      hi: 'स्वास्थ्य और आरोग्यश्री'
    },
    description: {
      en: 'Dr. YSR / NTR Aarogyasri health card generation, cashless hospital empaneled care, and disability certificates.',
      te: 'ఆరోగ్యశ్రీ హెల్త్ కార్డు, నెట్‌వర్క్ ఆసుపత్రుల ఉచిత చికిత్స మరియు సదరం (SADAREM) ధ్రువపత్రం.',
      hi: 'आरोग्यश्री स्वास्थ्य कार्ड, कैशलेस अस्पताल देखभाल।'
    },
    iconName: 'Stethoscope',
    count: 8,
    featuredServices: ['ap-sadarem-cert']
  },
  {
    id: 'employment',
    name: {
      en: 'Employment & Skill Development',
      te: 'ఉపాధి & నైపుణ్యాభివృద్ధి',
      hi: 'रोजगार और कौशल विकास'
    },
    description: {
      en: 'APSSDC skill development training, employment exchange registration, and MSME single desk clearances.',
      te: 'APSSDC నైపుణ్య శిక్షణ, ఎంప్లాయ్‌మెంట్ ఎక్స్ఛేంజ్ నమోదు మరియు పరిశ్రమల సింగిల్ డెస్క్.',
      hi: 'रोजगार विनिमय पंजीकरण और कौशल विकास।'
    },
    iconName: 'Briefcase',
    count: 6,
    featuredServices: ['ap-employment-exchange']
  }
];
