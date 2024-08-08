import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const idChars = "ABCDEFGHJKMNPQRSTUVWXYZ";

export function generateId() {
    let id = "";
    for (let i = 0; i < 6; i++)
        id += idChars[Math.floor(Math.random() * idChars.length)];
    return id;
}
