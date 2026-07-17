import * as deepl from "deepl-node";

import { SupportedLanguage } from "../models";
import { TranslationProvider } from "./provider";

const client = new deepl.DeepLClient(
  process.env.DEEPL_API_KEY!
);

const LANGUAGE_MAP: Record<
  SupportedLanguage,
  deepl.SourceLanguageCode | deepl.TargetLanguageCode
> = {
  it: "it",
  en: "en-GB",
  de: "de",
  fr: "fr",
};

export class DeepLProvider implements TranslationProvider {

    async translate(
    text: string,
    source: SupportedLanguage,
    target: SupportedLanguage
    ): Promise<string> {

    if (source === target) {
        return text;
    }

    if (!text.trim()) {
        return "";
    }

    console.log("");
    console.log("🌍 DeepL Translation");
    console.log(`   ${source.toUpperCase()} → ${target.toUpperCase()}`);
    console.log(`   "${text}"`);

    const result = await client.translateText(
        text,
        LANGUAGE_MAP[source] as deepl.SourceLanguageCode,
        LANGUAGE_MAP[target] as deepl.TargetLanguageCode
    );

    console.log(`   ✓ "${result.text}"`);

    return result.text;
    }

}