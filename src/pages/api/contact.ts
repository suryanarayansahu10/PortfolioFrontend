import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;
  const referenceId = `NX-${Date.now().toString().slice(-6)}`;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_CONTATCT_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_CONTATCT_EMAIL_PASS,
      },
    });

    // Send notification to you
    await transporter.sendMail({
      from: `"NexChunk" <${process.env.NEXT_PUBLIC_CONTATCT_EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_CONTATCT_EMAIL_USER,
      subject: "New NexChunk Inquiry",
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Auto reply
    await transporter.sendMail({
      from: `"NexChunk" <${process.env.NEXT_PUBLIC_CONTATCT_EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry — NexChunk",
      html: `
<div style="font-family: Arial, sans-serif; background:#f4f6f9; padding:40px 20px;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06);">

    <!-- Gradient Header -->
    <div style="background: linear-gradient(135deg, #0E2240 0%, #1E3A8A 100%);
                padding:30px 20px;
                text-align:center;">
      <img src="https://nexchunk.com/logo-email.png"
           alt="NexChunk"
           style="height:42px;margin-bottom:12px;" />
      <h2 style="color:#ffffff;margin:0;font-weight:500;">
        NexChunk
      </h2>
      <p style="color:#dbeafe;margin:6px 0 0;font-size:13px;">
        Engineering enterprise-grade data platforms, automation systems & scalable web applications.
      </p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <p style="font-size:16px;color:#111827;">Hi ${name},</p>

      <p style="font-size:15px;color:#4b5563;line-height:1.6;">
        Thank you for contacting NexChunk.
      </p>

      <p style="font-size:15px;color:#4b5563;line-height:1.6;">
        Your inquiry has been successfully received and logged under:
      </p>

      <!-- Reference Box -->
      <div style="background:#f1f5f9;
                  border-radius:8px;
                  padding:12px 16px;
                  font-size:14px;
                  font-weight:600;
                  color:#0E2240;
                  display:inline-block;
                  margin:10px 0 20px;">
        Reference ID: ${referenceId}
      </div>

      <p style="font-size:15px;color:#4b5563;line-height:1.6;">
        Our team will review your message and respond within
        <strong>24 business hours</strong>.
      </p>

      <!-- CTA -->
      <div style="margin:30px 0;text-align:center;">
        <a href="https://nexchunk.com"
           style="background:#3B82F6;
                  color:#ffffff;
                  padding:12px 28px;
                  border-radius:6px;
                  text-decoration:none;
                  font-size:14px;
                  display:inline-block;">
          Visit NexChunk
        </a>
      </div>

      <p style="font-size:14px;color:#6b7280;">
        If your request is time-sensitive, you may reply directly to this email.
      </p>

      <p style="font-size:14px;color:#111827;margin-top:30px;">
        Regards,<br/>
        <strong>NexChunk Team</strong>
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;
                padding:18px;
                text-align:center;
                font-size:12px;
                color:#6b7280;">
      © ${new Date().getFullYear()} NexChunk. All rights reserved.<br/>
      <a href="https://www.linkedin.com/company/nexchunk"
         style="color:#3B82F6;text-decoration:none;">
         Connect on LinkedIn
      </a>
    </div>

  </div>
</div>
`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email failed to send" });
  }
}
