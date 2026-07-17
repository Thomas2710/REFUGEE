import { DIETARY } from "@/lib/dietary";

export default function AllergensCard() {
  return (
    <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">

      <h2 className="mb-5 text-xl font-semibold text-[var(--heading)]">
        Dietary Information
      </h2>

      <div className="space-y-3">

        {Object.values(DIETARY).map((item) => (
          <div
            key={item.key}
            className="flex items-center gap-3"
          >
            <span className="text-xl">
              {item.icon}
            </span>

            <span className="text-[var(--text)]">
              {item.key}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}