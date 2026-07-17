export const SHEETS = {
  MENU: "menu",
  INFO: "info",
  TRANSLATIONS: "translations",
} as const;

export const SUPPORTED_LANGUAGES = [
  "it",
  "en",
  "de",
  "fr",
] as const;

export const APP = {
  REFUGE_NAME: "Rifugio Berti",
};

export type Language = typeof SUPPORTED_LANGUAGES[number];