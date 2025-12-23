import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 dark:border-neutral-800">
      <div className="container-pad py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
        <div className="text-sm text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} DS Virtual Potography. All rights reserved.
        </div>
        <div className="flex gap-5 text-sm">
          <Link href="/portfolio" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
            Portfolio
          </Link>
          <Link href="/services" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
            Services
          </Link>
          <Link href="/contact" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
