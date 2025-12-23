import GalleryGrid from "@/src/components/GalleryGrid";
import { allTags, photos } from "@/src/data/photos";

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="h1">Portfolio</h1>
        <p className="p mt-2">
          Curated virtual photography with an editorial, real-world look. Filter by tag to explore series.
        </p>
      </div>

      <GalleryGrid items={photos} tags={allTags} />
    </div>
  );
}
