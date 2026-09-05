import { getMenu } from "@/lib/sheets";

import {
  getTranslations,
  appendTranslation,
  updateTranslation,
} from "./repository";

import { fillMissingTranslations } from "./engine";

export async function syncTranslations() {
  const menu = await getMenu();

  const translations = await getTranslations();

  let added = 0;
  let updated = 0;
  let translated = 0;
  let unchanged = 0;

  for (const dish of menu) {

    const existing = translations.find(
      (t) => t.id === dish.id
    );

    //--------------------------------------------------
    // NEW DISH
    //--------------------------------------------------

    if (!existing) {

      console.log(`➕ Adding ${dish.id}`);

      const row = {
        id: dish.id,
        source: dish.title, // change to dish.text if needed
        en: "",
        de: "",
        fr: "",
        uk: "",
        hr: "",
      };

      await appendTranslation(row);

      const completed =
        await fillMissingTranslations(row);

      await updateTranslation(completed);

      added++;
      translated++;

      continue;
    }

    //--------------------------------------------------
    // SOURCE CHANGED
    //--------------------------------------------------

    if (existing.source !== dish.title) {

      console.log(`🔄 Updating ${dish.id}`);

      const row = {
        id: dish.id,
        source: dish.title,
        en: "",
        de: "",
        fr: "",
        uk: "",
        hr: "",
      };

      const completed =
        await fillMissingTranslations(row);

      await updateTranslation(completed);

      updated++;
      translated++;

      continue;
    }

    //--------------------------------------------------
    // MISSING TRANSLATIONS
    //--------------------------------------------------

    const completed =
      await fillMissingTranslations(existing);

    if (
      completed.en !== existing.en ||
      completed.de !== existing.de ||
      completed.fr !== existing.fr ||
      completed.uk !== existing.uk ||
      completed.hr !== existing.hr
    ) {

      console.log(
        `🌍 Completing translations for ${dish.id}`
      );

      await updateTranslation(completed);

      translated++;

      continue;
    }

    unchanged++;
  }

  console.log("");
  console.log("========== Translation Sync ==========");
  console.log(`➕ Added:        ${added}`);
  console.log(`🔄 Updated:     ${updated}`);
  console.log(`🌍 Translated:  ${translated}`);
  console.log(`✅ Unchanged:   ${unchanged}`);
  console.log("======================================");
}