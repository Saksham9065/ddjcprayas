"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Complaint, Donation, Contact } from "@/types";
import { type Language } from "@/lib/i18n";

interface JoinApplication {
  id: string;
  fullName: string;
  fatherHusbandName: string;
  age: string;
  category: string;
  gender: string;
  education: string;
  mobile: string;
  email: string;
  address: string;
  occupation: string;
  joinType: string;
  workMode: string;
  statement: string;
  status: "Pending" | "Reviewed" | "Accepted" | "Rejected";
  createdAt: string;
}

interface AppContextType {
  complaints: Complaint[];
  addComplaint: (complaint: Omit<Complaint, "id" | "createdAt" | "status">) => Complaint;
  updateComplaintStatus: (id: string, status: Complaint["status"]) => Promise<void>;
  joinApplications: JoinApplication[];
  addJoinApplication: (application: Omit<JoinApplication, "id" | "createdAt" | "status">) => JoinApplication;
  updateApplicationStatus: (id: string, status: JoinApplication["status"]) => Promise<void>;
  donations: Donation[];
  updateDonationStatus: (id: string, status: Donation["status"]) => Promise<void>;
  contacts: Contact[];
  updateContactStatus: (id: string, status: Contact["status"]) => Promise<void>;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (status: boolean) => void;
  language: Language;
  toggleLanguage: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [joinApplications, setJoinApplications] = useState<JoinApplication[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"));
  };

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const [complaintsRes, joinRes, donationsRes, contactsRes] = await Promise.all([
          fetch("/api/admin/complaints"),
          fetch("/api/admin/join-applications"),
          fetch("/api/admin/donations"),
          fetch("/api/admin/contacts"),
        ]);

        if (!complaintsRes.ok || !joinRes.ok || !donationsRes.ok || !contactsRes.ok) {
          throw new Error("Failed to load admin data");
        }

        const [complaintsData, joinData, donationsData, contactsData] = await Promise.all([
          complaintsRes.json(),
          joinRes.json(),
          donationsRes.json(),
          contactsRes.json(),
        ]);

        if (isMounted) {
          setComplaints(complaintsData as Complaint[]);
          setJoinApplications(joinData as JoinApplication[]);
          setDonations(donationsData as Donation[]);
          setContacts(contactsData as Contact[]);
        }
      } catch (error) {
        console.error("Failed to load admin data:", error);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const addComplaint = (newComplaintData: Omit<Complaint, "id" | "createdAt" | "status">) => {
    const id = `CMP-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newComplaint: Complaint = {
      ...newComplaintData,
      id,
      status: "Pending Review",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setComplaints((prev) => [newComplaint, ...prev]);
    return newComplaint;
  };

  const updateComplaintStatus = async (id: string, status: Complaint["status"]) => {
    try {
      const res = await fetch("/api/admin/complaints", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) {
        throw new Error("Failed to update complaint status");
      }

      const updatedComplaint = await res.json();
      setComplaints((prev) =>
        prev.map((c) => (c.id === updatedComplaint.id ? updatedComplaint : c))
      );
    } catch (error) {
      console.error("Complaint status update error:", error);
    }
  };

  const addJoinApplication = (newAppData: Omit<JoinApplication, "id" | "createdAt" | "status">) => {
    const id = `JOIN-${Date.now()}`;
    const newApplication: JoinApplication = {
      ...newAppData,
      id,
      status: "Pending",
      createdAt: new Date().toISOString().split("T")[0],
    };

    setJoinApplications((prev) => [newApplication, ...prev]);
    return newApplication;
  };

  const updateApplicationStatus = async (id: string, status: JoinApplication["status"]) => {
    try {
      const res = await fetch("/api/admin/join-applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) {
        throw new Error("Failed to update application status");
      }

      const updatedApplication = await res.json();
      setJoinApplications((prev) =>
        prev.map((a) => (a.id === updatedApplication.id ? updatedApplication : a))
      );
    } catch (error) {
      console.error("Application status update error:", error);
    }
  };

  const updateDonationStatus = async (id: string, status: Donation["status"]) => {
    try {
      const res = await fetch("/api/admin/donations", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) {
        throw new Error("Failed to update donation status");
      }

      const updatedDonation = await res.json();
      setDonations((prev) =>
        prev.map((d) => (d.id === updatedDonation.id ? updatedDonation : d))
      );
    } catch (error) {
      console.error("Donation status update error:", error);
    }
  };

  const updateContactStatus = async (id: string, status: Contact["status"]) => {
    try {
      const res = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (!res.ok) {
        throw new Error("Failed to update contact status");
      }

      const updatedContact = await res.json();
      setContacts((prev) =>
        prev.map((c) => (c.id === updatedContact.id ? updatedContact : c))
      );
    } catch (error) {
      console.error("Contact status update error:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        complaints,
        addComplaint,
        updateComplaintStatus,
        joinApplications,
        addJoinApplication,
        updateApplicationStatus,
        donations,
        updateDonationStatus,
        contacts,
        updateContactStatus,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        language,
        toggleLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
