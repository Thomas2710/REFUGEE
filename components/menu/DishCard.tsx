"use client";

import { LocalizedMenuItem } from "@/types/menu";
import { DIETARY } from "@/lib/dietary";

import { useLanguage } from "@/components/language/languageContext";
import { useMessages } from "@/lib/118n/useMessages";

interface DishCardProps {
  dish: LocalizedMenuItem;
}

export default function DishCard({ dish }: DishCardProps) {
  const { language } = useLanguage();
  const t = useMessages();

  const badges: Array<(typeof DIETARY)[keyof typeof DIETARY]> = [];

  if (dish.vegetarian) badges.push(DIETARY.vegetarian);
  if (dish.vegan) badges.push(DIETARY.vegan);
  if (dish.glutenFree) badges.push(DIETARY.glutenFree);
  if (dish.milk) badges.push(DIETARY.milk);
  if (dish.nuts) badges.push(DIETARY.nuts);

  return (
    <article className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

      <h3 className="text-xl font-semibold text-[var(--heading)]">
        {dish.title[language]}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[var(--secondary)]">
        {dish.description[language]}
      </p>

      {badges.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge.key}
              className="rounded-full border border-[var(--border)] bg-[var(--background)] px-2 py-1 text-sm text-[var(--text)]"
            >
              {badge.icon} {t.dietary[badge.key]}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}