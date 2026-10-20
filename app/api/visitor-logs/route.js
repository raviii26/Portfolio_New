import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const isVercel = process.env.VERCEL === "1" || process.env.NEXT_PUBLIC_VERCEL_ENV;
    const dbHost = process.env.DB_HOST || "localhost";

    if (isVercel && (dbHost === "localhost" || dbHost === "127.0.0.1")) {
      return NextResponse.json({
        success: true,
        logs: [],
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
      "SELECT * FROM visitor_logs ORDER BY visited_at DESC LIMIT 500",
    );
    await connection.end();

    return NextResponse.json({ success: true, logs: rows });
  } catch (error) {
    console.error("Error fetching visitor logs:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch visitor logs from database.",
      },
      { status: 500 },
    );
  }
}
