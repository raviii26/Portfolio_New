"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Contact() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // Professional Validation
    const newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!message) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setResult(""); // clear any success/sending messages
      return;
    }

    setErrors({});
    setResult("Sending your message...");

    const data = { name, email, subject, message };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        setResult(res.message);
        event.target.reset();
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        });
      } else {
        setResult(
          res.message ||
            "An unexpected issue occurred. Please try again later.",
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult(
        "We are currently experiencing network issues. Please try again later or contact me directly via email.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-[5%] md:px-[10%] py-24 bg-white dark:bg-black transition-colors duration-500 relative overflow-hidden"
    >
      {/* Ambient Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#b820e6]/5 to-transparent rounded-full blur-[100px] pointer-events-none hidden md:block dark:hidden"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#da7d20]/5 to-transparent rounded-full blur-[100px] pointer-events-none hidden md:block dark:hidden"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center w-full mb-16 lg:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-300 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20]"></span>
            Connect with me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6"
          >
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
              Touch
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-2xl mx-auto font-Outfit text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base"
          >
            I&apos;d love to hear from you! Whether you have a question, a
            project idea, or just want to say hi, feel free to drop a message
            below.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 relative z-10">
          {/* Left Side: Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full lg:w-5/12 flex flex-col"
          >
            <h3 className="text-3xl lg:text-4xl font-bold font-Ovo text-zinc-900 dark:text-white mb-6 leading-tight">
              Let&apos;s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
                amazing
              </span>{" "}
              together.
            </h3>
            <p className="font-Outfit text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed text-base">
              I&apos;m currently available for freelance projects and full-time
              roles. If you&apos;re looking for a developer to bring your ideas to
              life, I&apos;m just a message away.
            </p>

            <div className="flex flex-col gap-8 font-Outfit">
              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#b820e6]/50 group-hover:bg-[#b820e6]/5 transition-all duration-300 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-[#b820e6] transition-colors"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:sharmaravii70415@gmail.com"
                    className="text-lg font-semibold text-zinc-900 dark:text-white hover:text-[#b820e6] transition-colors"
                  >
                    sharmaravii70415@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#da7d20]/50 group-hover:bg-[#da7d20]/5 transition-all duration-300 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-[#da7d20] transition-colors"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+917041553195"
                    className="text-lg font-semibold text-zinc-900 dark:text-white hover:text-[#da7d20] transition-colors"
                  >
                    +91 70415 53195
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#b820e6]/50 group-hover:bg-[#b820e6]/5 transition-all duration-300 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-[#b820e6] transition-colors"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">
                    Location
                  </h4>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Navsari, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <form
              onSubmit={onSubmit}
              noValidate
              className="p-8 md:p-10 rounded-3xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-2xl backdrop-blur-md relative font-Outfit"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-black/40 border ${errors.name ? "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-white/10 focus:border-[#b820e6] dark:focus:border-[#b820e6] focus:ring-[#b820e6]"} focus:ring-1 outline-none transition-all duration-300 text-zinc-900 dark:text-white placeholder:text-zinc-400 shadow-inner`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-black/40 border ${errors.email ? "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-white/10 focus:border-[#da7d20] dark:focus:border-[#da7d20] focus:ring-[#da7d20]"} focus:ring-1 outline-none transition-all duration-300 text-zinc-900 dark:text-white placeholder:text-zinc-400 shadow-inner`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Freelance Project Inquiry"
                  className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-black/40 border border-zinc-200 dark:border-white/10 focus:border-[#b820e6] dark:focus:border-[#b820e6] focus:ring-1 focus:ring-[#b820e6] outline-none transition-all duration-300 text-zinc-900 dark:text-white placeholder:text-zinc-400 shadow-inner"
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-4 rounded-xl bg-white dark:bg-black/40 border ${errors.message ? "border-red-400 dark:border-red-500 focus:border-red-500 focus:ring-red-500" : "border-zinc-200 dark:border-white/10 focus:border-[#b820e6] dark:focus:border-[#b820e6] focus:ring-[#b820e6]"} focus:ring-1 outline-none transition-all duration-300 text-zinc-900 dark:text-white placeholder:text-zinc-400 resize-none shadow-inner`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white font-bold tracking-wider flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-[#b820e6]/25 group uppercase text-sm"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              {/* Result Message */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-6 p-4 rounded-lg text-sm font-semibold text-center border ${result.includes("successfully") || result.includes("Thank you") ? "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-500/20" : "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20"}`}
                >
                  {result}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
