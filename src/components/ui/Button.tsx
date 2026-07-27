"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  isLoading = false,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 focus:outline-none shadow-sm disabled:opacity-60 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-[#000000] hover:bg-slate-600 text-white shadow-black/20 shadow-lg",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white shadow-slate-900/10",
    outline:
      "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <>
          <FaSpinner className="animate-spin text-current" size={14} />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}