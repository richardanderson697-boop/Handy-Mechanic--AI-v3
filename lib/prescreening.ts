export interface PurchaseRecommendation {
  score: number; // 0-100
  recommendation: 'buy' | 'consider' | 'pass';
  negotiationPoints: string[]; // e.g., "Mention the $400 brake wear"
  estimatedReconditioningCost: number; // Total to make the car "perfect"
}
