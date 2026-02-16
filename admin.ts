// lib/admin/analytics.ts
export interface AdminStats {
  totalRevenue: number;
  activeScans: number;
  affiliateConversionRate: number;
  topIssuesFound: { issue: string; count: number }[];
  modelPopularity: { make: string; model: string; scans: number }[];
}
