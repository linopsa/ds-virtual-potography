export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="h1">About</h1>
        <p className="p mt-2">
          DS Virtual Potography creates premium virtual images that feel like real editorial photography —
          with refined composition, believable light, and consistent visual identity across series.
        </p>
      </div>

      <div className="card p-7 sm:p-10 space-y-6">
        <div>
          <h2 className="h2">Approach</h2>
          <p className="p mt-2">
            We treat every shoot like a real production: concept, moodboard, styling direction, location logic,
            then fast iterations until the final gallery feels cohesive and brand-ready.
          </p>
        </div>

        <div>
          <h2 className="h2">Tools & Workflow</h2>
          <ol className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li>1) Brief & references</li>
            <li>2) Concept + moodboard</li>
            <li>3) Shot list & wardrobe direction</li>
            <li>4) Drafts + iteration</li>
            <li>5) Final delivery (web + print exports)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
