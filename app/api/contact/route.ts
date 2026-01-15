import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.MAIL_TO;

    if (!apiKey) {
      return Response.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }
    if (!to) {
      return Response.json(
        { ok: false, error: "Missing MAIL_TO" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Portfolio] ${name}님이 메시지를 보냈습니다`,
      html: `
        <h3>새 연락</h3>
        <p><b>Name</b>: ${name}</p>
        <p><b>Email</b>: ${email}</p>
        <pre>${message}</pre>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
