import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(value: unknown) {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const businessName = clean(body.businessName);
    const packageInterest = clean(body.packageInterest);
    const currentWebsite = clean(body.currentWebsite);
    const hasDomain = clean(body.hasDomain);
    const launchTimeline = clean(body.launchTimeline);
    const projectDetails = clean(body.projectDetails);

    if (
      !name ||
      !email ||
      !businessName ||
      !packageInterest ||
      !hasDomain ||
      !launchTimeline ||
      !projectDetails
    ) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Townsend & Townsend <onboarding@resend.dev>",
      to: "dtownsend513@gmail.com",
      replyTo: email,
      subject: `New Website Lead: ${businessName} — ${packageInterest}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Website Lead</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Package Interested In:</strong> ${packageInterest}</p>
          <p><strong>Current Website:</strong> ${
            currentWebsite || "Not provided"
          }</p>
          <p><strong>Has Domain:</strong> ${hasDomain}</p>
          <p><strong>Launch Timeline:</strong> ${launchTimeline}</p>

          <h3>Project Details</h3>
          <p>${projectDetails.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Townsend & Townsend <onboarding@resend.dev>",
      to: email,
      subject: "We received your website request",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>We received your website request</h2>

          <p>Thanks for reaching out, ${name}.</p>

          <p>
            We received your project details and will review your request.
          </p>

          <p>If the project is a good fit, the next step will be:</p>

          <ul>
            <li>Review your business goals</li>
            <li>Recommend the best website package</li>
            <li>Confirm project scope</li>
            <li>Collect the 50% deposit</li>
            <li>Begin the website build</li>
          </ul>

          <p>
            Package selected: <strong>${packageInterest}</strong>
          </p>

          <p>
            — Townsend & Townsend
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}