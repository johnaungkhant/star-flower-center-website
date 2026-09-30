"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type Tint = "blue" | "green" | "red" | "yellow";
type Item = { title: string; caption: string; tint: Tint };

const tabs: { id: string; label: string; items: Item[] }[] = [
  {
    id: "activities",
    label: "School Activities & Therapies",
    items: [
      { title: "Morning circle", caption: "Songs, greetings and today's weather — in speech and sign.", tint: "blue" },
      { title: "Mobility room", caption: "Tee practising on the parallel bars with Khun Prem.", tint: "green" },
      { title: "Speech session", caption: "Bubble play that sneaks in lip rounding and breath control.", tint: "red" },
      { title: "Sensory corner", caption: "Soft light, textures and a place to feel calm.", tint: "yellow" },
      { title: "Family sign class", caption: "Saturday mornings: parents and children learning together.", tint: "blue" },
      { title: "Cooking club", caption: "Fried rice day. Everyone measures, stirs and tastes.", tint: "green" },
      { title: "Sports day", caption: "Every child races, every child gets a medal.", tint: "red" },
      { title: "Music therapy", caption: "Drums for rhythm, xylophones for turn-taking.", tint: "yellow" },
    ],
  },
  {
    id: "artworks",
    label: "Student Artworks & Crafts",
    items: [
      { title: "Sunflower field", caption: "Acrylic on canvas, by Fon (age 12).", tint: "yellow" },
      { title: "Woven placemats", caption: "Cotton weaving from the Thursday craft studio.", tint: "green" },
      { title: "Clay elephants", caption: "Hand-shaped and glazed by our youngest class.", tint: "red" },
      { title: "Sky and sea", caption: "Finger painting exploring cool colours.", tint: "blue" },
      { title: "Star Flower mural", caption: "A collaborative wall painting in our courtyard.", tint: "yellow" },
      { title: "Friendship bracelets", caption: "Braided by Ploy and her classmates for the shop.", tint: "green" },
      { title: "Paper lanterns", caption: "Loy Krathong decorations, folded with care.", tint: "red" },
      { title: "Self portraits", caption: "'This is me' — collage and crayon.", tint: "blue" },
    ],
  },
];

export default function GalleryTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div role="tablist" aria-label="Gallery categories" className="flex flex-wrap justify-center gap-2">
        {tabs.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                selected ? "bg-star-blue text-white shadow-soft" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-blue-50"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {current.items.map((item) => (
            <figure key={item.title} className="group overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-100">
              <ImagePlaceholder
                label={item.title}
                tint={item.tint}
                className="aspect-square w-full transition-transform duration-300 group-hover:scale-105"
              />
              <figcaption className="p-4">
                <p className="text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
