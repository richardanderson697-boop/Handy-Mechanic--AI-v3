// lib/ai/negotiation-generator.ts

export const generateNegotiationScript = (
  diagnosis: DiagnosisResult, 
  history: VehicleHistoryLookup, 
  askingPrice: number
) => {
  const repairTotal = diagnosis.estimatedCost.total.max;
  const fairPrice = history.market_price - (repairTotal * 0.8); // Adjusting for "as-is" value

  const prompt = `
    You are a professional automotive car buyer. 
    Write a 3-paragraph negotiation script for a buyer to use with a seller.
    
    VEHICLE: ${diagnosis.vehicle_year} ${diagnosis.vehicle_make} ${diagnosis.vehicle_model}
    ISSUES FOUND: ${diagnosis.primaryDiagnosis}
    ESTIMATED REPAIR: $${diagnosis.estimatedCost.total.min} - $${diagnosis.estimatedCost.total.max}
    MARKET VALUE: $${history.market_price}
    SELLER ASKING PRICE: $${askingPrice}
    RECOMMENDED OFFER: $${fairPrice}

    TONE: Professional, fact-based, and firm. 
    STRUCTURE:
    1. Acknowledge the car's positives.
    2. Present the technical findings and the TSB data.
    3. Make the offer based on the "Reconditioning Cost."
  `;

  // Return to Claude API...
};
