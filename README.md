10) README (инструкция “добавить фото за 10 секунд”)
README.md
# DS Virtual Potography

Premium virtual photography portfolio (Next.js + TypeScript + Tailwind).

## Run
```bash
npm i
npm run dev

Add photos (10 seconds)

Put the image file into:
public/photos/your-file.jpg

Add a new object to:
src/data/photos.ts
Example:

{
  id: "new-001",
  src: "/photos/your-file.jpg",
  title: "New Shot",
  location: "Kyiv • Historic Center",
  year: "2025",
  tags: ["Wedding", "Editorial"],
  featured: false
}


Done — the site updates automatically (Home preview uses featured: true).

Notes

Gallery builds ONLY from src/data/photos.ts.

Light/Dark theme toggle is implemented without external libraries.


---

## Быстрый запуск
```bash
npm i
npm run dev
