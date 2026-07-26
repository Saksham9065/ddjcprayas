import { Complaint } from "@/types";

export interface DashboardStats {
  totalComplaints: number;
  pendingReview: number;
  inProgress: number;
  resolved: number;
  uniqueDistricts: number;
}

/**
 * Computes statistical summaries from a list of complaints.
 */
export function calculateDashboardStats(complaints: Complaint[]): DashboardStats {
  const totalComplaints = complaints.length;
  const pendingReview = complaints.filter((c) => c.status === "Pending Review").length;
  const inProgress = complaints.filter((c) => c.status === "In Progress").length;
  const resolved = complaints.filter((c) => c.status === "Resolved").length;
  
  const districtsSet = new Set(complaints.map((c) => c.district.trim().toLowerCase()));
  const uniqueDistricts = districtsSet.size;

  return {
    totalComplaints,
    pendingReview,
    inProgress,
    resolved,
    uniqueDistricts,
  };
}