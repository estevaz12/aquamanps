import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  // get form data from request body
  const { firstname, lastname, email, message } = request.body;
  console.log('Form data:', request.body.firstname);

  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Contact Form" ${process.env.GMAIL_USER}`,
      to: process.env.GMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `Name: ${firstname} ${lastname}
      Email:${email}
      Message:${message}`,
    });

    return NextResponse.json({ status: 'success', message: 'Sent' });
  } catch (error) {
    // return error response
    return NextResponse.json(
      { status: 'error', message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
