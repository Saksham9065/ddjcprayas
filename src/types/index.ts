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
  screenshotPath?: string | null;
  status: "Pending Verification" | "Verified" | "Rejected";
  createdAt: string;
}

export interface Contact {
  id: string;
  fullName: string;
  fatherHusbandName: string;
  age?: string;
  category?: string;
  gender?: string;
  education?: string;
  mobile: string;
  email?: string;
  address?: string;
  incidentDescription?: string;
  helpType?: string;
  status: "New" | "Contacted" | "Resolved";
  isRead: boolean;
  createdAt: string;
}

export interface JoinApplication {
  id: string;
  fullName: string;
  fatherHusbandName?: string;
  age?: number | string;
  category?: string;
  gender?: string;
  education?: string;
  mobile: string;
  email?: string;
  address?: string;
  occupation?: string;
  joinType: string;
  workMode?: string;
  statement?: string;
  experience?: string;
  position?: string;
  resume?: string;
  university?: string;
  field?: string;
  status: "Pending" | "Reviewed" | "Accepted" | "Rejected";
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
