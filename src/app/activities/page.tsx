import type { Metadata } from "next";
import { Accessibility, Calendar, Palette, Sun, Utensils } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Activities & Success Stories",
  description:
    "Explore the therapies, life-skills lessons and creative activities at Star Flower Centre, and read real stories of children making progress.",
};

const activities = [
  {
    title: "Life-Skills Classroom",
    icon: Utensils,
    tint: "blue",
    text: "Brushing teeth, counting coins, crossing a road safely, making a simple meal. Small, practical lessons that add up to independence and dignity.",
  },
  {
    title: "Physical Rehabilitation",
    icon: Accessibility,
    tint: "green",
    text: "Daily physiotherapy in our mobility room — stretching, strengthening and gait training tailored to each child, with parents learning exercises to continue at home.",
  },
  {
    title: "Art & Craft Therapy",
    icon: Palette,
    tint: "yellow",
    text: "Paint, clay and weaving give children a language beyond words. It builds fine-motor skills, calms anxiety, and produces the beautiful pieces sold in our craft shop.",
  },
  {
    title: "Everyday Routines",
    icon: Sun,
    tint: "red",
    text: "Morning circle, snack time, music, quiet time. Predictable rhythms help children feel safe, and safety is where learning begins.",
  },
] as const;

const stories = [
  {
    name: "Nam's first 'Mama'",
    tag: "Speech Therapy",
    tint: "red",
    date: "March 2026",
    excerpt:
      "Nam is six and had never spoken a word. After eight months of play-based speech therapy, she looked up from her puzzle one Tuesday and said 'Mama'. Her mother, who was watching from the doorway, sat down on the floor and cried. Nam now has a vocabulary of over forty words — and a whole lot of opinions.",
  },
  {
    name: "Tee walks to the gate",
    tag: "Physical Therapy",
    tint: "green",
    date: "January 2026",
    excerpt:
      "Tee has cerebral palsy and arrived at the centre in a pushchair at age seven. His goal was simple: walk to the school gate by himself to meet his grandmother. It took a year of patient work with Khun Prem, a walker, and then quad canes. Last month he did it — and kept going to the corner shop.",
  },
  {
    name: "A family that finally talks",
    tag: "Sign Language",
    tint: "blue",
    date: "November 2025",
    excerpt:
      "Ploy is Deaf. For nine years her parents communicated with her through pointing and guesswork. Both parents joined our Saturday family sign classes. Today the whole family argues about what to have for dinner — in Thai Sign Language. 'We finally know our daughter,' her father says.",
  },
  {
    name: "Bank's calm corner",
    tag: "Sensory Learning",
    tint: "yellow",
    date: "September 2025",
    excerpt:
      "Bank, who is autistic, found the classroom overwhelming and would often hide. Our sensory room gave him a soft, dim space with weighted blankets and gentle light. He learned to ask for a 'calm break' with a picture card. This term he sat through an entire music lesson — and joined in the drumming.",
  },
  {
    name: "Fon sells her first painting",
    tag: "Art Therapy",
    tint: "yellow",
    date: "July 2025",
    excerpt:
      "Fon has limited vision and paints with bold, thick strokes she can feel. At our open-day exhibition a visitor bought her sunflower painting. Fon insisted the money go toward paints for the younger children. She is twelve, and already teaching us about generosity.",
  },
  {
    name: "From our centre to Grade 3",
    tag: "Inclusion",
    tint: "green",
    date: "May 2025",
    excerpt:
      "Kao spent two years with us building communication and self-regulation skills. This May he enrolled in a mainstream Grade 3 classroom with a support assistant. We visit monthly, and he tells us proudly about his new friends. Our goal was never to keep children — it was to prepare them.",
  },
] as const;

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activities & Success Stories"
        title="Learning that looks like play, progress that feels like joy"
        description="Every day at Star Flower Centre blends therapy, creativity and life skills. Here is what a week looks like — and the small victories that keep us going."
        tint="green"
      />

      {/* Activities */}
      <section className="container-x py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Therapy & Activities</span>
          <h2 className="section-title">What our children do every week</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <article className="card flex h-full flex-col gap-5 sm:flex-row">
                <ImagePlaceholder label={`Photo: ${a.title}`} tint={a.tint} className="h-40 w-full flex-none rounded-2xl sm:w-44" />
                <div>
                  <a.icon className="h-7 w-7 text-slate-700" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-amber-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Success Stories</span>
            <h2 className="section-title">Real children, real progress</h2>
            <p className="mt-4 text-slate-600">
              Names have been changed and shared with family permission. Each story represents hundreds of
              quiet hours of effort — by the children most of all.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <article className="card flex h-full flex-col overflow-hidden p-0">
                  <ImagePlaceholder label={`Photo: ${s.name}`} tint={s.tint} className="h-44 w-full" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{s.tag}</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        {s.date}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
