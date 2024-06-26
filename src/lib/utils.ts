import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createSlug = (title: string) => {
  // Convert to lowercase and remove leading/trailing spaces
  let slug = title.trim().toLowerCase();

  // Replace spaces with dashes
  slug = slug.replace(/\s+/g, "-");

  // Remove any remaining special characters except alphanumeric and dashes
  slug = slug.replace(/[^\w\-]+/g, "");

  return slug;
};
