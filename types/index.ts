// Vehicle Types
export interface VehicleInfo {
  vin: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  engine?: string;
  transmission?: string;
  mileage?: number;
  color?: string;
}

export interface VINDecodeResult {
  vin: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  engine?: string;
  transmission?: string;
  bodyClass?: string;
  driveType?: string;
  fuelType?: string;
  recalls?: NHTSARecall[];
}

export interface NHTSARecall {
  recallNumber: string;
  component: string;
  summary: string;
  consequence: string;
  remedy: string;
  recallDate: string;
}

// Audio Analysis Types
export interface AudioFeatures {
  frequency: number[];
  amplitude: number[];
  duration: number;
  patterns: AudioPattern[];
}

export interface AudioPattern {
  type: string;
  confidence: number;
  timestamp: number;
  duration: number;
}

export interface AudioClassification {
  category: string;
  confidence: number;
  possibleIssues: string[];
}

export interface AudioAnalysis {
  features: AudioFeatures;
  classification: AudioClassification;
  recommendations: string[];
}

// Diagnosis Types
export interface DiagnosisResult {
  issue: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  possibleCauses: string[];
  recommendations: string[];
  estimatedCost?: {
    min: number;
    max: number;
    currency: string;
  };
  urgency: string;
  safetyRisk: boolean;
}

export interface SafetyCheck {
  category: string;
  status: 'pass' | 'warning' | 'fail';
  details: string;
  recommendations?: string[];
}

// Insurance Types
export interface InsuranceQuoteRequest {
  vehicleInfo: VehicleInfo;
  driverInfo: {
    age: number;
    zipCode: string;
    licenseStatus: string;
    violations?: string[];
  };
  coverageType: string;
  deductible?: number;
}

export interface InsuranceQuoteResult {
  provider: string;
  premium: number;
  coverageDetails: {
    liability: number;
    collision: boolean;
    comprehensive: boolean;
  };
  discounts?: string[];
  quote_id: string;
}

// Referral Types
export interface ReferralAction {
  type: 'signup' | 'purchase' | 'referral';
  userId: string;
  referralCode?: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface AffiliatePartner {
  id: string;
  name: string;
  commissionRate: number;
  apiKey?: string;
  active: boolean;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  role: 'user' | 'mechanic' | 'admin';
}

// Mechanic Types
export interface Mechanic {
  id: string;
  name: string;
  shop_name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
  email: string;
  certifications: string[];
  specialties: string[];
  rating: number;
  total_reviews: number;
  years_experience: number;
  insurance_verified: boolean;
  background_checked: boolean;
}

// Estimate Types
export interface RepairEstimate {
  id: string;
  diagnosis: DiagnosisResult;
  laborCost: number;
  partsCost: number;
  totalCost: number;
  estimatedTime: number;
  mechanic?: Mechanic;
  createdAt: Date;
  validUntil: Date;
}
