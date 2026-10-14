"use client";
import { useEffect } from "react";

export default function VisitorTracker() {
  useEffect(() => {
    // Only log once per session to avoid duplicate entries on re-renders
    if (sessionStorage.getItem("visit_logged")) return;
    sessionStorage.setItem("visit_logged", "true");

    fetch("/api/log-visit", { method: "POST" }).catch(() => {
      // Silent fail — visitor logging should never break the site
    });
  }, []);

  return null;
}
