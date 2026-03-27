import React, { memo, useMemo } from "react";
import {
  ArrowUpRight,
  Award,
  Code2,
  FileText,
  GraduationCap,
  Sparkles,
  Target,
} from "lucide-react";
import { certificates, profile, projects } from "../data/portfolioData";
import SectionTransition from "../components/SectionTransition";

const focusAreas = [
  "Full-stack web apps",
  "Data dashboards",
  "Problem solving",
];

const strengths = [
  {
    icon: Code2,
    title: "Build with clarity",
    text: "I enjoy turning practical ideas into reliable products with clean UI, thoughtful flows, and maintainable implementation.",
  },
  {
    icon: Target,
    title: "Solve with intent",
    text: "From scheduling simulators to analytics dashboards, I like projects that connect technical depth with real user value.",
  },
  {
    icon: GraduationCap,
    title: "Learn continuously",
    text: "My CSE background keeps me grounded in fundamentals while I keep expanding into full-stack and analytics work.",
  },
];

const AboutPage = () => {
  const stats = useMemo(() => {
    const startYear = 2023;
    const years = Math.max(new Date().getFullYear() - startYear, 1);

    return [
      {
        label: "Projects built",
        value: `${projects.length}+`,
      },
      {
        label: "Certificates earned",
        value: `${certificates.length}+`,
      },
      {
        label: "Years learning and building",
        value: `${years}+`,
      },
    ];
  }, []);

  return (
    <SectionTransition
      id="About"
      className="px-[5%] lg:px-[10%] py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 text-center lg:text-left">
          <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:max-w-3xl">
                Building useful software with a modern engineering mindset.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-400 md:text-base lg:text-right">
              I focus on products that feel practical, polished, and easy to
              understand, whether they are web platforms, dashboards, or
              computer-science driven tools.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(18,24,52,0.9),rgba(7,10,26,0.92))] p-8 shadow-[0_24px_80px_rgba(5,8,24,0.55)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_28%)]" />
            <div className="relative z-10">
              <p className="mb-4 text-sm uppercase tracking-[0.22em] text-violet-200/80">
                Hello, I&apos;m {profile.firstName}
              </p>
              <h3 className="max-w-2xl text-3xl font-semibold leading-[1.08] text-white md:text-4xl lg:text-[2.8rem]">
                I build practical software with
                <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                  {" "}
                  clarity, usability,
                </span>
                <br />
                and
                <span className="bg-gradient-to-r from-white via-violet-200 to-sky-200 bg-clip-text text-transparent">
                  {" "}
                  real impact.
                </span>
              </h3>
              <div className="mt-6 max-w-2xl space-y-4">
                <p className="text-base leading-8 text-slate-300 md:text-lg">
                  I&apos;m a Computer Science and Engineering student at Lovely
                  Professional University, growing across
                  <span className="text-white"> full-stack development</span>,
                  <span className="text-white"> data analytics</span>, and
                  strong problem-solving fundamentals.
                </p>
                <p className="text-sm leading-7 text-slate-400 md:text-base">
                  I enjoy turning ideas into thoughtful products, whether
                  that&apos;s a booking platform, a dashboard, or a simulator
                  built from core CS concepts.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-xl"
                  >
                    <p className="text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={profile.resumeLink}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-6 py-3 font-medium text-white shadow-[0_16px_40px_rgba(99,102,241,0.28)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <FileText className="h-4 w-4" />
                  Download CV
                </a>
                <a
                  href="#Portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-slate-200 transition-all duration-300 hover:border-violet-400/50 hover:bg-white/[0.08]"
                >
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_34%),linear-gradient(180deg,rgba(4,7,20,0.02),rgba(4,7,20,0.36))]" />
                <div className="pointer-events-none absolute inset-0 z-10 rounded-[20px] ring-1 ring-white/8" />
                <img
                  src="/Photo.png.png"
                  alt={profile.name}
                  className="relative z-0 h-[360px] w-full rounded-[20px] object-cover object-top brightness-[0.9] contrast-[1.04] saturate-[0.82]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1]/25 to-[#a855f7]/25 text-violet-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[30px] border border-white/10 bg-[linear-gradient(120deg,rgba(99,102,241,0.08),rgba(255,255,255,0.03),rgba(168,85,247,0.08))] p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-violet-200/75">
                Current Momentum
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                Growing across full-stack development, analytics, and software
                fundamentals.
              </h3>
            </div>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-3 text-sm text-slate-300">
              <Award className="h-4 w-4 text-violet-300" />
              Building a portfolio that reflects both creativity and problem
              solving.
            </div>
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default memo(AboutPage);
