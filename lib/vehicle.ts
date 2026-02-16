export interface SavedVehicle {
  id: string;
  user_id: string;
  vin: string;
  nickname: string; // e.g., "The Blue 330i at CarMax"
  year: number;
  make: string;
  model: string;
  last_report_id: string; // Links to your Diagnosis table
  status: 'considering' | 'rejected' | 'purchased';
  created_at: string;
}
