"use client";

import { useLanguage } from "@/components/language/languageContext";
import { messages } from "./messages";

export function useMessages() {
  const { language } = useLanguage();

  return messages[language];
}