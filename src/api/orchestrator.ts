import { ServiceRecord, IntentAnalysisResult, CitizenProfile, JourneyStep } from '../types';
import { AP_VERIFIED_SERVICES } from '../data/services';
import { AP_DISTRICTS } from '../data/districts';

// Simulated Intent Mapping Rules for Natural Language
const INTENT_KEYWORDS: Record<string, string[]> = {
  'ap-caste-cert': [
    'caste', 'community', 'sc', 'st', 'bc', 'integrated certificate', 'kula', 'కుల',
    'కుల ధ్రువీకరణ', 'జాతి', 'జన్మ ధ్రువీకరణ', 'community certificate', 'nativity'
  ],
  'ap-income-cert': [
    'income', 'aadayam', 'salary', 'ఆదాయ', 'ఆదాయం', 'scholarship income', 'e-pass income',
    'आय', 'आय प्रमाण पत्र', 'fee reimbursement income', 'income certificate'
  ],
  'ap-jnanabhumi-scholarship': [
    'scholarship', 'jnanabhumi', 'fee reimbursement', 'vidya deevena', 'vasathi deevena',
    'college fee', 'విద్యా దీవెన', 'వసతి దీవెన', 'జ్ఞానభూమి', 'స్కాలర్‌షిప్', 'छात्रवृत्ति'
  ],
  'ap-meebhoomi-adangal': [
    'adangal', 'pahani', 'meebhoomi', '1-b', '1b', 'land record', 'survey number',
    'అడంగల్', 'పహానీ', 'మీభూమి', 'భూమి', 'ఖాతా', 'अडंगल', 'जमीन'
  ],
  'ap-igrs-ec': [
    'ec', 'encumbrance', 'property', 'registration', 'sale deed', 'sub registrar',
    'ఈసీ', 'ఎన్‌కంబరెన్స్', 'రిజిస్ట్రేషన్', 'భారరహిత', 'भार'
  ],
  'ap-driving-licence': [
    'driving', 'licence', 'license', 'llr', 'learner', 'rto', 'rta', 'bike', 'car',
    'డ్రైవింగ్', 'లైసెన్స్', 'ఆర్టీవో', 'డ్రైవింగ్ లైసెన్స్', 'ड्राइविंग'
  ],
  'ap-electricity-connection': [
    'electricity', 'power', 'current', 'meter', 'connection', 'discom', 'apcpdcl', 'apepdcl', 'apspdcl',
    'విద్యుత్', 'కరెంట్', 'మీటర్', 'కరెంట్ కనెక్షన్', 'बिजली'
  ],
  'ap-rice-card': [
    'rice card', 'ration card', 'ration', 'epds', 'bpl card', 'white ration',
    'బియ్యం కార్డు', 'రేషన్ కార్డు', 'చావల్ కార్డు', 'రాషన్'
  ],
  'ap-birth-cert': [
    'birth', 'born', 'baby', 'birth certificate', 'date of birth', 'hospital birth',
    'జనన', 'పుట్టిన తేదీ', 'బర్త్ సర్టిఫికెట్', 'పుట్టుక', 'जन्म'
  ],
  'ap-social-pension': [
    'pension', 'old age', 'widow', 'ntr bharosa', 'ysr pension', 'disabled pension',
    'పింఛన్', 'పెన్షన్', 'వృద్ధాప్య', 'వితంతు', 'ఎన్టీఆర్ భరోసా', 'पेंशन'
  ]
};

export class GovflowOrchestrator {
  /**
   * Analyzes the citizen query to determine intent, matched service, and clarification requirements
   */
  public static analyzeIntent(query: string, userPurpose?: string): IntentAnalysisResult | null {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) return null;

    let bestMatch: ServiceRecord | null = null;
    let highestScore = 0;

    for (const service of AP_VERIFIED_SERVICES) {
      const keywords = INTENT_KEYWORDS[service.id] || [];
      let score = 0;

      // Check keywords
      for (const kw of keywords) {
        if (cleanQuery.includes(kw.toLowerCase())) {
          score += 3;
        }
      }

      // Check service name matches
      if (cleanQuery.includes(service.serviceName.en.toLowerCase()) ||
          cleanQuery.includes(service.serviceName.te.toLowerCase()) ||
          cleanQuery.includes(service.serviceName.hi.toLowerCase())) {
        score += 5;
      }

      // Check description matches
      if (service.description.en.toLowerCase().includes(cleanQuery)) {
        score += 2;
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = service;
      }
    }

    // Default to first verified service if a generic request like "certificate" is entered
    if (!bestMatch && (cleanQuery.includes('certificate') || cleanQuery.includes('సర్టిఫికెట్') || cleanQuery.includes('ప్రమాణ'))) {
      bestMatch = AP_VERIFIED_SERVICES[0]; // Caste
      highestScore = 2;
    }

    if (!bestMatch || highestScore < 1) {
      return null; // Return null so the UI can gracefully show unverified/error state
    }

    // Determine clarification questions (District & Urban/Rural are required for AP localized routing)
    const clarificationsNeeded = [
      {
        id: 'district',
        question: {
          en: 'Which Andhra Pradesh district do you reside in?',
          te: 'మీరు ఆంధ్రప్రదేశ్‌లోని ఏ జిల్లాలో నివసిస్తున్నారు?',
          hi: 'आप आंध्र प्रदेश के किस जिले में रहते हैं?'
        },
        helperText: {
          en: 'Helps us route to your local Tahsildar, Discom (Power), and District Collectorate.',
          te: 'మీ స్థానిక తహశీల్దార్, డిస్కామ్ మరియు కలెక్టరేట్ వివరాలను చూపడానికి ఇది ఉపయోగపడుతుంది.',
          hi: 'स्थानीय कार्यालयों के निर्धारण के लिए।'
        },
        options: AP_DISTRICTS.map(d => ({
          value: d.id,
          label: {
            en: d.nameEn,
            te: d.nameTe,
            hi: d.nameEn
          }
        }))
      },
      {
        id: 'locationType',
        question: {
          en: 'Are you located in a Rural or Urban area?',
          te: 'మీ నివాసం గ్రామీణ ప్రాంతంలో ఉందా లేదా పట్టణ ప్రాంతంలోనా?',
          hi: 'क्या आपका निवास ग्रामीण क्षेत्र में है या शहरी में?'
        },
        helperText: {
          en: 'Routes between Grama Sachivalayam (Village) and Ward Sachivalayam (Municipality).',
          te: 'గ్రామ సచివాలయం లేదా వార్డు సచివాలయం సిబ్బందిని సరిగ్గా నిర్ణయించడానికి.',
          hi: 'ग्राम अथवा वार्ड सचिवालय के चयन के लिए।'
        },
        options: [
          {
            value: 'rural',
            label: {
              en: 'Rural (Village Panchayat / Grama Sachivalayam)',
              te: 'గ్రామీణ ప్రాంతం (గ్రామ పంచాయతీ / గ్రామ సచివాలయం)',
              hi: 'ग्रामीण (ग्राम पंचायत / ग्राम सचिवालय)'
            }
          },
          {
            value: 'urban',
            label: {
              en: 'Urban (Municipality / Municipal Corporation / Ward Sachivalayam)',
              te: 'పట్టణ ప్రాంతం (మున్సిపాలిటీ / కార్పొరేషన్ / వార్డు సచివాలయం)',
              hi: 'शहरी (नगरपालिका / वार्ड सचिवालय)'
            }
          }
        ]
      }
    ];

    return {
      matchedService: bestMatch,
      confidence: Math.min(highestScore / 10, 1.0),
      clarificationsNeeded,
      userGoal: query,
      userPurpose
    };
  }

  /**
   * Generates a complete, tailored journey based on service, profile, and held documents
   */
  public static generateJourney(
    serviceId: string,
    profile?: CitizenProfile,
    heldDocIds: string[] = []
  ): ServiceRecord | null {
    const baseService = AP_VERIFIED_SERVICES.find(s => s.id === serviceId);
    if (!baseService) return null;

    // Clone deep
    const customizedService: ServiceRecord = JSON.parse(JSON.stringify(baseService));

    // Update document statuses based on heldDocIds
    customizedService.documents.forEach(doc => {
      if (heldDocIds.includes(doc.id)) {
        doc.status = 'have';
      } else {
        doc.status = 'need';
      }
    });

    // If citizen has selected a district, personalize electricity Discom & venue
    if (profile?.district) {
      const dist = AP_DISTRICTS.find(d => d.id === profile.district);
      if (dist) {
        // Customize step details with the actual district and headquarters
        customizedService.steps.forEach(step => {
          if (step.offlineVenue?.includes('Tahsildar')) {
            step.offlineVenue = `${step.offlineVenue} (${dist.nameEn} District)`;
          }
          if (step.offlineVenue?.includes('Discom') || step.department.includes('Discom')) {
            step.offlineVenue = `${dist.discom} Section Office (${dist.nameEn})`;
          }
        });
      }
    }

    // Recalculate journey steps: If citizen already has required foundational documents,
    // we can mark step 2 ("Assemble Foundational Identity & Family Proofs") as completed or streamlined!
    const allRequiredDocsHeld = customizedService.documents
      .filter(d => d.category === 'required')
      .every(d => heldDocIds.includes(d.id));

    if (allRequiredDocsHeld) {
      customizedService.steps.forEach(step => {
        if (step.stage === 'document_prep' || step.stage === 'prerequisite_cert') {
          step.completed = true;
        }
      });
    }

    return customizedService;
  }

  /**
   * Global Search across verified AP services
   */
  public static searchServices(searchQuery: string): ServiceRecord[] {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return AP_VERIFIED_SERVICES;

    return AP_VERIFIED_SERVICES.filter(service => {
      const matchNameEn = service.serviceName.en.toLowerCase().includes(q);
      const matchNameTe = service.serviceName.te.toLowerCase().includes(q);
      const matchNameHi = service.serviceName.hi.toLowerCase().includes(q);
      const matchDesc = service.description.en.toLowerCase().includes(q) || service.description.te.toLowerCase().includes(q);
      const matchDept = service.department.toLowerCase().includes(q);
      const matchCategory = service.category.toLowerCase().includes(q);
      const matchDocs = service.documents.some(d =>
        d.name.en.toLowerCase().includes(q) ||
        d.name.te.toLowerCase().includes(q)
      );

      return matchNameEn || matchNameTe || matchNameHi || matchDesc || matchDept || matchCategory || matchDocs;
    });
  }
}
