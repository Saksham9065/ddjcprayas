export interface Complaint {
  id: string;
  fullName: string;
  phone: string;
  district: string;
  tehsil: string;
  category: string;
  incidentDate: string;
  description: string;
  status: "Pending Review" | "In Progress" | "Resolved";
  createdAt: string;
}

export interface Donation {
  id: string;
  donorName: string;
  email: string;
  phone: string;
  amount: number;
  transactionId: string;
  createdAt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  fileSize: string;
  description: string;
  downloadUrl: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  snippet: string;
  category: string;
  date: string;
  content?: string;
}