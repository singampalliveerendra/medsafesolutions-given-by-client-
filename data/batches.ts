/**
 * TODO: Update batch dates, fee, and seat counts as your enrollment cycle changes.
 * Keep at least one upcoming batch listed.
 */
export type Batch = {
  name: string;
  startDate: string;
  durationWeeks: number;
  mode: "Online" | "Offline" | "Hybrid";
  seats: number;
  seatsLeft: number;
  fee: number;
  emiPerMonth?: number;
  scholarship?: string;
};

export const batches: Batch[] = [
  {
    name: "Weekend CDM Batch",
    startDate: "2026-06-01",
    durationWeeks: 12,
    mode: "Online",
    seats: 30,
    seatsLeft: 8,
    fee: 49999,
    emiPerMonth: 4499,
    scholarship: "Up to ₹5,000 off for early enrolment"
  },
  {
    name: "Weekday Intensive",
    startDate: "2026-07-15",
    durationWeeks: 8,
    mode: "Hybrid",
    seats: 25,
    seatsLeft: 18,
    fee: 59999,
    emiPerMonth: 5499
  }
];

export const feeNotes = [
  "All fees inclusive of taxes",
  "Easy 0% interest EMI options available",
  "Scholarships for top 5 entrance-test scorers"
];
