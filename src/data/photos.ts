export type Photo = {
  id: string;
  src: string; // path in /public
  title: string;
  location: string;
  year: string;
  tags: string[];
  featured?: boolean;
};

export const photos: Photo[] = [
  {
    id: "toronto-001",
    src: "/photos/toronto-001.jpg",
    title: "Brick District Walk",
    location: "Toronto • Historic District",
    year: "2025",
    tags: ["Lifestyle", "City", "Editorial"],
    featured: true
  },
  {
    id: "toronto-002",
    src: "/photos/toronto-002.jpg",
    title: "Downtown Modern",
    location: "Toronto • Financial District",
    year: "2025",
    tags: ["Lifestyle", "City", "Modern"],
    featured: true
  },
  {
    id: "toronto-003",
    src: "/photos/toronto-003.jpg",
    title: "Waterfront Light",
    location: "Toronto • Waterfront",
    year: "2025",
    tags: ["Lifestyle", "Waterfront", "Travel"],
    featured: true
  }
];

export const allTags = Array.from(
  new Set(photos.flatMap((p) => p.tags))
).sort();
