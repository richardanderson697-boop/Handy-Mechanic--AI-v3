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
  confidence?: number;
  affectedSystems?: string[];
}

export interface ValidationResult {
  isValid: boolean;
  confidence: number;
  warnings: string[];
  alternativeDiagnoses?: DiagnosisResult[];
}
