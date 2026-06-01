"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  packageInterest: string;
  currentWebsite: string;
  hasDomain: string;
  launchTimeline: string;
  projectDetails: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  packageInterest: "",
  currentWebsite: "",
  hasDomain: "",
  launchTimeline: "",
  projectDetails: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  function updateField(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData(initialFormState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl md:p-8"
    >
      <div className="mb-8">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
          Project Intake
        </p>

        <h2 className="mt-3 text-3xl font-black text-slate-950">
          Tell us about your website project.
        </h2>

        <p className="mt-3 text-slate-600">
          Choose the package that fits your business best. If you are unsure,
          select “Not Sure Yet.”
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-bold text-slate-700" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            placeholder="Optional"
          />
        </div>

        <div>
          <label
            className="text-sm font-bold text-slate-700"
            htmlFor="businessName"
          >
            Business Name *
          </label>
          <input
            id="businessName"
            name="businessName"
            required
            value={formData.businessName}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            placeholder="Business name"
          />
        </div>

        <div>
          <label
            className="text-sm font-bold text-slate-700"
            htmlFor="packageInterest"
          >
            Package Interested In *
          </label>
          <select
            id="packageInterest"
            name="packageInterest"
            required
            value={formData.packageInterest}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">Select a package</option>
            <option value="Website Launch Package — $250">
              Website Launch Package — $250
            </option>
            <option value="Starter Website — $499+">
              Starter Website — $499+
            </option>
            <option value="Business Website — $999+">
              Business Website — $999+
            </option>
            <option value="Ecommerce Website — Custom">
              Ecommerce Website — Custom
            </option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        <div>
          <label
            className="text-sm font-bold text-slate-700"
            htmlFor="currentWebsite"
          >
            Current Website
          </label>
          <input
            id="currentWebsite"
            name="currentWebsite"
            value={formData.currentWebsite}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
            placeholder="Optional"
          />
        </div>

        <div>
          <label
            className="text-sm font-bold text-slate-700"
            htmlFor="hasDomain"
          >
            Do you already have a domain? *
          </label>
          <select
            id="hasDomain"
            name="hasDomain"
            required
            value={formData.hasDomain}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">Select one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        <div>
          <label
            className="text-sm font-bold text-slate-700"
            htmlFor="launchTimeline"
          >
            When are you trying to launch? *
          </label>
          <select
            id="launchTimeline"
            name="launchTimeline"
            required
            value={formData.launchTimeline}
            onChange={updateField}
            className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">Select timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="Within 30 Days">Within 30 Days</option>
            <option value="1–3 Months">1–3 Months</option>
            <option value="Just Exploring">Just Exploring</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          className="text-sm font-bold text-slate-700"
          htmlFor="projectDetails"
        >
          Project Details *
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          required
          rows={6}
          value={formData.projectDetails}
          onChange={updateField}
          className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          placeholder="Tell us what you need, what your business does, and what pages or features you want."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 w-full rounded-full bg-sky-400 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Submit Website Request"}
      </button>

      <p className="mt-4 text-center text-sm text-slate-500">
        Average response time: within 24 hours. Projects start with a 50%
        deposit.
      </p>

      {status === "success" && (
        <div className="mt-5 rounded-2xl bg-green-50 p-4 text-center font-bold text-green-700">
          Your request was sent successfully.
        </div>
      )}

      {status === "error" && (
        <div className="mt-5 rounded-2xl bg-red-50 p-4 text-center font-bold text-red-700">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}