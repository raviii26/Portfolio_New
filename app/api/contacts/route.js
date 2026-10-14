import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const dynamic = "force-dynamic"; // Prevent caching so we always get fresh contacts

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "ravi",
      database: process.env.DB_NAME || "portfolio_db",
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
