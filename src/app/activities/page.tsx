import type { Metadata } from "next";
import Image from "next/image";
import {
  Blocks,
  BookOpenCheck,
  Coins,
  Gift,
  Home,
  Megaphone,
  School,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollCue from "@/components/ScrollCue";

export const metadata: Metadata = {
  title: "Activities & Stories",
  description:
    "Explore the daily programme, Individual Education Plans, parent trainings, home visits and community activities at Star Flower Centre, and read stories of children making progress.",
};

type Activity = {
  title: string;
  icon: LucideIcon;
  tint: "blue" | "yellow" | "green" | "red";
  text: string;
  image: string | null;
};

const activities: Activity[] = [
  {
    title: "Individual Education Plans",
    icon: BookOpenCheck,
    tint: "blue",
    text: "Every child is assessed and given an IEP with achievable goals across communication, cognition, social-emotional development and physical needs. Teachers work one-to-one with each child and review progress regularly with parents.",
    image: "/iep.jpg",
  },
  {
    title: "Learning Through Play",
    icon: Blocks,
    tint: "yellow",
    text: "Morning circle, songs and stories, chanting the alphabet and counting, arts and crafts, water play and topic-based lessons. Children learn by doing, and by doing it together.",
    image: "/ltp.jpg",
  },
  {
    title: "Health, Nutrition & Care",
    icon: Stethoscope,
    tint: "green",
    text: "A morning snack, a nutritious lunch, showers and clean clothes every day. Vaccinations, hygiene routines and referrals to health care are arranged with partners such as SMRU.",
    image: "/hnc.jpg",
  },
  {
    title: "Home Visits & Early Intervention",
    icon: Home,
    tint: "red",
    text: "Our community liaison identifies children in migrant communities. Teachers and trainers visit homes to show families feeding adaptations, physiotherapy exercises and ways to play, then invite children to the Centre.",
    image: "/hvep.jpg",
  },
  {
    title: "Parent Training & PTA",
    icon: Users,
    tint: "blue",
    text: "Quarterly trainings on the value of education, types of disabilities, inclusion, child protection, speech and communication, and practical ways to help at home. Parents also join open days and Centre events.",
    image: "/pt.jpg",
  },
  {
    title: "Toy Box Scheme",
    icon: Gift,
    tint: "yellow",
    text: "Children borrow a pencil case, exercise book, drawing book, crayons and colouring sheets to take home, so learning continues after the school day ends.",
    image: "/tbs.jpg",
  },
  {
    title: "Community Trainings",
    icon: Megaphone,
    tint: "green",
    text: "Sessions for community members and other schools on disability, discrimination and life skills, building peer-support networks so families no longer feel alone.",
    image: "/ct.jpg",
  },
  {
    title: "Inclusive Education",
    icon: School,
    tint: "red",
    text: "Where it benefits the child, students join a local migrant learning centre with teacher-aide support, and we train those schools so more children with special needs can be welcomed.",
    image: "/ie.jpg",
  },
  {
    title: "School Fundraising",
    icon: Coins,
    tint: "blue",
    text: "Parents, teachers and children sell food, drinks and handmade items at community events, raising funds for the Centre and pride in what the children can make.",
    image: "/fr.png",
  },
   {
    title: "Life Skills & Vocational Training",
    icon: School,
    tint: "red",
    text: "Life skills and vocational training empower our special needs children with the self-reliance, practical abilities, and confidence required to lead meaningful, independent lives.",
    image: "/lsv.jpg",
  },
];

const stories = [
  {
    name: "From wandering to singing",
    tag: "Community Voice",
    tint: "red",
    label: "Community elders",
    excerpt:
      "Elders in one migrant community told us that before the Centre, the children used to wander about aimlessly, often dirty and with no one to guide them. Now they play constructively, sing songs, count and chant the alphabet, and they look after themselves and each other.",
  },
  {
    name: "Both parents can work again",
    tag: "Family Impact",
    tint: "green",
    label: "Parents",
    excerpt:
      "With their children safe and learning at the Centre from Monday to Friday, both parents are now able to go to work. Families tell us this has raised their self-esteem and income, and reduced the stress of caring for a child with a disability alone.",
  },
  {
    name: "Songkran, hats and concerts",
    tag: "Celebration",
    tint: "yellow",
    label: "Centre events",
    excerpt:
      "Water fights at Songkran, a hat-making day, concerts and picnics bring children, parents and teachers together. For many families it is the first time their child has been included in a public celebration.",
  },
  {
    name: "Coffee, biscuits and confidence",
    tag: "Parent Training",
    tint: "blue",
    label: "Training days",
    excerpt:
      "Parents' training days start with coffee and biscuits and end with new skills: how to help a child eat independently, how to communicate without words, how to use positive discipline. Parents who once felt ashamed now speak proudly about their children.",
  },
  {
    name: "Exercises at home",
    tag: "Home Visits",
    tint: "green",
    label: "Early intervention",
    excerpt:
      "On home visits, teachers and volunteer therapists show families simple physiotherapy exercises and how to adapt the home — a supportive seat, a spoon that is easier to hold. Small changes that let a child feed themselves for the first time.",
  },
  {
    name: "Every day, at school",
    tag: "Inclusion",
    tint: "red",
    label: "Daily attendance",
    excerpt:
      "Children who were once kept at home, isolated from their communities, now arrive at the Centre every weekday. They share meals, exercise, sing and learn alongside their friends — and some go on to join local migrant learning centres with our support.",
  },
] as const;

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activities & Stories"
        title="Learning that looks like play, progress that feels like joy"
        description="Every day at Star Flower Centre blends individual teaching, play, health care and life skills — and our work continues in homes and communities across Mae Sot."
        tint="green"
      />

      {/* Activities */}
      <section className="container-x py-20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Our Programme</span>
          <h2 className="section-title">
            What we do — at the Centre, at home and in the community
          </h2>
          <p className="mt-4 text-slate-600">
            The Centre is open Monday to Friday, 9:00 – 15:00. Transport, meals
            and all activities are provided free of charge.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="card flex h-full flex-col gap-5">
                {a.image ? (
                  <Image
                    src={a.image}
                    alt={`Photo: ${a.title}`}
                    width={600}
                    height={400}
                    className="h-40 w-full flex-none rounded-2xl object-cover"
                  />
                ) : (
                  <ImagePlaceholder
                    label={`Photo: ${a.title}`}
                    tint={a.tint}
                    className="h-40 w-full flex-none rounded-2xl"
                  />
                )}
                <div>
                  <a.icon
                    className="h-7 w-7 text-slate-700"
                    aria-hidden="true"
                  />
                  <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {a.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <ScrollCue to="stories" label="Read our stories" className="mt-14" />
      </section>

      {/* Stories */}
      <section id="stories" className="scroll-mt-24 bg-amber-50/40 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Stories From Our Community</span>
            <h2 className="section-title">Small changes, real progress</h2>
            <p className="mt-4 text-slate-600">
              Shared by parents, community elders and teachers. Each story
              represents hundreds of quiet hours of effort — by the children
              most of all.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <article className="card flex h-full flex-col overflow-hidden p-0">
                  <ImagePlaceholder
                    label={`Photo: ${s.name}`}
                    tint={s.tint}
                    className="h-44 w-full"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                        {s.tag}
                      </span>
                      <span className="text-slate-500">{s.label}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                      {s.excerpt}
                    </p>
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