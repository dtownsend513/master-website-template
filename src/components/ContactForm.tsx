"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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

const initialState: FormState = {
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
  const searchParams = useSearchParams();

  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">(
      "idle"
    );

  const [formData, setFormData] =
    useState<FormState>(initialState);

  useEffect(() => {
    const selected =
      searchParams.get("package");

    if (!selected) return;

    const packages: Record<string, string> = {
      launch:
        "Website Launch Package — $250",

      starter:
        "Starter Website — $499+",

      business:
        "Business Website — $999+",

      ecommerce:
        "Ecommerce Website — Custom",
    };

    setFormData((prev) => ({
      ...prev,
      packageInterest:
        packages[selected] || "",
    }));
  }, [searchParams]);

  function update(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  }

  async function submit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      setStatus("loading");

      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              formData
            ),
          }
        );

      if (!response.ok) {
        throw new Error();
      }

      setStatus("success");

      setFormData(
        initialState
      );
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] bg-white p-8 shadow-2xl"
    >
      <div className="mb-10">

        <p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">
          Website Project Intake
        </p>

        <h2 className="mt-3 text-4xl font-black text-slate-950">
          Tell us about your project.
        </h2>

        <p className="mt-4 text-slate-600">
          Pick a package and
          we’ll guide the rest.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <Input
          label="Name"
          name="name"
          value={formData.name}
          onChange={update}
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={update}
          required
        />

        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={update}
        />

        <Input
          label="Business Name"
          name="businessName"
          value={
            formData.businessName
          }
          onChange={update}
          required
        />

      </div>

      <Select
        label="Package Interested In"
        name="packageInterest"
        value={
          formData.packageInterest
        }
        onChange={update}
        required
        options={[
          "",
          "Website Launch Package — $250",
          "Starter Website — $499+",
          "Business Website — $999+",
          "Ecommerce Website — Custom",
          "Not Sure Yet",
        ]}
      />

      <Input
        label="Current Website"
        name="currentWebsite"
        value={
          formData.currentWebsite
        }
        onChange={update}
      />

      <div className="grid gap-5 md:grid-cols-2">

        <Select
          label="Already Have Domain?"
          name="hasDomain"
          value={
            formData.hasDomain
          }
          onChange={update}
          required
          options={[
            "",
            "Yes",
            "No",
            "Not Sure",
          ]}
        />

        <Select
          label="Launch Timeline"
          name="launchTimeline"
          value={
            formData.launchTimeline
          }
          onChange={update}
          required
          options={[
            "",
            "ASAP",
            "Within 30 Days",
            "1–3 Months",
            "Just Exploring",
          ]}
        />

      </div>

      <div className="mt-6">

        <label className="mb-2 block text-sm font-black text-slate-700">
          Project Details
        </label>

        <textarea
          name="projectDetails"
          required
          rows={6}
          value={
            formData.projectDetails
          }
          onChange={update}
          className="w-full rounded-3xl border border-slate-300 px-5 py-4 text-slate-950"
        />

      </div>

      <button
        type="submit"
        disabled={
          status === "loading"
        }
        className="mt-8 w-full rounded-full bg-sky-400 px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-slate-950"
      >
        {status ===
        "loading"
          ? "Submitting..."
          : "Submit Website Request"}
      </button>

      <p className="mt-4 text-center text-sm text-slate-500">
        Average response:
        within 24 hours •
        50% deposit to begin
      </p>

      {status ===
        "success" && (
        <div className="mt-5 rounded-3xl bg-green-100 p-5 text-center font-bold text-green-700">
          Request submitted.
        </div>
      )}

      {status ===
        "error" && (
        <div className="mt-5 rounded-3xl bg-red-100 p-5 text-center font-bold text-red-700">
          Submission failed.
        </div>
      )}
    </form>
  );
}

function Input({
  label,
  ...props
}: any) {
  return (
    <div className="mt-5">

      <label className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-3xl border border-slate-300 px-5 py-4 text-slate-950"
      />

    </div>
  );
}

function Select({
  label,
  options,
  ...props
}: any) {
  return (
    <div className="mt-5">

      <label className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </label>

      <select
        {...props}
        className="w-full rounded-3xl border border-slate-300 px-5 py-4 text-slate-950"
      >
        {options.map(
          (
            option: string
          ) => (
            <option
              key={option}
              value={option}
            >
              {option ||
                "Select"}
            </option>
          )
        )}
      </select>

    </div>
  );
}