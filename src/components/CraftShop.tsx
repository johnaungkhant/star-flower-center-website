"use client";

import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

type Tint = "blue" | "green" | "red" | "yellow";

type Product = {
  id: string;
  title: string;
  price: number;
  maker: string;
  description: string;
  impact: string;
  tint: Tint;
};

const products: Product[] = [
  {
    id: "woven-basket",
    title: "Hand-Woven Rattan Basket",
    price: 450,
    maker: "Woven by Tee, age 14",
    description: "A sturdy basket woven over three weeks of patient practice — every loop strengthened Tee's fine-motor control.",
    impact: "Proceeds fund weaving materials and occupational therapy sessions.",
    tint: "yellow",
  },
  {
    id: "sunrise-painting",
    title: "\u201cSunrise Over the Field\u201d Acrylic Painting",
    price: 1200,
    maker: "Painted by Ploy, age 11",
    description: "Ploy rarely spoke when she arrived. Colour became her voice — this canvas is one of her brightest sentences.",
    impact: "Proceeds keep our art-therapy studio stocked with paint, brushes, and canvas.",
    tint: "red",
  },
  {
    id: "clay-bowl",
    title: "Hand-Pinched Clay Bowl",
    price: 350,
    maker: "Shaped by Kao, age 9",
    description: "A small glazed bowl with proud thumbprints still visible. Perfect for keys, jewellery, or a little plant.",
    impact: "Proceeds cover kiln firing and clay for our pottery programme.",
    tint: "blue",
  },
  {
    id: "friendship-bracelets",
    title: "Friendship Bracelet Set (3)",
    price: 180,
    maker: "Braided by Nam & friends",
    description: "Three braided cotton bracelets in our star colours, made side by side during social-skills group.",
    impact: "Proceeds support group therapy that helps children build friendships.",
    tint: "green",
  },
  {
    id: "greeting-cards",
    title: "Hand-Printed Greeting Cards (Pack of 5)",
    price: 250,
    maker: "Printed by the senior class",
    description: "Block-printed flowers and stars on recycled card, each blank inside for your own message.",
    impact: "Proceeds fund life-skills lessons like budgeting and running our mini market stall.",
    tint: "yellow",
  },
  {
    id: "tote-bag",
    title: "Tie-Dye Cotton Tote Bag",
    price: 390,
    maker: "Dyed by Bank, age 13",
    description: "A one-of-a-kind swirl of blue and green. Bank chose the colours himself — a big step in independent decision-making.",
    impact: "Proceeds help buy adaptive equipment for our physical-rehabilitation room.",
    tint: "blue",
  },
];

export default function CraftShop() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const items = Object.values(cart).reduce((a, b) => a + b, 0);
  const total = products.reduce((sum, p) => sum + (cart[p.id] ?? 0) * p.price, 0);

  function add(id: string) {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
    setJustAdded(id);
    setTimeout(() => setJustAdded((cur) => (cur === id ? null : cur)), 1200);
  }

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.id} className="card flex flex-col p-0 overflow-hidden">
            <ImagePlaceholder label={p.title} tint={p.tint} className="aspect-[4/3] rounded-none" />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-extrabold leading-snug">{p.title}</h3>
                <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-800 ring-1 ring-amber-200">
                  ฿{p.price.toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{p.maker}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.description}</p>
              <p className="mt-3 rounded-2xl bg-emerald-50/60 px-3 py-2 text-xs font-medium leading-relaxed text-emerald-900">
                {p.impact}
              </p>
              <button
                type="button"
                onClick={() => add(p.id)}
                className={`btn mt-5 w-full ${justAdded === p.id ? "bg-star-green text-white" : "btn-primary"}`}
              >
                {justAdded === p.id ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" /> Added — thank you!
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" /> Buy / Support
                  </>
                )}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div
        role="status"
        aria-live="polite"
        className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-slate-100 sm:flex-row"
      >
        <div>
          <p className="text-sm font-semibold text-slate-500">Your support basket</p>
          <p className="text-2xl font-extrabold">
            {items} {items === 1 ? "item" : "items"} · ฿{total.toLocaleString()}
          </p>
        </div>
        <p className="max-w-md text-sm text-slate-600">
          Every purchase is a lesson in confidence for its young maker. Orders are packed by our students and posted within Thailand;
          international shipping is quoted on request.
        </p>
        <button type="button" disabled={items === 0} className="btn btn-accent disabled:cursor-not-allowed disabled:opacity-50">
          Checkout
        </button>
      </div>
    </div>
  );
}
