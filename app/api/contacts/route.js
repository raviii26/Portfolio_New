import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const dynamic = "force-dynamic"; // Prevent caching so we always get fresh contacts

export async function GET() {
  try {
    const isVercel = process.env.VERCEL === "1" || process.env.NEXT_PUBLIC_VERCEL_ENV;
    const dbHost = process.env.DB_HOST || "localhost";

    if (isVercel && (dbHost === "localhost" || dbHost === "127.0.0.1")) {
      return NextResponse.json({
        success: true,
        contacts: [],
        notice: "MySQL database is not configured. Set DB_HOST in Vercel environment variables.",
      });
    }

    const connection = await mysql.createConnection({
      host: dbHost,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "ravi",
      database: process.env.DB_NAME || "portfolio_db",
      connectTimeout: 3000,
    });

    const [rows] = await connection.execute(
      "SELECT * FROM contacts ORDER BY created_at DESC",
    );
    await connection.end();

    return NextResponse.json({ success: true, contacts: rows });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch contacts from database." },
      { status: 500 },
    );
  }
}
