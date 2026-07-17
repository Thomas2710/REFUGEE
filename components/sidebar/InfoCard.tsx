"use client";

import { InfoItem } from "@/types/info";
import { useMessages } from "@/lib/118n/useMessages";

interface Props {
  info: InfoItem[];
}

export default function InfoCard({ info }: Props) {
  const t = useMessages();

  return (
    <section
      className="
        overflow-hidden
        rounded-xl
        border-2
        border-[var(--border)]
        bg-[var(--surface)]
        shadow-lg
      "
    >
      {/* Header */}
      <div className="bg-[#481911] px-5 py-4">
        <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-[#CCB693]">
          🏡 {t.sidebar.title}
        </h2>

        <p className="mt-1 text-sm text-[#CCB693]/80">
          {t.sidebar.subtitle}
        </p>
      </div>

      {/* Content */}
      <div className="space-y-6 p-6">
        {info.map((item) => (
          <div
            key={item.id}
            className="border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>

              <span className="font-semibold text-[var(--heading)]">
                {
                  t.sidebar[
                    item.id as keyof typeof t.sidebar
                  ]
                }
              </span>
            </div>

            <div className="ml-11 mt-2 text-lg font-medium text-[var(--text)]">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}