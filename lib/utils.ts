import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const fetchData = async (url: string) => {
  const response = await fetch(url);
  return response.json();
  }