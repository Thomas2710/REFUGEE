import { DIETARY } from "@/lib/dietary";

export default function DietaryStrip() {
  return (
    <section className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-8 py-5 shadow-sm">      <h2 className="mb-4 text-lg font-semibold text-[var(--heading)]">
        Allergens
      </h2>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">

        {Object.values(DIETARY).map((item) => (
          <div
            key={item.key}
            className="flex items-center gap-2"
          >
            <span className="font-semibold text-[var(--heading)]">
              {item.icon}
            </span>

            <span>{item.key}</span>
          </div>
        ))}

      </div>

    </section>
  );
}