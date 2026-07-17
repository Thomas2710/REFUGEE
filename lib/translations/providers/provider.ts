import { SupportedLanguage } from "../models";

export interface TranslationProvider {
  translate(
    text: string,
    source: SupportedLanguage,
    target: SupportedLanguage
  ): Promise<string>;
}