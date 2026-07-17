export interface TranslationRow {
  id: string;
  source: string;

  en: string;
  de: string;
  fr: string;
}

export type SupportedLanguage =
  | "it"
  | "en"
  | "de"
  | "fr";

export interface LocalizedString {
it: string;
en: string;
de: string;
fr: string;
}