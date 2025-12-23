import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "from $199",
    items: ["3 final images", "1 concept direction", "1 revision round", "48h delivery"]
  },
  {
    name: "Pro",
    price: "from $499",
    items: ["10 final images", "moodboard + shot list", "2 revision rounds", "priority delivery"]
  },
  {
    name: "Brand",
    price: "from $999",
    items: ["25+ final images", "campaign consistency", "art direction", "deliverables for web & ads"]
  }
];

const faqs = [
  ["Is this real photography?", "It’s virtual production designed to look like real on-location editorial photography."],
  ["How do revisions work?", "You get defined revision rounds per package. We iterate quickly and precisely."],
  ["Can you keep the same model identity across a series?", "Yes — consistent identity across a full campaign is a core offering."],
  ["What do you need from me?", "A brief: style references, wardrobe direction, locations, and usage goals."],
  ["How do I receive files?", "High-resolution web + print-ready exports, delivered via download link."]
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="h1">Services</h1>
        <p className="p mt-2">
          Clear packages for individuals, creators, and brands. Custom scopes available.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="card p-6">
            <div className="text-sm text-neutral-600 dark:text-neutral-300">{p.name}</div>
            <div className="mt-2 text-2xl font-semibold">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              {p.items.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary mt-6 w-full">
              Book {p.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="card p-7 sm:p-10">
        <h2 className="h2">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map(([q, a]) => (
            <div key={q} className="card p-5">
              <div className="font-semibold">{q}</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
