import { ServiceRecord } from '../types';

export const AP_VERIFIED_SERVICES: ServiceRecord[] = [
  // 1. Integrated Certificate (Caste, Nativity, Date of Birth)
  {
    id: 'ap-caste-cert',
    serviceName: {
      en: 'Integrated Certificate (Caste, Nativity & Date of Birth)',
      te: 'సమగ్ర ధ్రువీకరణ పత్రం (కుల, నివాస & జన్మ ధ్రువీకరణ)',
      hi: 'एकीकृत प्रमाण पत्र (जाति, निवास और जन्म)'
    },
    category: 'certificates',
    department: 'Revenue Department, Government of Andhra Pradesh',
    state: 'Andhra Pradesh',
    description: {
      en: 'Statutory certificate issued by the Tahsildar validating Scheduled Caste (SC), Scheduled Tribe (ST), Backward Class (BC), or Other Backward Class status, permanent residence, and official date of birth under AP Community, Nativity and Date of Birth Certificates Act.',
      te: 'ఆంధ్రప్రదేశ్ కమ్యూనిటీ, నివాస మరియు జన్మ ధ్రువపత్రాల చట్టం ప్రకారం తహశీల్దార్ వారిచే ఎస్సీ, ఎస్టీ, బీసీ లేదా నివాస నిర్ధారణ కోసం జారీ చేయబడే అధికారిక పత్రం.',
      hi: 'आंध्र प्रदेश समुदाय, निवास और जन्म प्रमाण पत्र अधिनियम के तहत तहसीलदार द्वारा जारी वैधानिक प्रमाण पत्र।'
    },
    eligibility: {
      criteria: {
        en: [
          'Applicant or their parents must be a permanent resident of Andhra Pradesh.',
          'Must belong to a notified SC, ST, or BC community recognized in the Gazette of Andhra Pradesh.',
          'For education/employment quotas, applicant must satisfy local candidate status under Presidential Order.'
        ],
        te: [
          'దరఖాస్తుదారు లేదా వారి తల్లిదండ్రులు ఆంధ్రప్రదేశ్ శాశ్వత నివాసి అయి ఉండాలి.',
          'ఆంధ్రప్రదేశ్ గెజిట్‌లో గుర్తించబడిన ఎస్సీ, ఎస్టీ, లేదా బీసీ వర్గానికి చెందినవారై ఉండాలి.',
          'విద్యా లేదా ప్రభుత్వ ఉద్యోగ రిజర్వేషన్ల కొరకు స్థానిక అభ్యర్థి నిబంధనలు వర్తిస్తాయి.'
        ],
        hi: [
          'आवेदक या उसके माता-पिता आंध्र प्रदेश के स्थायी निवासी होने चाहिए।',
          'आंध्र प्रदेश के अधिसूचित एससी, एसटी, या बीसी समुदाय से संबंधित होना चाहिए।'
        ]
      }
    },
    documents: [
      {
        id: 'doc-aadhaar',
        name: {
          en: 'Aadhaar Card (Applicant & Parent)',
          te: 'ఆధార్ కార్డు (దరఖాస్తుదారు మరియు తల్లి/తండ్రి)',
          hi: 'आधार कार्ड (आवेदक और माता-पिता)'
        },
        purpose: {
          en: 'Biometric identity proof and demographic verification.',
          te: 'బయోమెట్రిక్ గుర్తింపు మరియు చిరునామా ధ్రువీకరణ.',
          hi: 'बायोमेट्रिक पहचान प्रमाण और जनसांख्यिकीय सत्यापन।'
        },
        category: 'required',
        issuingAuthority: 'Unique Identification Authority of India (UIDAI)',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Instant via DigiLocker / Aadhaar Portal',
        whyRequired: {
          en: 'Required by Andhra Pradesh MeeSeva & GSWS for mandatory e-KYC and deduplication.',
          te: 'మీసేవ & సచివాలయం దరఖాస్తులో ఈ-కేవైసీ కొరకు ఆధార్ తప్పనిసరి.',
          hi: 'अनिवार्य ई-केवाईसी के लिए आवश्यक।'
        },
        dependencies: [],
        obtainedFrom: 'UIDAI Enrollment Centers or myAadhaar Portal',
        status: 'need'
      },
      {
        id: 'doc-school-tc',
        name: {
          en: 'School Transfer Certificate (TC) or Study Certificate',
          te: 'పాఠశాల ట్రాన్స్‌ఫర్ సర్టిఫికెట్ (TC) / స్టడీ సర్టిఫికెట్ (1వ నుండి 10వ తరగతి)',
          hi: 'स्कूल स्थानांतरण प्रमाण पत्र (टीसी) या अध्ययन प्रमाण पत्र'
        },
        purpose: {
          en: 'Proof of Date of Birth and institutional recording of community & local status.',
          te: 'పుట్టిన తేదీ మరియు పాఠశాల రికార్డులలో నమోదైన కుల వివరాల నిర్ధారణ.',
          hi: 'जन्म तिथि और समुदाय रिकॉर्ड का प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'School Headmaster / Board of Secondary Education, AP',
        officialPortal: 'bse.ap.gov.in',
        officialPortalUrl: 'https://www.bse.ap.gov.in/',
        estimatedEffort: '1-3 days from previously attended school/college',
        whyRequired: {
          en: 'Revenue authorities inspect educational records to verify earliest recorded caste claim.',
          te: 'విద్యా రికార్డులలో నమోదైన కులాన్ని రెవెన్యూ పరిశీలనలో తనిఖీ చేస్తారు.',
          hi: 'शिक्षा अभिलेखों में दर्ज जाति की पुष्टि के लिए आवश्यक।'
        },
        dependencies: [],
        obtainedFrom: 'School or College where applicant studied',
        status: 'need'
      },
      {
        id: 'doc-parent-caste',
        name: {
          en: 'Family Caste Certificate (Father / Paternal Blood Relative)',
          te: 'తండ్రి లేదా రక్తసంబంధీకుల కుల ధ్రువీకరణ పత్రం',
          hi: 'पिता या रक्त संबंधी का जाति प्रमाण पत्र'
        },
        purpose: {
          en: 'Legal proof of lineage and ancestral caste origin.',
          te: 'వంశపారంపర్య కుల నిర్ధారణకు తండ్రి లేదా సమీప బంధువు పత్రం.',
          hi: 'वंशावली और पैतृक जाति का प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'Tahsildar / Revenue Department, AP',
        officialPortal: 'onlineap.meeseva.gov.in',
        officialPortalUrl: 'https://onlineap.meeseva.gov.in/',
        estimatedEffort: 'Previously issued MeeSeva certificate or manual patta',
        whyRequired: {
          en: 'Under AP law, caste derives strictly from the father/paternal lineage.',
          te: 'చట్టప్రకారం కులం తండ్రి వంశానుక్రమం నుండే సంక్రమిస్తుంది.',
          hi: 'जाति पिता के वंश से निर्धारित होती है।'
        },
        dependencies: [],
        obtainedFrom: 'Revenue Department / MeeSeva archives',
        status: 'need'
      },
      {
        id: 'doc-ration-card',
        name: {
          en: 'AP Rice Card / Ration Card or Household Card',
          te: 'ఆంధ్రప్రదేశ్ బియ్యం కార్డు / రేషన్ కార్డు',
          hi: 'एपी चावल कार्ड / राशन कार्ड'
        },
        purpose: {
          en: 'Local family composition verification in Grama/Ward Secretariat database.',
          te: 'సచివాలయ పరిధిలో కుటుంబ సభ్యుల నిర్ధారణ మరియు చిరునామా రుజువు.',
          hi: 'पारिवारिक संरचना और निवास सत्यापन।'
        },
        category: 'conditional',
        conditionNote: {
          en: 'Mandatory if applying via Grama/Ward Sachivalayam volunteer mapped household.',
          te: 'గ్రామ/వార్డు సచివాలయం ద్వారా దరఖాస్తు చేసినప్పుడు మ్యాప్ చేసిన కుటుంబ నిర్ధారణకు అవసరం.',
          hi: 'सचिवालय के माध्यम से आवेदन करते समय आवश्यक।'
        },
        issuingAuthority: 'Department of Consumer Affairs, Food & Civil Supplies, AP',
        officialPortal: 'epdsap.ap.gov.in',
        officialPortalUrl: 'https://epdsap.ap.gov.in/',
        estimatedEffort: 'Instant download from ePDS AP',
        whyRequired: {
          en: 'Connects the applicant directly to their GSWS cluster secretariat data.',
          te: 'క్లస్టర్ సచివాలయ డేటాతో దరఖాస్తుదారుని అనుసంధానిస్తుంది.',
          hi: 'सचिवालय क्लस्टर से जोड़ने के लिए।'
        },
        dependencies: ['doc-aadhaar'],
        obtainedFrom: 'Grama / Ward Sachivalayam or ePDS AP',
        status: 'need'
      },
      {
        id: 'doc-self-declaration',
        name: {
          en: 'Applicant / Parent Caste Declaration Form',
          te: 'స్వయం ప్రకటన ఫారమ్ (అఫిడవిట్/డిక్లరేషన్)',
          hi: 'आवेदक/अभिभावक जाति घोषणा पत्र'
        },
        purpose: {
          en: 'Statutory declaration of community under penalty of perjury.',
          te: 'తప్పుడు సమాచారం ఇస్తే చట్టపరమైన చర్యలకు బాధ్యత వహించే స్వచ్ఛంద ప్రకటన.',
          hi: 'सत्यनिष्ठा की कानूनी घोषणा।'
        },
        category: 'required',
        issuingAuthority: 'Self-attested on MeeSeva prescribed format',
        officialPortal: 'onlineap.meeseva.gov.in',
        officialPortalUrl: 'https://onlineap.meeseva.gov.in/',
        estimatedEffort: '10 minutes download and sign',
        whyRequired: {
          en: 'Mandatory attachment with MeeSeva application form.',
          te: 'మీసేవ దరఖాస్తుతో పాటు జతచేయవలసిన పత్రం.',
          hi: 'मीसेवा आवेदन के साथ संलग्न करना अनिवार्य है।'
        },
        dependencies: [],
        obtainedFrom: 'MeeSeva download center or Grama Sachivalayam desk',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'eligibility',
        title: {
          en: 'Verify Eligibility & Local Candidate Status',
          te: 'అర్హత మరియు స్థానిక అభ్యర్థిత్వాన్ని సరిచూసుకోండి',
          hi: 'पात्रता और स्थानीय स्थिति सत्यापित करें'
        },
        explanation: {
          en: 'Ensure applicant belongs to the officially notified SC, ST, or BC lists in AP and satisfies 4 consecutive study years or 7 years continuous residence.',
          te: 'దరఖాస్తుదారు ఆంధ్రప్రదేశ్ గెజిట్ లోని ఎస్సీ, ఎస్టీ లేదా బీసీ జాబితాలో ఉన్నారని మరియు స్థానిక నిబంధనలు సరిపోతాయని నిర్ధారించుకోండి.',
          hi: 'सुनिश्चित करें कि आवेदक एपी राजपत्र में अधिसूचित जातियों में शामिल है।'
        },
        department: 'Revenue Department, AP',
        action: {
          en: 'Check your caste name in the official AP Gazette backward classes / SC / ST list.',
          te: 'ఆంధ్రప్రదేశ్ అధికారిక కులాల జాబితాలో మీ కులం పేరుని తనిఖీ చేయండి.',
          hi: 'आधिकारिक राजपत्र सूची में अपनी जाति की जांच करें।'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Tahsildar Office / Grama Sachivalayam Notice Board',
        documentsRequired: [],
        dependencies: [],
        expectedDays: '1 Day',
        fee: 'Nil (Free)',
        verificationStatus: 'verified',
        whatHappensNext: {
          en: 'Once eligibility is confirmed, collect foundational identity and academic proofs.',
          te: 'అర్హత నిర్ధారణ అయిన తర్వాత, గుర్తింపు మరియు విద్యా పత్రాలను సిద్ధం చేసుకోండి.',
          hi: 'पात्रता की पुष्टि के बाद दस्तावेज़ तैयार करें।'
        }
      },
      {
        stepNumber: 2,
        stage: 'document_prep',
        title: {
          en: 'Assemble Foundational Identity & Family Proofs',
          te: 'ఆధార్, పాఠశాల TC మరియు కుటుంబ ఆధారాలను సేకరించండి',
          hi: 'आधार, टीसी और पारिवारिक प्रमाण एकत्र करें'
        },
        explanation: {
          en: 'Obtain Aadhaar with matching surname/initials, applicant School Study/TC certificate, and father\'s or brother\'s caste certificate.',
          te: 'ఆధార్ కార్డు, పాఠశాల స్టడీ/TC సర్టిఫికెట్ మరియు తండ్రి యొక్క పాత కుల ధ్రువీకరణ పత్రాన్ని జతచేయడానికి సిద్ధంగా ఉంచుకోండి.',
          hi: 'आधार कार्ड, स्कूल टीसी और पिता का जाति प्रमाण पत्र तैयार रखें।'
        },
        department: 'UIDAI & School Education Department',
        action: {
          en: 'Download updated Aadhaar e-KYC from myAadhaar portal if mobile is linked.',
          te: 'మైఆధార్ పోర్టల్ నుండి తాజా ఆధార్ ప్రతిని డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'आधार पोर्टल से प्रतिलिपि डाउनलोड करें।'
        },
        actionUrl: 'https://myaadhaar.uidai.gov.in/',
        actionLabel: {
          en: 'Open UIDAI myAadhaar Portal ↗',
          te: 'UIDAI మైఆధార్ పోర్టల్ తెరవండి ↗',
          hi: 'यूआईडीएआई पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['doc-aadhaar', 'doc-school-tc', 'doc-parent-caste'],
        dependencies: [1],
        expectedDays: '1-2 Days',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'form_fill',
        title: {
          en: 'Fill Integrated Certificate Application & Declaration',
          te: 'దరఖాస్తు ఫారమ్ మరియు స్వయం ప్రకటన నింపండి',
          hi: 'आवेदन पत्र और घोषणा भरें'
        },
        explanation: {
          en: 'Download the official MeeSeva Integrated Certificate application format or obtain printed Form-I from the Grama/Ward Sachivalayam.',
          te: 'మీసేవ అధికారిక దరఖాస్తు లేదా సచివాలయంలో లభించే ఫారమ్-1 తీసుకుని వివరాలు నింపండి.',
          hi: 'मीसेवा आधिकारिक प्रारूप डाउनलोड करें या सचिवालय से प्राप्त करें।'
        },
        department: 'Revenue & GSWS Department, AP',
        action: {
          en: 'Affix applicant passport photograph and get signed declaration by applicant or parent.',
          te: 'పాస్‌పోర్ట్ సైజు ఫోటో అతికించి, దరఖాస్తుదారు లేదా తల్లిదండ్రుల సంతకం చేయించండి.',
          hi: 'फोटो चिपकाएं और हस्ताक्षर करें।'
        },
        actionUrl: 'https://onlineap.meeseva.gov.in/',
        actionLabel: {
          en: 'MeeSeva Form Repository ↗',
          te: 'మీసేవ ఫారమ్‌లు ↗',
          hi: 'मीसेवा फॉर्म ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['doc-self-declaration'],
        dependencies: [2],
        expectedDays: '1 Day',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 4,
        stage: 'portal_submission',
        title: {
          en: 'Submit Application via MeeSeva or Grama/Ward Sachivalayam',
          te: 'మీసేవ పోర్టల్ లేదా గ్రామ/వార్డు సచివాలయంలో సమర్పించండి',
          hi: 'मीसेवा या ग्राम/वार्ड सचिवालय में जमा करें'
        },
        explanation: {
          en: 'Submit online through MeeSeva Citizen Portal or physically at your nearest Grama/Ward Sachivalayam (Digital Assistant desk). Operator captures biometric e-KYC and uploads scanned documents.',
          te: 'మీసేవ ఆన్‌లైన్ సిటిజన్ లాగిన్ ద్వారా లేదా సమీప గ్రామ/వార్డు సచివాలయంలో డిజిటల్ అసిస్టెంట్ వద్ద బయోమెట్రిక్ వేసి సమర్పించండి.',
          hi: 'मीसेवा पोर्टल या नजदीकी सचिवालय में डिजिटल सहायक के माध्यम से जमा करें।'
        },
        department: 'GSWS & MeeSeva Directorate, AP',
        action: {
          en: 'Pay official statutory user charge of ₹35 and obtain printed Acknowledgement with Service Request Number (SRN).',
          te: 'నిబంధనల ప్రకారం ₹35 యూజర్ ఛార్జీ చెల్లించి, అక్నాలెడ్జ్మెంట్ రసీదు నంబర్ పొందండి.',
          hi: '₹35 का आधिकारिक शुल्क चुकाएं और पावती संख्या (SRN) प्राप्त करें।'
        },
        actionUrl: 'https://onlineap.meeseva.gov.in/',
        actionLabel: {
          en: 'Open MeeSeva Portal ↗',
          te: 'మీసేవ పోర్టల్ తెరవండి ↗',
          hi: 'मीसेवा पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Nearest Grama / Ward Sachivalayam or Authorized MeeSeva Kiosk',
        documentsRequired: ['doc-aadhaar', 'doc-school-tc', 'doc-parent-caste', 'doc-self-declaration'],
        dependencies: [3],
        expectedDays: 'Same Day',
        fee: '₹35 (MeeSeva Statutory User Fee)',
        verificationStatus: 'verified',
        whatHappensNext: {
          en: 'Application forwards electronically to the local Village Revenue Officer (VRO).',
          te: 'దరఖాస్తు ఎలక్ట్రానిక్ రూపంలో గ్రామ రెవెన్యూ అధికారి (VRO) లాగిన్‌కు చేరుతుంది.',
          hi: 'आवेदन ग्राम राजस्व अधिकारी (VRO) को भेजा जाता है।'
        }
      },
      {
        stepNumber: 5,
        stage: 'verification',
        title: {
          en: 'Field Enquiry by Village Revenue Officer (VRO) & Revenue Inspector (RI)',
          te: 'గ్రామ రెవెన్యూ అధికారి (VRO) & రెవెన్యూ ఇన్‌స్పెక్టర్ (RI) క్షేత్రస్థాయి విచారణ',
          hi: 'ग्राम राजस्व अधिकारी (VRO) और राजस्व निरीक्षक (RI) द्वारा जांच'
        },
        explanation: {
          en: 'The VRO visits the locality or examines village family census / 1-B records to verify caste customs, ancestral residence, and blood relation legitimacy. VRO submits report to Revenue Inspector (RI).',
          te: 'VRO గ్రామంలో లేదా వార్డులో పరిశీలించి, పూర్వీకుల నివాసం మరియు కుల సాంప్రదాయాలను తనిఖీ చేసి RI కి నివేదిక పంపుతారు.',
          hi: 'वीआरओ गांव/वार्ड में जाकर जाति और पैतृक निवास की पुष्टि करता है।'
        },
        department: 'Mandal Revenue Office (MRO / Tahsildar)',
        action: {
          en: 'Be available in village/ward with original documents if physical inspection is scheduled.',
          te: 'క్షేత్ర విచారణకు అధికారులు వచ్చినప్పుడు అసలు పత్రాలు చూపించడానికి అందుబాటులో ఉండండి.',
          hi: 'अधिकारियों के आने पर मूल दस्तावेज़ उपलब्ध कराएं।'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        offlineVenue: 'Applicant Residence / Village Revenue Office',
        documentsRequired: ['doc-parent-caste', 'doc-school-tc'],
        dependencies: [4],
        expectedDays: '7-14 Days',
        fee: 'Nil (Official inspection is free of charge)',
        verificationStatus: 'verified',
        whatHappensNext: {
          en: 'RI reviews VRO enquiry report and forwards recommendation to Tahsildar.',
          te: 'RI నివేదికను పరిశీలించి ఆమోదం కోసం తహశీల్దార్‌కు సిఫార్సు చేస్తారు.',
          hi: 'आरई रिपोर्ट की समीक्षा कर तहसीलदार को सिफारिश करता है।'
        }
      },
      {
        stepNumber: 6,
        stage: 'department_processing',
        title: {
          en: 'Approval and Digital Signature by Tahsildar',
          te: 'తహశీల్దార్ వారి ఆమోదం మరియు డిజిటల్ సంతకం',
          hi: 'तहसीलदार द्वारा अनुमोदन और डिजिटल हस्ताक्षर'
        },
        explanation: {
          en: 'The Tahsildar reviews statutory eligibility and applies cryptographic Digital Signature Certificate (DSC) on the Integrated Certificate in the MeeSeva administrative workflow.',
          te: 'తహశీల్దార్ గారు దరఖాస్తును తుది పరిశీలన చేసి, తన డిజిటల్ సంతకం (DSC) తో సర్టిఫికెట్‌ను ఆమోదిస్తారు.',
          hi: 'तहसीलदार आवेदन की अंतिम समीक्षा कर डिजिटल हस्ताक्षर (DSC) से अनुमोदन करते हैं।'
        },
        department: 'Tahsildar / Mandal Executive Magistrate Office',
        action: {
          en: 'Automatic administrative step — track progress via SMS notification sent to registered mobile.',
          te: 'ఇది అంతర్గత పరిపాలనా ప్రక్రియ — మీ మొబైల్‌కు వచ్చే SMS ద్వారా స్థితి తెలుసుకోవచ్చు.',
          hi: 'यह प्रशासनिक चरण है — पंजीकृत मोबाइल पर एसएमएस आएगा।'
        },
        onlineAvailable: true,
        offlineAvailable: false,
        documentsRequired: [],
        dependencies: [5],
        expectedDays: '3-7 Days',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 7,
        stage: 'tracking',
        title: {
          en: 'Track Application Status Online',
          te: 'దరఖాస్తు స్థితిని ఆన్‌లైన్‌లో ట్రాక్ చేయండి',
          hi: 'आवेदन की स्थिति ऑनलाइन ट्रैक करें'
        },
        explanation: {
          en: 'Monitor real-time stage on the official MeeSeva or Grama Ward Sachivalayam tracking portal using your Application Number / Transaction ID.',
          te: 'మీ అప్లికేషన్ నంబర్‌తో మీసేవ లేదా గ్రామ వార్డు సచివాలయం పోర్టల్‌లో రియల్ టైమ్ స్థితిని చూసుకోండి.',
          hi: 'अपने आवेदन संख्या से मीसेवा पोर्टल पर स्थिति देखें।'
        },
        department: 'MeeSeva AP',
        action: {
          en: 'Enter Application Number on official tracking page.',
          te: 'అధికారిక ట్రాకింగ్ పేజీలో మీ అప్లికేషన్ నంబర్ నమోదు చేయండి.',
          hi: 'आधिकारिक ट्रैकिंग पृष्ठ पर अपना आवेदन नंबर दर्ज करें।'
        },
        actionUrl: 'https://onlineap.meeseva.gov.in/',
        actionLabel: {
          en: 'Open MeeSeva Status Tracker ↗',
          te: 'మీసేవ స్థితి ట్రాకర్ తెరవండి ↗',
          hi: 'मीसेवा ट्रैकर खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [4],
        expectedDays: 'Instant',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 8,
        stage: 'issuance',
        title: {
          en: 'Download Digitally Signed Certificate or Collect MeeSeva Printout',
          te: 'డిజిటల్ సంతకం చేసిన సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోండి / మీసేవలో ప్రింట్ తీసుకోండి',
          hi: 'डिजिटल रूप से हस्ताक्षरित प्रमाण पत्र डाउनलोड करें'
        },
        explanation: {
          en: 'Download the watermarked, QR-code verifiable official certificate with Tahsildar DSC directly from MeeSeva citizen login, DigiLocker, or collect a stamped hardcopy from the Grama/Ward Sachivalayam.',
          te: 'క్యూఆర్ కోడ్ మరియు తహశీల్దార్ డిజిటల్ సంతకంతో కూడిన అసలైన సర్టిఫికెట్‌ను మీసేవ, డిజిలాకర్ నుండి డౌన్‌లోడ్ చేయవచ్చు లేదా సచివాలయంలో ప్రింటవుట్ తీసుకోవచ్చు.',
          hi: 'क्यूआर कोड और डिजिटल हस्ताक्षर वाला प्रमाण पत्र डिजिलॉकर या मीसेवा से डाउनलोड करें।'
        },
        department: 'Revenue Department & MeeSeva, AP',
        action: {
          en: 'Download PDF or pull into your national DigiLocker account.',
          te: 'సర్టిఫికెట్ PDF డౌన్‌లోడ్ చేసుకోండి లేదా డిజిలాకర్‌లో భద్రపరుచుకోండి.',
          hi: 'प्रमाण पत्र डाउनलोड करें या डिजिलॉकर में सेव करें।'
        },
        actionUrl: 'https://onlineap.meeseva.gov.in/',
        actionLabel: {
          en: 'Download Certificate from MeeSeva ↗',
          te: 'మీసేవ నుండి డౌన్‌లోడ్ చేయండి ↗',
          hi: 'मीसेवा से डाउनलोड करें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Grama / Ward Sachivalayam or MeeSeva Center',
        documentsRequired: [],
        dependencies: [6],
        expectedDays: 'Immediate upon approval',
        fee: 'Nil online (Nominal ₹10 for physical MeeSeva stationery print)',
        verificationStatus: 'verified',
        whatHappensNext: {
          en: 'Certificate is permanent and valid across Andhra Pradesh and Government of India for all statutory purposes.',
          te: 'ఈ సర్టిఫికెట్ జీవితకాలం చెల్లుబాటు అవుతుంది మరియు అన్ని విద్యా, ఉద్యోగ అవసరాలకు ఉపయోగపడుతుంది.',
          hi: 'यह प्रमाण पत्र आजीवन वैध है।'
        }
      }
    ],
    dependencies: [
      {
        fromDocId: 'doc-aadhaar',
        toDocId: 'doc-self-declaration',
        reason: {
          en: 'Aadhaar details and name must match the declaration format precisely.',
          te: 'డిక్లరేషన్ ఫారమ్‌లోని పేరు ఆధార్ కార్డుతో సరిగ్గా సరిపోవాలి.',
          hi: 'घोषणा में नाम आधार से मेल खाना चाहिए।'
        }
      },
      {
        fromDocId: 'doc-parent-caste',
        toDocId: 'doc-school-tc',
        reason: {
          en: 'Father’s recorded caste in community certificate is cross-checked with the applicant’s TC entry.',
          te: 'తండ్రి కుల ధ్రువపత్రంలోని కులాన్ని, విద్యార్థి TC లోని కులంతో రెవెన్యూ అధికారులు సరిచూస్తారు.',
          hi: 'पिता के जाति प्रमाण पत्र का मिलान छात्र के टीसी से किया जाता है।'
        }
      }
    ],
    officialPortal: 'onlineap.meeseva.gov.in',
    officialPortalUrl: 'https://onlineap.meeseva.gov.in/',
    trackingUrl: 'https://onlineap.meeseva.gov.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Available at any Grama / Ward Sachivalayam (Village / Ward Secretariat) or authorized MeeSeva kiosk across all 26 districts of Andhra Pradesh.',
      te: 'ఆంధ్రప్రదేశ్ లోని మొత్తం 26 జిల్లాల్లోని అన్ని గ్రామ/వార్డు సచివాలయాలు మరియు అధీకృత మీసేవ కేంద్రాలలో అందుబాటులో ఉంటుంది.',
      hi: 'आंध्र प्रदेश के सभी 26 जिलों के ग्राम/वार्ड सचिवालयों और अधिकृत मीसेवा केंद्रों पर उपलब्ध।'
    },
    fees: [
      {
        item: 'MeeSeva Statutory User Charge',
        amount: '₹35.00',
        officialRule: 'G.O.Ms.No. 129, ITE&C Dept, Govt of AP'
      },
      {
        item: 'Department Revenue Application Fee',
        amount: '₹0.00 (Exempted)',
        officialRule: 'Citizen Charter for G2C Services'
      }
    ],
    processingTime: '30 Days statutory SLA under AP Citizen Charter (Category B service)',
    outputDocument: {
      en: 'Digitally Signed Integrated Certificate with Government of Andhra Pradesh Hologram / QR Code',
      te: 'ఆంధ్రప్రదేశ్ ప్రభుత్వ చిహ్నం మరియు క్యూఆర్ కోడ్‌తో కూడిన డిజిటల్ సమగ్ర ధ్రువపత్రం',
      hi: 'डिजिटल रूप से हस्ताक्षरित एकीकृत प्रमाण पत्र'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Andhra Pradesh MeeSeva Citizen Portal',
        domain: 'onlineap.meeseva.gov.in',
        url: 'https://onlineap.meeseva.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified',
        notes: 'Official G2C e-governance service gateway for Andhra Pradesh.'
      },
      {
        title: 'Grama Ward Sachivalayam (GSWS) Official Portal',
        domain: 'gramawardsachivalayam.ap.gov.in',
        url: 'https://gramawardsachivalayam.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified',
        notes: 'Official decentralized service delivery system of AP Government.'
      },
      {
        title: 'Chief Commissioner of Land Administration (CCLA AP)',
        domain: 'ccla.ap.gov.in',
        url: 'https://ccla.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified',
        notes: 'Apex authority overseeing Tahsildar issuance of community certificates.'
      }
    ],
    exceptionCases: [
      {
        id: 'no-parent-caste',
        title: {
          en: 'Father / Parent Does Not Have a Prior Caste Certificate',
          te: 'తండ్రి లేదా తల్లి వద్ద గతంలో జారీ చేసిన కుల ధ్రువీకరణ పత్రం లేకపోతే',
          hi: 'माता-पिता के पास पूर्व जाति प्रमाण पत्र नहीं है'
        },
        resolution: {
          en: 'Submit grandfather’s 1-B land document / old registered deed showing caste, or paternal uncle’s certificate along with family tree certified by VRO.',
          te: 'తాతగారి పాత 1-బి పట్టా లేదా రిజిస్టర్డ్ దస్తావేజు, లేదా బాబాయ్/పెద్దనాన్న కుల సర్టిఫికెట్‌తో పాటు VRO ధ్రువీకరించిన వంశవృక్షం సమర్పించండి.',
          hi: 'दादाजी के पुराने भूमि अभिलेख या चाचा के प्रमाण पत्र के साथ वंशावली प्रस्तुत करें।'
        },
        impactedDocuments: ['doc-parent-caste']
      },
      {
        id: 'name-mismatch',
        title: {
          en: 'Name / Initial Mismatch Between Aadhaar and School TC',
          te: 'ఆధార్ మరియు పాఠశాల TC లో పేరు లేదా ఇంటిపేరు తేడా ఉంటే',
          hi: 'आधार और स्कूल टीसी में नाम में भिन्नता'
        },
        resolution: {
          en: 'Execute a ₹20 non-judicial stamp paper affidavit from a notary or update Aadhaar name at MeeSeva before final Tahsildar submission.',
          te: 'నోటరీ అఫిడవిట్ జతచేయండి లేదా మీసేవ కేంద్రంలో ఆధార్‌లోని పేరును పాఠశాల రికార్డుల ప్రకారం అప్‌డేట్ చేసుకోండి.',
          hi: 'नोटरी हलफनामा दें या आधार में नाम ठीक करवाएं।'
        },
        impactedDocuments: ['doc-aadhaar', 'doc-school-tc']
      }
    ]
  },

  // 2. Income Certificate (Aadayam Dhruvapathram)
  {
    id: 'ap-income-cert',
    serviceName: {
      en: 'Income Certificate (Aadayam Dhruvapathram)',
      te: 'ఆదాయ ధ్రువీకరణ పత్రం',
      hi: 'आय प्रमाण पत्र'
    },
    category: 'certificates',
    department: 'Revenue Department, Government of Andhra Pradesh',
    state: 'Andhra Pradesh',
    description: {
      en: 'Official certificate certifying annual family income from all sources (agriculture, salary, business, labor), required for post-matric scholarships, fee reimbursement (Jnanabhumi / Vidya Deevena), and welfare eligibility.',
      te: 'స్కాలర్‌షిప్‌లు, ఫీజు రీయింబర్స్‌మెంట్ (విద్యా దీవెన) మరియు సంక్షేమ పథకాల కోసం కుటుంబ వార్షిక ఆదాయాన్ని తహశీల్దార్ వారిచే ధ్రువీకరించే అధికారిక పత్రం.',
      hi: 'परिवार की वार्षिक आय प्रमाणित करने वाला आधिकारिक राजस्व प्रमाण पत्र।'
    },
    eligibility: {
      criteria: {
        en: [
          'Resident of Andhra Pradesh residing in the designated Mandal jurisdiction.',
          'Annual income calculation includes income of father, mother, and unmarried siblings.',
          'Income thresholds depend on the target scheme (e.g. ₹2.50 Lakhs/annum for Jnanabhumi Post-Matric scholarships).'
        ],
        te: [
          'ఆంధ్రప్రదేశ్ నివాసి అయి ఉండాలి.',
          'కుటుంబ వార్షిక ఆదాయం లెక్కించడంలో తల్లి, తండ్రి మరియు అవివాహిత సంతానం ఆదాయం పరిగణించబడుతుంది.',
          'జ్ఞానభూమి ఫీజు రీయింబర్స్‌మెంట్ కోసం వార్షిక ఆదాయ పరిమితి ₹2.50 లక్షల లోపు ఉండాలి.'
        ],
        hi: [
          'आंध्र प्रदेश का निवासी होना चाहिए।',
          'पारिवारिक आय सीमा संबंधित योजना के नियमों के अनुसार होनी चाहिए।'
        ]
      }
    },
    documents: [
      {
        id: 'inc-aadhaar',
        name: {
          en: 'Aadhaar Card of Applicant & Head of Household',
          te: 'దరఖాస్తుదారు మరియు కుటుంబ పెద్ద ఆధార్ కార్డులు',
          hi: 'आवेदक और परिवार के मुखिया का आधार कार्ड'
        },
        purpose: {
          en: 'Demographic verification and e-KYC authentication.',
          te: 'గుర్తింపు మరియు చిరునామా నిర్ధారణ.',
          hi: 'पहचान और बायोमेट्रिक सत्यापन।'
        },
        category: 'required',
        issuingAuthority: 'UIDAI',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Mandatory linkage for MeeSeva e-governance service delivery.',
          te: 'మీసేవ ద్వారా దరఖాస్తు చేయడానికి ఆధార్ అనుసంధానం తప్పనిసరి.',
          hi: 'अनिवार्य आधार सत्यापन के लिए।'
        },
        dependencies: [],
        obtainedFrom: 'UIDAI Portal / DigiLocker',
        status: 'need'
      },
      {
        id: 'inc-rice-card',
        name: {
          en: 'AP Rice Card / Ration Card',
          te: 'ఆంధ్రప్రదేశ్ బియ్యం కార్డు / రేషన్ కార్డు',
          hi: 'एपी चावल कार्ड / राशन कार्ड'
        },
        purpose: {
          en: 'Category A fast-track processing: existing Rice Card holders get expedited processing.',
          te: 'బియ్యం కార్డు ఉన్నవారికి కేటగిరీ-A కింద వేగవంతమైన ఆమోదం లభిస్తుంది.',
          hi: 'चावल कार्ड धारकों के लिए त्वरित प्रक्रिया।'
        },
        category: 'conditional',
        conditionNote: {
          en: 'If you have an active AP Rice Card, enquiry duration is cut down to 7 days (Category A).',
          te: 'బియ్యం కార్డు ఉంటే 7 రోజుల్లో (కేటగిరీ A) సర్టిఫికెట్ జారీ అవుతుంది.',
          hi: 'चावल कार्ड होने पर 7 दिनों में जारी।'
        },
        issuingAuthority: 'Department of Consumer Affairs, Food & Civil Supplies, AP',
        officialPortal: 'epdsap.ap.gov.in',
        officialPortalUrl: 'https://epdsap.ap.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Establishes subsidized economic category in Government of AP database.',
          te: 'ప్రభుత్వ డేటాబేస్ లో ఆర్థిక వర్గాన్ని తెలియజేస్తుంది.',
          hi: 'आर्थिक स्थिति के प्रमाण के लिए।'
        },
        dependencies: ['inc-aadhaar'],
        obtainedFrom: 'Grama / Ward Sachivalayam or ePDS AP',
        status: 'need'
      },
      {
        id: 'inc-salary-slip',
        name: {
          en: 'Salary Certificate / Form 16 (For Employed Parents)',
          te: 'జీత భత్యాల పత్రం / ఫారమ్ 16 (ఉద్యోగులకు)',
          hi: 'वेतन प्रमाण पत्र / फॉर्म 16'
        },
        purpose: {
          en: 'Proof of gross annual income for organized sector employees.',
          te: 'ప్రభుత్వ లేదా ప్రైవేట్ ఉద్యోగుల వార్షిక ఆదాయ నిర్ధారణ.',
          hi: 'वेतनभोगी कर्मचारियों की वार्षिक आय का प्रमाण।'
        },
        category: 'conditional',
        conditionNote: {
          en: 'Required only if parents are employed in Government, PSU, or Private Company.',
          te: 'తల్లిదండ్రులు ప్రభుత్వ లేదా ప్రైవేటు ఉద్యోగం చేస్తున్నట్లయితే మాత్రమే అవసరం.',
          hi: 'केवल तभी आवश्यक जब माता-पिता नौकरीपेशा हों।'
        },
        issuingAuthority: 'Employer / Drawing & Disbursing Officer (DDO)',
        officialPortal: 'ccla.ap.gov.in',
        officialPortalUrl: 'https://ccla.ap.gov.in/',
        estimatedEffort: '1-2 days from employer',
        whyRequired: {
          en: 'Statutory verification to prevent underreporting of salaried earnings.',
          te: 'ఉద్యోగ ఆదాయాన్ని ఖచ్చితంగా లెక్కించడానికి అవసరం.',
          hi: 'सही आय सत्यापन के लिए।'
        },
        dependencies: [],
        obtainedFrom: 'Applicant’s parent employer',
        status: 'need'
      },
      {
        id: 'inc-land-adangal',
        name: {
          en: 'Meebhoomi Adangal / 1-B Record (For Agricultural Families)',
          te: 'మీభూమి అడంగల్ / 1-బి రికార్డు (రైతు కుటుంబాలకు)',
          hi: 'मीभूमि अडंगल / 1-बी कृषि रिकॉर्ड'
        },
        purpose: {
          en: 'Verifies agricultural land holdings to assess agricultural crop yield income.',
          te: 'వ్యవసాయ భూమి వివరాలు మరియు పంట ఆదాయాన్ని అంచనా వేయడానికి.',
          hi: 'कृषि भूमि और फसल आय का आकलन करने के लिए।'
        },
        category: 'conditional',
        conditionNote: {
          en: 'Required if family derives primary income from farming/agriculture.',
          te: 'కుటుంబానికి వ్యవసాయ ఆదాయం ఉన్నట్లయితే అవసరం.',
          hi: 'यदि मुख्य आय कृषि से है तो आवश्यक।'
        },
        issuingAuthority: 'Revenue & Survey Dept (Meebhoomi AP)',
        officialPortal: 'meebhoomi.ap.gov.in',
        officialPortalUrl: 'https://meebhoomi.ap.gov.in/',
        estimatedEffort: 'Instant download from meebhoomi.ap.gov.in',
        whyRequired: {
          en: 'Cross-checked with Webland agricultural holding database.',
          te: 'వెబ్‌ల్యాండ్ భూ రికార్డులతో సరిచూడబడుతుంది.',
          hi: 'वेबभूमि रिकॉर्ड से मिलान के लिए।'
        },
        dependencies: [],
        obtainedFrom: 'meebhoomi.ap.gov.in',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'eligibility',
        title: {
          en: 'Calculate Total Gross Family Annual Income',
          te: 'కుటుంబ మొత్తం వార్షిక ఆదాయాన్ని లెక్కించండి',
          hi: 'कुल वार्षिक पारिवारिक आय की गणना करें'
        },
        explanation: {
          en: 'Sum annual earnings from all family members. For scholarships, verify that total income is within the ₹2,50,000 threshold prescribed by Higher Education Dept.',
          te: 'కుటుంబ సభ్యుల మొత్తం వార్షిక సంపాదనను లెక్కించండి. స్కాలర్‌షిప్‌ల కోసం ₹2.50 లక్షల లోపు ఉండాలి.',
          hi: 'सभी पारिवारिक स्रोतों से आय जोड़ें। छात्रवृत्ति के लिए सीमा ₹2.50 लाख है।'
        },
        department: 'Revenue Department, AP',
        action: {
          en: 'Verify scheme limits before filing MeeSeva application.',
          te: 'దరఖాస్తు చేయడానికి ముందు ఆయా పథకాల ఆదాయ పరిమితిని చూసుకోండి.',
          hi: 'आवेदन से पूर्व आय सीमा जांचें।'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [],
        expectedDays: '1 Day',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'document_prep',
        title: {
          en: 'Collect Aadhaar, Rice Card, or Salary / Land Records',
          te: 'ఆధార్, బియ్యం కార్డు లేదా జీతం/భూమి రికార్డులను సేకరించండి',
          hi: 'आधार, राशन कार्ड या वेतन/भूमि रिकॉर्ड एकत्र करें'
        },
        explanation: {
          en: 'If you have an active AP Rice Card, this single document serves as prima-facie income evidence for Category A processing.',
          te: 'బియ్యం కార్డు ఉంటే అదనపు విచారణ లేకుండా వేగంగా సర్టిఫికెట్ లభిస్తుంది.',
          hi: 'सक्रिय चावल कार्ड होने पर त्वरित प्रक्रिया संभव।'
        },
        department: 'Civil Supplies & Revenue',
        action: {
          en: 'Download copy of Rice Card from ePDS portal if not having physical booklet.',
          te: 'ePDS పోర్టల్ నుండి బియ్యం కార్డు కాపీ డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'ईपीडीएस पोर्टल से प्रतिलिपि डाउनलोड करें।'
        },
        actionUrl: 'https://epdsap.ap.gov.in/',
        actionLabel: {
          en: 'Open ePDS AP Portal ↗',
          te: 'ePDS AP పోర్టల్ తెరవండి ↗',
          hi: 'ईपीडीएस पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['inc-aadhaar', 'inc-rice-card'],
        dependencies: [1],
        expectedDays: '1 Day',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'portal_submission',
        title: {
          en: 'Apply Online on MeeSeva or at Grama/Ward Sachivalayam',
          te: 'మీసేవ పోర్టల్ లేదా గ్రామ/వార్డు సచివాలయంలో దరఖాస్తు చేయండి',
          hi: 'मीसेवा या ग्राम/वार्ड सचिवालय में आवेदन करें'
        },
        explanation: {
          en: 'Submit through MeeSeva Citizen Portal or the Digital Assistant at your Village/Ward Secretariat. Enter purpose (e.g. Scholarship / Jnanabhumi) and declare annual income.',
          te: 'మీసేవ సిటిజన్ పోర్టల్ లేదా సచివాలయంలో దరఖాస్తు చేసి ఉద్దేశం (స్కాలర్‌షిప్/విద్యా దీవెన) నమోదు చేయండి.',
          hi: 'सचिवालय में डिजिटल सहायक के माध्यम से आवेदन करें।'
        },
        department: 'GSWS / MeeSeva',
        action: {
          en: 'Pay statutory ₹35 user charge and receive printed Transaction ID / SRN.',
          te: 'రూ. 35 యూజర్ ఫీజు చెల్లించి, రసీదు పొందండి.',
          hi: '₹35 का शुल्क देकर रसीद संख्या प्राप्त करें।'
        },
        actionUrl: 'https://onlineap.meeseva.gov.in/',
        actionLabel: {
          en: 'Open MeeSeva Application ↗',
          te: 'మీసేవ దరఖాస్తు తెరవండి ↗',
          hi: 'मीसेवा आवेदन खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Local Village / Ward Secretariat (Grama Sachivalayam)',
        documentsRequired: ['inc-aadhaar', 'inc-rice-card', 'inc-salary-slip', 'inc-land-adangal'],
        dependencies: [2],
        expectedDays: 'Same Day',
        fee: '₹35 (MeeSeva Statutory User Fee)',
        verificationStatus: 'verified',
        whatHappensNext: {
          en: 'If Category A (Rice Card holder): forwarded directly for Tahsildar approval. If Category B: forwarded to VRO for inquiry.',
          te: 'బియ్యం కార్డు ఉంటే నేరుగా తహశీల్దార్ కు, లేదంటే VRO విచారణకు వెళుతుంది.',
          hi: 'चावल कार्ड होने पर सीधे अनुमोदन, अन्यथा वीआरओ जांच।'
        }
      },
      {
        stepNumber: 4,
        stage: 'verification',
        title: {
          en: 'Verification by Village Revenue Officer (VRO)',
          te: 'గ్రామ రెవెన్యూ అధికారి (VRO) ధ్రువీకరణ',
          hi: 'ग्राम राजस्व अधिकारी (VRO) द्वारा सत्यापन'
        },
        explanation: {
          en: 'The VRO cross-verifies electricity consumption (must be <300 units/mo for BPL), four-wheeler ownership, and household earnings.',
          te: 'VRO విద్యుత్ వినియోగం, వాహన యాజమాన్యం మరియు కుటుంబ ఆదాయాన్ని సరిచూస్తారు.',
          hi: 'वीआरओ बिजली बिल, वाहन और वास्तविक आय का मिलान करता है।'
        },
        department: 'Revenue Department, AP',
        action: {
          en: 'Administrative process. Volunteer or VRO contacts applicant if clarification is required.',
          te: 'అవసరమైతే VRO లేదా వాలంటీర్ మీతో సంప్రదిస్తారు.',
          hi: 'आवश्यकता होने पर अधिकारी संपर्क करेंगे।'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [3],
        expectedDays: '3-5 Days (Category B) / Skipped for Category A',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 5,
        stage: 'department_processing',
        title: {
          en: 'Approval & Digital DSC Signature by Tahsildar',
          te: 'తహశీల్దార్ వారి డిజిటల్ సంతకం మరియు ఆమోదం',
          hi: 'तहसीलदार द्वारा डिजिटल हस्ताक्षर और अनुमोदन'
        },
        explanation: {
          en: 'Tahsildar electronically verifies the case and applies Digital Signature Certificate.',
          te: 'తహశీల్దార్ గారు ఆమోదించి తన డిజిటల్ సంతకాన్ని జతచేస్తారు.',
          hi: 'तहसीलदार अनुमोदन के बाद डिजिटल हस्ताक्षर करते हैं।'
        },
        department: 'Tahsildar Office',
        action: {
          en: 'Automatic approval workflow.',
          te: 'ఆటోమేటిక్ అప్రూవల్ విధానం.',
          hi: 'स्वचालित अनुमोदन।'
        },
        onlineAvailable: true,
        offlineAvailable: false,
        documentsRequired: [],
        dependencies: [4],
        expectedDays: '1-3 Days',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 6,
        stage: 'issuance',
        title: {
          en: 'Download Income Certificate with Official QR Code',
          te: 'క్యూఆర్ కోడ్‌తో కూడిన ఆదాయ ధ్రువపత్రం డౌన్‌లోడ్ చేసుకోండి',
          hi: 'क्यूआर कोड वाला आय प्रमाण पत्र डाउनलोड करें'
        },
        explanation: {
          en: 'Download valid Income Certificate directly for submission in Jnanabhumi / college admissions / welfare portals.',
          te: 'కాలేజీ అడ్మిషన్లు మరియు జ్ఞానభూమి స్కాలర్‌షిప్ కొరకు సర్టిఫికెట్ డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'कॉलेज और ज्ञानभूमि छात्रवृत्ति के लिए प्रमाण पत्र डाउनलोड करें।'
        },
        department: 'Revenue & MeeSeva',
        action: {
          en: 'Download PDF from MeeSeva citizen dashboard or fetch to DigiLocker.',
          te: 'మీసేవ లేదా డిజిలాకర్ నుండి PDF డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'मीसेवा या डिजिलॉकर से डाउनलोड करें।'
        },
        actionUrl: 'https://onlineap.meeseva.gov.in/',
        actionLabel: {
          en: 'Download Income Certificate ↗',
          te: 'ఆదాయ సర్టిఫికెట్ డౌన్‌లోడ్ ↗',
          hi: 'आय प्रमाण पत्र डाउनलोड ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Any MeeSeva Kiosk or Grama Sachivalayam',
        documentsRequired: [],
        dependencies: [5],
        expectedDays: 'Instant upon approval',
        fee: 'Nil online / ₹10 for physical print',
        verificationStatus: 'verified',
        whatHappensNext: {
          en: 'Income certificate is valid for 1 Financial Year (from April 1 to March 31 of current assessment year).',
          te: 'ఈ పత్రం ప్రస్తుత ఆర్థిక సంవత్సరానికి (1 ఏప్రిల్ నుండి 31 మార్చి వరకు) చెల్లుబాటు అవుతుంది.',
          hi: 'यह प्रमाण पत्र एक वित्तीय वर्ष के लिए वैध है।'
        }
      }
    ],
    dependencies: [
      {
        fromDocId: 'inc-aadhaar',
        toDocId: 'inc-rice-card',
        reason: {
          en: 'Aadhaar numbers of household members are seeded in the Civil Supplies Rice Card database.',
          te: 'బియ్యం కార్డులో కుటుంబ సభ్యులందరి ఆధార్ అనుసంధానమై ఉంటుంది.',
          hi: 'चावल कार्ड में सदस्यों का आधार जुड़ा होना आवश्यक है।'
        }
      }
    ],
    officialPortal: 'onlineap.meeseva.gov.in',
    officialPortalUrl: 'https://onlineap.meeseva.gov.in/',
    trackingUrl: 'https://onlineap.meeseva.gov.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Grama / Ward Sachivalayam (Village / Ward Secretariat) or authorized MeeSeva kiosks in all AP mandals.',
      te: 'ఆంధ్రప్రదేశ్ లోని అన్ని మండలాల్లోని గ్రామ/వార్డు సచివాలయాలు లేదా మీసేవ కేంద్రాలు.',
      hi: 'सभी मंडलों के ग्राम/वार्ड सचिवालय या मीसेवा केंद्र।'
    },
    fees: [
      {
        item: 'MeeSeva Statutory User Fee',
        amount: '₹35.00',
        officialRule: 'Govt. of AP Notification'
      }
    ],
    processingTime: '7 Days (Category A with Rice Card) / 15 Days (Category B without Rice Card)',
    outputDocument: {
      en: 'Digitally Signed Income Certificate (Valid for Current Financial Year)',
      te: 'డిజిటల్ సంతకంతో కూడిన ఆదాయ ధ్రువపత్రం (ప్రస్తుత ఆర్థిక సంవత్సరానికి చెల్లుబాటు)',
      hi: 'डिजिटल रूप से हस्ताक्षरित आय प्रमाण पत्र'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Andhra Pradesh MeeSeva Citizen Services',
        domain: 'onlineap.meeseva.gov.in',
        url: 'https://onlineap.meeseva.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Food & Civil Supplies Department (ePDS AP)',
        domain: 'epdsap.ap.gov.in',
        url: 'https://epdsap.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Meebhoomi Land Records Portal, AP',
        domain: 'meebhoomi.ap.gov.in',
        url: 'https://meebhoomi.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ],
    exceptionCases: [
      {
        id: 'no-rice-card',
        title: {
          en: 'No Rice Card / White Ration Card Available',
          te: 'బియ్యం కార్డు లేదా తెల్ల రేషన్ కార్డు లేకపోతే',
          hi: 'चावल कार्ड उपलब्ध नहीं है'
        },
        resolution: {
          en: 'Your application will be routed under Category B. VRO will conduct physical inquiry and check bank statements or IT returns if applicable.',
          te: 'దరఖాస్తు కేటగిరీ B కింద వెళుతుంది. VRO నేరుగా విచారించి నివేదిక సమర్పిస్తారు.',
          hi: 'आवेदन श्रेणी बी में जाएगा और वीआरओ भौतिक जांच करेगा।'
        },
        impactedDocuments: ['inc-rice-card']
      }
    ]
  },

  // 3. Jnanabhumi Post-Matric Scholarship (Vidya Deevena & Vasathi Deevena)
  {
    id: 'ap-jnanabhumi-scholarship',
    serviceName: {
      en: 'Jnanabhumi Post-Matric Scholarship & Fee Reimbursement',
      te: 'జ్ఞానభూమి పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్ & విద్యా దీవెన',
      hi: 'ज्ञानभूमि पोस्ट-मैट्रिक छात्रवृत्ति और शुल्क प्रतिपूर्ति'
    },
    category: 'education',
    department: 'Social Welfare & Higher Education Department, AP',
    state: 'Andhra Pradesh',
    description: {
      en: 'Complete tuition fee reimbursement (Vidya Deevena) and food/hostel maintenance allowance (Vasathi Deevena) for eligible SC, ST, BC, EBC, Kapu, Minority, and Differently-abled students pursuing polytechnic, ITI, degree, engineering, medicine, and postgraduate courses.',
      te: 'పాలిటెక్నిక్, ఐటీఐ, డిగ్రీ, ఇంజనీరింగ్, మెడిసిన్ మరియు పీజీ చదువుతున్న ఎస్సీ, ఎస్టీ, బీసీ, ఈబీసీ, కాపు, మైనారిటీ విద్యార్థులకు పూర్తి ఫీజు రీయింబర్స్‌మెంట్ (విద్యా దీవెన) మరియు వసతి ఖర్చులు (వసతి దీవెన).',
      hi: 'पात्र एससी, एसटी, बीसी, ईबीसी, अल्पसंख्यक छात्रों के लिए पूर्ण शिक्षण शुल्क प्रतिपूर्ति और छात्रावास भत्ता।'
    },
    eligibility: {
      criteria: {
        en: [
          'Applicant must be enrolled in an affiliated post-matric college/university in Andhra Pradesh (or recognized national institutions).',
          'Annual family income must not exceed ₹2,50,000 per annum.',
          'Student must maintain a minimum of 75% biometric attendance throughout the semester.',
          'Family land holding must be less than 10 acres of dry land or 5 acres of wetland.'
        ],
        te: [
          'విద్యార్థి ఆంధ్రప్రదేశ్‌లోని గుర్తింపు పొందిన కళాశాలలో పోస్ట్-మెట్రిక్ కోర్సులో చేరి ఉండాలి.',
          'కుటుంబ వార్షిక ఆదాయం ₹2,50,000 మించరాదు.',
          'సెమిస్టర్ అంతటా కనీసం 75% బయోమెట్రిక్ హాజరు తప్పనిసరి.',
          'కుటుంబ భూమి 10 ఎకరాల మెట్ట లేదా 5 ఎకరాల మాగాణికి మించరాదు.'
        ],
        hi: [
          'मान्यता प्राप्त कॉलेज में नामांकित होना चाहिए।',
          'पारिवारिक आय ₹2,50,000 से कम होनी चाहिए और 75% उपस्थिति आवश्यक है।'
        ]
      }
    },
    documents: [
      {
        id: 'jna-caste-cert',
        name: {
          en: 'MeeSeva Integrated Caste Certificate',
          te: 'మీసేవ కుల ధ్రువీకరణ పత్రం',
          hi: 'मीसेवा जाति प्रमाण पत्र'
        },
        purpose: {
          en: 'Validates statutory reservation category under SC/ST/BC/EBC/Kapu/Minority.',
          te: 'సంక్షేమ ఉపకార వేతనం కోసం రిజర్వేషన్ వర్గాన్ని నిర్ధారిస్తుంది.',
          hi: 'आरक्षण श्रेणी की पुष्टि के लिए।'
        },
        category: 'required',
        issuingAuthority: 'Tahsildar / Revenue Department, AP',
        officialPortal: 'onlineap.meeseva.gov.in',
        officialPortalUrl: 'https://onlineap.meeseva.gov.in/',
        estimatedEffort: 'Must obtain beforehand via MeeSeva (ap-caste-cert)',
        whyRequired: {
          en: 'Mandatory prerequisite: Jnanabhumi validates the MeeSeva Certificate Number in real-time.',
          te: 'జ్ఞానభూమి పోర్టల్‌లో కుల సర్టిఫికెట్ నంబర్ సరిచూడడం తప్పనిసరి.',
          hi: 'ज्ञानभूमि पोर्टल पर वास्तविक समय सत्यापन।'
        },
        dependencies: [],
        obtainedFrom: 'MeeSeva / Grama Sachivalayam',
        status: 'need'
      },
      {
        id: 'jna-income-cert',
        name: {
          en: 'MeeSeva Income Certificate (Current Assessment Year)',
          te: 'మీసేవ తాజా ఆదాయ ధ్రువీకరణ పత్రం',
          hi: 'वर्तमान वित्तीय वर्ष का मीसेवा आय प्रमाण पत्र'
        },
        purpose: {
          en: 'Verifies annual family income is below ₹2.5 Lakhs.',
          te: 'కుటుంబ వార్షిక ఆదాయం ₹2.5 లక్షల లోపు ఉందని నిర్ధారించడానికి.',
          hi: 'पारिवारिक आय ₹2.5 लाख से कम होने का प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'Tahsildar / Revenue Department, AP',
        officialPortal: 'onlineap.meeseva.gov.in',
        officialPortalUrl: 'https://onlineap.meeseva.gov.in/',
        estimatedEffort: 'Must obtain beforehand via MeeSeva (ap-income-cert)',
        whyRequired: {
          en: 'Real-time API check against Revenue database for <₹2.5L limit.',
          te: 'రెవెన్యూ డేటాబేస్ ద్వారా నేరుగా తనిఖీ చేయబడుతుంది.',
          hi: 'राजस्व डेटाबेस के साथ वास्तविक समय जांच।'
        },
        dependencies: [],
        obtainedFrom: 'MeeSeva / Grama Sachivalayam',
        status: 'need'
      },
      {
        id: 'jna-aadhaar',
        name: {
          en: 'Aadhaar Card (Linked to NPCI Active Bank Account)',
          te: 'ఆధార్ కార్డు (బ్యాంక్ ఖాతాతో NPCI లింక్ అయి ఉండాలి)',
          hi: 'आधार कार्ड (एनपीसीआई से जुड़े बैंक खाते के साथ)'
        },
        purpose: {
          en: 'Aadhaar Payment Bridge System (APBS) direct DBT cash transfer.',
          te: 'వసతి దీవెన నిధులు నేరుగా విద్యార్థి/తల్లి బ్యాంక్ ఖాతాలో జమ కావడానికి.',
          hi: 'डीबीटी के माध्यम से सीधे खाते में भुगतान के लिए।'
        },
        category: 'required',
        issuingAuthority: 'UIDAI & Bank',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Bank NPCI seeding takes 1-2 days at bank branch',
        whyRequired: {
          en: 'Payments fail without active NPCI mapping on Public Financial Management System (PFMS).',
          te: 'NPCI మ్యాపింగ్ లేకపోతే ప్రభుత్వ నిధులు జమ కావు.',
          hi: 'एनपीसीआई मैपिंग के बिना छात्रवृत्ति जमा नहीं होगी।'
        },
        dependencies: [],
        obtainedFrom: 'Bank Branch / UIDAI Portal',
        status: 'need'
      },
      {
        id: 'jna-admission-allotment',
        name: {
          en: 'College Admission Allotment Order & SSC Marks Memo',
          te: 'కళాశాల సీటు అలాట్‌మెంట్ ఆర్డర్ & 10వ తరగతి మార్కుల మెమో',
          hi: 'कॉलेज सीट आवंटन आदेश और 10वीं की मार्कशीट'
        },
        purpose: {
          en: 'Proof of convener quota admission and academic credentials.',
          te: 'కన్వీనర్ కోటాలో సీటు పొందిన వివరాలు మరియు విద్యా అర్హత రుజువు.',
          hi: 'संयोजक कोटा प्रवेश और शैक्षणिक योग्यता का प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'Convener AP EAPCET / ICET / EDCET / POLYCET / University',
        officialPortal: 'cets.apsche.ap.gov.in',
        officialPortalUrl: 'https://cets.apsche.ap.gov.in/',
        estimatedEffort: 'Available from CET counselling portal',
        whyRequired: {
          en: 'Scholarships are strictly permissible for merit/convener quota admissions.',
          te: 'కన్వీనర్ కోటాలో ప్రవేశం పొందిన వారికి మాత్రమే పథకం వర్తిస్తుంది.',
          hi: 'केवल मेरिट/कन्वीनर कोटे के छात्रों के लिए मान्य।'
        },
        dependencies: [],
        obtainedFrom: 'APSCHE CET Portal or College Admission Desk',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'prerequisite_cert',
        title: {
          en: 'Obtain Caste & Income Certificates from MeeSeva',
          te: 'మీసేవ నుండి కుల మరియు ఆదాయ ధ్రువీకరణ పత్రాలు పొందండి',
          hi: 'मीसेवा से जाति और आय प्रमाण पत्र प्राप्त करें'
        },
        explanation: {
          en: 'Apply and secure your MeeSeva Integrated Certificate and Income Certificate beforehand. Note down the MeeSeva Certificate application numbers.',
          te: 'ముందుగా మీసేవ ద్వారా కుల మరియు ఆదాయ ధ్రువపత్రాలను పొంది, వాటి సర్టిఫికెట్ నంబర్లను సిద్ధంగా ఉంచుకోండి.',
          hi: 'पहले मीसेवा से जाति और आय प्रमाण पत्र बनवाएं।'
        },
        department: 'Revenue Department, AP',
        action: {
          en: 'Ensure Income certificate is for the current academic financial year.',
          te: 'ఆదాయ సర్టిఫికెట్ ప్రస్తుత విద్యా సంవత్సరానికే చెల్లుబాటయ్యేలా చూసుకోండి.',
          hi: 'आय प्रमाण पत्र चालू वर्ष का होना चाहिए।'
        },
        actionUrl: 'https://onlineap.meeseva.gov.in/',
        actionLabel: {
          en: 'Open MeeSeva Portal ↗',
          te: 'మీసేవ పోర్టల్ తెరవండి ↗',
          hi: 'मीसेवा पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['jna-caste-cert', 'jna-income-cert'],
        dependencies: [],
        expectedDays: '15-30 Days if starting from scratch',
        fee: '₹70 (Combined MeeSeva user charges)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'document_prep',
        title: {
          en: 'NPCI Seed Bank Account with Aadhaar',
          te: 'బ్యాంక్ ఖాతాను ఆధార్‌తో NPCI మ్యాపింగ్ చేయించండి',
          hi: 'बैंक खाते को आधार से एनपीसीआई लिंक करें'
        },
        explanation: {
          en: 'Visit your bank branch and submit the Aadhaar seeding consent form to ensure your bank account is active on the NPCI mapper for Direct Benefit Transfer (DBT).',
          te: 'మీ బ్యాంక్ బ్రాంచ్‌కు వెళ్లి ఆధార్ NPCI మ్యాపింగ్ పూర్తి చేయించండి.',
          hi: 'बैंक जाकर डीबीटी के लिए एनपीसीआई मैपिंग करवाएं।'
        },
        department: 'National Payments Corporation of India (NPCI) & Student Bank',
        action: {
          en: 'Check Aadhaar Bank Seeding Status on UIDAI resident portal.',
          te: 'మైఆధార్ పోర్టల్‌లో బ్యాంక్ సీడింగ్ స్టేటస్ సరిచూసుకోండి.',
          hi: 'यूआईडीएआई पोर्टल पर बैंक सीडिंग स्थिति जांचें।'
        },
        actionUrl: 'https://myaadhaar.uidai.gov.in/',
        actionLabel: {
          en: 'Check NPCI Seeding Status ↗',
          te: 'NPCI సీడింగ్ స్టేటస్ చూడండి ↗',
          hi: 'सीडिंग स्थिति जांचें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['jna-aadhaar'],
        dependencies: [1],
        expectedDays: '1-3 Days',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'portal_submission',
        title: {
          en: 'College Admission Desk Initiates Registration on Jnanabhumi',
          te: 'కళాశాలలో జ్ఞానభూమి పోర్టల్‌లో వివరాల నమోదు',
          hi: 'कॉलेज द्वारा ज्ञानभूमि पोर्टल पर पंजीकरण'
        },
        explanation: {
          en: 'During admission, the college principal / scholarship nodal officer enters the student’s CET allotment order details, MeeSeva caste & income certificate numbers on jnanabhumi.ap.gov.in.',
          te: 'కళాశాలలోని స్కాలర్‌షిప్ విభాగం విద్యార్థి వివరాలను జ్ఞానభూమి పోర్టల్‌లో నమోదు చేస్తుంది.',
          hi: 'कॉलेज ज्ञानभूमि पोर्टल पर विवरण दर्ज करता है।'
        },
        department: 'Higher Education Department & College Principal',
        action: {
          en: 'Provide original certificate numbers and CET hall ticket number to college clerk.',
          te: 'మీ సర్టిఫికెట్ నంబర్లు మరియు హాల్ టికెట్ నంబర్ కళాశాలలో అందించండి.',
          hi: 'कॉलेज में प्रमाण पत्र संख्या और हॉल टिकट दें।'
        },
        actionUrl: 'https://jnanabhumi.ap.gov.in/',
        actionLabel: {
          en: 'Open Jnanabhumi Portal ↗',
          te: 'జ్ఞానభూమి పోర్టల్ తెరవండి ↗',
          hi: 'ज्ञानभूमि पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['jna-caste-cert', 'jna-income-cert', 'jna-admission-allotment'],
        dependencies: [2],
        expectedDays: '3-5 Days during admission window',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 4,
        stage: 'verification',
        title: {
          en: 'Student & Mother Biometric e-KYC Authentication',
          te: 'విద్యార్థి మరియు తల్లి బయోమెట్రిక్ e-KYC ధ్రువీకరణ',
          hi: 'छात्र और माता का बायोमेट्रिक ई-केवाईसी'
        },
        explanation: {
          en: 'Student and mother/guardian must authenticate fingerprint or iris biometric on the Jnanabhumi mobile app or through the Village/Ward Secretariat Education Assistant (WEA/WEDPS).',
          te: 'విద్యార్థి మరియు తల్లి/సంరక్షకులు జ్ఞానభూమి యాప్ లేదా సచివాలయంలో బయోమెట్రిక్ వేయాలి.',
          hi: 'छात्र और माता को बायोमेट्रिक प्रमाणीकरण पूरा करना होगा।'
        },
        department: 'Grama Ward Sachivalayam & Social Welfare Dept',
        action: {
          en: 'Complete e-KYC within 15 days of college registration.',
          te: 'కళాశాల నమోదు తర్వాత 15 రోజుల్లోగా బయోమెట్రిక్ పూర్తి చేయండి.',
          hi: '15 दिनों के भीतर बायोमेट्रिक पूरा करें।'
        },
        actionUrl: 'https://jnanabhumi.ap.gov.in/',
        actionLabel: {
          en: 'Jnanabhumi Biometric Portal ↗',
          te: 'జ్ఞానభూమి బయోమెట్రిక్ వివరాలు ↗',
          hi: 'बायोमेट्रिक विवरण ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'College Biometric Device or Village / Ward Secretariat',
        documentsRequired: ['jna-aadhaar'],
        dependencies: [3],
        expectedDays: '1 Day',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 5,
        stage: 'department_processing',
        title: {
          en: 'Welfare Officer Desk Verification & Treasury Sanction',
          te: 'సంక్షేమ శాఖ అధికారి పరిశీలన మరియు ట్రెజరీ మంజూరు',
          hi: 'कल्याण अधिकारी जांच और ट्रेजरी स्वीकृति'
        },
        explanation: {
          en: 'The District Social Welfare Officer (DSWO / BCWO / Tribal Welfare Officer) verifies academic attendance (>75%) and releases bills to the Comprehensive Financial Management System (CFMS).',
          te: 'హాజరు పరిశీలన అనంతరం జిల్లా సంక్షేమ అధికారి బిల్లులను CFMS పోర్టల్‌కు పంపుతారు.',
          hi: 'जिला कल्याण अधिकारी उपस्थिति की पुष्टि कर सीएफएमएस को भेजते हैं।'
        },
        department: 'Social Welfare Department & Finance Dept (CFMS AP)',
        action: {
          en: 'Maintain mandatory 75% biometric attendance in college lectures.',
          te: 'కళాశాలలో 75% బయోమెట్రిక్ హాజరు ఉండేలా చూసుకోండి.',
          hi: 'कॉलेज में 75% बायोमेट्रिक उपस्थिति बनाए रखें।'
        },
        onlineAvailable: true,
        offlineAvailable: false,
        documentsRequired: [],
        dependencies: [4],
        expectedDays: 'Quarterly release cycle',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 6,
        stage: 'tracking',
        title: {
          en: 'Track Disbursement on Jnanabhumi & CFMS Portal',
          te: 'జ్ఞానభూమి మరియు CFMS లో నగదు విడుదల స్థితిని ట్రాక్ చేయండి',
          hi: 'ज्ञानभूमि और सीएफएमएस पर भुगतान स्थिति ट्रैक करें'
        },
        explanation: {
          en: 'Check exact payment transaction status, bill number, and credit status using your Aadhaar number on the Jnanabhumi citizen interface.',
          te: 'మీ ఆధార్ నంబర్ ద్వారా స్కాలర్‌షిప్ విడుదల తేదీ మరియు బిల్లు స్థితిని తెలుసుకోండి.',
          hi: 'आधार संख्या से छात्रवृत्ति स्थिति जांचें।'
        },
        department: 'CFMS & Jnanabhumi AP',
        action: {
          en: 'Enter Aadhaar number on official Jnanabhumi status search page.',
          te: 'జ్ఞానభూమి స్థితి పరిశీలన పేజీలో ఆధార్ నమోదు చేయండి.',
          hi: 'आधिकारिक पोर्टल पर आधार दर्ज करें।'
        },
        actionUrl: 'https://jnanabhumi.ap.gov.in/',
        actionLabel: {
          en: 'Track Jnanabhumi Status ↗',
          te: 'జ్ఞానభూమి స్థితిని చూడండి ↗',
          hi: 'ज्ञानभूमि स्थिति जांचें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [5],
        expectedDays: 'Instant',
        fee: 'Nil',
        verificationStatus: 'verified',
        whatHappensNext: {
          en: 'Tuition fees (Vidya Deevena) are transferred directly into the mother\'s account in quarterly installments; hostel expenses (Vasathi Deevena) are credited twice annually.',
          te: 'విద్యా దీవెన ఫీజు త్రైమాసిక వాయిదాలలో తల్లి ఖాతాలో, వసతి దీవెన నిధులు సంవత్సరానికి రెండుసార్లు జమ చేయబడతాయి.',
          hi: 'ट्यूशन फीस मां के खाते में और छात्रावास भत्ता साल में दो बार जमा किया जाता है।'
        }
      }
    ],
    dependencies: [
      {
        fromDocId: 'jna-caste-cert',
        toDocId: 'jna-admission-allotment',
        reason: {
          en: 'Category declared in admission counselling must match the verified MeeSeva caste certificate.',
          te: 'అడ్మిషన్ కౌన్సెలింగ్‌లో సమర్పించిన కుల వివరాలు మీసేవ సర్టిఫికెట్‌తో సరిపోవాలి.',
          hi: 'प्रवेश काउंसलिंग और जाति प्रमाण पत्र का विवरण समान होना चाहिए।'
        }
      },
      {
        fromDocId: 'jna-income-cert',
        toDocId: 'jna-aadhaar',
        reason: {
          en: 'Income certificate is validated against the student’s family Aadhaar cluster.',
          te: 'విద్యార్థి కుటుంబ ఆధార్ క్లస్టర్‌తో ఆదాయ సర్టిఫికెట్ సరిచూడబడుతుంది.',
          hi: 'आय प्रमाण पत्र का सत्यापन पारिवारिक आधार से किया जाता है।'
        }
      }
    ],
    officialPortal: 'jnanabhumi.ap.gov.in',
    officialPortalUrl: 'https://jnanabhumi.ap.gov.in/',
    trackingUrl: 'https://jnanabhumi.ap.gov.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'College Scholarship Desk and Village/Ward Secretariat Education Assistant across all 26 AP districts.',
      te: 'కళాశాల స్కాలర్‌షిప్ కౌంటర్ మరియు గ్రామ/వార్డు సచివాలయ ఎడ్యుకేషన్ అసిస్టెంట్.',
      hi: 'कॉलेज डेस्क और ग्राम/वार्ड सचिवालय शिक्षा सहायक।'
    },
    fees: [
      {
        item: 'Portal Application Charge',
        amount: '₹0.00 (Completely Free of Cost)',
        officialRule: 'AP Higher Education Welfare Directives'
      }
    ],
    processingTime: 'Processed per academic semester cycle according to Government of AP release schedule',
    outputDocument: {
      en: 'Jnanabhumi Official Scholarship Sanction Order & CFMS Direct Benefit Transfer (DBT) Receipt',
      te: 'జ్ఞానభూమి అధికారిక స్కాలర్‌షిప్ మంజూరు ఆర్డర్ & CFMS నగదు బదిలీ రసీదు',
      hi: 'ज्ञानभूमि छात्रवृत्ति स्वीकृति आदेश और सीएफएमएस रसीद'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Andhra Pradesh JnanaBhumi Official Portal',
        domain: 'jnanabhumi.ap.gov.in',
        url: 'https://jnanabhumi.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified',
        notes: 'Centralized portal for AP government education welfare disbursements.'
      },
      {
        title: 'Comprehensive Financial Management System (CFMS AP)',
        domain: 'cfms.ap.gov.in',
        url: 'https://cfms.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'AP State Council of Higher Education (APSCHE)',
        domain: 'apsche.ap.gov.in',
        url: 'https://apsche.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ],
    exceptionCases: [
      {
        id: 'biometric-failure',
        title: {
          en: 'Biometric Fingerprint Failure for Elderly Mother or Student',
          te: 'తల్లి లేదా విద్యార్థి వేలిముద్రలు పడకపోతే (బయోమెట్రిక్ సమస్య)',
          hi: 'बायोमेट्रिक फिंगरप्रिंट न आने पर'
        },
        resolution: {
          en: 'Use Iris scanning or Facial Recognition authentication through the Jnanabhumi mobile app or visit the Mandal Parishad Development Officer (MPDO) / Municipal Commissioner.',
          te: 'జ్ఞానభూమి యాప్‌లో ఐరిస్ (కంటిపాప) లేదా ఫేషియల్ రికగ్నిషన్ ద్వారా ధ్రువీకరించండి.',
          hi: 'आईरिस स्कैन या फेस रिकग्निशन ऐप का उपयोग करें।'
        }
      }
    ]
  },

  // 4. Meebhoomi Adangal (Pahani) & 1-B Land Records
  {
    id: 'ap-meebhoomi-adangal',
    serviceName: {
      en: 'Meebhoomi Adangal (Pahani) & 1-B ROR Land Record Extract',
      te: 'మీభూమి అడంగల్ (పహానీ) & 1-బి రికార్డ్ ఆఫ్ రైట్స్',
      hi: 'मीभूमि अडंगल (पाहानी) और 1-बी भूमि अभिलेख'
    },
    category: 'revenue',
    department: 'Revenue & Survey Settlement Department (CCLA AP)',
    state: 'Andhra Pradesh',
    description: {
      en: 'Instant extraction of digitally verified Andhra Pradesh land records showing land owner name, khata number, survey number, extent of land, nature of possession, soil classification, and water source under the AP Rights in Land and Pattadar Pass Books Act.',
      te: 'ఆంధ్రప్రదేశ్ భూ యాజమాన్య చట్టం ప్రకారం పట్టాదారు పేరు, ఖాతా సంఖ్య, సర్వే నంబర్, విస్తీర్ణం మరియు సాగు వివరాలను తక్షణమే చూపే అధికారిక భూ రికార్డు.',
      hi: 'आंध्र प्रदेश में भूमि स्वामित्व, खाता संख्या और सर्वे नंबर का ऑनलाइन सत्यापन।'
    },
    eligibility: {
      criteria: {
        en: [
          'Anyone holding or verifying agricultural land in any rural or urban revenue village of Andhra Pradesh.',
          'Open public service for viewing; official certified signed copies available via MeeSeva.'
        ],
        te: [
          'ఆంధ్రప్రదేశ్‌లో వ్యవసాయ భూమి వివరాలు తెలుసుకోవాలనుకునే ఎవరైనా చూడవచ్చు.',
          'ధ్రువీకరించిన కాపీ కొరకు మీసేవ ద్వారా దరఖాస్తు చేసుకోవచ్చు.'
        ],
        hi: [
          'आंध्र प्रदेश में भूमि विवरण देखने के इच्छुक किसी भी नागरिक के लिए उपलब्ध।'
        ]
      }
    },
    documents: [
      {
        id: 'land-details',
        name: {
          en: 'Survey Number, Khata Number, or Pattadar Aadhaar',
          te: 'సర్వే నంబర్, ఖాతా నంబర్ లేదా పట్టాదారు ఆధార్ నంబర్',
          hi: 'सर्वे नंबर, खाता नंबर या पट्टादार आधार'
        },
        purpose: {
          en: 'Exact spatial identifier to query the Webland land registry.',
          te: 'భూ రికార్డులను వెతకడానికి అవసరమైన నంబర్.',
          hi: 'भूमि रिकॉर्ड खोजने के लिए पहचान संख्या।'
        },
        category: 'required',
        issuingAuthority: 'Self / Previous Land Deed',
        officialPortal: 'meebhoomi.ap.gov.in',
        officialPortalUrl: 'https://meebhoomi.ap.gov.in/',
        estimatedEffort: 'Readily available on existing Passbook or Sale Deed',
        whyRequired: {
          en: 'Essential search parameter.',
          te: 'వెబ్‌ల్యాండ్ లో భూమిని గుర్తించడానికి తప్పనిసరి.',
          hi: 'खोज के लिए आवश्यक।'
        },
        dependencies: [],
        obtainedFrom: 'Title Deed or Existing Pattadar Passbook',
        status: 'have'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'portal_submission',
        title: {
          en: 'Visit Official Meebhoomi Portal',
          te: 'అధికారిక మీభూమి పోర్టల్‌ను సందర్శించండి',
          hi: 'आधिकारिक मीभूमि पोर्टल पर जाएं'
        },
        explanation: {
          en: 'Navigate to meebhoomi.ap.gov.in (ensure you do not use fake commercial portals charging money).',
          te: 'meebhoomi.ap.gov.in అధికారిక పోర్టల్ మాత్రమే వాడండి.',
          hi: 'meebhoomi.ap.gov.in पोर्टल खोलें।'
        },
        department: 'CCLA AP',
        action: {
          en: 'Select "Adangal" -> "Your Adangal" or "Village Adangal".',
          te: '"అడంగల్" -> "మీ అడంగల్" లేదా "గ్రామ అడంగల్" ఎంచుకోండి.',
          hi: 'अडंगल विकल्प चुनें।'
        },
        actionUrl: 'https://meebhoomi.ap.gov.in/',
        actionLabel: {
          en: 'Open Meebhoomi Portal ↗',
          te: 'మీభూమి పోర్టల్ తెరవండి ↗',
          hi: 'मीभूमि पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['land-details'],
        dependencies: [],
        expectedDays: 'Instant',
        fee: 'Free of cost for online viewing and download',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'verification',
        title: {
          en: 'Select District, Mandal, Village & Enter Survey / Khata No.',
          te: 'జిల్లా, మండలం, గ్రామం ఎంపిక చేసి సర్వే లేదా ఖాతా నంబర్ నమోదు చేయండి',
          hi: 'जिला, मंडल, गांव चुनें और सर्वे नंबर दर्ज करें'
        },
        explanation: {
          en: 'Choose your district from the dropdown (all 26 AP districts supported), mandal, revenue village, and input the survey number.',
          te: 'డ్రాప్‌డౌన్ నుండి మీ జిల్లా, మండలం, గ్రామం ఎంపిక చేసి సర్వే నంబర్ నమోదు చేసి క్యాప్చా ఎంటర్ చేయండి.',
          hi: 'जिला और मंडल चुनकर विवरण दर्ज करें।'
        },
        department: 'Revenue & Survey Settlement',
        action: {
          en: 'Enter captcha and click Submit.',
          te: 'క్యాప్చా నమోదు చేసి సబ్మిట్ క్లిక్ చేయండి.',
          hi: 'कैप्चा दर्ज कर सबमिट करें।'
        },
        onlineAvailable: true,
        offlineAvailable: false,
        documentsRequired: [],
        dependencies: [1],
        expectedDays: 'Instant',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'issuance',
        title: {
          en: 'Inspect and Download Certified Adangal / 1-B PDF',
          te: 'అడంగల్ / 1-బి పిడిఎఫ్ ను పరిశీలించి డౌన్‌లోడ్ చేసుకోండి',
          hi: 'प्रमाणित अडंगल / 1-बी पीडीएफ डाउनलोड करें'
        },
        explanation: {
          en: 'Review legal ownership, whether the land is under prohibitory list (Section 22A), nature of title, and download official copy.',
          te: 'భూమి 22A నిషేధిత జాబితాలో లేదని నిర్ధారించుకుని, కాపీని డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'भूमि विवरण की जांच कर पीडीएफ डाउनलोड करें।'
        },
        department: 'CCLA AP',
        action: {
          en: 'Click "Print" or "Download PDF". For legal court/bank mortgage evidence, order MeeSeva certified signed copy (₹25).',
          te: 'ప్రింట్ లేదా డౌన్‌లోడ్ చేయండి. కోర్టు లేదా బ్యాంక్ రుణం కొరకు మీసేవ సంతకం కాపీ తీసుకోండి.',
          hi: 'पीडीएफ डाउनलोड करें।'
        },
        actionUrl: 'https://meebhoomi.ap.gov.in/',
        actionLabel: {
          en: 'Download from Meebhoomi ↗',
          te: 'మీభూమి నుండి డౌన్‌లోడ్ ↗',
          hi: 'मीभूमि से डाउनलोड ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'MeeSeva / Village Secretariat for physical certified extract',
        documentsRequired: [],
        dependencies: [2],
        expectedDays: 'Instant online / 15 mins at MeeSeva',
        fee: 'Free online / ₹25 for certified physical MeeSeva seal copy',
        verificationStatus: 'verified'
      }
    ],
    dependencies: [],
    officialPortal: 'meebhoomi.ap.gov.in',
    officialPortalUrl: 'https://meebhoomi.ap.gov.in/',
    trackingUrl: 'https://meebhoomi.ap.gov.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Village Revenue Officer (VRO) desk at any Grama Sachivalayam in Andhra Pradesh.',
      te: 'ఆంధ్రప్రదేశ్ లోని అన్ని గ్రామ సచివాలయాల్లోని VRO డెస్క్.',
      hi: 'सभी ग्राम सचिवालयों में वीआरओ डेस्क।'
    },
    fees: [
      {
        item: 'Online Digital View & PDF Download',
        amount: '₹0.00 (Completely Free)',
        officialRule: 'CCLA Digital Land Initiative'
      },
      {
        item: 'MeeSeva Certified Signed Stamp Extract',
        amount: '₹25.00',
        officialRule: 'MeeSeva Citizen Charter'
      }
    ],
    processingTime: 'Instant Real-Time Online Retrieval',
    outputDocument: {
      en: 'Official Government of Andhra Pradesh Adangal / Pahani or 1-B ROR Digital Record',
      te: 'ఆంధ్రప్రదేశ్ ప్రభుత్వ అధికారిక అడంగల్ / పహానీ లేదా 1-బి డిజిటల్ పత్రం',
      hi: 'आधिकारिक डिजिटल भूमि अभिलेख'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Meebhoomi Official Land Records Portal (Govt of AP)',
        domain: 'meebhoomi.ap.gov.in',
        url: 'https://meebhoomi.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified',
        notes: 'Official citizen land records portal of Andhra Pradesh.'
      },
      {
        title: 'Chief Commissioner of Land Administration (CCLA AP)',
        domain: 'ccla.ap.gov.in',
        url: 'https://ccla.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ]
  },

  // 5. Encumbrance Certificate (EC) for Property / Land
  {
    id: 'ap-igrs-ec',
    serviceName: {
      en: 'Encumbrance Certificate (EC) Search & Download',
      te: 'ఈసీ - ఎన్‌కంబరెన్స్ సర్టిఫికెట్ (భారరహిత పత్రం)',
      hi: 'भार-मुक्त प्रमाण पत्र (ईसी)'
    },
    category: 'revenue',
    department: 'Registration and Stamps Department (IGRS AP)',
    state: 'Andhra Pradesh',
    description: {
      en: 'Statutory certificate issued by the Sub-Registrar Office (SRO) reflecting all registered transactions, sales, mortgages, gifts, or court attachments relating to a specific immovable property or land parcel over a specified period.',
      te: 'స్థిరాస్తి లేదా భూమిపై జరిగిన రిజిస్ట్రేషన్లు, క్రయవిక్రయాలు, తాకట్టు లేదా కోర్టు వివాదాల చరిత్రను చూపే అధికారిక భారరహిత పత్రం (సబ్-రిజిస్ట్రార్ కార్యాలయం ద్వారా జారీ చేయబడుతుంది).',
      hi: 'संपत्ति पर सभी पंजीकृत लेनदेन और बंधक का आधिकारिक विवरण।'
    },
    eligibility: {
      criteria: {
        en: [
          'Any citizen, buyer, bank, or property owner searching property in Andhra Pradesh.',
          'Computerized records available from 1983 onwards across all AP Sub-Registrar Offices.'
        ],
        te: [
          'ఆంధ్రప్రదేశ్‌లోని ఏ ఆస్తి వివరాలనైనా పరిశీలించాలనుకునే ఎవరైనా దరఖాస్తు చేసుకోవచ్చు.',
          '1983 నుండి నేటి వరకు జరిగిన అన్ని రిజిస్ట్రేషన్ వివరాలు కంప్యూటరీకరించబడ్డాయి.'
        ],
        hi: [
          'आंध्र प्रदेश में किसी भी संपत्ति का विवरण खोजने वाले नागरिकों के लिए।'
        ]
      }
    },
    documents: [
      {
        id: 'ec-doc-number',
        name: {
          en: 'Document Number & Year OR Property Survey / Plot / Door Number',
          te: 'రిజిస్ట్రేషన్ డాక్యుమెంట్ నంబర్ & సంవత్సరం లేదా సర్వే / ప్లాట్ నంబర్',
          hi: 'दस्तावेज़ संख्या और वर्ष या सर्वे / प्लॉट नंबर'
        },
        purpose: {
          en: 'Exact query index to search SRO registration ledgers.',
          te: 'సబ్-రిజిస్ట్రార్ కార్యాలయ రికార్డులను శోధించడానికి ప్రాథమిక సమాచారం.',
          hi: 'पंजीकरण रिकॉर्ड खोजने के लिए आवश्यक जानकारी।'
        },
        category: 'required',
        issuingAuthority: 'Applicant / Title Deed',
        officialPortal: 'registration.ap.gov.in',
        officialPortalUrl: 'https://registration.ap.gov.in/',
        estimatedEffort: 'Available on original registered deed',
        whyRequired: {
          en: 'Required by the IGRS search engine.',
          te: 'IGRS శోధనకు తప్పనిసరి.',
          hi: 'खोज के लिए अनिवार्य।'
        },
        dependencies: [],
        obtainedFrom: 'Sale Deed copy or Municipal tax receipt',
        status: 'have'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'portal_submission',
        title: {
          en: 'Open IGRS AP Official Registration Portal',
          te: 'IGRS AP అధికారిక పోర్టల్ తెరవండి',
          hi: 'आईजीआरएस एपी आधिकारिक पोर्टल खोलें'
        },
        explanation: {
          en: 'Visit registration.ap.gov.in — the single official gateway of Registration & Stamps Dept, Govt of Andhra Pradesh.',
          te: 'registration.ap.gov.in అధికారిక పోర్టల్‌ను సందర్శించండి.',
          hi: 'registration.ap.gov.in पोर्टल खोलें।'
        },
        department: 'Registration & Stamps Dept, AP',
        action: {
          en: 'Click on "Encumbrance Search (EC)" under Services menu.',
          te: '"Encumbrance Search (EC)" లింక్ పై క్లిక్ చేయండి.',
          hi: 'ईसी सर्च पर क्लिक करें।'
        },
        actionUrl: 'https://registration.ap.gov.in/',
        actionLabel: {
          en: 'Open IGRS AP Portal ↗',
          te: 'IGRS AP పోర్టల్ తెరవండి ↗',
          hi: 'आईजीआरएस पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: ['ec-doc-number'],
        dependencies: [],
        expectedDays: 'Instant',
        fee: 'Free for online search preview / Statutory fee for signed copy',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'verification',
        title: {
          en: 'Search by Document Number or Property Boundary Details',
          te: 'డాక్యుమెంట్ నంబర్ లేదా ఆస్తి సరిహద్దుల వివరాలతో వెతకండి',
          hi: 'दस्तावेज़ संख्या या संपत्ति विवरण से खोजें'
        },
        explanation: {
          en: 'Select the jurisdictional Sub-Registrar Office (SRO), enter the registration document number and execution year, or search by District, Mandal, Village, and Survey No.',
          te: 'సంబంధిత సబ్-రిజిస్ట్రార్ కార్యాలయం (SRO) ఎంచుకుని, డాక్యుమెంట్ నంబర్ మరియు సంవత్సరం నమోదు చేయండి.',
          hi: 'उप-पंजीयक कार्यालय चुनें और विवरण दर्ज करें।'
        },
        department: 'IGRS Sub-Registrar Offices',
        action: {
          en: 'Specify search period (e.g. 1983 to Current Date).',
          te: 'శోధన వ్యవధిని ఎంచుకోండి (ఉదా: 1983 నుండి నేటి వరకు).',
          hi: 'खोज अवधि चुनें।'
        },
        onlineAvailable: true,
        offlineAvailable: false,
        documentsRequired: [],
        dependencies: [1],
        expectedDays: 'Instant',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'issuance',
        title: {
          en: 'Download Encumbrance Statement or Certified Copy (CC)',
          te: 'ఎన్‌కంబరెన్స్ స్టేట్‌మెంట్ లేదా సర్టిఫైడ్ కాపీ డౌన్‌లోడ్ చేసుకోండి',
          hi: 'भार प्रमाण पत्र या प्रमाणित प्रति डाउनलोड करें'
        },
        explanation: {
          en: 'Download the comprehensive property statement displaying deed dates, claim amounts, executing parties, and volume numbers.',
          te: 'అమ్మకందారులు, కొనుగోలుదారులు, రిజిస్ట్రేషన్ తేదీలు మరియు బ్యాంక్ తాకట్టుల వివరాలతో కూడిన పూర్తి స్టేట్‌మెంట్ డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'पूर्ण विवरण डाउनलोड करें।'
        },
        department: 'IGRS AP',
        action: {
          en: 'Download PDF or apply for digitally signed certified copy.',
          te: 'PDF డౌన్‌లోడ్ చేయండి లేదా డిజిటల్ సంతకం కాపీని పొందండి.',
          hi: 'पीडीएफ डाउनलोड करें।'
        },
        actionUrl: 'https://registration.ap.gov.in/',
        actionLabel: {
          en: 'Download EC from IGRS ↗',
          te: 'IGRS నుండి ఈసీ డౌన్‌లోడ్ ↗',
          hi: 'आईजीआरएस से ईसी डाउनलोड ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Respective Sub-Registrar Office (SRO) or MeeSeva',
        documentsRequired: [],
        dependencies: [2],
        expectedDays: 'Instant digital search',
        fee: 'Free digital search / ₹200-₹500 for stamped signed copy at SRO depending on years',
        verificationStatus: 'verified'
      }
    ],
    dependencies: [],
    officialPortal: 'registration.ap.gov.in',
    officialPortalUrl: 'https://registration.ap.gov.in/',
    trackingUrl: 'https://registration.ap.gov.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Concerned Sub-Registrar Office (SRO) or MeeSeva Centers throughout Andhra Pradesh.',
      te: 'ఆంధ్రప్రదేశ్ లోని సంబంధిత సబ్-రిజిస్ట్రార్ కార్యాలయం (SRO) లేదా మీసేవ కేంద్రాలు.',
      hi: 'संबंधित उप-पंजीयक कार्यालय या मीसेवा केंद्र।'
    },
    fees: [
      {
        item: 'Online Public EC Search & View',
        amount: '₹0.00 (Free of Cost)',
        officialRule: 'Govt. of AP Registration Portal'
      },
      {
        item: 'Certified Stamped Copy (up to 30 years)',
        amount: '₹200.00 - ₹500.00',
        officialRule: 'AP Registration Rules 1908'
      }
    ],
    processingTime: 'Instant Online for post-1983 records; 3-5 days for manual archives prior to 1983',
    outputDocument: {
      en: 'Form No. 15 / Form No. 16 Encumbrance Certificate with SRO Electronic Seal',
      te: 'ఫారమ్ 15 లేదా ఫారమ్ 16 అధికారిక భారరహిత ధ్రువపత్రం',
      hi: 'फॉर्म 15 / फॉर्म 16 भार प्रमाण पत्र'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Registration and Stamps Department, Govt of AP',
        domain: 'registration.ap.gov.in',
        url: 'https://registration.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ]
  },

  // 6. Driving Licence / Learner's Licence (LLR)
  {
    id: 'ap-driving-licence',
    serviceName: {
      en: 'Learner’s Licence (LLR) & Permanent Driving Licence',
      te: 'లెర్నర్స్ లైసెన్స్ (LLR) మరియు శాశ్వత డ్రైవింగ్ లైసెన్స్',
      hi: 'लर्नर लाइसेंस और स्थायी ड्राइविंग लाइसेंस'
    },
    category: 'transport',
    department: 'Transport Department, Government of Andhra Pradesh (AP RTA)',
    state: 'Andhra Pradesh',
    description: {
      en: 'Official driving permit issued under the Motor Vehicles Act by the Regional Transport Authority (RTA) in Andhra Pradesh. Features Aadhaar-authenticated online contactless computer test for LLR and biometric track driving test for permanent licence.',
      te: 'మోటారు వాహనాల చట్టం ప్రకారం ఆంధ్రప్రదేశ్ రవాణా శాఖ (RTA) ద్వారా జారీ చేయబడే అధికారిక డ్రైవింగ్ లైసెన్స్. LLR కొరకు ఆన్‌లైన్ ఆధార్ టెస్ట్ మరియు శాశ్వత లైసెన్స్ కొరకు ట్రాక్ టెస్ట్ నిర్వహించబడుతుంది.',
      hi: 'आंध्र प्रदेश आरटीए द्वारा जारी वैध ड्राइविंग लाइसेंस।'
    },
    eligibility: {
      criteria: {
        en: [
          'Age 16+ for gearless two-wheeler up to 50cc; Age 18+ for light motor vehicles (car/bike with gear); Age 20+ for transport/commercial vehicles.',
          'Must possess valid Aadhaar card with mobile number linked for online contactless LLR exam.',
          'Medical fitness self-declaration (Form 1) or Medical Certificate (Form 1A) by MBBS doctor if age >40.'
        ],
        te: [
          'గేర్లు లేని 50cc లోపు ద్విచక్ర వాహనాలకు 16 ఏళ్లు; గేర్లు ఉన్న బైక్ మరియు కారుకు 18 ఏళ్లు నిండి ఉండాలి.',
          'ఆన్‌లైన్ లోనే LLR పరీక్ష రాయడానికి ఆధార్ కార్డుకు మొబైల్ నంబర్ లింక్ అయి ఉండాలి.',
          '40 ఏళ్లు పైబడిన వారికి ప్రభుత్వ వైద్యుని ఫారమ్ 1A మెడికల్ సర్టిఫికెట్ అవసరం.'
        ],
        hi: [
          '18 वर्ष या उससे अधिक आयु। ऑनलाइन परीक्षा के लिए आधार से मोबाइल लिंक होना चाहिए।'
        ]
      }
    },
    documents: [
      {
        id: 'dl-aadhaar',
        name: {
          en: 'Aadhaar Card (With Registered Mobile Number)',
          te: 'ఆధార్ కార్డు (మొబైల్ నంబర్ లింక్ అయి ఉండాలి)',
          hi: 'आधार कार्ड (पंजीकृत मोबाइल नंबर के साथ)'
        },
        purpose: {
          en: 'Proof of age, address, and contactless online face authentication on Sarathi portal.',
          te: 'వయస్సు, చిరునామా మరియు ఆన్‌లైన్ ఫేస్ అథెంటికేషన్ కొరకు.',
          hi: 'आयु, पता और ऑनलाइन प्रमाणीकरण के लिए।'
        },
        category: 'required',
        issuingAuthority: 'UIDAI',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Mandatory for Sarathi contactless LLR service.',
          te: 'సారథి కాంటాక్ట్‌లెస్ LLR పరీక్షకు ఆధార్ తప్పనిసరి.',
          hi: 'कांटेक्टलेस टेस्ट के लिए अनिवार्य।'
        },
        dependencies: [],
        obtainedFrom: 'UIDAI Portal',
        status: 'need'
      },
      {
        id: 'dl-ssc-memo',
        name: {
          en: 'SSC Marks Memo / Birth Certificate',
          te: '10వ తరగతి మార్కుల మెమో / జనన ధ్రువీకరణ పత్రం',
          hi: '10वीं की मार्कशीट या जन्म प्रमाण पत्र'
        },
        purpose: {
          en: 'Statutory proof of exact date of birth.',
          te: 'ఖచ్చితమైన పుట్టిన తేదీ రుజువు.',
          hi: 'जन्म तिथि का वैधानिक प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'BSE AP / Municipal Authority',
        officialPortal: 'bse.ap.gov.in',
        officialPortalUrl: 'https://www.bse.ap.gov.in/',
        estimatedEffort: 'Already available with applicant',
        whyRequired: {
          en: 'Cross-verifies age eligibility.',
          te: 'వయో పరిమితిని ధ్రువీకరించడానికి.',
          hi: 'आयु की पुष्टि के लिए।'
        },
        dependencies: [],
        obtainedFrom: 'School / Municipality',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'portal_submission',
        title: {
          en: 'Apply for Learner’s Licence (LLR) on Parivahan / AP Transport Portal',
          te: 'రవాణా శాఖ సారథి పోర్టల్‌లో LLR కొరకు దరఖాస్తు చేయండి',
          hi: 'परिवहन पोर्टल पर लर्नर लाइसेंस (एलएलआर) के लिए आवेदन करें'
        },
        explanation: {
          en: 'Go to parivahan.gov.in or aptransport.org, select Andhra Pradesh, choose "Apply for Learner Licence", and choose "Submit via Aadhaar Authentication" for home-based contactless exam.',
          te: 'parivahan.gov.in లేదా aptransport.org లోకి వెళ్లి ఆంధ్రప్రదేశ్ ఎంచుకుని, ఆధార్ ద్వారా దరఖాస్తు చేయండి.',
          hi: 'parivahan.gov.in पर जाकर आंध्र प्रदेश चुनें और आवेदन करें।'
        },
        department: 'AP RTA & MoRTH',
        action: {
          en: 'Fill vehicle class (MCWG - Motorcycle with Gear, LMV - Car) and upload educational certificate.',
          te: 'వాహన తరగతి (MCWG, LMV) ఎంచుకుని పత్రాలు అప్‌లోడ్ చేయండి.',
          hi: 'वाहन श्रेणी चुनें और दस्तावेज़ अपलोड करें।'
        },
        actionUrl: 'https://parivahan.gov.in/',
        actionLabel: {
          en: 'Open Parivahan Sarathi Portal ↗',
          te: 'సారథి పోర్టల్ తెరవండి ↗',
          hi: 'परिवहन सारथी पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Any Authorized MeeSeva Kiosk or RTO Office in AP',
        documentsRequired: ['dl-aadhaar', 'dl-ssc-memo'],
        dependencies: [],
        expectedDays: '1 Day',
        fee: '₹260 (LLR Fee ₹150 + Test Fee ₹50 + Service ₹60 per class)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'verification',
        title: {
          en: 'Take Contactless Online Road Safety & Signs Test',
          te: 'ఆన్‌లైన్ రోడ్డు భద్రత మరియు ట్రాఫిక్ నిబంధనల పరీక్ష రాయండి',
          hi: 'ऑनलाइन सड़क सुरक्षा और संकेत परीक्षा दें'
        },
        explanation: {
          en: 'Take the 15-question computer exam on traffic rules and road signs from your home computer/mobile with front camera face authentication.',
          te: 'ట్రాఫిక్ సంకేతాలు మరియు నిబంధనలపై 15 ప్రశ్నల ఆన్‌లైన్ పరీక్ష రాయండి (కనీసం 10 మార్కులు రావాలి).',
          hi: 'घर बैठे 15 प्रश्नों की ऑनलाइन परीक्षा पास करें।'
        },
        department: 'AP Transport Department',
        action: {
          en: 'Answer correctly (minimum 10 out of 15 required to pass). Instant LLR generated upon passing.',
          te: 'ఉత్తీర్ణత సాధించిన వెంటనే డిజిటల్ LLR డౌన్‌లోడ్ అవుతుంది.',
          hi: 'पास होते ही डिजिटल एलएलआर जारी हो जाता है।'
        },
        actionUrl: 'https://parivahan.gov.in/',
        actionLabel: {
          en: 'Start Online LLR Test ↗',
          te: 'LLR ఆన్‌లైన్ టెస్ట్ ప్రారంభించండి ↗',
          hi: 'एलएलआर परीक्षा शुरू करें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [1],
        expectedDays: 'Same Day (Within 15 minutes)',
        fee: 'Nil (Included in initial fee)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'prerequisite_cert',
        title: {
          en: 'Hold LLR for Mandatory 30-Day Training Window',
          te: 'తప్పనిసరిగా 30 రోజుల పాటు శిక్షణ పొందండి (LLR నిబంధన)',
          hi: 'अनिवार्य 30 दिनों का प्रशिक्षण प्राप्त करें'
        },
        explanation: {
          en: 'Under Central Motor Vehicles Rules, an applicant must hold a valid LLR for at least 30 days before appearing for the permanent driving licence test. LLR is valid for 6 months.',
          te: 'నిబంధనల ప్రకారం LLR వచ్చిన 30 రోజుల తర్వాత మాత్రమే శాశ్వత డ్రైవింగ్ పరీక్షకు స్లాట్ బుక్ చేసుకోగలరు.',
          hi: 'स्थायी टेस्ट से पहले 30 दिन का एलएलआर अनिवार्य है।'
        },
        department: 'Transport Department, AP',
        action: {
          en: 'Practice driving under supervision of a valid licence holder with "L" plate affixed.',
          te: '"L" బోర్డు తగిలించి లైసెన్స్ ఉన్న వ్యక్తి సమక్షంలో ప్రాక్టీస్ చేయండి.',
          hi: 'ड्राइविंग का अभ्यास करें।'
        },
        onlineAvailable: true,
        offlineAvailable: false,
        documentsRequired: [],
        dependencies: [2],
        expectedDays: '30 Days mandatory waiting',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 4,
        stage: 'portal_submission',
        title: {
          en: 'Book Driving Track Test Slot & Pay DL Fee',
          te: 'డ్రైవింగ్ ట్రాక్ టెస్ట్ స్లాట్ బుక్ చేసుకుని ఫీజు చెల్లించండి',
          hi: 'ड्राइविंग ट्रैक टेस्ट स्लॉट बुक करें और शुल्क दें'
        },
        explanation: {
          en: 'Login to Sarathi portal after 30 days, select "Apply for Driving Licence", enter LLR number, and choose your preferred date and RTO driving test track.',
          te: '30 రోజుల తర్వాత పోర్టల్‌లో డ్రైవింగ్ లైసెన్స్ కొరకు దరఖాస్తు చేసి, మీకు నచ్చిన తేదీన RTO ట్రాక్ స్లాట్ ఎంచుకోండి.',
          hi: 'सारथी पोर्टल पर जाकर टेस्ट का स्लॉट बुक करें।'
        },
        department: 'AP RTA',
        action: {
          en: 'Pay permanent DL fee (₹200 DL + ₹300 Driving Test + ₹200 Smart Card = ₹700).',
          te: '₹700 ఫీజు ఆన్‌లైన్‌లో చెల్లించి, స్లాట్ రసీదు ప్రింట్ తీసుకోండి.',
          hi: 'फीस का भुगतान कर पावती प्रिंट करें।'
        },
        actionUrl: 'https://parivahan.gov.in/',
        actionLabel: {
          en: 'Book Driving Slot ↗',
          te: 'డ్రైవింగ్ స్లాట్ బుక్ చేయండి ↗',
          hi: 'स्लॉट बुक करें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [3],
        expectedDays: '1 Day',
        fee: '₹700.00 (Statutory Driving Licence & Smart Card Fee)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 5,
        stage: 'verification',
        title: {
          en: 'Attend Physical Driving Test on Automated Test Track',
          te: 'RTO ఆటోమేటెడ్ డ్రైవింగ్ ట్రాక్ వద్ద హాజరై టెస్ట్ ఇవ్వండి',
          hi: 'आरटीओ ट्रैक पर ड्राइविंग टेस्ट दें'
        },
        explanation: {
          en: 'Bring your vehicle along with valid Insurance, Pollution (PUC), and Registration Certificate (RC) to the chosen RTO testing track. Complete the "8" shape track for two-wheeler or "H" / reverse S-track for car.',
          te: 'మీ వాహనం, ఆర్సీ, పొల్యూషన్ మరియు ఇన్సూరెన్స్ లతో RTO ట్రాక్ వద్దకు వెళ్లి మోటార్ వెహికల్ ఇన్‌స్పెక్టర్ (MVI) ఎదుట టెస్ట్ ఇవ్వండి.',
          hi: 'आरसी, बीमा के साथ आरटीओ ट्रैक पर वाहन चलाकर दिखाएं।'
        },
        department: 'Motor Vehicle Inspector (MVI) & RTO AP',
        action: {
          en: 'Capture biometric photograph and signature at the RTO counter.',
          te: 'RTO కార్యాలయంలో బయోమెట్రిక్ ఫోటో మరియు సంతకం అందించండి.',
          hi: 'आरटीओ में फोटो और हस्ताक्षर दें।'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        offlineVenue: 'Selected RTO Automated Driving Test Track in AP',
        documentsRequired: [],
        dependencies: [4],
        expectedDays: 'Same Day at designated appointment slot',
        fee: 'Nil (Paid during slot booking)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 6,
        stage: 'issuance',
        title: {
          en: 'Download Digital DL & Receive Speed Post Smart Card',
          te: 'డిజిటల్ లైసెన్స్ డౌన్‌లోడ్ చేసుకోండి & స్పీడ్ పోస్ట్ ద్వారా కార్డు అందుకోండి',
          hi: 'डिजिटल लाइसेंस डाउनलोड करें और कार्ड प्राप्त करें'
        },
        explanation: {
          en: 'Upon passing, the MVI approves the licence electronically. Download your legally valid Driving Licence instantly via mParivahan / DigiLocker. Physical smart card is dispatched via Speed Post to your Aadhaar address.',
          te: 'MVI ఆమోదించిన వెంటనే డిజిలాకర్ లేదా mParivahan నుండి లైసెన్స్ డౌన్‌లోడ్ చేసుకోవచ్చు. అసలు కార్డు పోస్ట్ ద్వారా ఇంటికి వస్తుంది.',
          hi: 'पास होने पर डिजिलॉकर से डाउनलोड करें। स्मार्ट कार्ड डाक से आएगा।'
        },
        department: 'Transport Department & India Post',
        action: {
          en: 'Pull document into DigiLocker or mParivahan app.',
          te: 'డిజిలాకర్ లేదా mParivahan యాప్‌లో లైసెన్స్ సేవ్ చేసుకోండి.',
          hi: 'डिजिलॉकर में सेव करें।'
        },
        actionUrl: 'https://parivahan.gov.in/',
        actionLabel: {
          en: 'Download DL on Parivahan ↗',
          te: 'పరివహన్ లో లైసెన్స్ డౌన్‌లోడ్ ↗',
          hi: 'परिवहन से डाउनलोड करें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [5],
        expectedDays: 'Instant Digital / 7-15 Days for Speed Post Delivery',
        fee: 'Nil (Postage included in Smart Card fee)',
        verificationStatus: 'verified'
      }
    ],
    dependencies: [],
    officialPortal: 'aptransport.org',
    officialPortalUrl: 'https://aptransport.org/',
    trackingUrl: 'https://parivahan.gov.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Regional Transport Offices (RTO) and Unit Offices across all 26 districts of Andhra Pradesh.',
      te: 'ఆంధ్రప్రదేశ్ లోని అన్ని జిల్లాల్లోని RTO మరియు యూనిట్ కార్యాలయాలు.',
      hi: 'सभी 26 जिलों के आरटीओ कार्यालय।'
    },
    fees: [
      {
        item: 'Learner Licence Fee (per class of vehicle)',
        amount: '₹260.00',
        officialRule: 'Central Motor Vehicles Rules 1989'
      },
      {
        item: 'Permanent Driving Licence + Test + Smart Card',
        amount: '₹700.00',
        officialRule: 'Central Motor Vehicles Rules Schedule'
      }
    ],
    processingTime: 'Instant LLR via online Aadhaar test; DL dispatched within 7 days of passing track test',
    outputDocument: {
      en: 'QR-Code Chip-Embedded Driving Licence Smart Card & DigiLocker Digital Permit',
      te: 'క్యూఆర్ కోడ్ మరియు చిప్ తో కూడిన డ్రైవింగ్ లైసెన్స్ స్మార్ట్ కార్డు',
      hi: 'क्यूआर कोड युक्त ड्राइविंग लाइसेंस स्मार्ट कार्ड'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Andhra Pradesh Transport Department Official Website',
        domain: 'aptransport.org',
        url: 'https://aptransport.org/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Ministry of Road Transport and Highways (Sarathi Parivahan)',
        domain: 'parivahan.gov.in',
        url: 'https://parivahan.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ]
  },

  // 7. New Low Tension (LT) Domestic Electricity Connection
  {
    id: 'ap-electricity-connection',
    serviceName: {
      en: 'New Domestic Electricity Connection (LT Category-I)',
      te: 'నూతన గృహ విద్యుత్ కనెక్షన్ (LT కేటగిరీ-I)',
      hi: 'नया घरेलू बिजली कनेक्शन'
    },
    category: 'utilities',
    department: 'AP Power Distribution Companies (APCPDCL / APEPDCL / APSPDCL)',
    state: 'Andhra Pradesh',
    description: {
      en: 'Application and meter installation for a new single-phase or three-phase Low Tension (LT) domestic power supply from the jurisdictional Andhra Pradesh electricity distribution utility (Central, Eastern, or Southern Power Distribution Company).',
      te: 'APCPDCL, APEPDCL లేదా APSPDCL పరిధిలో కొత్త గృహ విద్యుత్ కనెక్షన్ మరియు స్మార్ట్ మీటర్ అమరిక కొరకు అధికారిక సేవ.',
      hi: 'आंध्र प्रदेश बिजली वितरण कंपनियों द्वारा नया घरेलू बिजली कनेक्शन।'
    },
    eligibility: {
      criteria: {
        en: [
          'Owner or authorized lawful tenant of the residential premises situated within the supply jurisdiction.',
          'Premises must have completed wiring verified by a licensed electrical contractor.',
          'No outstanding electricity arrears on the premises from previous connections.'
        ],
        te: [
          'నివాస గృహ యజమాని లేదా చట్టబద్ధమైన అద్దెదారు అయి ఉండాలి.',
          'వైరింగ్ పనులు పూర్తయి ఉండాలి.',
          'ఆ భవనానికి పాత విద్యుత్ బకాయిలు ఏవీ ఉండకూడదు.'
        ],
        hi: [
          'आवासीय परिसर का स्वामी या किराएदार। कोई बकाया बिल नहीं होना चाहिए।'
        ]
      }
    },
    documents: [
      {
        id: 'elec-proof-ownership',
        name: {
          en: 'Registered Sale Deed / Property Tax Receipt / Municipal Sanction Plan',
          te: 'రిజిస్టర్డ్ దస్తావేజు / పురపాలక ఆస్తి పన్ను రసీదు / భవన నిర్మాణ అనుమతి పత్రం',
          hi: 'पंजीकृत सेल डीड या नगर पालिका संपत्ति कर रसीद'
        },
        purpose: {
          en: 'Proof of lawful ownership or occupancy of the building.',
          te: 'ఆస్తి యాజమాన్య నిర్ధారణ కొరకు.',
          hi: 'परिसर के स्वामित्व का प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'Sub-Registrar Office / Municipal Corporation / Gram Panchayat',
        officialPortal: 'cdma.ap.gov.in',
        officialPortalUrl: 'https://cdma.ap.gov.in/',
        estimatedEffort: 'Already available with owner',
        whyRequired: {
          en: 'Statutory mandate under AP Electricity Regulatory Commission (APERC) supply code.',
          te: 'విద్యుత్ నియంత్రణ మండలి నిబంధనల ప్రకారం తప్పనిసరి.',
          hi: 'बिजली नियमों के तहत आवश्यक।'
        },
        dependencies: [],
        obtainedFrom: 'Municipality / Panchayat',
        status: 'need'
      },
      {
        id: 'elec-aadhaar',
        name: {
          en: 'Aadhaar Card of Property Owner',
          te: 'ఆస్తి యజమాని ఆధార్ కార్డు',
          hi: 'मकान मालिक का आधार कार्ड'
        },
        purpose: {
          en: 'Identity verification and mobile number linkage for SMS billing.',
          te: 'గుర్తింపు మరియు విద్యుత్ బిల్లుల ఎస్ఎంఎస్ కొరకు.',
          hi: 'पहचान और मोबाइल बिलिंग के लिए।'
        },
        category: 'required',
        issuingAuthority: 'UIDAI',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Consumer identity registration.',
          te: 'వినియోగదారుని వివరాల నమోదుకు.',
          hi: 'उपभोक्ता पहचान के लिए।'
        },
        dependencies: [],
        obtainedFrom: 'UIDAI Portal',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'portal_submission',
        title: {
          en: 'Apply Online on Jurisdiction Discom Portal or Grama Sachivalayam',
          te: 'సంబంధిత విద్యుత్ సంస్థ పోర్టల్ లేదా సచివాలయంలో దరఖాస్తు చేయండి',
          hi: 'डिस्कॉम पोर्टल या ग्राम सचिवालय में आवेदन करें'
        },
        explanation: {
          en: 'Identify your district Discom: Central AP (Vijayawada, Guntur, Prakasam) -> APCPDCL; Eastern AP (Vizag, Godavari, Srikakulam) -> APEPDCL; Southern AP (Tirupati, Nellore, Ananthapur, Kadapa, Kurnool) -> APSPDCL.',
          te: 'మీ జిల్లాను బట్టి APCPDCL, APEPDCL లేదా APSPDCL పోర్టల్‌లో లేదా గ్రామ సచివాలయంలో ఎనర్జీ అసిస్టెంట్ ద్వారా దరఖాస్తు చేయండి.',
          hi: 'अपने जिले के डिस्कॉम पोर्टल पर आवेदन करें।'
        },
        department: 'AP Discoms (Energy Department, AP)',
        action: {
          en: 'Select "LT New Service Connection", input required connected load (e.g. 1 KW or 2 KW), and upload documents.',
          te: 'కనెక్టెడ్ లోడ్ (1 కిలోవాట్ లేదా 2 కిలోవాట్లు) నమోదు చేసి పత్రాలు అప్‌లోడ్ చేయండి.',
          hi: 'लोड चुनें और दस्तावेज़ अपलोड करें।'
        },
        actionUrl: 'https://www.apcpdcl.in/',
        actionLabel: {
          en: 'Open AP Discom Portal ↗',
          te: 'డిస్కామ్ పోర్టల్ తెరవండి ↗',
          hi: 'डिस्कॉम पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Village / Ward Secretariat Energy Assistant Desk or Electricity Section Office',
        documentsRequired: ['elec-proof-ownership', 'elec-aadhaar'],
        dependencies: [],
        expectedDays: '1 Day',
        fee: 'Application Fee ₹50 + Development Charges (approx ₹1200-₹1500 for 1KW) + Security Deposit ₹300',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'verification',
        title: {
          en: 'Technical Feasibility Inspection by Assistant Engineer (AE Operations)',
          te: 'అసిస్టెంట్ ఇంజనీర్ (AE) వారిచే సాంకేతిక తనిఖీ',
          hi: 'सहायक अभियंता द्वारा तकनीकी व्यवहार्यता निरीक्षण'
        },
        explanation: {
          en: 'The local Assistant Engineer / Line Inspector visits the premises to check wire approach, transformer load capacity, and meter board position.',
          te: 'లైన్ ఇన్‌స్పెక్టర్ లేదా AE వచ్చి స్థలాన్ని పరిశీలించి, మీటర్ బోర్డు మరియు పోల్ దూరాన్ని తనిఖీ చేస్తారు.',
          hi: 'इंजीनियर परिसर का निरीक्षण कर पोल और मीटर बोर्ड की जांच करेगा।'
        },
        department: 'Operation & Maintenance Section, AP Discom',
        action: {
          en: 'Ensure safe indoor wiring and earthing pipe are ready.',
          te: 'ఎర్తింగ్ పైపు మరియు మీటర్ బోర్డు సిద్ధంగా ఉండేలా చూసుకోండి.',
          hi: 'अर्थिंग और मीटर बोर्ड तैयार रखें।'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [1],
        expectedDays: '2-3 Days',
        fee: 'Nil (Official inspection included in application fee)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'issuance',
        title: {
          en: 'Meter Installation and Service Release',
          te: 'విద్యుత్ మీటర్ బిగింపు మరియు సర్వీస్ ప్రారంభం',
          hi: 'मीटर स्थापना और बिजली आपूर्ति चालू'
        },
        explanation: {
          en: 'Linesman installs the calibrated Smart Energy Meter, connects service line from electric pole, and issues the official Consumer Number (Service Connection No).',
          te: 'డిజిటల్ మీటర్ అమర్చి, మెయిన్ లైన్ తో కలిపి అధికారిక సర్వీస్ నంబర్ కేటాయిస్తారు.',
          hi: 'मीटर लगाकर नया सर्विस नंबर जारी किया जाता है।'
        },
        department: 'AP Discom Distribution Section',
        action: {
          en: 'Receive Service Connection Order copy and note your 13-digit Consumer Service Number.',
          te: 'మీ 13 అంకెల సర్వీస్ నంబర్ నోట్ చేసుకోండి.',
          hi: 'अपना 13 अंकों का उपभोक्ता नंबर नोट करें।'
        },
        actionUrl: 'https://www.apcpdcl.in/',
        actionLabel: {
          en: 'Check Connection Status ↗',
          te: 'కనెక్షన్ స్థితిని చూడండి ↗',
          hi: 'कनेक्शन स्थिति देखें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [2],
        expectedDays: 'Within 7 Days of fee payment (Citizen Charter SLA)',
        fee: 'Nil (Already covered in initial deposit)',
        verificationStatus: 'verified'
      }
    ],
    dependencies: [],
    officialPortal: 'apcpdcl.in',
    officialPortalUrl: 'https://www.apcpdcl.in/',
    trackingUrl: 'https://www.apcpdcl.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Local Electricity Section Office (AE Operations) or Grama/Ward Sachivalayam Energy Assistant.',
      te: 'స్థానిక విద్యుత్ సెక్షన్ ఆఫీస్ లేదా గ్రామ సచివాలయం ఎనర్జీ అసిస్టెంట్.',
      hi: 'बिजली अनुभाग कार्यालय या ग्राम सचिवालय ऊर्जा सहायक।'
    },
    fees: [
      {
        item: 'Application & Registration Fee',
        amount: '₹50.00',
        officialRule: 'APERC Tariff Regulations'
      },
      {
        item: 'Development Charges (1 KW single phase)',
        amount: '₹1,200.00',
        officialRule: 'APERC Schedule of Charges'
      },
      {
        item: 'Initial Security Deposit (ISD)',
        amount: '₹300.00',
        officialRule: 'APERC Consumer Security Code'
      }
    ],
    processingTime: '7 Days statutory delivery from the date of payment of statutory charges',
    outputDocument: {
      en: 'Official Electricity Service Release Order with Unique 13-Digit Consumer Connection Number',
      te: '13 అంకెల వినియోగదారు సంఖ్యతో కూడిన అధికారిక సర్వీస్ విడుదల ఉత్తర్వు',
      hi: 'आधिकारिक बिजली सेवा रिलीज आदेश'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Andhra Pradesh Central Power Distribution Corporation (APCPDCL)',
        domain: 'apcpdcl.in',
        url: 'https://www.apcpdcl.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Eastern Power Distribution Company of AP (APEPDCL)',
        domain: 'apeasternpower.com',
        url: 'https://www.apeasternpower.com/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Southern Power Distribution Company of AP (APSPDCL)',
        domain: 'apspdcl.in',
        url: 'https://www.apspdcl.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ]
  },

  // 8. New Rice Card / Ration Card (Civil Supplies)
  {
    id: 'ap-rice-card',
    serviceName: {
      en: 'New Rice Card / Ration Card Application (ePDS AP)',
      te: 'కొత్త బియ్యం కార్డు (రేషన్ కార్డు) దరఖాస్తు',
      hi: 'नया चावल कार्ड / राशन कार्ड आवेदन'
    },
    category: 'civil_supplies',
    department: 'Department of Consumer Affairs, Food & Civil Supplies, AP',
    state: 'Andhra Pradesh',
    description: {
      en: 'Issuance of QR-coded Andhra Pradesh Rice Card enabling subsidized food grains (free rice under PMGKAY / State Public Distribution System) and serving as the primary BPL entitlement proof for state welfare schemes, Aarogyasri health coverage, and pensions.',
      te: 'ప్రజా పంపిణీ వ్యవస్థ ద్వారా ఉచిత బియ్యం, నిత్యావసర సరుకులు మరియు ఆరోగ్యశ్రీ ఉచిత వైద్యం కోసం గ్రామ/వార్డు సచివాలయం ద్వారా జారీ చేయబడే క్యూఆర్ కోడ్ బియ్యం కార్డు.',
      hi: 'सार्वजनिक वितरण प्रणाली और आरोग्यश्री योजना के तहत नया चावल कार्ड।'
    },
    eligibility: {
      criteria: {
        en: [
          'Total monthly family income must be below ₹10,000 in rural areas and ₹12,000 in urban areas.',
          'Total family agricultural land holding must be less than 3 acres of wetland or 10 acres of dryland.',
          'Monthly electricity consumption of the household must be less than 300 units.',
          'No family member should be a government employee or income tax payee.',
          'Family should not own a four-wheeler (except commercial taxi, auto, tractor).'
        ],
        te: [
          'కుటుంబ నెలవారీ ఆదాయం గ్రామీణ ప్రాంతాల్లో ₹10,000, పట్టణ ప్రాంతాల్లో ₹12,000 మించరాదు.',
          'వ్యవసాయ భూమి 3 ఎకరాల మాగాణి లేదా 10 ఎకరాల మెట్ట లోపు ఉండాలి.',
          'నెలవారీ విద్యుత్ వినియోగం 300 యూనిట్ల లోపు ఉండాలి.',
          'కుటుంబంలో ఎవరూ ప్రభుత్వ ఉద్యోగి లేదా ఆదాయపు పన్ను చెల్లింపుదారు అయి ఉండకూడదు.',
          'నాలుగు చక్రాల వాహనం (కారు) ఉండకూడదు (ఆటో, ట్రాక్టర్ మినహాయింపు).'
        ],
        hi: [
          'ग्रामीण में ₹10,000 और शहरी में ₹12,000 से कम मासिक आय। 300 यूनिट से कम बिजली खपत।'
        ]
      }
    },
    documents: [
      {
        id: 'rc-aadhaar-all',
        name: {
          en: 'Aadhaar Cards of All Family Members',
          te: 'కుటుంబ సభ్యులందరి ఆధార్ కార్డులు',
          hi: 'सभी परिवार के सदस्यों के आधार कार्ड'
        },
        purpose: {
          en: 'e-KYC authentication and deduplication across National Food Security Portal.',
          te: 'కుటుంబ సభ్యుల గుర్తింపు మరియు నకిలీ కార్డుల నివారణకు.',
          hi: 'ई-केवाईसी और परिवार के सदस्यों की पहचान।'
        },
        category: 'required',
        issuingAuthority: 'UIDAI',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Mandatory Aadhaar seeding under PDS control order.',
          te: 'రేషన్ కార్డులో ప్రతి సభ్యుడి ఆధార్ సీడింగ్ చట్టబద్ధంగా తప్పనిసరి.',
          hi: 'अनिवार्य आधार सीडिंग।'
        },
        dependencies: [],
        obtainedFrom: 'UIDAI Portal',
        status: 'need'
      },
      {
        id: 'rc-electricity-bill',
        name: {
          en: 'Recent Electricity Bill of Residence',
          te: 'ఇంటి తాజా విద్యుత్ బిల్లు',
          hi: 'हालिया बिजली बिल'
        },
        purpose: {
          en: 'Verifies the <300 units/month continuous consumption rule.',
          te: 'నెలవారీ విద్యుత్ వినియోగం 300 యూనిట్ల లోపు ఉందని నిర్ధారించడానికి.',
          hi: '300 यूनिट से कम खपत के सत्यापन के लिए।'
        },
        category: 'required',
        issuingAuthority: 'APCPDCL / APEPDCL / APSPDCL',
        officialPortal: 'apcpdcl.in',
        officialPortalUrl: 'https://www.apcpdcl.in/',
        estimatedEffort: 'Latest physical bill or SMS bill',
        whyRequired: {
          en: 'Key eligibility filter.',
          te: 'అర్హత నిబంధనలలో ఒకటి.',
          hi: 'पात्रता की मुख्य शर्त।'
        },
        dependencies: [],
        obtainedFrom: 'Electricity Utility',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'eligibility',
        title: {
          en: 'Verify Eligibility Parameters Against 6-Point Formula',
          te: '6-సూత్రాల అర్హత నిబంధనలను సరిచూసుకోండి',
          hi: '6-सूत्रीय पात्रता मानदंडों की जांच करें'
        },
        explanation: {
          en: 'Government of AP evaluates Rice Card eligibility automatically across databases: Income, Land (Meebhoomi), Electricity units, Vehicle registration (Transport), and Property tax.',
          te: 'ఆదాయం, భూమి, విద్యుత్ బిల్లు, కార్ల యాజమాన్యం మరియు ఆస్తి పన్ను వివరాలను ప్రభుత్వం ఆన్‌లైన్ ద్వారా సరిచూస్తుంది.',
          hi: 'आय, भूमि, बिजली और वाहन डेटाबेस से स्वचालित मिलान।'
        },
        department: 'Civil Supplies & GSWS Dept',
        action: {
          en: 'Ensure your household satisfies all 6 eligibility conditions.',
          te: 'అన్ని 6 నిబంధనలు సరిపోతాయని ధ్రువీకరించుకోండి.',
          hi: 'शर्तों की पुष्टि करें।'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [],
        expectedDays: '1 Day',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'portal_submission',
        title: {
          en: 'Apply at Grama / Ward Sachivalayam (Welfare & Education Assistant)',
          te: 'గ్రామ/వార్డు సచివాలయంలో సంక్షేమ అసిస్టెంట్ వద్ద దరఖాస్తు సమర్పించండి',
          hi: 'ग्राम/वार्ड सचिवालय में आवेदन जमा करें'
        },
        explanation: {
          en: 'Visit your jurisdictional Secretariat. The Welfare Assistant (DA/WEA) creates a New Rice Card application by capturing member Aadhaar e-KYC fingerprints on the GSWS portal.',
          te: 'మీ పరిధిలోని గ్రామ/వార్డు సచివాలయానికి వెళ్లి కుటుంబ సభ్యులందరి వేలిముద్రలు వేయించి దరఖాస్తు చేయండి.',
          hi: 'सचिवालय में बायोमेट्रिक देकर आवेदन करें।'
        },
        department: 'Grama Ward Sachivalayam (GSWS AP)',
        action: {
          en: 'Obtain printed acknowledgment receipt with Spandana / GSWS service request number.',
          te: 'అక్నాలెడ్జ్మెంట్ రసీదు నంబర్ తీసుకోండి.',
          hi: 'पावती रसीद प्राप्त करें।'
        },
        actionUrl: 'https://gramawardsachivalayam.ap.gov.in/',
        actionLabel: {
          en: 'Open GSWS Portal ↗',
          te: 'సచివాలయం పోర్టల్ తెరవండి ↗',
          hi: 'सचिवालय पोर्टल खोलें ↗'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        offlineVenue: 'Local Village / Ward Secretariat (Grama Sachivalayam)',
        documentsRequired: ['rc-aadhaar-all', 'rc-electricity-bill'],
        dependencies: [1],
        expectedDays: 'Same Day submission',
        fee: 'Nil (Official service is completely free of cost)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'verification',
        title: {
          en: 'Social Audit by Ward / Village Volunteer & VRO Field Verification',
          te: 'వాలంటీర్ మరియు VRO వారి క్షేత్రస్థాయి పరిశీలన',
          hi: 'वॉलंटियर और वीआरओ द्वारा सत्यापन'
        },
        explanation: {
          en: 'Village Revenue Officer (VRO) inspects house living standards and submits verification checklist to the Tahsildar / Municipal Commissioner.',
          te: 'VRO ఇంటికి వచ్చి వివరాలను పరిశీలించి తహశీల్దార్ కు నివేదిక పంపుతారు.',
          hi: 'वीआरओ घर आकर स्थिति की पुष्टि करता है।'
        },
        department: 'Civil Supplies / Revenue Dept',
        action: {
          en: 'Be present at home with original Aadhaar cards during verification.',
          te: 'పరిశీలన సమయంలో ఒరిజినల్ ఆధార్ కార్డులతో అందుబాటులో ఉండండి.',
          hi: 'सत्यापन के समय मूल आधार कार्ड दिखाएं।'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [2],
        expectedDays: '7-10 Days',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 4,
        stage: 'department_processing',
        title: {
          en: 'Approval by Tahsildar / Mandal Revenue Officer',
          te: 'తహశీల్దార్ గారి ఆమోదం',
          hi: 'तहसीलदार द्वारा अंतिम अनुमोदन'
        },
        explanation: {
          en: 'Tahsildar electronically sanctions the Rice Card, and a new unique 10-digit Rice Card Number is allocated on the ePDS AP database.',
          te: 'తహశీల్దార్ గారు ఆమోదించగానే ePDS డేటాబేస్ లో కొత్త బియ్యం కార్డు నంబర్ జారీ అవుతుంది.',
          hi: 'अनुमोदन के बाद 10 अंकों का चावल कार्ड नंबर जारी होता है।'
        },
        department: 'Tahsildar & Civil Supplies Officer (CSO)',
        action: {
          en: 'Automated administrative approval step.',
          te: 'పరిపాలనా ఆమోద ప్రక్రియ.',
          hi: 'स्वचालित प्रशासनिक प्रक्रिया।'
        },
        onlineAvailable: true,
        offlineAvailable: false,
        documentsRequired: [],
        dependencies: [3],
        expectedDays: '3-5 Days',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 5,
        stage: 'issuance',
        title: {
          en: 'Print QR Rice Card at Grama Sachivalayam',
          te: 'గ్రామ సచివాలయంలో క్యూఆర్ కోడ్ బియ్యం కార్డు ప్రింట్ అందుకోండి',
          hi: 'सचिवालय से क्यूआर कोड युक्त चावल कार्ड प्राप्त करें'
        },
        explanation: {
          en: 'Collect your laminated QR-code Rice Card directly from the Village / Ward Secretariat. The card can also be downloaded digitally on the ePDS AP portal.',
          te: 'సచివాలయంలో లామినేట్ చేసిన క్యూఆర్ బియ్యం కార్డును ఉచితంగా అందుకోండి లేదా ePDS లో డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'सचिवालय से लेमिनेटेड कार्ड प्राप्त करें।'
        },
        department: 'Civil Supplies & GSWS',
        action: {
          en: 'Check Rice Card status and download digital copy on ePDS portal.',
          te: 'ePDS పోర్టల్‌లో కార్డు వివరాలు చూసుకోండి.',
          hi: 'ईपीडीएस पोर्टल पर कार्ड की जांच करें।'
        },
        actionUrl: 'https://epdsap.ap.gov.in/',
        actionLabel: {
          en: 'Check ePDS Rice Card Status ↗',
          te: 'ePDS కార్డు స్థితి చూడండి ↗',
          hi: 'ईपीडीएस कार्ड स्थिति देखें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Local Village / Ward Secretariat',
        documentsRequired: [],
        dependencies: [4],
        expectedDays: 'Within 21 Days total SLA',
        fee: 'Nil (Free of charge)',
        verificationStatus: 'verified'
      }
    ],
    dependencies: [],
    officialPortal: 'epdsap.ap.gov.in',
    officialPortalUrl: 'https://epdsap.ap.gov.in/',
    trackingUrl: 'https://epdsap.ap.gov.in/',
    onlineAvailable: false,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Application must be submitted via Grama / Ward Sachivalayam (GSWS) biometric terminal; tracking is available online on epdsap.ap.gov.in.',
      te: 'దరఖాస్తు గ్రామ/వార్డు సచివాలయంలో బయోమెట్రిక్ ద్వారా చేయాలి; ట్రాకింగ్ epdsap.ap.gov.in లో చూడవచ్చు.',
      hi: 'सचिवालय में बायोमेट्रिक आवेदन; ऑनलाइन ट्रैकिंग उपलब्ध।'
    },
    fees: [
      {
        item: 'Application & Card Issuance Fee',
        amount: '₹0.00 (Completely Free)',
        officialRule: 'Govt of AP Civil Supplies Charter'
      }
    ],
    processingTime: '21 Days statutory timeframe under AP GSWS Citizen Charter',
    outputDocument: {
      en: 'Official Andhra Pradesh Laminated QR-Code Rice Card',
      te: 'అధికారిక క్యూఆర్ కోడ్ ఆంధ్రప్రదేశ్ బియ్యం కార్డు',
      hi: 'आधिकारिक क्यूआर कोड आंध्र प्रदेश चावल कार्ड'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Food & Civil Supplies Department (ePDS AP)',
        domain: 'epdsap.ap.gov.in',
        url: 'https://epdsap.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Grama Ward Sachivalayam Portal (GSWS AP)',
        domain: 'gramawardsachivalayam.ap.gov.in',
        url: 'https://gramawardsachivalayam.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ]
  },

  // 9. Birth Certificate (CDMA AP & Municipalities)
  {
    id: 'ap-birth-cert',
    serviceName: {
      en: 'Birth Certificate Registration & Certified Copy',
      te: 'జనన ధ్రువీకరణ పత్రం (పుట్టిన తేదీ సర్టిఫికెట్)',
      hi: 'जन्म प्रमाण पत्र पंजीकरण और प्रतिलिपि'
    },
    category: 'municipal',
    department: 'Municipal Administration (CDMA) / Panchayat Raj Department, AP',
    state: 'Andhra Pradesh',
    description: {
      en: 'Statutory registration and issuance of Birth Certificate under Registration of Births and Deaths Act 1969. Free institutional registration within 21 days; delayed registration procedure through Revenue Divisional Officer (RDO) after 1 year.',
      te: 'జనన మరియు మరణాల నమోదు చట్టం ప్రకారం పురపాలక సంఘం (మున్సిపాలిటీ) లేదా గ్రామ పంచాయతీ ద్వారా జారీ చేయబడే అధికారిక జనన ధ్రువపత్రం.',
      hi: 'नगरपालिका या ग्राम पंचायत द्वारा जारी आधिकारिक जन्म प्रमाण पत्र।'
    },
    eligibility: {
      criteria: {
        en: [
          'Child born in a government hospital, private nursing home, or residence within Andhra Pradesh.',
          'Hospital automatically registers within 21 days; for home births, family must report to Panchayat Secretary / Ward Health Secretary within 21 days.'
        ],
        te: [
          'ఆంధ్రప్రదేశ్‌లోని ప్రభుత్వ లేదా ప్రైవేట్ ఆసుపత్రిలో, లేదా ఇంట్లో జన్మించిన పిల్లలకు వర్తిస్తుంది.',
          'ఆసుపత్రిలో పుట్టినట్లయితే 21 రోజుల్లోగా ఆసుపత్రి రికార్డుల ద్వారా నమోదు చేయబడుతుంది.'
        ],
        hi: [
          'आंध्र प्रदेश में जन्म लेने वाले बच्चों के लिए।'
        ]
      }
    },
    documents: [
      {
        id: 'birth-hospital-slip',
        name: {
          en: 'Hospital Birth Discharge Summary / Form-1 from Nursing Home',
          te: 'ఆసుపత్రి డిశ్చార్జ్ సమ్మరీ / ఫారమ్-1 (పుట్టిన వివరాల పత్రం)',
          hi: 'अस्पताल डिस्चार्ज सारांश / फॉर्म-1'
        },
        purpose: {
          en: 'Institutional medical proof of child birth date, time, sex, and mother’s name.',
          te: 'పుట్టిన తేదీ, సమయం, లింగం మరియు తల్లి పేరు రుజువు.',
          hi: 'जन्म की तारीख और समय का संस्थागत प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'Hospital Medical Superintendent / Gynecologist',
        officialPortal: 'cdma.ap.gov.in',
        officialPortalUrl: 'https://cdma.ap.gov.in/',
        estimatedEffort: 'Issued by hospital at the time of discharge',
        whyRequired: {
          en: 'Mandatory clinical proof of live birth.',
          te: 'ఆసుపత్రి జనన నమోదుకు తప్పనిసరి.',
          hi: 'जन्म का नैदानिक प्रमाण।'
        },
        dependencies: [],
        obtainedFrom: 'Hospital where child was delivered',
        status: 'need'
      },
      {
        id: 'birth-parents-aadhaar',
        name: {
          en: 'Aadhaar Cards of Both Parents',
          te: 'తల్లి మరియు తండ్రి ఇద్దరి ఆధార్ కార్డులు',
          hi: 'माता-पिता दोनों के आधार कार्ड'
        },
        purpose: {
          en: 'Authenticates parentage and spelling of names in civil registry.',
          te: 'తల్లిదండ్రుల పేర్లు సరిగ్గా నమోదు చేయడానికి.',
          hi: 'माता-पिता के नाम के सही पंजीकरण के लिए।'
        },
        category: 'required',
        issuingAuthority: 'UIDAI',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Statutory mandate under Civil Registration System (CRS).',
          te: 'రిజిస్ట్రీ నిబంధనల ప్రకారం తప్పనిసరి.',
          hi: 'नागरिक पंजीकरण प्रणाली के तहत अनिवार्य।'
        },
        dependencies: [],
        obtainedFrom: 'UIDAI Portal',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'document_prep',
        title: {
          en: 'Obtain Hospital Delivery Slip & Verify Parent Names',
          te: 'ఆసుపత్రి డిశ్చార్జ్ స్లిప్ తీసుకుని తల్లిదండ్రుల పేర్లు సరిచూసుకోండి',
          hi: 'अस्पताल पर्ची प्राप्त करें और माता-पिता के नाम जांचें'
        },
        explanation: {
          en: 'Ensure mother\'s name and father\'s name on hospital records match their Aadhaar cards precisely to avoid tedious court corrections later.',
          te: 'ఆసుపత్రి రికార్డుల్లో తల్లిదండ్రుల పేర్లు వారి ఆధార్ కార్డుతో సరిగ్గా ఉన్నాయో లేదో చూసుకోండి.',
          hi: 'अस्पताल रिकॉर्ड में नाम आधार कार्ड से मेल खाने चाहिए।'
        },
        department: 'Health & Medical Dept, AP',
        action: {
          en: 'Collect Form-1 signed by hospital medical officer before discharge.',
          te: 'ఆసుపత్రి నుండి ఫారమ్-1 కాపీని తీసుకోండి.',
          hi: 'अस्पताल से फॉर्म-1 प्राप्त करें।'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        documentsRequired: ['birth-hospital-slip', 'birth-parents-aadhaar'],
        dependencies: [],
        expectedDays: 'At discharge',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'portal_submission',
        title: {
          en: 'Search or Register on CDMA AP / MeeSeva Portal',
          te: 'CDMA AP లేదా మీసేవ పోర్టల్‌లో శోధించండి లేదా దరఖాస్తు చేయండి',
          hi: 'सीडीएमए या मीसेवा पोर्टल पर खोजें या आवेदन करें'
        },
        explanation: {
          en: 'For births within 21 days in municipal areas, hospital data auto-syncs with cdma.ap.gov.in. Apply for child name inclusion and certified copy on MeeSeva or at the Ward Secretariat.',
          te: 'పురపాలక ప్రాంతాల్లో ఆసుపత్రి వివరాలు ఆటోమేటిక్‌గా సింక్ అవుతాయి. పిల్లల పేరు చేర్చడానికి మరియు సర్టిఫికెట్ కోసం మీసేవ లేదా వార్డు సచివాలయంలో దరఖాస్తు చేయండి.',
          hi: 'मीसेवा या वार्ड सचिवालय में बच्चे का नाम जोड़ने के लिए आवेदन करें।'
        },
        department: 'CDMA AP / Municipal Corporation',
        action: {
          en: 'Provide child official legal name and parents Aadhaar numbers.',
          te: 'పాప/బాబు పేరు మరియు తల్లిదండ్రుల ఆధార్ నంబర్లు నమోదు చేయండి.',
          hi: 'बच्चे का नाम और माता-पिता के आधार दर्ज करें।'
        },
        actionUrl: 'https://cdma.ap.gov.in/',
        actionLabel: {
          en: 'Open CDMA AP Portal ↗',
          te: 'CDMA AP పోర్టల్ తెరవండి ↗',
          hi: 'सीडीएमए पोर्टल खोलें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Municipal Corporation Office or Grama / Ward Sachivalayam',
        documentsRequired: ['birth-hospital-slip', 'birth-parents-aadhaar'],
        dependencies: [1],
        expectedDays: '1 Day',
        fee: 'Nil within 21 days / ₹35 MeeSeva copy charge',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'issuance',
        title: {
          en: 'Download QR-Verifiable Birth Certificate with Digital DSC',
          te: 'డిజిటల్ సంతకంతో కూడిన జనన ధ్రువపత్రం డౌన్‌లోడ్ చేసుకోండి',
          hi: 'डिजिटल रूप से हस्ताक्षरित जन्म प्रमाण पत्र डाउनलोड करें'
        },
        explanation: {
          en: 'Download the official certificate signed by the Registrar of Births and Deaths (Municipal Health Officer / Panchayat Secretary). Watermarked and verifiable globally.',
          te: 'రిజిస్ట్రార్ డిజిటల్ సంతకంతో కూడిన అసలైన జనన ధ్రువపత్రాన్ని మీసేవ లేదా CDMA పోర్టల్ నుండి డౌన్‌లోడ్ చేసుకోండి.',
          hi: 'रजिस्ट्रार के डिजिटल हस्ताक्षर वाला प्रमाण पत्र डाउनलोड करें।'
        },
        department: 'Registrar of Births & Deaths (CDMA)',
        action: {
          en: 'Download PDF or print on official MeeSeva stationery.',
          te: 'PDF డౌన్‌లోడ్ చేయండి లేదా మీసేవలో ప్రింట్ తీసుకోండి.',
          hi: 'पीडीएफ डाउनलोड करें।'
        },
        actionUrl: 'https://cdma.ap.gov.in/',
        actionLabel: {
          en: 'Download Certificate ↗',
          te: 'సర్టిఫికెట్ డౌన్‌లోడ్ ↗',
          hi: 'प्रमाण पत्र डाउनलोड ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Any MeeSeva Kiosk or Ward Secretariat',
        documentsRequired: [],
        dependencies: [2],
        expectedDays: '3-7 Days',
        fee: '₹35 for physical certificate copy',
        verificationStatus: 'verified'
      }
    ],
    dependencies: [],
    officialPortal: 'cdma.ap.gov.in',
    officialPortalUrl: 'https://cdma.ap.gov.in/',
    trackingUrl: 'https://cdma.ap.gov.in/',
    onlineAvailable: true,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Concerned Municipal Corporation / Municipality Office or Grama/Ward Sachivalayam.',
      te: 'మున్సిపల్ కార్పొరేషన్ / మున్సిపాలిటీ కార్యాలయం లేదా గ్రామ/వార్డు సచివాలయం.',
      hi: 'नगर निगम कार्यालय या ग्राम/वार्ड सचिवालय।'
    },
    fees: [
      {
        item: 'Birth Registration (Within 21 days)',
        amount: '₹0.00 (Completely Free)',
        officialRule: 'RBD Act 1969'
      },
      {
        item: 'MeeSeva Certified Printout Fee',
        amount: '₹35.00',
        officialRule: 'MeeSeva User Charge'
      }
    ],
    processingTime: 'Instant if hospital has uploaded; 3-7 days if child name inclusion is requested',
    outputDocument: {
      en: 'Official Birth Certificate with QR Code Issued by Registrar of Births and Deaths',
      te: 'రిజిస్ట్రార్ వారిచే జారీ చేయబడిన అధికారిక జనన ధ్రువీకరణ పత్రం',
      hi: 'क्यूआर कोड युक्त आधिकारिक जन्म प्रमाण पत्र'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Commissioner & Director of Municipal Administration (CDMA AP)',
        domain: 'cdma.ap.gov.in',
        url: 'https://cdma.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Andhra Pradesh MeeSeva Portal',
        domain: 'onlineap.meeseva.gov.in',
        url: 'https://onlineap.meeseva.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ]
  },

  // 10. Social Security Pension (NTR Bharosa / Old Age Pension)
  {
    id: 'ap-social-pension',
    serviceName: {
      en: 'NTR Bharosa Social Security Pension (Old Age / Widow / Disabled)',
      te: 'ఎన్టీఆర్ భరోసా సామాజిక భద్రతా పింఛన్ (వృద్ధాప్య / వితంతు / దివ్యాంగుల పింఛన్)',
      hi: 'एनटीआर भरोसा सामाजिक सुरक्षा पेंशन'
    },
    category: 'welfare',
    department: 'Society for Elimination of Rural Poverty (SERP) / Panchayat Raj & GSWS',
    state: 'Andhra Pradesh',
    description: {
      en: 'Monthly financial assistance (₹4,000 per month for Old Age / Widow pensions and ₹6,000 to ₹15,000 for Differently-abled) delivered directly to citizens through Grama/Ward Secretariats to ensure dignified social security in Andhra Pradesh.',
      te: 'వృద్ధులు, వితంతువులు మరియు దివ్యాంగులకు ప్రతి నెలా 1వ తేదీన గ్రామ/వార్డు సచివాలయం ద్వారా ఇంటివద్దకే అందించే నెలకు ₹4,000 నుండి ₹15,000 వరకు ఆర్థిక సహాయం.',
      hi: 'बुजुर्गों, विधवाओं और दिव्यांगों के लिए मासिक पेंशन योजना।'
    },
    eligibility: {
      criteria: {
        en: [
          'Age 60+ for Old Age Pension (OAP); No age restriction for Widows (must have death certificate of husband).',
          'Family monthly income must not exceed ₹10,000 in rural and ₹12,000 in urban areas.',
          'Must possess an active AP Rice Card and Aadhaar card.',
          'Land holding must be less than 3 acres wetland or 10 acres dryland.',
          'Electricity usage below 300 units/month and no four-wheeler.'
        ],
        te: [
          'వృద్ధాప్య పింఛన్ కొరకు 60 ఏళ్లు నిండి ఉండాలి; వితంతు పింఛన్ కొరకు భర్త మరణ ధ్రువీకరణ పత్రం ఉండాలి.',
          'కుటుంబ నెలవారీ ఆదాయం గ్రామీణ ప్రాంతంలో ₹10,000, పట్టణ ప్రాంతంలో ₹12,000 లోపు ఉండాలి.',
          'ఆంధ్రప్రదేశ్ బియ్యం కార్డు మరియు ఆధార్ కార్డు తప్పనిసరి.'
        ],
        hi: [
          'वृद्धावस्था के लिए 60 वर्ष। सक्रिय चावल कार्ड और 300 यूनिट से कम बिजली।'
        ]
      }
    },
    documents: [
      {
        id: 'pen-aadhaar',
        name: {
          en: 'Aadhaar Card of Pension Applicant',
          te: 'దరఖాస్తుదారు ఆధార్ కార్డు',
          hi: 'पेंशन आवेदक का आधार कार्ड'
        },
        purpose: {
          en: 'Age verification and door-step biometric disbursement.',
          te: 'వయస్సు నిర్ధారణ మరియు ప్రతి నెలా పింఛన్ పొందడానికి బయోమెట్రిక్ అనుసంధానం.',
          hi: 'आयु सत्यापन और बायोमेट्रिक भुगतान के लिए।'
        },
        category: 'required',
        issuingAuthority: 'UIDAI',
        officialPortal: 'myaadhaar.uidai.gov.in',
        officialPortalUrl: 'https://myaadhaar.uidai.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Primary identifier in AP Social Security Pension database.',
          te: 'పింఛన్ డేటాబేస్ లో ప్రధాన గుర్తింపు సంఖ్య.',
          hi: 'पेंशन डेटाबेस में मुख्य पहचान।'
        },
        dependencies: [],
        obtainedFrom: 'UIDAI Portal',
        status: 'need'
      },
      {
        id: 'pen-rice-card',
        name: {
          en: 'Active AP Rice Card',
          te: 'యాక్టివ్ ఆంధ్రప్రదేశ్ బియ్యం కార్డు',
          hi: 'सक्रिय आंध्र प्रदेश चावल कार्ड'
        },
        purpose: {
          en: 'Proves BPL family qualification.',
          te: 'నిరుపేద వర్గాల కుటుంబ అర్హత నిర్ధారణకు.',
          hi: 'गरीबी रेखा के नीचे होने का प्रमाण।'
        },
        category: 'required',
        issuingAuthority: 'Civil Supplies Dept, AP',
        officialPortal: 'epdsap.ap.gov.in',
        officialPortalUrl: 'https://epdsap.ap.gov.in/',
        estimatedEffort: 'Instant download',
        whyRequired: {
          en: 'Mandatory precondition for welfare scheme eligibility.',
          te: 'సంక్షేమ పథకాలకు బియ్యం కార్డు తప్పనిసరి.',
          hi: 'योजना के लिए अनिवार्य।'
        },
        dependencies: [],
        obtainedFrom: 'Civil Supplies Dept',
        status: 'need'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        stage: 'portal_submission',
        title: {
          en: 'Apply at Grama / Ward Sachivalayam (Welfare Assistant)',
          te: 'గ్రామ/వార్డు సచివాలయంలో సంక్షేమ అసిస్టెంట్ వద్ద దరఖాస్తు చేయండి',
          hi: 'ग्राम/वार्ड सचिवालय में आवेदन करें'
        },
        explanation: {
          en: 'Submit application through the Welfare and Education Assistant (WEA) at your nearest Secretariat. Biometric e-KYC is captured on the spot.',
          te: 'సమీప గ్రామ/వార్డు సచివాలయానికి వెళ్లి సంక్షేమ అసిస్టెంట్ ద్వారా దరఖాస్తు చేయండి.',
          hi: 'सचिवालय में कल्याण सहायक के माध्यम से आवेदन करें।'
        },
        department: 'Panchayat Raj & GSWS Dept, AP',
        action: {
          en: 'Verify your Aadhaar date of birth satisfies the 60-year cutoff.',
          te: 'ఆధార్ కార్డులో వయస్సు 60 ఏళ్లు నిండినట్లు సరిచూసుకోండి.',
          hi: 'उम्र 60 वर्ष पूरी होने की पुष्टि करें।'
        },
        actionUrl: 'https://sspensions.ap.gov.in/',
        actionLabel: {
          en: 'Open AP SSPensions Portal ↗',
          te: 'పింఛన్ల పోర్టల్ తెరవండి ↗',
          hi: 'पेंशन पोर्टल खोलें ↗'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        offlineVenue: 'Local Village / Ward Secretariat (Grama Sachivalayam)',
        documentsRequired: ['pen-aadhaar', 'pen-rice-card'],
        dependencies: [],
        expectedDays: 'Same Day submission',
        fee: 'Nil (Official service is completely free of cost)',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 2,
        stage: 'verification',
        title: {
          en: 'Social Audit & Field Verification by MPDO / Municipal Commissioner',
          te: 'క్షేత్ర విచారణ మరియు ఎంపీడీవో / మున్సిపల్ కమిషనర్ పరిశీలన',
          hi: 'क्षेत्रीय जांच और एमपीडीओ द्वारा सत्यापन'
        },
        explanation: {
          en: 'The application is validated against the 6-point eligibility formula and published on the Grama Sachivalayam notice board for public social audit.',
          te: 'దరఖాస్తును 6 అర్హత నిబంధనల ప్రకారం పరిశీలించి, సామాజిక తనిఖీ కోసం సచివాలయంలో ప్రదర్శిస్తారు.',
          hi: 'पात्रता की पुष्टि कर सामाजिक अंकेक्षण किया जाता है।'
        },
        department: 'MPDO (Rural) / Municipal Commissioner (Urban)',
        action: {
          en: 'Administrative process — no action required from applicant.',
          te: 'ఇది పరిపాలనా ప్రక్రియ.',
          hi: 'प्रशासनिक प्रक्रिया।'
        },
        onlineAvailable: false,
        offlineAvailable: true,
        documentsRequired: [],
        dependencies: [1],
        expectedDays: '10-15 Days',
        fee: 'Nil',
        verificationStatus: 'verified'
      },
      {
        stepNumber: 3,
        stage: 'issuance',
        title: {
          en: 'District Collector Sanction & Monthly Doorstep Cash Delivery',
          te: 'జిల్లా కలెక్టర్ గారి ఆమోదం మరియు ప్రతినెలా ఇంటివద్దకే పింఛన్ పంపిణీ',
          hi: 'जिला कलेक्टर द्वारा स्वीकृति और मासिक पेंशन वितरण'
        },
        explanation: {
          en: 'District Collector issues official pension sanction order. The Secretariat staff visits your doorstep on the 1st of every month to disburse the pension via biometric authentication.',
          te: 'కలెక్టర్ గారు పింఛన్ మంజూరు చేసిన తర్వాత, ప్రతినెలా 1వ తేదీన సచివాలయ సిబ్బంది మీ ఇంటికే వచ్చి బయోమెట్రిక్ ద్వారా నగదు అందజేస్తారు.',
          hi: 'हर महीने की 1 तारीख को घर पर पेंशन दी जाती है।'
        },
        department: 'SERP & Grama Ward Sachivalayam',
        action: {
          en: 'Check pension sanction status online with Aadhaar number.',
          te: 'ఆన్‌లైన్‌లో మీ పింఛన్ స్థితిని ఆధార్ నంబర్ ద్వారా చూసుకోండి.',
          hi: 'पेंशन पोर्टल पर स्थिति जांचें।'
        },
        actionUrl: 'https://sspensions.ap.gov.in/',
        actionLabel: {
          en: 'Check Pension Status on SSPensions ↗',
          te: 'పింఛన్ స్థితిని చూడండి ↗',
          hi: 'पेंशन स्थिति देखें ↗'
        },
        onlineAvailable: true,
        offlineAvailable: true,
        offlineVenue: 'Applicant Residence via Secretariat Staff',
        documentsRequired: [],
        dependencies: [2],
        expectedDays: 'Sanctioned during the monthly notification cycle',
        fee: 'Nil (Free doorstep service)',
        verificationStatus: 'verified'
      }
    ],
    dependencies: [],
    officialPortal: 'sspensions.ap.gov.in',
    officialPortalUrl: 'https://sspensions.ap.gov.in/',
    trackingUrl: 'https://sspensions.ap.gov.in/',
    onlineAvailable: false,
    offlineAvailable: true,
    offlineDetails: {
      en: 'Grama / Ward Sachivalayam in all 26 AP districts; tracking online via sspensions.ap.gov.in.',
      te: 'ఆంధ్రప్రదేశ్ లోని అన్ని గ్రామ/వార్డు సచివాలయాలు; ట్రాకింగ్ sspensions.ap.gov.in లో చూడవచ్చు.',
      hi: 'सभी ग्राम/वार्ड सचिवालय; ऑनलाइन ट्रैकिंग उपलब्ध।'
    },
    fees: [
      {
        item: 'Application & Delivery Fee',
        amount: '₹0.00 (Completely Free)',
        officialRule: 'Govt of AP Social Security Directives'
      }
    ],
    processingTime: 'Processed during the monthly sanction cycle',
    outputDocument: {
      en: 'NTR Bharosa Pension Sanction ID Card & Monthly Biometric Disbursement Docket',
      te: 'ఎన్టీఆర్ భరోసా అధికారిక పింఛన్ మంజూరు గుర్తింపు కార్డు',
      hi: 'आधिकारिक पेंशन पहचान पत्र'
    },
    lastVerified: 'March 2026',
    verificationStatus: 'verified',
    sources: [
      {
        title: 'Andhra Pradesh Social Security Pensions (SSPensions)',
        domain: 'sspensions.ap.gov.in',
        url: 'https://sspensions.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      },
      {
        title: 'Grama Ward Sachivalayam (GSWS AP)',
        domain: 'gramawardsachivalayam.ap.gov.in',
        url: 'https://gramawardsachivalayam.ap.gov.in/',
        lastVerified: 'March 2026',
        tier: 1,
        verificationStatus: 'verified'
      }
    ]
  }
];
