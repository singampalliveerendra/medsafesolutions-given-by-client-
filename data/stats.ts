/**
 * TODO: Update stats quarterly with verified numbers.
 */
export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 600, suffix: "+", label: "Learners Trained" },
  { value: 92, suffix: "%", label: "Placement Assistance Rate" },
  { value: 25, suffix: "+", label: "Recruiter Partners" },
  { value: 5, suffix: " yrs", label: "Focused on CDM Only" }
];
