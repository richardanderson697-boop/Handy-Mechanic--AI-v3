// lib/reports/pdf-generator.ts
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const generatePrescreenReport = (diagnosis: Diagnosis, history: VehicleHistoryLookup) => {
  const doc = new jsPDF();
  
  // 1. Header & Branding
  doc.setFontSize(22);
  doc.text('Vehicle Pre-Screening Report', 20, 20);
  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 28);
  
  // 2. Buy Ranking Section
  doc.setFillColor(240, 240, 240);
  doc.rect(20, 35, 170, 40, 'F');
  doc.setFontSize(14);
  doc.text(`BUY RANKING: ${diagnosis.confidence_score}/100`, 30, 50);
  doc.setFontSize(10);
  doc.text(`Recommendation: ${diagnosis.safe_to_drive ? 'CONSIDER' : 'PASS'}`, 30, 60);

  // 3. Identified Issues Table
  const tableRows = diagnosis.repair_steps?.map(step => [
    `Step ${step.step}`,
    step.title,
    step.difficulty,
    step.estimatedTime
  ]);

  (doc as any).autoTable({
    startY: 85,
    head: [['#', 'Issue/Repair', 'Difficulty', 'Est. Time']],
    body: tableRows,
  });

  // 4. Evidence (TSBs)
  let finalY = (doc as any).lastAutoTable.finalY + 10;
  doc.setFontSize(12);
  doc.text('Manufacturer Evidence (TSBs)', 20, finalY);
  
  diagnosis.retrieved_tsbs?.forEach((tsb, i) => {
    doc.setFontSize(9);
    doc.text(`• ${tsb.id}: ${tsb.diagnosis}`, 20, finalY + 7 + (i * 5));
  });

  doc.save(`${diagnosis.vehicle_make}_${diagnosis.vehicle_model}_Report.pdf`);
};
