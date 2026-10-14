import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "ravi",
      database: process.env.DB_NAME || "portfolio_db",
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
