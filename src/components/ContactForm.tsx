"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const subjects = [
  "Enrolling my child",
  "Volunteering",
  "Donations & sponsorship",
  "Partnerships / CSR",
  "Media enquiry",
  "Something else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Connect to an email service or API route (e.g. Resend, Formspree) when ready.
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="card flex flex-col items-center py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-star-green" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-extrabold">Thank you{name ? `, ${name}` : ""}.</h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Your message has reached our office. A member of our team will reply within two working days — sooner if it concerns a
          child&apos;s wellbeing.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn btn-outline mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1 block text-sm font-semibold text-slate-700">
            Name
          </label>
          <input
            id="c-name"
            name="name"
            required
            autoComplete="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input id="c-email" name="email" type="email" required autoComplete="email" className="input" />
        </div>
      </div>

      <div>
        <label htmlFor="c-subject" className="mb-1 block text-sm font-semibold text-slate-700">
          Subject
        </label>
        <select id="c-subject" name="subject" required className="input" defaultValue="">
          <option value="" disabled>
            Choose a topic
          </option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1 block text-sm font-semibold text-slate-700">
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={6}
          className="input resize-y"
          placeholder="Tell us a little about how we can help. If you are a parent, feel free to share your child's age and needs."
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">We treat every message with care and confidentiality.</p>
        <button type="submit" className="btn btn-primary">
          <Send className="h-4 w-4" aria-hidden="true" /> Send message
        </button>
      </div>
    </form>
  );
}
