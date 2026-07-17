import { LocalizedMenuItem } from "@/types/menu";
import DishCard from "./DishCard";

interface Props {
  title: string;
  dishes: LocalizedMenuItem[];
}

export default function MenuSection({
  title,
  dishes,
}: Props) {
  if (dishes.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-4 border-b border-[var(--border)] pb-2 text-2xl font-semibold text-[var(--heading)]">
        {title}
      </h2>

      <div className="space-y-3">
        {dishes.map((dish) => (
          <DishCard
            key={dish.id}
            dish={dish}
          />
        ))}
      </div>
    </section>
  );
}