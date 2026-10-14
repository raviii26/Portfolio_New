import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export const dynamic = "force-dynamic";

/**
 * Parse User-Agent string into { browser, os, device }
 */
function parseUserAgent(ua = "") {
  let browser = "Unknown";
  let os = "Unknown";
  let device = "Desktop";

  // --- Browser ---
  if (/Edg\//i.test(ua)) browser = "Edge";
  else if (/OPR\//i.test(ua) || /Opera/i.test(ua)) browser = "Opera";
  else if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) browser = "Chrome";
  else if (/Firefox\//i.test(ua)) browser = "Firefox";
  else if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) browser = "Safari";
  else if (/MSIE|Trident/i.test(ua)) browser = "Internet Explorer";

  // --- OS ---
  if (/Windows NT 10/i.test(ua)) os = "Windows 10/11";
  else if (/Windows NT 6\.3/i.test(ua)) os = "Windows 8.1";
  else if (/Windows NT 6\.1/i.test(ua)) os = "Windows 7";
  else if (/Windows/i.test(ua)) os = "Windows";
  else if (/Macintosh|Mac OS X/i.test(ua)) os = "macOS";
  else if (/Android/i.test(ua)) os = "Android";
  else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";
  else if (/Linux/i.test(ua)) os = "Linux";

  // --- Device ---
  if (/Mobi|Android|iPhone|iPod/i.test(ua)) device = "Mobile";
  else if (/iPad|Tablet/i.test(ua)) device = "Tablet";

  return { browser, os, device };
}

export async function POST(request) {
  try {
    // Get real IP (handles proxies / Vercel / Nginx)
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded
      ? forwarded.split(",")[0].trim()
      : request.headers.get("x-real-ip") || "127.0.0.1";

    const ua = request.headers.get("user-agent") || "";
    const { browser, os, device } = parseUserAgent(ua);

    // Geo-locate IP (skip for localhost)
    let country = "Unknown";
    let city = "Unknown";

    const isLocal =
      ip === "127.0.0.1" ||
      ip === "::1" ||
      ip.startsWith("192.168") ||
      ip.startsWith("10.");
    if (!isLocal) {
      try {
        const geo = await fetch(
          `http://ip-api.com/json/${ip}?fields=country,city,status`,
          {
            signal: AbortSignal.timeout(3000),
          },
        );
        const geoData = await geo.json();
        if (geoData.status === "success") {
          country = geoData.country || "Unknown";
          city = geoData.city || "Unknown";
        }
      } catch {
        // Geo lookup failed — proceed without it
      }
    } else {
      country = "Localhost";
      city = "Localhost";
    }

    // Save to MySQL
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "ravi",
      database: process.env.DB_NAME || "portfolio_db",
    });

    await connection.execute(
      "INSERT INTO visitor_logs (ip, country, city, browser, os, device, user_agent) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [ip, country, city, browser, os, device, ua.slice(0, 500)],
    );
    await connection.end();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor log error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
