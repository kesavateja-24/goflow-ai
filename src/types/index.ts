export type Language = 'en' | 'te' | 'hi';

export type VerificationStatus = 'verified' | 'needs_review' | 'unavailable';

export type DocumentCategory = 'required' | 'conditional' | 'optional';

export type DocumentStatus = 'have' | 'need' | 'not_applicable';

export interface DocumentItem {
  id: string;
  name: {
    en: string;
    te: string;
    hi: string;
  };
  purpose: {
    en: string;
    te: string;
    hi: string;
  };
  category: DocumentCategory;
  issuingAuthority: string;
  officialPortal: string;
  officialPortalUrl: string;
  estimatedEffort: string;
  whyRequired: {
    en: string;
    te: string;
    hi: string;
  };
  dependencies: string[]; // IDs of documents required to obtain this document
  obtainedFrom: string;
  status?: DocumentStatus;
  conditionNote?: {
    en: string;
    te: string;
    hi: string;
  };
}

export interface OfficialSource {
  title: string;
  domain: string;
  url: string;
  lastVerified: string;
  tier: 1 | 2 | 3;
  verificationStatus: VerificationStatus;
  notes?: string;
}

export interface JourneyStep {
  stepNumber: number;
  stage: 'eligibility' | 'document_prep' | 'prerequisite_cert' | 'form_fill' | 'portal_submission' | 'verification' | 'department_processing' | 'tracking' | 'issuance';
  title: {
    en: string;
    te: string;
    hi: string;
  };
  explanation: {
    en: string;
    te: string;
    hi: string;
  };
  department: string;
  action: {
    en: string;
    te: string;
    hi: string;
  };
  actionUrl?: string;
  actionLabel?: {
    en: string;
    te: string;
    hi: string;
  };
  onlineAvailable: boolean;
  offlineAvailable: boolean;
  offlineVenue?: string;
  documentsRequired: string[]; // document ids
  dependencies: number[]; // previous step numbers
  expectedDays: string;
  fee: string;
  verificationStatus: VerificationStatus;
  whatHappensNext?: {
    en: string;
    te: string;
    hi: string;
  };
  completed?: boolean;
}

export interface DependencyLink {
  fromDocId: string;
  toDocId: string;
  reason: {
    en: string;
    te: string;
    hi: string;
  };
}

export interface ExceptionCase {
  id: string;
  title: {
    en: string;
    te: string;
    hi: string;
  };
  resolution: {
    en: string;
    te: string;
    hi: string;
  };
  impactedDocuments?: string[];
}

export interface FeeItem {
  item: string;
  amount: string;
  officialRule: string;
}

export interface ServiceRecord {
  id: string;
  serviceName: {
    en: string;
    te: string;
    hi: string;
  };
  category: string;
  department: string;
  state: 'Andhra Pradesh';
  description: {
    en: string;
    te: string;
    hi: string;
  };
  eligibility: {
    criteria: {
      en: string[];
      te: string[];
      hi: string[];
    };
  };
  documents: DocumentItem[];
  steps: JourneyStep[];
  dependencies: DependencyLink[];
  officialPortal: string;
  officialPortalUrl: string;
  trackingUrl: string;
  onlineAvailable: boolean;
  offlineAvailable: boolean;
  offlineDetails: {
    en: string;
    te: string;
    hi: string;
  };
  fees: FeeItem[];
  processingTime: string;
  outputDocument: {
    en: string;
    te: string;
    hi: string;
  };
  lastVerified: string;
  verificationStatus: VerificationStatus;
  sources: OfficialSource[];
  exceptionCases?: ExceptionCase[];
}

export interface ClarificationQuestion {
  id: string;
  question: {
    en: string;
    te: string;
    hi: string;
  };
  helperText?: {
    en: string;
    te: string;
    hi: string;
  };
  options: {
    value: string;
    label: {
      en: string;
      te: string;
      hi: string;
    };
  }[];
}

export interface IntentAnalysisResult {
  matchedService: ServiceRecord;
  confidence: number;
  clarificationsNeeded: ClarificationQuestion[];
  userGoal: string;
  userPurpose?: string;
}

export interface CitizenProfile {
  name?: string;
  district: string;
  locationType: 'rural' | 'urban';
  mandal?: string;
  preferredLanguage: Language;
}
