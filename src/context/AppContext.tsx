"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Complaint } from "@/types";
import { initialComplaints } from "@/data/mockData";

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
  updateComplaintStatus: (id: string, status: Complaint["status"]) => void;
  joinApplications: JoinApplication[];
  addJoinApplication: (application: Omit<JoinApplication, "id" | "createdAt" | "status">) => JoinApplication;
  updateApplicationStatus: (id: string, status: JoinApplication["status"]) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (status: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints);
  const [joinApplications, setJoinApplications] = useState<JoinApplication[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

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

  const updateComplaintStatus = (id: string, status: Complaint["status"]) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
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

  const updateApplicationStatus = (id: string, status: JoinApplication["status"]) => {
    setJoinApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
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
        isAdminLoggedIn,
        setIsAdminLoggedIn,
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