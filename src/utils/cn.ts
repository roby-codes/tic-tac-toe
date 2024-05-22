import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classList: ClassValue[]) => twMerge(clsx(classList));
