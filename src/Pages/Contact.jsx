import React, { useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import Swal from "sweetalert2";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/portfolioData";
import SectionTransition from "../components/SectionTransition";

const quickLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/Manish1671",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/manish-tiwari-1671",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while your message is being sent.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New portfolio message from website",
          _captcha: "false",
          _template: "table",
        }),
      });

      if (res.ok) {
        Swal.fire({
          title: "Message Sent!",
          text: "Thanks for reaching out — I'll get back to you soon.",
          icon: "success",
          confirmButtonColor: "#6366f1",
          timer: 2500,
          timerProgressBar: true,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please email me directly at " + profile.email,
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionTransition
      id="Contact"
      className="px-[5%] lg:px-[10%] py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
              <MessageSquare className="h-4 w-4" />
              Contact
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Let&apos;s build something thoughtful and useful together.
            </h2>
          </div>
          <p className="text-sm leading-7 text-slate-400 md:text-base lg:pl-12">
            I&apos;m open to internships, collaborations, and project
            discussions around web development, data analytics, and practical
            software products.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,18,42,0.92),rgba(6,8,24,0.94))] p-7 shadow-[0_24px_80px_rgba(5,8,24,0.5)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_28%)]" />
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.22em] text-violet-200/80">
                  Quick Reach
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Prefer direct contact?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  You can reach me directly through email, phone, GitHub, or
                  LinkedIn. I usually respond fastest to email and LinkedIn.
                </p>

                <div className="mt-8 grid gap-4">
                  {quickLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.08]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 text-violet-200">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-slate-400">{item.label}</p>
                        <p className="truncate text-sm font-medium text-white md:text-base">
                          {item.value}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-500 transition-colors group-hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3 text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.08]">
                  <MapPin className="h-5 w-5 text-violet-300" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-medium">India</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-400">
                Available for remote work, learning-focused teams, and projects
                where design clarity and engineering quality both matter.
              </p>
            </div>

            <SocialLinks />
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(14,18,44,0.92),rgba(6,8,24,0.96))] p-7 shadow-[0_24px_80px_rgba(5,8,24,0.5)] md:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.16),transparent_30%)]" />
            <div className="relative z-10">
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-violet-200/80">
                    Send a Message
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    Start the conversation
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                    If you have an internship opportunity, a collaboration idea,
                    or a project in mind, send a short message and I&apos;ll get
                    back to you.
                  </p>
                </div>
                <div className="hidden h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-200 md:flex">
                  <Send className="h-5 w-5" />
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-300">
                      Your Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-violet-400/40 focus:bg-white/[0.08] disabled:opacity-50"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm text-slate-300">
                      Your Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-violet-400/40 focus:bg-white/[0.08] disabled:opacity-50"
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">
                    Message
                  </span>
                  <textarea
                    name="message"
                    placeholder="Tell me about the opportunity, project, or idea."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="h-48 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-violet-400/40 focus:bg-white/[0.08] disabled:opacity-50"
                    required
                  />
                </label>

                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-slate-400">
                    Prefer email? Reach me directly at{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-violet-300 transition-colors hover:text-white"
                    >
                      {profile.email}
                    </a>
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-6 py-3 font-medium text-white shadow-[0_16px_40px_rgba(99,102,241,0.26)] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default ContactPage;
