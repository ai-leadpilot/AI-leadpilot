import { welcomeEmailTemplate } from "./templates/welcome";

export interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
}

/**
 * Send an email via the configured provider.
 * Swap the fetch call body for Resend, SendGrid, or any other provider.
 */
export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM ?? "LeadPilot AI <noreply@machmiles.com>";

  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — email not sent:", options.subject);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`[email] Failed to send (${res.status}): ${body}`);
  }
}

export async function sendWelcomeEmail(to: string, name: string): Promise<void> {
  const template = welcomeEmailTemplate(name);
  await sendEmail({ to, ...template });
}
