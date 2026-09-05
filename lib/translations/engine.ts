import { TranslationRow } from "./models";
import { DeepLProvider } from "./providers/deepl";

const provider = new DeepLProvider();

export async function fillMissingTranslations(
  row: TranslationRow
): Promise<TranslationRow> {
  const translated = { ...row };

  if (!translated.en) {
    translated.en = await provider.translate(
      translated.source,
      "it",
      "en"
    );
  }

  if (!translated.de) {
    translated.de = await provider.translate(
      translated.source,
      "it",
      "de"
    );
  }

  if (!translated.fr) {
    translated.fr = await provider.translate(
      translated.source,
      "it",
      "fr"
    );
  }

  if (!translated.uk) {
    translated.uk = await provider.translate(
      translated.source,
      "it",
      "uk"
    );
  }

  if (!translated.hr) {
    translated.hr = await provider.translate(
      translated.source,
      "it",
      "hr"
    );
  }

  return translated;
}