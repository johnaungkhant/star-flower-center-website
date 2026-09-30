import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryTabs from "@/components/GalleryTabs";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual exhibition of daily life, therapies and student artworks at Star Flower Centre.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A window into our days"
        description="Photographs are shared with family consent. Where a child prefers privacy, we celebrate their work instead of their face."
        tint="yellow"
      />
      <section className="container-x py-16">
        <GalleryTabs />
      </section>
    </>
  );
}
