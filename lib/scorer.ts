export const calculateBuyRanking = (diagnosis: Diagnosis, history: VehicleHistoryLookup, askingPrice: number) => {
  let score = 100;

  // 1. Mechanical Deductions (Repair Cost vs Value)
  const repairImpact = (diagnosis.estimated_cost?.total.avg || 0) / history.market_price;
  if (repairImpact > 0.1) score -= 15;
  if (repairImpact > 0.2) score -= 30;

  // 2. Safety Deductions (The "Deal Breakers")
  if (diagnosis.severity === 'critical') score -= 40;
  if (diagnosis.safe_to_drive === false) score -= 50;

  // 3. History Deductions
  if (history.recalls?.length > 0) score -= 10;
  if (history.accident_history?.length > 0) score -= 25;

  // 4. Price Logic
  const priceMarkup = (askingPrice - history.market_price) / history.market_price;
  if (priceMarkup > 0.1) score -= 10;

  return Math.max(0, score); // Ensure it doesn't go below 0
};
