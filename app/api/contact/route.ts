import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';
const TO = process.env.CONTACT_TO_EMAIL ?? 'mznhmbro@gmail.com';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required.' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: `New message from ${name || 'Anonymous'} via portfolio`,
      text: `Name: ${name || '—'}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
