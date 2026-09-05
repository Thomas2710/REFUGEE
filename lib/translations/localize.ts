import { LocalizedMenuItem, MenuItem } from "@/types/menu";
import { TranslationRow } from "./models";

export function localizeMenu(
  menu: MenuItem[],
  translations: TranslationRow[]
): LocalizedMenuItem[] {
  return menu.map((dish) => {
    const translation = translations.find(
      (t) => t.id === dish.id
    );

    return {
      ...dish,

      title: {
        it: dish.title,
        en: translation?.en || dish.title,
        de: translation?.de || dish.title,
        fr: translation?.fr || dish.title,
        uk: translation?.uk || dish.title,
        hr: translation?.hr || dish.title,
      },

      // For now we don't translate descriptions yet.
      description: {
        it: dish.description,
        en: dish.description,
        de: dish.description,
        fr: dish.description,
        uk: dish.description,
        hr: dish.description,
      },
    };
  });
}