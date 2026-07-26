import { Complaint, NewsArticle, ResourceItem } from "@/types";
import { initialComplaints, newsArticlesData, resourcesData } from "@/data/mockData";

/**
 * In-memory store simulation for client-side interactions
 */
let complaintsStore: Complaint[] = [...initialComplaints];

export async function fetchComplaints(): Promise<Complaint[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return complaintsStore;
}

export async function createComplaint(newComplaint: Omit<Complaint, "id" | "createdAt" | "status">): Promise<Complaint> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  const id = `CMP-2026-${Math.floor(100 + Math.random() * 900)}`;
  const created: Complaint = {
    ...newComplaint,
    id,
    status: "Pending Review",
    createdAt: new Date().toISOString().split("T")[0],
  };

  complaintsStore = [created, ...complaintsStore];
  return created;
}

export async function fetchNewsArticles(): Promise<NewsArticle[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return newsArticlesData;
}

export async function fetchResources(): Promise<ResourceItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return resourcesData;
}