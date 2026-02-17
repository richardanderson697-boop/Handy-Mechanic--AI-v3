import { ReferralAction, AffiliatePartner } from '@/types/referrals';

/**
 * Generates an attributed affiliate link for the user.
 */
export const generateAffiliateUrl = (
  partner: AffiliatePartner,
  userId: string,
  diagnosisId: string,
  vin?: string
): string => {
  const trackingId = `ref_${userId}_${Date.now()}`;

  let finalUrl = partner.deep_link_template
    .replace('{{trackingId}}', trackingId)
    .replace('{{userId}}', userId);

  if (vin) {
    finalUrl += `&vin=${vin}`;
  }

  return finalUrl;
};

/**
 * Mock function to simulate tracking a click in your DB
 */
export const logReferralClick = async (action: ReferralAction) => {
  // Now that provider_name is in the central types file, this will work!
  console.log(`[LOG]: Referral clicked for ${action.provider_name}. Tracking ID: ${action.id}`);
};
