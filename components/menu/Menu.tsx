import MenuSection from "./MenuSection";
import { LocalizedMenuItem } from "@/types/menu";
import { useMessages } from "@/lib/118n/useMessages";

interface MenuProps {
  menu: LocalizedMenuItem[];
}

export default function Menu({ menu }: MenuProps) {
  const t = useMessages();

  const starters = menu.filter(
    (dish) => dish.section === "starter"
  );

  const mains = menu.filter(
    (dish) => dish.section === "main"
  );

  const desserts = menu.filter(
    (dish) => dish.section === "dessert"
  );

  return (
    <>
      <MenuSection
        title={t.sections.starter}
        dishes={starters}
      />

      <MenuSection
        title={t.sections.main}
        dishes={mains}
      />

      <MenuSection
        title={t.sections.dessert}
        dishes={desserts}
      />
    </>
  );
}