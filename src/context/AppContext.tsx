"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Complaint } from "@/types";
import { initialComplaints } from "@/data/mockData";

interface AppContextType {
  complaints: Complaint[];
  addComplaint: (complaint: Omit<Complaint, "id" | "createdAt" | "status">) => Complaint;
  updateComplaintStatus: (id: string, status: Complaint["status"]) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (status: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints);
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

  return (
    <AppContext.Provider
      value={{
        complaints,
        addComplaint,
        updateComplaintStatus,
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