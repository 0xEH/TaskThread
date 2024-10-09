import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getDictionaries(locale: string) {
  const dictionaryModule = await import(`@/dictionaries/${locale}.json`);
  return dictionaryModule.default;
}
