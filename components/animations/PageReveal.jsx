"use client";
import { useEffect, useState } from "react";

export default function PageReveal({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleDone = () => setVisible(true);
    window.addEventListener("preloader-done", handleDone);
    return () => window.removeEventListener("preloader-done", handleDone);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
}
