import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please ensure all required fields (Name, Email, and Message) are completed correctly.",
        },
        { status: 400 },
      );
    }

    let dbSaved = false;

    // 1. Save data to MySQL database
    try {
      // Connect using environment variables
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "ravi",
        database: process.env.DB_NAME || "portfolio_db",
      });

      const sql =
        "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
      await connection.execute(sql, [
        name,
        email,
        subject || "No Subject Provided",
        message,
      ]);
      await connection.end();
      dbSaved = true;
    } catch (dbError) {
      console.error("Database insertion failed:", dbError);
      // We continue even if DB fails so we can try to send the email
    }

    // 2. Try to send email if configured
    let emailSent = false;
    if (
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS &&
      process.env.EMAIL_USER !== "your-email@gmail.com"
    ) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          replyTo: email,
          subject: subject
            ? `New Contact: ${subject}`
            : `New Contact from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
                        <h3>New Contact Request</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message.replace(/\n/g, "<br>")}</p>
                    `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
      }
    }

    if (dbSaved) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Thank you for reaching out! Your message has been successfully received, and I will get back to you shortly.",
        },
        { status: 200 },
      );
    } else {
      if (emailSent) {
        return NextResponse.json(
          {
            success: true,
            message:
              "Thank you for reaching out! Your message has been successfully sent.",
          },
          { status: 200 },
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            message:
              "We encountered a technical issue saving your message. Please try again later.",
          },
          { status: 500 },
        );
      }
    }
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred while processing your request. Please try again.",
      },
      { status: 500 },
    );
  }
}
