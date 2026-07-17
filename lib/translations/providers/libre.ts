import { SupportedLanguage } from "../models";
import { TranslationProvider } from "./provider";

interface LibreResponse {
  translatedText: string;
}

export class LibreProvider implements TranslationProvider {
  async translate(
    text: string,
    source: SupportedLanguage,
    target: SupportedLanguage
  ): Promise<string> {

    if (source === target) {
      return text;
    }

    const response = await fetch(
      `${process.env.LIBRETRANSLATE_URL}/translate`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          q: text,
          source,
          target,
          format: "text",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `LibreTranslate error: ${response.status}`
      );
    }

    const data =
      (await response.json()) as LibreResponse;

    return data.translatedText;
  }
}