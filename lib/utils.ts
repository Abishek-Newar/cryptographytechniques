import { type ClassValue, clsx } from "clsx"
import { create } from "domain"
import { createContext } from "react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

