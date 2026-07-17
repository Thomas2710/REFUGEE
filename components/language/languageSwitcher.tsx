"use client";

import { useLanguage } from "./languageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "it", label: "IT" },
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
    { code: "fr", label: "FR" },
  ] as const;

  return (
    <div className="inline-flex rounded-xl border border-[var(--border)] overflow-hidden">

      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLanguage(l.code)}
          className={`
            px-4 py-2 text-sm font-medium transition-colors
            ${
              language === l.code
                ? "bg-[var(--accent)] text-black"
                : "bg-transparent hover:bg-[var(--surface)]"
            }
          `}
        >
          {l.label}
        </button>
      ))}

    </div>
  );
}