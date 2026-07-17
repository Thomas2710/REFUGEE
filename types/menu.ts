export type MenuSection = "starter" | "main" | "dessert";

export interface MenuItem {
  id: string;

  section: MenuSection;
  order: number;

  title: string;
  description: string;

  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;

  milk: boolean;
  nuts: boolean;

  available: boolean;
}

export interface LocalizedString {
  it: string;
  en: string;
  de: string;
  fr: string;
}

export interface LocalizedMenuItem
  extends Omit<MenuItem, "title" | "description"> {

  title: LocalizedString;
  description: LocalizedString;
}