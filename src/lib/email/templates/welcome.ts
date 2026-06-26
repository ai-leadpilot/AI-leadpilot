const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.machmiles.com";

export function welcomeEmailTemplate(name: string) {
  const pricingUrl = `${APP_URL}/pricing`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to LeadPilot AI</title>
</head>
<body style="margin:0;padding:0;background-color:#0f172a;font-family:'Segoe UI',Arial,sans-serif;color:#e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0f172a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#1e293b;border-radius:16px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e40af,#3b82f6);padding:40px 40px 32px;text-align:center;">
              <p style="margin:0 0 12px;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">
                ⚡ LeadPilot AI
              </p>
              <p style="margin:0;font-size:16px;color:#bfdbfe;">
                Welcome aboard, ${name}!
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#cbd5e1;">
                Hi <strong style="color:#ffffff;">${name}</strong>,
              </p>
              <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#cbd5e1;">
                You're now part of LeadPilot AI — the platform that uses AI to find, qualify, and engage your ideal leads automatically.
              </p>
              <p style="margin:0 0 32px;font-size:16px;line-height:1.7;color:#cbd5e1;">
                You're currently on the <strong style="color:#ffffff;">Free plan</strong>. Upgrade to unlock unlimited leads, AI auto-apply, automated outreach, and much more.
              </p>

              <!-- Upgrade CTA -->
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom:32px;">
                    <a
                      href="${pricingUrl}"
                      style="display:inline-block;background-color:#2563eb;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:14px 40px;border-radius:10px;letter-spacing:0.3px;"
                    >
                      Upgrade your plan →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Features -->
              <table cellpadding="0" cellspacing="0" width="100%" style="background-color:#0f172a;border-radius:12px;padding:24px;margin-bottom:32px;">
                <tr><td style="padding-bottom:12px;font-size:14px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;">What you get with Pro</td></tr>
                <tr><td style="padding:6px 0;font-size:15px;color:#e2e8f0;">✅ &nbsp;Unlimited leads &amp; campaigns</td></tr>
                <tr><td style="padding:6px 0;font-size:15px;color:#e2e8f0;">✅ &nbsp;AI auto-apply to job leads</td></tr>
                <tr><td style="padding:6px 0;font-size:15px;color:#e2e8f0;">✅ &nbsp;Personalised outreach sequences</td></tr>
                <tr><td style="padding:6px 0;font-size:15px;color:#e2e8f0;">✅ &nbsp;Advanced analytics dashboard</td></tr>
                <tr><td style="padding:6px 0;font-size:15px;color:#e2e8f0;">✅ &nbsp;2,000 AI credits per month</td></tr>
              </table>

              <p style="margin:0;font-size:15px;color:#94a3b8;">
                Questions? Just reply to this email — we&apos;re here to help.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #334155;text-align:center;">
              <p style="margin:0 0 8px;font-size:13px;color:#64748b;">
                LeadPilot AI · All rights reserved
              </p>
              <p style="margin:0;font-size:13px;color:#64748b;">
                <a href="${pricingUrl}" style="color:#3b82f6;text-decoration:none;">View pricing</a>
                &nbsp;·&nbsp;
                <a href="${APP_URL}/dashboard" style="color:#3b82f6;text-decoration:none;">Go to dashboard</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  const text = `
Welcome to LeadPilot AI, ${name}!

You're now on the Free plan. Upgrade to unlock unlimited leads, AI auto-apply, and more.

Upgrade your plan: ${pricingUrl}

What you get with Pro:
- Unlimited leads & campaigns
- AI auto-apply to job leads
- Personalised outreach sequences
- Advanced analytics dashboard
- 2,000 AI credits per month

Questions? Reply to this email — we're here to help.
`;

  return {
    subject: "Welcome to LeadPilot AI 🚀",
    html,
    text,
  };
}
