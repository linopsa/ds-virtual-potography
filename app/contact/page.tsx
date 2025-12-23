"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="h1">Contact</h1>
        <p className="p mt-2">
          Tell us what you’re creating — we’ll propose a concept + package fit.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="card p-7 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Name</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2"
                name="name" required />
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Email</label>
              <input className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2"
                name="email" type="email" required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Shoot type</label>
              <select className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2"
                name="type" defaultValue="Lifestyle">
                <option>Lifestyle</option>
                <option>Fashion</option>
                <option>Wedding</option>
                <option>Travel</option>
                <option>Brand campaign</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-neutral-600 dark:text-neutral-300">Budget</label>
              <select className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2"
                name="budget" defaultValue="Under $500">
                <option>Under $500</option>
                <option>$500–$1,000</option>
                <option>$1,000–$3,000</option>
                <option>$3,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-neutral-600 dark:text-neutral-300">Message</label>
            <textarea className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-2"
              name="message" rows={6} required />
          </div>

          <button className="btn btn-primary w-full" type="submit">
            Prepare message
          </button>

          {sent && (
            <div className="text-sm text-neutral-600 dark:text-neutral-300">
              Message prepared. Next step: connect this form to your email/backend (or use mailto).
            </div>
          )}
        </form>

        <div className="card p-7 space-y-3">
          <div className="font-semibold">Business info</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            Response time: typically within 24 hours.
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            Deliverables: high-res web + print exports.
          </div>
          <div className="mt-4">
            <div className="font-semibold">Quick note</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">
              If you want the brand name to read “Photography” instead of “Potography”, change it in:
              Navbar + Footer + layout metadata.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
