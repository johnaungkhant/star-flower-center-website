"use client";

import { useState } from "react";
import { CreditCard, Globe2, Lock, ShieldCheck } from "lucide-react";

const presets = [10, 25, 50, 100, 250];
const currencies = ["USD", "EUR", "GBP", "AUD", "SGD"] as const;
type Currency = (typeof currencies)[number];

const symbols: Record<Currency, string> = { USD: "$", EUR: "€", GBP: "£", AUD: "A$", SGD: "S$" };

export default function IntlDonationCard() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [amount, setAmount] = useState("25");
  const [monthly, setMonthly] = useState(false);
  const [pending, setPending] = useState(false);

  const numeric = Number.parseFloat(amount);
  const valid = Number.isFinite(numeric) && numeric >= 1;

  function handleCheckout() {
    // Wire to a Stripe Checkout Session API route (e.g. /api/checkout) when keys are available.
    setPending(true);
    setTimeout(() => setPending(false), 1200);
  }

  return (
    <div className="card h-full border-star-green/20 bg-emerald-50/40">
      <div className="flex items-center gap-3">
        <span className="rounded-2xl bg-star-green p-3 text-white">
          <Globe2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-extrabold">International Donors</h3>
          <p className="text-sm text-slate-600">Visa, Mastercard, Amex — secured by Stripe.</p>
        </div>
      </div>

      <div className="mt-6 flex rounded-full bg-white p-1 ring-1 ring-slate-200">
        {(["once", "monthly"] as const).map((mode) => {
          const selected = monthly === (mode === "monthly");
          return (
            <button
              key={mode}
              type="button"
              onClick={() => setMonthly(mode === "monthly")}
              aria-pressed={selected}
              className={`flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
                selected ? "bg-star-green text-white" : "text-slate-600 hover:bg-emerald-50"
              }`}
            >
              {mode === "once" ? "Give once" : "Give monthly"}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <label htmlFor="intl-amount" className="mb-1 block text-sm font-semibold text-slate-700">
            Amount
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
              {symbols[currency]}
            </span>
            <input
              id="intl-amount"
              type="number"
              inputMode="decimal"
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input pl-10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="intl-currency" className="mb-1 block text-sm font-semibold text-slate-700">
            Currency
          </label>
          <select
            id="intl-currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value as Currency)}
            className="input"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setAmount(String(p))}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
              Number(amount) === p ? "bg-star-green text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-emerald-100"
            }`}
          >
            {symbols[currency]}
            {p}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={!valid || pending}
        className="btn mt-6 w-full bg-[#635BFF] text-white shadow-soft hover:bg-[#5147e5] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <CreditCard className="h-4 w-4" aria-hidden="true" />
        {pending
          ? "Redirecting to secure checkout…"
          : `Donate ${symbols[currency]}${valid ? numeric.toLocaleString() : "—"}${monthly ? " / month" : ""} with Stripe`}
      </button>

      <ul className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
        <li className="flex items-center gap-1">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" /> 256-bit encrypted
        </li>
        <li className="flex items-center gap-1">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Card details never touch our servers
        </li>
      </ul>
      <p className="mt-3 text-center text-xs text-slate-500">
        You will receive an email receipt. Donations may be tax-deductible depending on your country.
      </p>
    </div>
  );
}
