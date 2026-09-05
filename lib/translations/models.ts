export interface TranslationRow {
  id: string;
  source: string;

  en: string;
  de: string;
  fr: string;
  uk: string;
  hr: string;
}

export type SupportedLanguage =
  | "it"
  | "en"
  | "de"
  | "fr"
  | "uk"
  | "hr";

export interface LocalizedString {
it: string;
en: string;
de: string;
fr: string;
uk: string;
hr: string;
}