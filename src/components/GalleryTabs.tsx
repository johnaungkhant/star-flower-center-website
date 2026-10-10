"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryGroup = {
  id: string;
  label: string;
  folder: string;
  count: number;
};

const galleryGroups: GalleryGroup[] = [
  { id: "general-photos", label: "General Photos", folder: "GeneralPhotos", count: 113 },
  {
    id: "learning-through-play",
    label: "Learning Through Play",
    folder: "LearningThroughPlay",
    count: 24,
  },
  {
    id: "individual-education-plans",
    label: "Individual Education Plans",
    folder: "IndividualEducationPlans",
    count: 17,
  },
  {
    id: "health-nutrition-and-care",
    label: "Health Nutrition and Care",
    folder: "HealthNutritionandCare",
    count: 6,
  },
  {
    id: "home-visit-early-intervention",
    label: "Home Visit & Early Intervention",
    folder: "HomeVisit&EarlyIntervention",
    count: 9,
  },
  {
    id: "teachers-capacity-building",
    label: "Teachers Capacity Building",
    folder: "TeachersCapacityBuilding",
    count: 11,
  },
  {
    id: "physical-therapy",
    label: "Physical Therapy",
    folder: "PhysicalTherapy",
    count: 6,
  },
  {
    id: "life-skill",
    label: "Life Skill",
    folder: "LifeSkill",
    count: 7,
  },
  {
    id: "students-participation",
    label: "Students Participation",
    folder: "Students_Participation",
    count: 7,
  },
  {
    id: "parents-participation",
    label: "Parents Participation",
    folder: "PatentsParticipation",
    count: 5,
  },
];

const getFolderImages = (folder: string, count: number) =>
  Array.from({ length: count }, (_, index) => `${folder}/${folder} (${index + 1}).jpg`);

const encodePublicPath = (path: string) =>
  path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

export default function GalleryTabs() {
  const [active, setActive] = useState(galleryGroups[0].id);
  const [activeIndex, setActiveIndex] = useState(0);

  const current = galleryGroups.find((group) => group.id === active) ?? galleryGroups[0];
  const images = getFolderImages(current.folder, current.count);

  useEffect(() => {
    setActiveIndex(0);
  }, [active]);

  const nextImage = () => setActiveIndex((index) => (index + 1) % images.length);
  const previousImage = () =>
    setActiveIndex((index) => (index - 1 + images.length) % images.length);

  return (
    <div>
      <div className="mb-6 text-center">
        <p className="section-eyebrow">School Activities & Therapies</p>
        <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
          Browse each gallery folder
        </h3>
      </div>

      <div
        role="tablist"
        aria-label="Gallery categories"
        className="flex flex-wrap justify-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 shadow-soft backdrop-blur-sm"
      >
        {galleryGroups.map((group) => {
          const selected = group.id === active;

          return (
            <button
              key={group.id}
              role="tab"
              id={`tab-${group.id}`}
              aria-selected={selected}
              aria-controls={`panel-${group.id}`}
              onClick={() => setActive(group.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 md:px-5 ${
                selected
                  ? "bg-star-blue text-white shadow-soft"
                  : "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {group.label}
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
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-4 shadow-soft md:p-6"
        >
          <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-slate-200">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Gallery Folder
              </p>
              <h4 className="mt-1 text-lg font-bold text-slate-900">{current.label}</h4>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {images.length} photos
            </span>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${current.id}-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Image
                  src={`/${encodePublicPath(images[activeIndex])}`}
                  alt={`${current.label} photo ${activeIndex + 1}`}
                  width={1600}
                  height={1000}
                  className="h-[420px] w-full object-cover md:h-[560px]"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={previousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/40 p-2 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900/60"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-slate-900/40 p-2 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900/60"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 px-1 text-sm text-slate-600">
            <span>
              Photo {activeIndex + 1} of {images.length}
            </span>
            {images.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previousImage}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {images.map((src, index) => (
                <button
                  key={`${current.id}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`overflow-hidden rounded-xl border bg-white transition ${
                    index === activeIndex
                      ? "border-star-blue ring-2 ring-star-blue/25"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <Image
                    src={`/${encodePublicPath(src)}`}
                    alt={`${current.label} thumbnail ${index + 1}`}
                    width={300}
                    height={220}
                    className="h-20 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
