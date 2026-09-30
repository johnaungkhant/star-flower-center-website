"use client";

import { useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import generatePayload from "promptpay-qr";
import { QrCode, Smartphone } from "lucide-react";
import { site } from "@/lib/site";

const presets = [100, 300, 500, 1000, 2000];

export default function PromptPayDonation() {
  const [amount, setAmount] = useState<string>("500");

  const numeric = Number.parseFloat(amount);
  const valid = Number.isFinite(numeric) && numeric > 0;

  const payload = useMemo(() => {
    if (!valid) return generatePayload(site.promptPayId);
    return generatePayload(site.promptPayId, { amount: Math.round(numeric * 100) / 100 });
  }, [numeric, valid]);

  return (
    <div className="card h-full border-star-blue/20 bg-blue-50/40">
      <div className="flex items-center gap-3">
        <span className="rounded-2xl bg-star-blue p-3 text-white">
          <Smartphone className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-extrabold">Thai Donors — PromptPay</h3>
          <p className="text-sm text-slate-600">Scan with any Thai banking app. No fees, instant.</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pp-amount" className="mb-1 block text-sm font-semibold text-slate-700">
            Amount (THB)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
              ฿
            </span>
            <input
              id="pp-amount"
              type="number"
              inputMode="decimal"
              min={1}
              step="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input pl-9"
              placeholder="Enter amount"
              aria-describedby="pp-help"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setAmount(String(p))}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  Number(amount) === p
                    ? "bg-star-blue text-white"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-blue-100"
                }`}
              >
                ฿{p.toLocaleString()}
              </button>
            ))}
          </div>
          <p id="pp-help" className="mt-4 text-xs leading-relaxed text-slate-500">
            ฿300 funds one hour of speech therapy. ฿1,000 covers a week of nutritious lunches for one child.
            Leave the amount blank to enter it in your banking app instead.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="rounded-3xl bg-white p-4 shadow-soft ring-1 ring-slate-100">
            <QRCodeSVG
              value={payload}
              size={196}
              level="M"
              fgColor="#0f172a"
              title={`PromptPay QR code${valid ? ` for ${numeric.toLocaleString()} baht` : ""}`}
            />
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-sm font-bold text-slate-800">
            <QrCode className="h-4 w-4 text-star-blue" aria-hidden="true" />
            {valid ? `฿${numeric.toLocaleString("th-TH", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}` : "Any amount"}
          </p>
          <p className="text-xs text-slate-500">Star Flower Centre · PromptPay</p>
        </div>
      </div>
    </div>
  );
}
