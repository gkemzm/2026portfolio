import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ ok: false }, { status: 400 });
  }

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: process.env.MAIL_TO!,
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
}
