export interface TranslationStrings {
  // Brand
  brandName: string;
  tagline: string;
  secondaryTagline: string;
  apBadge: string;

  // Language screen
  welcomeTitle: string;
  welcomeSubtitle: string;
  chooseLanguage: string;
  continueBtn: string;
  switchLanguage: string;

  // Navigation
  navHome: string;
  navExplore: string;
  navMyJourney: string;
  navDocuments: string;
  navTrack: string;
  navHelp: string;
  navProfile: string;

  // Hero
  heroHeading: string;
  heroSubheading: string;
  inputPlaceholder: string;
  buildJourneyBtn: string;
  voiceInputLabel: string;
  uploadDocLabel: string;
  suggestedGoalsLabel: string;
  listeningVoice: string;
  voiceNotSupported: string;

  // Processing Stages
  stageUnderstanding: string;
  stageCheckingReqs: string;
  stageMappingDeps: string;
  stageFindingSources: string;
  stageBuildingJourney: string;

  // Clarification
  clarificationTitle: string;
  clarificationSubtitle: string;
  selectDistrict: string;
  selectLocationType: string;
  ruralOption: string;
  urbanOption: string;
  proceedToJourney: string;
  changeProfile: string;

  // Journey UI
  completeJourneyTitle: string;
  completeJourneySubtitle: string;
  goalLabel: string;
  deptLabel: string;
  stagesCountLabel: string;
  docsRequiredLabel: string;
  officialPortalsLabel: string;
  nextActionTitle: string;
  getThisDocumentBtn: string;
  progressTitle: string;
  completedSteps: string;

  // Document Intelligence
  docsSectionTitle: string;
  docsSectionSubtitle: string;
  requiredBadge: string;
  conditionalBadge: string;
  optionalBadge: string;
  purposeLabel: string;
  whereToGetIt: string;
  issuedBy: string;
  estimatedEffort: string;
  whyRequiredTitle: string;
  statusAlreadyHave: string;
  statusNeedToObtain: string;
  recalculatePrompt: string;
  iAlreadyHaveThese: string;

  // Dependency Graph
  depGraphTitle: string;
  depGraphSubtitle: string;
  clickNodeHint: string;

  // Where to apply
  whereToApplyTitle: string;
  onlineOptionTitle: string;
  offlineOptionTitle: string;
  openOfficialPortal: string;

  // What happens next
  whatHappensNextTitle: string;

  // Tracking
  trackApplicationTitle: string;
  enterAppNumber: string;
  trackNowBtn: string;
  trackOfficialDisclaimer: string;

  // Exceptions
  exceptionsTitle: string;
  exceptionsSubtitle: string;

  // Verification & Sources
  sourcesTitle: string;
  sourcesSubtitle: string;
  verifiedBadge: string;
  partiallyVerifiedBadge: string;
  unavailableBadge: string;
  tier1Badge: string;
  lastChecked: string;
  openSourceBtn: string;

  // Actions
  downloadPdf: string;
  printDocket: string;
  shareJourney: string;
  linkCopied: string;
  closeBtn: string;
  backBtn: string;

  // Categories & Search
  searchPlaceholder: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  howGovflowWorks: string;
  trustTitle: string;
  trustDesc: string;

  // Empty & Errors
  unverifiedErrorTitle: string;
  unverifiedErrorText: string;
  openOfficialSource: string;

  // Disclaimer
  officialDisclaimerText: string;
}

export const TRANSLATIONS: Record<'en' | 'te' | 'hi', TranslationStrings> = {
  en: {
    brandName: 'GOVFLOW AI',
    tagline: 'From a Citizen’s Goal to a Complete Government Journey.',
    secondaryTagline: 'One goal. Every requirement. The complete path.',
    apBadge: 'Andhra Pradesh Citizen Service Platform',

    welcomeTitle: 'Welcome to GOVFLOW AI',
    welcomeSubtitle: 'Your government journey, simplified.',
    chooseLanguage: 'Choose your language / మీ భాషను ఎంచుకోండి / अपनी भाषा चुनें',
    continueBtn: 'Continue to GOVFLOW AI →',
    switchLanguage: 'Language',

    navHome: 'Home',
    navExplore: 'Explore Services',
    navMyJourney: 'My Journey',
    navDocuments: 'Documents',
    navTrack: 'Track Application',
    navHelp: 'Help & 1902',
    navProfile: 'Citizen Profile',

    heroHeading: 'Tell us what you want to accomplish.',
    heroSubheading: 'We identify the complete government journey — including documents, dependencies, official portals and next steps for Andhra Pradesh citizens.',
    inputPlaceholder: 'e.g. I want to apply for a caste certificate',
    buildJourneyBtn: 'BUILD MY JOURNEY →',
    voiceInputLabel: 'Voice Input',
    uploadDocLabel: 'Upload Document',
    suggestedGoalsLabel: 'Popular Citizen Goals:',
    listeningVoice: 'Listening... Please speak your goal in Telugu or English',
    voiceNotSupported: 'Speech recognition is not supported in this browser.',

    stageUnderstanding: 'Understanding your goal & legal intent...',
    stageCheckingReqs: 'Checking applicable Andhra Pradesh statutory requirements...',
    stageMappingDeps: 'Mapping document prerequisites & dependency graph...',
    stageFindingSources: 'Finding official AP government portals & Gazette notifications...',
    stageBuildingJourney: 'Building your complete dependency-aware journey...',

    clarificationTitle: 'To build the correct journey, we need 2 quick details:',
    clarificationSubtitle: 'Government procedures vary by administrative jurisdiction in Andhra Pradesh.',
    selectDistrict: 'Select Your Andhra Pradesh District',
    selectLocationType: 'Are you located in a Rural or Urban area?',
    ruralOption: 'Rural (Grama Sachivalayam / Village Panchayat)',
    urbanOption: 'Urban (Ward Sachivalayam / Municipality)',
    proceedToJourney: 'Generate Complete Journey →',
    changeProfile: 'Change details',

    completeJourneyTitle: 'YOUR COMPLETE GOVERNMENT JOURNEY',
    completeJourneySubtitle: 'We verified the statutory steps, document prerequisites and official government portals for your goal.',
    goalLabel: 'Citizen Goal',
    deptLabel: 'Department',
    stagesCountLabel: 'Total Stages',
    docsRequiredLabel: 'Documents Required',
    officialPortalsLabel: 'Official Portals',
    nextActionTitle: 'YOUR NEXT ACTION RIGHT NOW',
    getThisDocumentBtn: 'GET THIS DOCUMENT →',
    progressTitle: 'Journey Progress',
    completedSteps: 'stages completed',

    docsSectionTitle: 'DOCUMENTS YOU NEED',
    docsSectionSubtitle: 'Comprehensive breakdown of mandatory, conditional, and supporting records with official issuing authorities.',
    requiredBadge: 'MANDATORY',
    conditionalBadge: 'CONDITIONAL',
    optionalBadge: 'SUPPORTING',
    purposeLabel: 'Purpose & Legal Requirement',
    whereToGetIt: 'WHERE TO GET IT',
    issuedBy: 'Issued by',
    estimatedEffort: 'Expected timeframe',
    whyRequiredTitle: 'Why is this required?',
    statusAlreadyHave: 'Already have this',
    statusNeedToObtain: 'Need to obtain',
    recalculatePrompt: 'Select documents you already hold to recalculate your journey and skip preparation stages.',
    iAlreadyHaveThese: 'I already have these documents',

    depGraphTitle: 'DOCUMENT DEPENDENCY MAP',
    depGraphSubtitle: 'Interactive relational graph showing which foundational records must be acquired before you can apply.',
    clickNodeHint: 'Click on any document node to inspect issuing department, prerequisites, and verified source.',

    whereToApplyTitle: 'WHERE TO APPLY',
    onlineOptionTitle: 'Apply Online Digitally',
    offlineOptionTitle: 'Apply In-Person (Offline)',
    openOfficialPortal: 'OPEN OFFICIAL PORTAL ↗',

    whatHappensNextTitle: 'WHAT HAPPENS NEXT? (POST-SUBMISSION WORKFLOW)',

    trackApplicationTitle: 'TRACK MY APPLICATION',
    enterAppNumber: 'Enter your MeeSeva / GSWS Application Number (e.g. AP-REV-123456)',
    trackNowBtn: 'Track on Official Portal ↗',
    trackOfficialDisclaimer: 'GOVFLOW AI directs you securely to the official Andhra Pradesh portal for live database query.',

    exceptionsTitle: 'DOES YOUR SITUATION MATCH ONE OF THESE?',
    exceptionsSubtitle: 'Common administrative exceptions and officially recognized alternative procedures.',

    sourcesTitle: 'SOURCES & VERIFICATION',
    sourcesSubtitle: 'Every government rule, fee, portal link, and document is sourced from verified Government of Andhra Pradesh systems.',
    verifiedBadge: 'OFFICIALLY VERIFIED',
    partiallyVerifiedBadge: 'NEEDS REVIEW',
    unavailableBadge: 'UNAVAILABLE',
    tier1Badge: 'Tier-1 Official Government Source',
    lastChecked: 'Last Verified',
    openSourceBtn: 'Open Verified Source ↗',

    downloadPdf: 'Print Docket',
    printDocket: 'Print Official Checklist',
    shareJourney: 'Share Journey',
    linkCopied: 'Shareable journey link copied to clipboard!',
    closeBtn: 'Close',
    backBtn: '← Back',

    searchPlaceholder: 'Search government services, certificates, schemes, or citizen goals...',
    categoriesTitle: 'Browse by Citizen Category',
    categoriesSubtitle: 'Over 100+ public services organized across Andhra Pradesh administration.',
    howGovflowWorks: 'How GOVFLOW AI Works',
    trustTitle: 'Public Infrastructure + Civic Intelligence',
    trustDesc: 'GOVFLOW AI does not replace government systems. We orchestrate them into one transparent, dependable roadmap for every citizen.',

    unverifiedErrorTitle: 'Official information could not be verified at this time.',
    unverifiedErrorText: 'Government service criteria or portals may have recently changed. We do not invent government facts. Please consult the official MeeSeva or GSWS gateway.',
    openOfficialSource: 'Open MeeSeva Official Portal ↗',

    officialDisclaimerText: 'GOVFLOW AI is an independent citizen-navigation interface and is not an official Government of Andhra Pradesh website unless formally integrated or authorized. Citizens are directed to official portals for submissions, fees, and tracking.'
  },

  te: {
    brandName: 'గవ్‌ఫ్లో AI',
    tagline: 'పౌరుడి లక్ష్యం నుండి సంపూర్ణ ప్రభుత్వ ప్రయాణం వరకు.',
    secondaryTagline: 'ఒకే లక్ష్యం. ప్రతి అవసరం. సంపూర్ణ మార్గం.',
    apBadge: 'ఆంధ్రప్రదేశ్ పౌర సేవా వేదిక',

    welcomeTitle: 'గవ్‌ఫ్లో AI కి స్వాగతం',
    welcomeSubtitle: 'మీ ప్రభుత్వ సేవల ప్రయాణం — సులభతరం మరియు స్పష్టం.',
    chooseLanguage: 'మీ ప్రాధాన్యత గల భాషను ఎంచుకోండి',
    continueBtn: 'గవ్‌ఫ్లో AI ని ప్రారంభించండి →',
    switchLanguage: 'భాష',

    navHome: 'హోమ్',
    navExplore: 'సేవలు శోధించండి',
    navMyJourney: 'నా ప్రయాణం',
    navDocuments: 'పత్రాలు',
    navTrack: 'దరఖాస్తు ట్రాకింగ్',
    navHelp: 'సహాయం & 1902',
    navProfile: 'పౌరుడి ప్రొఫైల్',

    heroHeading: 'మీరు ఏ సేవను పొందాలనుకుంటున్నారో తెలియజేయండి.',
    heroSubheading: 'మేము అవసరమైన పత్రాలు, ఆధారాలు, అధికారిక పోర్టళ్లు మరియు తదుపరి దశలతో కూడిన పూర్తి ప్రభుత్వ ప్రయాణాన్ని రూపొందిస్తాము.',
    inputPlaceholder: 'ఉదాహరణ: నేను కుల ధ్రువీకరణ పత్రం కొరకు దరఖాస్తు చేసుకోవాలనుకుంటున్నాను',
    buildJourneyBtn: 'నా ప్రయాణాన్ని రూపొందించండి →',
    voiceInputLabel: 'వాయిస్ ద్వారా చెప్పండి',
    uploadDocLabel: 'పత్రం అప్‌లోడ్',
    suggestedGoalsLabel: 'ప్రజాదరణ పొందిన పౌర లక్ష్యాలు:',
    listeningVoice: 'వింటున్నాము... దయచేసి మీ లక్ష్యాన్ని తెలుగు లేదా ఇంగ్లీషులో చెప్పండి',
    voiceNotSupported: 'ఈ బ్రౌజర్‌లో వాయిస్ రికగ్నిషన్ సదుపాయం అందుబాటులో లేదు.',

    stageUnderstanding: 'మీ లక్ష్యం మరియు చట్టబద్ధమైన ఉద్దేశాన్ని అర్థం చేసుకుంటున్నాము...',
    stageCheckingReqs: 'ఆంధ్రప్రదేశ్ ప్రభుత్వ నిబంధనలను పరిశీలిస్తున్నాము...',
    stageMappingDeps: 'పత్రాల ఆధారాలు మరియు డిపెండెన్సీ మ్యాప్‌ను రూపొందిస్తున్నాము...',
    stageFindingSources: 'అధికారిక మీసేవ మరియు సచివాలయం పోర్టళ్లను సరిచూస్తున్నాము...',
    stageBuildingJourney: 'మీ సంపూర్ణ ప్రభుత్వ ప్రయాణాన్ని సిద్ధం చేస్తున్నాము...',

    clarificationTitle: 'ఖచ్చితమైన ప్రయాణాన్ని రూపొందించడానికి 2 వివరాలు కావాలి:',
    clarificationSubtitle: 'ఆంధ్రప్రదేశ్‌లోని పాలనా ప్రాంతాల ఆధారంగా ప్రభుత్వ విధానాలు మారుతుంటాయి.',
    selectDistrict: 'మీ ఆంధ్రప్రదేశ్ జిల్లాను ఎంచుకోండి',
    selectLocationType: 'మీరు ఏ ప్రాంతానికి చెందినవారు?',
    ruralOption: 'గ్రామీణ ప్రాంతం (గ్రామ సచివాలయం / పంచాయతీ)',
    urbanOption: 'పట్టణ ప్రాంతం (వార్డు సచివాలయం / మున్సిపాలిటీ)',
    proceedToJourney: 'సంపూర్ణ ప్రయాణాన్ని చూపించండి →',
    changeProfile: 'వివరాలు మార్చండి',

    completeJourneyTitle: 'మీ సంపూర్ణ ప్రభుత్వ ప్రయాణం',
    completeJourneySubtitle: 'మీ లక్ష్యం కోసం చట్టబద్ధమైన దశలు, అవసరమైన పత్రాలు మరియు అధికారిక పోర్టళ్లను ధ్రువీకరించాము.',
    goalLabel: 'పౌరుడి లక్ష్యం',
    deptLabel: 'ప్రభుత్వ శాఖ',
    stagesCountLabel: 'మొత్తం దశలు',
    docsRequiredLabel: 'అవసరమైన పత్రాలు',
    officialPortalsLabel: 'అధికారిక పోర్టళ్లు',
    nextActionTitle: 'మీరు ప్రస్తుతం చేయవలసిన తదుపరి పని',
    getThisDocumentBtn: 'ఈ పత్రాన్ని పొందండి →',
    progressTitle: 'ప్రయాణ పురోగతి',
    completedSteps: 'దశలు పూర్తయ్యాయి',

    docsSectionTitle: 'మీకు అవసరమైన పత్రాలు',
    docsSectionSubtitle: 'తప్పనిసరి, షరతులతో కూడిన మరియు సహాయక పత్రాలు — వాటిని ఎక్కడ పొందాలో పూర్తి వివరాలు.',
    requiredBadge: 'తప్పనిసరి',
    conditionalBadge: 'షరతులకు లోబడి',
    optionalBadge: 'సహాయక పత్రం',
    purposeLabel: 'పత్రం ఉద్దేశం & చట్టపరమైన అవసరం',
    whereToGetIt: 'ఈ పత్రం ఎక్కడ లభిస్తుంది?',
    issuedBy: 'జారీ చేసే అధికారి',
    estimatedEffort: 'పట్టే సమయం',
    whyRequiredTitle: 'ఈ పత్రం ఎందుకు అవసరం?',
    statusAlreadyHave: 'నా వద్ద ఉంది',
    statusNeedToObtain: 'పొందవలసి ఉంది',
    recalculatePrompt: 'మీ వద్ద ఇప్పటికే ఉన్న పత్రాలను ఎంచుకోండి; మీ ప్రయాణం తిరిగి లెక్కించబడుతుంది.',
    iAlreadyHaveThese: 'నా వద్ద ఇప్పటికే ఈ పత్రాలు ఉన్నాయి',

    depGraphTitle: 'పత్రాల ఆధారాల మ్యాప్ (డిపెండెన్సీ గ్రాఫ్)',
    depGraphSubtitle: 'ఏ పత్రం కోసం ఏ ప్రాథమిక రుజువు ముందే సిద్ధం చేసుకోవాలో చూపే ఇంటరాక్టివ్ చిత్రం.',
    clickNodeHint: 'ఏదైనా పత్రంపై క్లిక్ చేసి జారీ చేసే శాఖ, అవసరమైన ఆధారాలు మరియు అధికారిక లింక్ చూడండి.',

    whereToApplyTitle: 'ఎక్కడ దరఖాస్తు చేయాలి?',
    onlineOptionTitle: 'ఆన్‌లైన్ ద్వారా డిజిటల్‌గా',
    offlineOptionTitle: 'నేరుగా సచివాలయం / మీసేవలో',
    openOfficialPortal: 'అధికారిక పోర్టల్ తెరవండి ↗',

    whatHappensNextTitle: 'తదుపరి ఏమి జరుగుతుంది? (దరఖాస్తు సమర్పించిన తర్వాత)',

    trackApplicationTitle: 'నా దరఖాస్తు స్థితిని ట్రాక్ చేయండి',
    enterAppNumber: 'మీ మీసేవ / సచివాలయం అప్లికేషన్ నంబర్ నమోదు చేయండి',
    trackNowBtn: 'అధికారిక పోర్టల్‌లో చూడండి ↗',
    trackOfficialDisclaimer: 'గవ్‌ఫ్లో AI మిమ్మల్ని అధికారిక ఆంధ్రప్రదేశ్ డేటాబేస్ కు సురక్షితంగా అనుసంధానిస్తుంది.',

    exceptionsTitle: 'మీ పరిస్థితి వీటిలో ఒకదానికి సరిపోతుందా?',
    exceptionsSubtitle: 'ప్రత్యేక పరిస్థితులలో అధికారిక ప్రత్యామ్నాయ మార్గాలు.',

    sourcesTitle: 'అధికారిక ఆధారాలు & ధ్రువీకరణ',
    sourcesSubtitle: 'ఇక్కడ చూపబడిన ప్రతి నియమం, ఫీజు, లింక్ ఆంధ్రప్రదేశ్ ప్రభుత్వ అధికారిక వ్యవస్థల నుండి మాత్రమే తీసుకోబడింది.',
    verifiedBadge: 'అధికారికంగా ధ్రువీకరించబడింది',
    partiallyVerifiedBadge: 'సమీక్ష అవసరం',
    unavailableBadge: 'సమాచారం అందుబాటులో లేదు',
    tier1Badge: 'టైర్-1 అధికారిక ప్రభుత్వ మూలం',
    lastChecked: 'చివరిసారి సరిచూసిన తేదీ',
    openSourceBtn: 'అధికారిక మూలాన్ని తెరవండి ↗',

    downloadPdf: 'చెక్లిస్ట్ ప్రింట్',
    printDocket: 'వ్యక్తిగత చెక్‌లిస్ట్ ప్రింట్ చేయండి',
    shareJourney: 'ప్రయాణాన్ని షేర్ చేయండి',
    linkCopied: 'షేర్ చేయగల లింక్ కాపీ చేయబడింది!',
    closeBtn: 'మూసివేయి',
    backBtn: '← వెనుకకు',

    searchPlaceholder: 'ప్రభుత్వ సేవలు, పత్రాలు, పథకాలు లేదా మీ లక్ష్యాన్ని వెతకండి...',
    categoriesTitle: 'విభాగాల వారీగా సేవలు',
    categoriesSubtitle: 'ఆంధ్రప్రదేశ్ ప్రభుత్వ పరిధిలోని 100+ ప్రజా సేవలు.',
    howGovflowWorks: 'గవ్‌ఫ్లో ఎలా పనిచేస్తుంది?',
    trustTitle: 'ప్రజా మౌలిక వసతులు + పౌర సాంకేతికత',
    trustDesc: 'గవ్‌ఫ్లో AI ప్రభుత్వ వ్యవస్థలను భర్తీ చేయదు. వాటిని ప్రతి పౌరుడికి సులభంగా అర్థమయ్యే ఒకే స్పష్టమైన ప్రయాణంగా మారుస్తుంది.',

    unverifiedErrorTitle: 'అధికారిక సమాచారం ప్రస్తుతానికి ధ్రువీకరించబడలేదు.',
    unverifiedErrorText: 'ప్రభుత్వ సేవ నిబంధనలలో మార్పులు వచ్చి ఉండవచ్చు. మేము తప్పుడు సమాచారాన్ని అందించము. దయచేసి అధికారిక మీసేవ లేదా సచివాలయాన్ని సంప్రదించండి.',
    openOfficialSource: 'మీసేవ అధికారిక పోర్టల్ తెరవండి ↗',

    officialDisclaimerText: 'గవ్‌ఫ్లో AI అనేది ఒక స్వతంత్ర పౌర-నావిగేషన్ వేదిక మరియు ఇది అధికారిక ఆంధ్రప్రదేశ్ ప్రభుత్వ వెబ్‌సైట్ కాదు. దరఖాస్తులు, చెల్లింపులు మరియు ట్రాకింగ్ కొరకు పౌరులు అధికారిక పోర్టళ్లకు మళ్లించబడతారు.'
  },

  hi: {
    brandName: 'गवफ्लो AI',
    tagline: 'नागरिक के लक्ष्य से संपूर्ण सरकारी यात्रा तक।',
    secondaryTagline: 'एक लक्ष्य। हर आवश्यकता। संपूर्ण मार्ग।',
    apBadge: 'आंध्र प्रदेश नागरिक सेवा मंच',

    welcomeTitle: 'GOVFLOW AI में आपका स्वागत है',
    welcomeSubtitle: 'आपकी सरकारी यात्रा, सरल और स्पष्ट।',
    chooseLanguage: 'अपनी पसंदीदा भाषा चुनें',
    continueBtn: 'GOVFLOW AI जारी रखें →',
    switchLanguage: 'भाषा',

    navHome: 'होम',
    navExplore: 'सेवाएं खोजें',
    navMyJourney: 'मेरी यात्रा',
    navDocuments: 'दस्तावेज़',
    navTrack: 'आवेदन ट्रैक करें',
    navHelp: 'मदद & 1902',
    navProfile: 'नागरिक प्रोफ़ाइल',

    heroHeading: 'बताएं कि आप क्या हासिल करना चाहते हैं।',
    heroSubheading: 'हम आंध्र प्रदेश के नागरिकों के लिए दस्तावेज़ों, निर्भरताओं और आधिकारिक पोर्टलों के साथ संपूर्ण सरकारी यात्रा का खाका तैयार करते हैं।',
    inputPlaceholder: 'उदा. मैं जाति प्रमाण पत्र के लिए आवेदन करना चाहता हूं',
    buildJourneyBtn: 'मेरी यात्रा बनाएं →',
    voiceInputLabel: 'बोलकर बताएं',
    uploadDocLabel: 'दस्तावेज़ अपलोड',
    suggestedGoalsLabel: 'लोकप्रिय नागरिक लक्ष्य:',
    listeningVoice: 'सुन रहे हैं... कृपया अपना लक्ष्य बोलें',
    voiceNotSupported: 'इस ब्राउज़र में स्पीच रिकग्निशन समर्थित नहीं है।',

    stageUnderstanding: 'आपके लक्ष्य को समझा जा रहा है...',
    stageCheckingReqs: 'आंध्र प्रदेश की वैधानिक शर्तों की जांच हो रही है...',
    stageMappingDeps: 'दस्तावेज़ निर्भरता ग्राफ तैयार किया जा रहा है...',
    stageFindingSources: 'आधिकारिक मीसेवा और सचिवालय पोर्टल खोजे जा रहे हैं...',
    stageBuildingJourney: 'आपकी संपूर्ण यात्रा तैयार की जा रही है...',

    clarificationTitle: 'सही यात्रा बनाने के लिए 2 विवरण आवश्यक हैं:',
    clarificationSubtitle: 'आंध्र प्रदेश में प्रशासनिक क्षेत्र के अनुसार प्रक्रियाएं भिन्न होती हैं।',
    selectDistrict: 'अपना आंध्र प्रदेश जिला चुनें',
    selectLocationType: 'आप ग्रामीण क्षेत्र में हैं या शहरी?',
    ruralOption: 'ग्रामीण (ग्राम सचिवालय / पंचायत)',
    urbanOption: 'शहरी (वार्ड सचिवालय / नगरपालिका)',
    proceedToJourney: 'संपूर्ण यात्रा देखें →',
    changeProfile: 'विवरण बदलें',

    completeJourneyTitle: 'आपकी संपूर्ण सरकारी यात्रा',
    completeJourneySubtitle: 'हमने आपके लक्ष्य के लिए वैधानिक चरणों, आवश्यक दस्तावेज़ों और आधिकारिक पोर्टलों का सत्यापन किया है।',
    goalLabel: 'नागरिक लक्ष्य',
    deptLabel: 'विभाग',
    stagesCountLabel: 'कुल चरण',
    docsRequiredLabel: 'आवश्यक दस्तावेज़',
    officialPortalsLabel: 'आधिकारिक पोर्टल',
    nextActionTitle: 'अभी आपको क्या करने की आवश्यकता है',
    getThisDocumentBtn: 'यह दस्तावेज़ प्राप्त करें →',
    progressTitle: 'यात्रा की प्रगति',
    completedSteps: 'चरण पूर्ण हुए',

    docsSectionTitle: 'आवश्यक दस्तावेज़',
    docsSectionSubtitle: 'अनिवार्य, सशर्त और सहायक दस्तावेज़ों का संपूर्ण विवरण।',
    requiredBadge: 'अनिवार्य',
    conditionalBadge: 'सशर्त',
    optionalBadge: 'सहायक',
    purposeLabel: 'दस्तावेज़ का उद्देश्य और कानूनी आवश्यकता',
    whereToGetIt: 'यह कहां से प्राप्त करें?',
    issuedBy: 'जारीकर्ता प्राधिकरण',
    estimatedEffort: 'अनुमानित समय',
    whyRequiredTitle: 'यह क्यों आवश्यक है?',
    statusAlreadyHave: 'मेरे पास है',
    statusNeedToObtain: 'प्राप्त करना है',
    recalculatePrompt: 'उन दस्तावेज़ों को चुनें जो आपके पास पहले से हैं; आपकी यात्रा स्वतः अद्यतित होगी।',
    iAlreadyHaveThese: 'मेरे पास पहले से ये दस्तावेज़ हैं',

    depGraphTitle: 'दस्तावेज़ निर्भरता मानचित्र',
    depGraphSubtitle: 'इंटरएक्टिव ग्राफ जो दिखाता है कि आवेदन से पहले कौन से दस्तावेज़ तैयार करने हैं।',
    clickNodeHint: 'किसी भी दस्तावेज़ पर क्लिक करके जारीकर्ता विभाग और आधिकारिक पोर्टल देखें।',

    whereToApplyTitle: 'आवेदन कहां करें?',
    onlineOptionTitle: 'ऑनलाइन डिजिटल रूप से',
    offlineOptionTitle: 'व्यक्तिगत रूप से सचिवालय / मीसेवा में',
    openOfficialPortal: 'आधिकारिक पोर्टल खोलें ↗',

    whatHappensNextTitle: 'आगे क्या होता है? (आवेदन जमा करने के बाद)',

    trackApplicationTitle: 'आवेदन की स्थिति ट्रैक करें',
    enterAppNumber: 'अपना मीसेवा / सचिवालय आवेदन नंबर दर्ज करें',
    trackNowBtn: 'आधिकारिक पोर्टल पर ट्रैक करें ↗',
    trackOfficialDisclaimer: 'GOVFLOW AI आपको आधिकारिक आंध्र प्रदेश डेटाबेस पर सुरक्षित रूप से निर्देशित करता है।',

    exceptionsTitle: 'क्या आपकी स्थिति इनमें से किसी से मेल खाती है?',
    exceptionsSubtitle: 'विशेष परिस्थितियों में आधिकारिक वैकल्पिक प्रक्रियाएं।',

    sourcesTitle: 'स्रोत और सत्यापन',
    sourcesSubtitle: 'प्रत्येक नियम, शुल्क और पोर्टल लिंक आधिकारिक आंध्र प्रदेश सरकारी प्रणालियों से सत्यापित है।',
    verifiedBadge: 'आधिकारिक रूप से सत्यापित',
    partiallyVerifiedBadge: 'समीक्षा आवश्यक',
    unavailableBadge: 'अनुपलब्ध',
    tier1Badge: 'टियर-1 आधिकारिक सरकारी स्रोत',
    lastChecked: 'अंतिम सत्यापन',
    openSourceBtn: 'आधिकारिक स्रोत खोलें ↗',

    downloadPdf: 'चेकलिस्ट प्रिंट',
    printDocket: 'आधिकारिक व्यक्तिगत चेकलिस्ट प्रिंट करें',
    shareJourney: 'यात्रा साझा करें',
    linkCopied: 'साझा करने योग्य लिंक कॉपी हो गया!',
    closeBtn: 'बंद करें',
    backBtn: '← वापस',

    searchPlaceholder: 'सरकारी सेवाएं, प्रमाणपत्र या योजनाएं खोजें...',
    categoriesTitle: 'श्रेणियों के अनुसार ब्राउज़ करें',
    categoriesSubtitle: 'आंध्र प्रदेश प्रशासन की 100+ जन सेवाएं।',
    howGovflowWorks: 'GOVFLOW कैसे काम करता है?',
    trustTitle: 'सार्वजनिक अवसंरचना + नागरिक तकनीक',
    trustDesc: 'GOVFLOW AI सरकारी प्रणालियों को नहीं बदलता। हम उन्हें प्रत्येक नागरिक के लिए एक स्पष्ट रोडमैप में व्यवस्थित करते हैं।',

    unverifiedErrorTitle: 'आधिकारिक जानकारी सत्यापित नहीं की जा सकी।',
    unverifiedErrorText: 'सरकारी नियमों में हाल ही में बदलाव हो सकता है। कृपया आधिकारिक मीसेवा या सचिवालय से संपर्क करें।',
    openOfficialSource: 'मीसेवा आधिकारिक पोर्टल खोलें ↗',

    officialDisclaimerText: 'GOVFLOW AI एक स्वतंत्र नागरिक-नेविगेशन इंटरफ़ेस है और अधिकृत नहीं होने तक आधिकारिक सरकारी वेबसाइट नहीं है।'
  }
};
