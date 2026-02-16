export interface ReferralAction {
  type: 'signup' | 'purchase' | 'referral' | 'subscription';
  userId: string;
  referralCode?: string;
  timestamp: Date;
  amount?: number;
  metadata?: Record<string, any>;
}

export interface AffiliatePartner {
  id: string;
  name: string;
  commissionRate: number;
  apiKey?: string;
  active: boolean;
  category?: string;
  payoutThreshold?: number;
}

export interface ReferralReward {
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'approved' | 'paid';
  createdAt: Date;
}
