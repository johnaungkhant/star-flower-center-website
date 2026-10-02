import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollCue from "@/components/ScrollCue";

type Metadata = {
  title?: string;
  description?: string;
  [key: string]: unknown;
};

type IconProps = {
  className?: string;
  [key: string]: any;
};

const BookOpenCheck = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H20v15.5H5.5A2.5 2.5 0 0 0 3 21V5.5Z" />
    <path d="M7 7h7" />
    <path d="M7 11h10" />
    <path d="M9 17l2 2 4-5" />
  </svg>
);

const Blocks = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z" />
    <path d="M3 12.5 12 17l9-4.5" />
    <path d="M3 17.5 12 22l9-4.5" />
  </svg>
);

const Stethoscope = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 3v8a7 7 0 0 0 14 0V3" />
    <path d="M9 3v8" />
    <path d="M15 3v8" />
    <path d="M8 18a4 4 0 1 0 8 0v-2" />
    <path d="M8 18h8" />
  </svg>
);

const Home = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M9 20v-6h6v6" />
  </svg>
);

const Users = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
    <circle cx="10" cy="7" r="3" />
    <path d="M20 19v-1a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Gift = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20 8H4v12h16V8Z" />
    <path d="M12 8v12" />
    <path d="M4 12h16" />
    <path d="M12 8s-2-6-6-6c-1.5 0-2 1.5-2 3 0 2 1.5 3 4 3h4Z" />
    <path d="M12 8s2-6 6-6c1.5 0 2 1.5 2 3 0 2-1.5 3-4 3h-4Z" />
  </svg>
);

const Megaphone = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 11v2l12 4V7L3 11Z" />
    <path d="M15 9v6" />
    <path d="M18 10.5v3" />
    <path d="M20 9.5v5" />
    <path d="M3 13h2" />
  </svg>
);

const School = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 10.5 12 5l9 5.5-9 5.5-9-5.5Z" />
    <path d="M7 12.5v5.5l5 3 5-3v-5.5" />
    <path d="M12 5v11" />
  </svg>
);

const Coins = ({ className, ...props }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="8" cy="9" r="5" />
    <path d="M11 9h9" />
    <path d="M11 13h9" />
    <circle cx="15" cy="17" r="4" />
    <path d="M18.5 17h2.5" />
  </svg>
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export const metadata: Metadata = {
  title: "Activities & Stories",
  description:
    "Explore the daily programme, Individual Education Plans, parent trainings, home visits and community activities at Star Flower Centre, and read stories of children making progress.",
};

const activities = [
  {
    image: "/Saw-Hay-Blut.jpg",
    title: "Individual Education Plans",
    icon: BookOpenCheck,
    tint: "blue",
    text: "Every child is assessed and given an IEP with achievable goals across communication, cognition, social-emotional development and physical needs. Teachers work one-to-one with each child and review progress regularly with parents.",
  },
  {
    title: "Learning Through Play",
    icon: Blocks,
    tint: "yellow",
    text: "Morning circle, songs and stories, chanting the alphabet and counting, arts and crafts, water play and topic-based lessons. Children learn by doing, and by doing it together.",
  },
  {
    title: "Health, Nutrition & Care",
    icon: Stethoscope,
    tint: "green",
    text: "A morning snack, a nutritious lunch, showers and clean clothes every day. Vaccinations, hygiene routines and referrals to health care are arranged with partners such as SMRU.",
  },
  {
    title: "Home Visits & Early Intervention",
    icon: Home,
    tint: "red",
    text: "Our community liaison identifies children in migrant communities. Teachers and trainers visit homes to show families feeding adaptations, physiotherapy exercises and ways to play, then invite children to the Centre.",
  },
  {
    title: "Parent Training & PTA",
    icon: Users,
    tint: "blue",
    text: "Quarterly trainings on the value of education, types of disabilities, inclusion, child protection, speech and communication, and practical ways to help at home. Parents also join open days and Centre events.",
  },
  {
    title: "Toy Box Scheme",
    icon: Gift,
    tint: "yellow",
    text: "Children borrow a pencil case, exercise book, drawing book, crayons and colouring sheets to take home, so learning continues after the school day ends.",
  },
  {
    title: "Community Trainings",
    icon: Megaphone,
    tint: "green",
    text: "Sessions for community members and other schools on disability, discrimination and life skills, building peer-support networks so families no longer feel alone.",
  },
  {
    title: "Inclusive Education",
    icon: School,
    tint: "red",
    text: "Where it benefits the child, students join a local migrant learning centre with teacher-aide support, and we train those schools so more children with special needs can be welcomed.",
  },
  {
    title: "School Fundraising",
    icon: Coins,
    tint: "blue",
    text: "Parents, teachers and children sell food, drinks and handmade items at community events, raising funds for the Centre and pride in what the children can make.",
  },
] as const;

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
        <Reveal
          {...{
            className: "mx-auto max-w-2xl text-center",
            children: (
              <>
                <span className="section-eyebrow">Our Programme</span>
                <h2 className="section-title">What we do — at the Centre, at home and in the community</h2>
                <p className="mt-4 text-slate-600">
                  The Centre is open Monday to Friday, 9:00 – 15:00. Transport, meals and all activities are
                  provided free of charge.
                </p>
              </>
            ),
          }}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="card flex h-full flex-col gap-5">
                <ImagePlaceholder label={`Photo: ${a.title}`} tint={a.tint} className="h-40 w-full flex-none rounded-2xl" />
                <div>
                  <a.icon className="h-7 w-7 text-slate-700" aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
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
          <Reveal
            {...{
              className: "mx-auto max-w-2xl text-center",
              children: (
                <>
                  <span className="section-eyebrow">Stories From Our Community</span>
                  <h2 className="section-title">Small changes, real progress</h2>
                  <p className="mt-4 text-slate-600">
                    Shared by parents, community elders and teachers. Each story represents hundreds of quiet hours
                    of effort — by the children most of all.
                  </p>
                </>
              ),
            }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <article className="card flex h-full flex-col overflow-hidden p-0">
                  <ImagePlaceholder label={`Photo: ${s.name}`} tint={s.tint} className="h-44 w-full" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{s.tag}</span>
                      <span className="text-slate-500">{s.label}</span>
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
