"use client";

import Menu from "@/components/menu/Menu";
import Sidebar from "@/components/sidebar/SideBar";
import LanguageSwitcher from "@/components/language/languageSwitcher";

import { useMessages } from "@/lib/118n/useMessages";

import { LocalizedMenuItem } from "@/types/menu";
import { InfoItem } from "@/types/info";

interface HomeClientProps {
  menu: LocalizedMenuItem[];
  info: InfoItem[];
}

export default function HomeClient({
  menu,
  info,
}: HomeClientProps) {

  const t = useMessages();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-[var(--heading)]">
            🏔 Rifugio Berti
          </h1>

          <p className="mt-3 text-lg text-[var(--secondary)]">
            {t.header.tonightDinner}
          </p>

          <div className="mt-6 flex justify-center">
            <LanguageSwitcher />
          </div>
        </header>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center">

          <div className="flex-1 max-w-2xl">
            <Menu menu={menu} />
          </div>

          <aside className="w-full lg:w-80 lg:ml-10">
            <Sidebar info={info} />
          </aside>

        </div>

      </div>
    </main>
  );
}