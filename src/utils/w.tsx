import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function w(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}