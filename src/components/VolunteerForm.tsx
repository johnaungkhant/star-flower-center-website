"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function VolunteerForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Connect to an email/CRM API route when ready.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card flex flex-col items-center gap-3 text-center" role="status">
        <CheckCircle2 className="h-10 w-10 text-star-green" aria-hidden="true" />
        <h3 className="text-lg font-bold">Thank you for offering your time</h3>
        <p className="text-sm text-slate-600">
          Our volunteer coordinator will be in touch within a few days to arrange a visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="v-name" className="mb-1 block text-sm font-semibold text-slate-700">
            Full name
          </label>
          <input id="v-name" name="name" required className="input" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="v-email" className="mb-1 block text-sm font-semibold text-slate-700">
            Email
          </label>
          <input id="v-email" name="email" type="email" required className="input" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor="v-role" className="mb-1 block text-sm font-semibold text-slate-700">
          How would you like to help?
        </label>
        <select id="v-role" name="role" className="input" defaultValue="classroom">
          <option value="classroom">Classroom assistant</option>
          <option value="therapy">Therapy support (qualified)</option>
          <option value="sign">Sign language interpreter</option>
          <option value="arts">Art, music or crafts</option>
          <option value="events">Events & fundraising</option>
          <option value="other">Other skills</option>
        </select>
      </div>
      <div>
        <label htmlFor="v-message" className="mb-1 block text-sm font-semibold text-slate-700">
          Tell us a little about yourself
        </label>
        <textarea
          id="v-message"
          name="message"
          rows={4}
          className="input"
          placeholder="Your experience, availability, and why you'd like to join us"
        />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send application
      </button>
    </form>
  );
}
