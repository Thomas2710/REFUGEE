import { SupportedLanguage } from "@/lib/translations/models";

export const messages: Record<
  SupportedLanguage,
  {
    header: {
      tonightDinner: string;
    };

    sections: {
      starter: string;
      main: string;
      dessert: string;
    };

    sidebar: {
      title: string;
      subtitle: string;

      dinner: string;
      breakfast: string;
      quiet: string;
      checkin: string;
      checkout: string;
    };

    dietary: {
      allergens: string;
      vegetarian: string;
      vegan: string;
      glutenFree: string;
      milk: string;
      nuts: string;
    };
  }
> = {
  it: {
    header: {
      tonightDinner: "Cena di oggi",
    },

    sections: {
      starter: "Primo",
      main: "Secondo",
      dessert: "Dolce",
    },

    sidebar: {
      title: "Informazioni importanti",
      subtitle: "Tutto ciò che ti serve durante il soggiorno.",

      dinner: "Cena",
      breakfast: "Colazione",
      quiet: "Orario del silenzio",
      checkin: "Check-in",
      checkout: "Check-out",
    },

    dietary: {
      allergens: "Allergeni",
      vegetarian: "Vegetariano",
      vegan: "Vegano",
      glutenFree: "Senza glutine",
      milk: "Contiene latte",
      nuts: "Contiene frutta a guscio",
    },
  },

  en: {
    header: {
      tonightDinner: "Tonight's Dinner",
    },

    sections: {
      starter: "Starter",
      main: "Main Course",
      dessert: "Dessert",
    },

    sidebar: {
      title: "Important Information",
      subtitle: "Everything you need during your stay.",

      dinner: "Dinner",
      breakfast: "Breakfast",
      quiet: "Quiet Hours",
      checkin: "Check-in",
      checkout: "Check-out",
    },

    dietary: {
      allergens: "Allergens",
      vegetarian: "Vegetarian",
      vegan: "Vegan",
      glutenFree: "Gluten Free",
      milk: "Contains milk",
      nuts: "Contains nuts",
    },
  },

  de: {
    header: {
      tonightDinner: "Heutiges Abendessen",
    },

    sections: {
      starter: "Vorspeise",
      main: "Hauptgericht",
      dessert: "Dessert",
    },

    sidebar: {
      title: "Wichtige Informationen",
      subtitle: "Alles, was Sie während Ihres Aufenthalts benötigen.",

      dinner: "Abendessen",
      breakfast: "Frühstück",
      quiet: "Ruhezeiten",
      checkin: "Check-in",
      checkout: "Check-out",
    },

    dietary: {
      allergens: "Allergene",
      vegetarian: "Vegetarisch",
      vegan: "Vegan",
      glutenFree: "Glutenfrei",
      milk: "Enthält Milch",
      nuts: "Enthält Nüsse",
    },
  },

  fr: {
    header: {
      tonightDinner: "Dîner de ce soir",
    },

    sections: {
      starter: "Entrée",
      main: "Plat principal",
      dessert: "Dessert",
    },

    sidebar: {
      title: "Informations importantes",
      subtitle: "Tout ce dont vous avez besoin pendant votre séjour.",

      dinner: "Dîner",
      breakfast: "Petit-déjeuner",
      quiet: "Heures de calme",
      checkin: "Check-in",
      checkout: "Check-out",
    },

    dietary: {
      allergens: "Allergènes",
      vegetarian: "Végétarien",
      vegan: "Végane",
      glutenFree: "Sans gluten",
      milk: "Contient du lait",
      nuts: "Contient des fruits à coque",
    },
  },
};