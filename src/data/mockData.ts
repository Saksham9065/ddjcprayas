import { Complaint, TeamMember, ResourceItem, NewsArticle } from "@/types";

export const initialComplaints: Complaint[] = [
  {
    id: "CMP-2026-104",
    fullName: "Ramesh Kumar",
    phone: "9876543210",
    district: "Jalaun",
    tehsil: "Orai",
    category: "Atrocity / Violence",
    incidentDate: "2026-06-24",
    description: "Physical assault and caste-based abuse reported near village marketplace. Delay in FIR registration by local police station.",
    status: "Pending Review",
    createdAt: "2026-06-24",
  },
  {
    id: "CMP-2026-103",
    fullName: "Sunita Devi",
    phone: "9123456789",
    district: "Jhansi",
    tehsil: "Moth",
    category: "Police Inaction",
    incidentDate: "2026-06-22",
    description: "Local authorities refusing to file formal complaint under the SC/ST Atrocities Act following agricultural land encroachment.",
    status: "In Progress",
    createdAt: "2026-06-22",
  },
  {
    id: "CMP-2026-102",
    fullName: "Anil Singh",
    phone: "9988776655",
    district: "Lalitpur",
    tehsil: "Mahroni",
    category: "Land Dispute",
    incidentDate: "2026-06-20",
    description: "Illegal eviction attempt from allotted homestead patta land by dominant caste groups.",
    status: "Resolved",
    createdAt: "2026-06-20",
  },
];

export const teamMembersData: TeamMember[] = [
  {
    name: "Ashok Kumar",
    role: "Managing Director & Founder",
    description: "Leading human rights advocacy and strategic planning across Bundelkhand since inception.",
  },
  {
    name: "Adv. Rajesh Verma",
    role: "Senior Panel Advocate",
    description: "Specializing in SC/ST Atrocity litigation, criminal defense, and high court representation.",
  },
  {
    name: "Sunita Devi",
    role: "Tehsil Field Coordinator",
    description: "Managing grassroots fact-finding missions, victim counseling, and community outreach.",
  },
];

export const resourcesData: ResourceItem[] = [
  {
    id: "res-1",
    title: "SC/ST (Prevention of Atrocities) Act - Complete Guide",
    category: "Statutory Law",
    fileSize: "2.4 MB",
    description: "Comprehensive overview of sections, offences, penalties, and mandatory relief provisions for victims of atrocities.",
    downloadUrl: "#",
  },
  {
    id: "res-2",
    title: "Constitutional Safeguards & Fundamental Rights Handbook",
    category: "Constitutional Law",
    fileSize: "1.8 MB",
    description: "A simplified handbook outlining Articles 14, 15, 16, 17, and Directive Principles concerning social equality.",
    downloadUrl: "#",
  },
  {
    id: "res-3",
    title: "Victim Compensation Protocol & Guidelines",
    category: "Legal Aid",
    fileSize: "950 KB",
    description: "Step-by-step procedural manual for claiming state financial assistance and interim relief after an incident.",
    downloadUrl: "#",
  },
];

export const newsArticlesData: NewsArticle[] = [
  {
    id: "news-1",
    date: "June 24, 2026",
    category: "Press Release",
    title: "DDJC Intervenes in Jalaun Atrocity Case, Demands Immediate Police Action",
    snippet: "Fact-finding delegation dispatched to local tehsil following reported delays in FIR registration under the SC/ST Act.",
  },
  {
    id: "news-2",
    date: "June 15, 2026",
    category: "Awareness Camp",
    title: "Legal Literacy Campaign Reaches 12 Villages Across Bundelkhand",
    snippet: "Hundreds of community members participated in workshops highlighting constitutional safeguards and victim compensation protocols.",
  },
  {
    id: "news-3",
    date: "May 28, 2026",
    category: "Court Verdict",
    title: "Special Atrocity Court Grants Interim Relief and Protection in Land Dispute",
    snippet: "DDJC panel advocates successfully argue for statutory protection and restraint against illegal eviction attempts.",
  },
];