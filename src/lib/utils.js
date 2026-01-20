import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")          // & → and
    .replace(/[^a-z0-9\s-]/g, "")  // شيل الرموز الغريبة
    .replace(/\s+/g, "-")          // مسافات → -
    .replace(/-+/g, "-");          // منع تكرار -
}
