import type { Metadata } from "next";
import { Camera, HeartHandshake, Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GalleryTabs from "@/components/GalleryTabs";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual exhibition of daily life, therapies and student artworks at Star Flower Centre.",
};

const highlights = [
  {
    icon: Camera,
    label: "Daily moments",
    value: "8+",
    text: "Carefully selected snapshots from our classrooms and community spaces.",
  },
  {
    icon: HeartHandshake,
    label: "Warm support",
    value: "100%",
    text: "Family-led care and inclusive learning at the heart of every scene.",
  },
  {
    icon: Sparkles,
    label: "Creative joy",
    value: "16",
    text: "Artworks, crafts and celebrations that let each child shine.",
  },
];

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
        <div className="mb-12 overflow-hidden rounded-[2rem] border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 shadow-soft md:p-8">
          <div className="mb-6 max-w-2xl">
            <span className="section-eyebrow">A glimpse of our work</span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Learning, laughter and everyday progress in motion
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map(({ icon: Icon, label, value, text }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xl font-black text-slate-900">{value}</span>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <GalleryTabs />
      </section>
    </>
  );
}
