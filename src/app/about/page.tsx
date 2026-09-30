import type { Metadata } from "next";
import { Compass, Flower2, HandHeart, Lightbulb, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import VolunteerForm from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, vision and people behind Star Flower Centre — a charity school for children with special education needs in Thailand.",
};

const missions = [
  {
    title: "Educate without barriers",
    text: "Offer free, individualised education plans so that hearing, mobility, speech or sensory differences never decide what a child can learn.",
    color: "text-star-blue",
    bg: "bg-blue-50/40",
  },
  {
    title: "Heal through therapy",
    text: "Provide daily physiotherapy, speech and occupational therapy on-site, removing the long journeys and costs that keep families away from care.",
    color: "text-star-green",
    bg: "bg-emerald-50/40",
  },
  {
    title: "Empower families",
    text: "Teach parents sign language, home exercises and advocacy skills so progress continues long after the school day ends.",
    color: "text-star-red",
    bg: "bg-rose-50/40",
  },
  {
    title: "Change how communities see disability",
    text: "Host open days, joint activities with local schools and public exhibitions of student art to replace pity with respect.",
    color: "text-star-yellow",
    bg: "bg-amber-50/40",
  },
];

const team = [
  { name: "Khun Suda", role: "Founder & Head Teacher", note: "Former special-needs teacher who opened the first classroom in 2017.", tint: "blue" },
  { name: "Khun Anong", role: "Speech-Language Therapist", note: "Helps children find their voice through play-based therapy.", tint: "red" },
  { name: "Khun Prem", role: "Physiotherapist", note: "Designs mobility programmes that turn small steps into big milestones.", tint: "green" },
  { name: "Khun Mali", role: "Sign Language Teacher", note: "Deaf educator who teaches Thai Sign Language to children and parents.", tint: "blue" },
  { name: "Khun Nok", role: "Sensory & Art Teacher", note: "Runs the sensory room and the much-loved craft studio.", tint: "yellow" },
  { name: "Volunteer Team", role: "20+ regular volunteers", note: "Students, retirees and professionals who give their time every week.", tint: "green" },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A small centre with a big heart"
        description="Star Flower Centre exists because a few people refused to accept that some children would simply be left behind. This is our story, our promise and the people who keep it."
      />

      {/* Story */}
      <section className="container-x grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <span className="section-eyebrow">Our Story & Founding</span>
          <h2 className="section-title">It started with three children and a borrowed room</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
            <p>
              In 2017, a retired teacher named Suda noticed something in her neighbourhood: children with
              hearing loss, cerebral palsy and developmental delays were staying home all day because no local
              school knew how to include them. Their parents were exhausted, and often ashamed.
            </p>
            <p>
              She borrowed a room at a community hall, invited three families, and taught what she knew. A
              physiotherapist friend came on Thursdays. A Deaf neighbour began teaching sign language. Within a
              year, twenty children were arriving every morning.
            </p>
            <p>
              We named the centre after the star flower — small, bright and resilient, blooming in the most
              unexpected places. Today, we serve more than 120 children a year, completely free of charge,
              funded by people like you.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ImagePlaceholder
            label="Photo: the first Star Flower classroom, 2017"
            tint="blue"
            className="aspect-[4/3] w-full rounded-[2rem]"
          />
        </Reveal>
      </section>

      {/* Vision & Missions */}
      <section className="bg-blue-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Vision & Missions</span>
            <h2 className="section-title">A world where every child is expected to bloom</h2>
            <p className="mt-5 flex items-start justify-center gap-3 text-left text-lg text-slate-600 sm:text-center">
              <Compass className="mt-1 h-6 w-6 flex-none text-star-blue sm:hidden" aria-hidden="true" />
              <span>
                <strong className="text-slate-900">Our vision:</strong> a Thailand in which children with special
                education needs grow up with the same access to learning, friendship and opportunity as any
                other child — and where their families are supported, not isolated.
              </span>
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {missions.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <article className={`card h-full ${m.bg}`}>
                  <Lightbulb className={`h-8 w-8 ${m.color}`} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Workforce & Volunteers</span>
          <h2 className="section-title">The people behind every small victory</h2>
          <p className="mt-4 text-slate-600">
            Fourteen paid teachers and therapists, supported by a devoted volunteer family. Many of our staff
            have lived experience of disability themselves.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <article className="card h-full">
                <ImagePlaceholder label={`Portrait: ${t.name}`} tint={t.tint} className="h-40 w-full rounded-2xl" />
                <h3 className="mt-4 text-lg font-bold">{t.name}</h3>
                <p className="text-sm font-semibold text-star-blue">{t.role}</p>
                <p className="mt-2 text-sm text-slate-600">{t.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Volunteer callout + form */}
      <section id="volunteer" className="bg-emerald-50/40 py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="card h-full border-star-green/30 bg-white">
              <HandHeart className="h-10 w-10 text-star-green" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-extrabold">Join as a Volunteer</h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                You do not need a qualification to make a difference here — just patience and a warm heart.
                Volunteers read stories, help with lunch, assist in the craft studio, or simply sit beside a
                child who needs a friend.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><Users className="h-4 w-4 flex-none text-star-green" aria-hidden="true" /> Weekday mornings or Saturday family sessions</li>
                <li className="flex gap-2"><Users className="h-4 w-4 flex-none text-star-green" aria-hidden="true" /> Orientation and safeguarding training provided</li>
                <li className="flex gap-2"><Users className="h-4 w-4 flex-none text-star-green" aria-hidden="true" /> Thai or English speakers welcome</li>
              </ul>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Flower2 className="h-4 w-4 text-star-yellow" aria-hidden="true" />
                Minimum commitment: one morning a week for three months
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <VolunteerForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
