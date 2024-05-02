import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cnMerge(...inputs){
    return twMerge(clsx(inputs))
}