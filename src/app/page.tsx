import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Calendar,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import ScrollCue from "@/components/ScrollCue";

const pillars = [
  {
    title: "Learning & Development",
    description:
      "Every child follows an Individual Education Plan (IEP) within a broad, balanced, child-friendly curriculum — social, emotional, physical and cognitive — that works toward inclusion in mainstream education.",
    icon: BookOpenCheck,
    color: "text-star-blue",
    bg: "bg-blue-50/40",
    ring: "ring-star-blue/20",
    bar: "bg-star-blue",
  },
  {
    title: "Protection & Health",
    description:
      "Nutritious meals, vitamins, showers, health checks and vaccinations with SMRU, and staff trained in child safeguarding. We promote positive discipline with parents as an alternative to corporal punishment.",
    icon: ShieldCheck,
    color: "text-star-green",
    bg: "bg-emerald-50/40",
    ring: "ring-star-green/20",
    bar: "bg-star-green",
  },
  {
    title: "Parents & Community",
    description:
      "Parents are a child's first and most important educators. Regular training days, home visits, open days and community workshops keep families at the centre of every decision.",
    icon: HeartHandshake,
    color: "text-star-red",
    bg: "bg-rose-50/40",
    ring: "ring-star-red/20",
    bar: "bg-star-red",
  },
  {
    title: "Professional Conduct",
    description:
      "Equal-opportunity recruitment, a clear code of conduct, and continuous coaching, mentoring and appraisal so that our teachers keep growing alongside the children they serve.",
    icon: Users,
    color: "text-star-yellow",
    bg: "bg-amber-50/40",
    ring: "ring-star-yellow/30",
    bar: "bg-star-yellow",
  },
];

const stats = [
  { value: "2009", label: "opened in Mae Sot, June 2009" },
  {
    value: "Only",
    label: "specialist school for migrant children on the Thai–Myanmar border",
  },
  { value: "Mon–Fri", label: "full-day programme, 9:00 – 15:00" },
  { value: "100%", label: "free of charge for families" },
];

const missionPoints = [
  "Actively seek out children with special educational needs who are excluded from education, and enrol and include them.",
  "Act in the best interests of the whole child — health, nutrition and well-being, before, during and after school.",
  "Work in partnership with parents and caregivers, and provide effective early intervention through home and community visits.",
  "Balance centre-based learning with mainstreaming into local migrant learning centres wherever it benefits the child.",
  "Advocate for the rights of children with disabilities in the wider community.",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber-50/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-50/70 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-x relative grid items-center gap-12 pb-8 pt-16 sm:pt-24 lg:grid-cols-2">
          <Reveal>
            <span className="section-eyebrow">
              A child-friendly school in Mae Sot, Thailand
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Unlocking Bright Futures for{" "}
              <span className="bg-gradient-to-r from-star-blue via-star-green to-star-red bg-clip-text text-transparent">
                Every Child
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Star Flower Centre (SFC) opened in June 2009 to maximise
              educational opportunities for migrant children with disabilities
              living in and around Mae Sot. Before the Centre existed, these
              children were often isolated within migrant communities with no
              prospect of an education, while their parents struggled to care
              for them and earn a living at the same time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donate" className="btn-primary">
                <Heart className="h-4 w-4" aria-hidden="true" />
                Support Our Mission
              </Link>
              <Link href="/activities" className="btn-outline">
                Learn About Our Programs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-extrabold text-slate-900">
                    {s.value}
                  </dt>
                  <dd className="text-xs font-medium text-slate-500">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-star-blue/15 via-star-yellow/15 to-star-red/15 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative rounded-[2.5rem] bg-white p-6 shadow-soft ring-1 ring-slate-100">
                <Image
                  src="/logo.jpg"
                  alt="Star Flower Centre Logo"
                  width={180}
                  height={180}
                  className="h-64 w-64 rounded-[2rem] object-cover sm:h-80 sm:w-80"
                  priority
                />
                <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700">
                  <Sparkles
                    className="h-4 w-4 text-star-yellow"
                    aria-hidden="true"
                  />
                  Every child can shine
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <ScrollCue
          to="summary"
          label="Discover our story"
          className="relative pb-10"
        />
      </section>

      {/* Executive summary */}
      <section id="summary" className="container-x scroll-mt-24 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <span className="section-eyebrow">Executive Summary</span>
            <h2 className="section-title">Who we are and why we exist</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
              <p>
                Star Flower Centre (SFC) opened in June 2009 to maximise
                educational opportunities for migrant children with
                disabilities living in and around Mae Sot. Before the Centre
                existed, these children were often isolated within migrant
                communities with no prospect of an education, while their
                parents struggled to care for them and earn a living at the same
                time.
              </p>
              <p>
                The Centre follows UNICEF&apos;s rights-based, child-friendly
                school framework — inclusive, healthy and protective for all
                children, effective with children, and involved with families
                and communities. Most of our students live with cerebral palsy;
                others have autism, ADHD, Down syndrome or learning
                difficulties. Today SFC is the only school along the
                Thai–Myanmar border available to children with specialist needs
                from migrant communities.
              </p>
              <p>
                Established with Voluntary Services Overseas (VSO) and World
                Education (WE) Thailand, the Centre has been managed and led by
                the Burmese Migrant Workers&apos; Education Committee (BMWEC)
                since 2015. Our teachers, trained from scratch in special
                educational needs and child-friendly methods, hold Thai
                Ministry of Education teacher cards.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="card bg-blue-50/40 ring-1 ring-star-blue/20">
              <Calendar
                className="h-8 w-8 text-star-blue"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-bold">
                A day at Star Flower Centre
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                {(
                  [
                    ["9:00", "Arrival and free-choice play"],
                    ["9:30", "Greeting time, songs and exercise"],
                    ["10:00", "Snack, then Work-with-Teacher IEP sessions"],
                    ["12:00", "Nutritious lunch together"],
                    [
                      "13:00",
                      "Creation, life skills, art, music and topic activities",
                    ],
                    [
                      "14:00",
                      "Outdoor play — sand, swings, football, badminton",
                    ],
                    ["15:00", "Closing songs, dance and home time"],
                  ] as const
                ).map(([time, label]) => (
                  <li key={time} className="flex gap-3">
                    <span className="w-12 flex-none font-bold text-slate-900">
                      {time}
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
        <ScrollCue
          to="vision"
          label="Our vision & mission"
          className="mt-14"
        />
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="scroll-mt-24 bg-emerald-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Vision & Mission</span>
            <h2 className="section-title">Work, learn and play together</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="card h-full">
                <Target
                  className="h-8 w-8 text-star-green"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold">Our Vision</h3>
                <blockquote className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                  <p>
                    We believe that all children should have access to a
                    child-friendly school, where their individual needs are
                    catered for and where they are able to participate in a
                    full program of activities and learning opportunities.
                  </p>
                  <p>
                    We believe all students should be encouraged to work, learn,
                    and play together, which will enable students to gain
                    confidence, raise their self-esteem, and realize their full
                    potential as productive members of society.
                  </p>
                </blockquote>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="card h-full">
                <Heart
                  className="h-8 w-8 text-star-red"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-bold">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  To keep each child — and his or her rights, well-being and
                  educational opportunities — at the centre of everything we
                  do. In practice, that means we:
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                  {missionPoints.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-star-red"
                        aria-hidden="true"
                      />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
          <ScrollCue
            to="principles"
            label="Our principles"
            className="mt-14"
          />
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="container-x scroll-mt-24 py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Principles That Guide Our Vision</span>
          <h2 className="section-title">Whole-child support, in four colours</h2>
          <p className="mt-4 text-slate-600">
            Each petal of our logo represents a principle that shapes every
            decision at the Centre. Together they form a circle of care around
            every child and their family.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article
                className={`card h-full ring-1 ${p.ring} ${p.bg} transition-transform hover:-translate-y-1`}
              >
                <div
                  className={`h-1.5 w-12 rounded-full ${p.bar}`}
                  aria-hidden="true"
                />
                <p.icon
                  className={`mt-6 h-10 w-10 ${p.color}`}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <ScrollCue
          to="support"
          label="Get involved"
          className="mt-14"
        />
      </section>

      {/* CTA */}
      <section id="support" className="container-x scroll-mt-24 pb-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-star-blue px-8 py-14 text-center text-white shadow-soft sm:px-16">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10"
              aria-hidden="true"
            />
            <h2 className="relative text-3xl font-extrabold sm:text-4xl">
              Your kindness becomes a child&apos;s tomorrow
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-blue-50">
              Every baht funds teaching, learning materials, warm meals and
              home visits. Scan a PromptPay QR in seconds, give internationally
              by card, or buy a handmade craft from our students.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/donate"
                className="btn bg-white text-star-blue hover:bg-blue-50"
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
                Donate Now
              </Link>
              <Link
                href="/about#volunteer"
                className="btn border-2 border-white/70 text-white hover:bg-white/10"
              >
                Volunteer With Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}