import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import TechOrb from "../components/TechOrb";
import { certificates, education, profile, projects } from "../data/portfolioData";

const CTAButton = memo(({ href, icon: Icon, label, primary = false, download }) => (
  <a
    href={href}
    download={download}
    className={`group inline-flex h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-medium transition-all duration-300 ${
      primary
        ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-[0_18px_50px_rgba(99,102,241,0.28)] hover:-translate-y-1"
        : "border border-white/10 bg-white/5 text-slate-200 backdrop-blur-xl hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.08]"
    }`}
  >
    <span>{label}</span>
    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
  </a>
));

// Animated count-up stat card
const StatCard = memo(({ value, label }) => {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef(null);
  const animated = useRef(false);

  // Parse numeric part if value looks like "4+"
  const numericMatch = String(value).match(/^(\d+)/);
  const numericTarget = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? String(value).slice(numericMatch[1].length) : "";

  useEffect(() => {
    if (!numericTarget) { setDisplayed(value); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const duration = 900;
          const step = 16;
          const steps = Math.ceil(duration / step);
          const increment = numericTarget / steps;
          const timer = setInterval(() => {
            start += increment;
            if (start >= numericTarget) {
              setDisplayed(`${numericTarget}${suffix}`);
              clearInterval(timer);
            } else {
              setDisplayed(`${Math.floor(start)}${suffix}`);
            }
          }, step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericTarget, suffix, value]);

  return (
    <div ref={ref} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl">
      <p className="text-xl font-semibold text-white sm:text-2xl">{displayed || value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
        {label}
      </p>
    </div>
  );
});

const Home = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const stats = useMemo(
    () => [
      { value: `${projects.length}+`, label: "Projects" },
      { value: `${certificates.length}+`, label: "Certificates" },
      { value: education[0]?.score ?? "CGPA: 8.18", label: "Current CGPA" },
    ],
    []
  );

  const focusTags = useMemo(
    () => ["Full-stack systems", "Analytics dashboards", "Problem solving"],
    []
  );

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  const handleTyping = useCallback(() => {
    const words = profile.roles;
    if (isTyping) {
      if (charIndex < words[wordIndex].length) {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), 1800);
      }
    } else if (charIndex > 0) {
      setText((prev) => prev.slice(0, -1));
      setCharIndex((prev) => prev - 1);
    } else {
      setWordIndex((prev) => (prev + 1) % words.length);
      setIsTyping(true);
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(handleTyping, isTyping ? 90 : 45);
    return () => clearTimeout(timeout);
  }, [handleTyping, isTyping]);

  return (
    <section id="Home" className="relative min-h-screen overflow-hidden bg-[#030014]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[6%] h-[360px] w-[360px] rounded-full bg-[#6366f1]/18 blur-[140px]" />
        <div className="absolute right-[-10%] top-[18%] h-[360px] w-[360px] rounded-full bg-[#a855f7]/14 blur-[150px]" />
        <div className="absolute bottom-[0%] left-[26%] h-[220px] w-[220px] rounded-full bg-[#38bdf8]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%)]" />
      </div>

      <div
        className={`relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-screen max-w-[1500px] items-center px-[5%] pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-[6%] lg:pt-20">
          <div className="w-full">
            <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
              <div data-aos="fade-right" data-aos-delay="100">
                {/* Badge row: role + availability */}
                <div className="flex flex-wrap items-center gap-3" data-aos="fade-up" data-aos-delay="180">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.68rem] uppercase tracking-[0.34em] text-violet-200/75">
                    {profile.title} • {profile.firstName}
                  </div>
                  {/* Availability badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] text-emerald-300/90">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Open to opportunities
                  </div>
                </div>

                <h1
                  className="mt-7 text-[4.4rem] font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-[5.3rem] lg:text-[6rem] xl:text-[6.8rem]"
                  data-aos="fade-up"
                  data-aos-delay="260"
                >
                  {profile.name.split(" ").map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h1>
                <p
                  className="mt-6 max-w-md text-[1.25rem] font-light leading-[1.5] tracking-[-0.01em] sm:text-[1.45rem] lg:text-[1.6rem] bg-gradient-to-r from-[#e9d5ff] via-[#93c5fd] to-[#7dd3fc] bg-clip-text text-transparent"
                  data-aos="fade-up"
                  data-aos-delay="310"
                >
                  Full-stack developer &amp; data enthusiast.
                </p>

                <div
                  className="mt-5 flex min-h-[2rem] items-center"
                  data-aos="fade-up"
                  data-aos-delay="420"
                >
                  <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-base font-light uppercase tracking-[0.16em] text-transparent sm:text-lg">
                    {text}
                  </span>
                  <span className="ml-1 h-5 w-[3px] animate-pulse rounded-full bg-gradient-to-b from-[#7dd3fc] to-[#a855f7]" />
                </div>

                <p
                  className="mt-6 max-w-xl text-[0.98rem] leading-8 text-slate-400 sm:text-base"
                  data-aos="fade-up"
                  data-aos-delay="560"
                >
                  I design web applications, analytics dashboards, and practical
                  software that feel modern, clear, and genuinely useful.
                </p>

                <div
                  className="mt-7 flex flex-wrap gap-3"
                  data-aos="fade-up"
                  data-aos-delay="720"
                >
                  {focusTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="mt-9 flex flex-wrap gap-3"
                  data-aos="fade-up"
                  data-aos-delay="860"
                >
                  <CTAButton
                    href="#Portfolio"
                    icon={ArrowRight}
                    label="View Projects"
                    primary
                  />
                  <CTAButton
                    href={profile.resumeLink}
                    icon={Download}
                    label="Download CV"
                    download
                  />
                </div>
              </div>

              <div className="relative flex items-center justify-center mt-10 lg:mt-0" data-aos="fade-left" data-aos-delay="180">
                <div className="relative flex items-center justify-center w-full">
                  <TechOrb />
                </div>
              </div>
            </div>

            <div
              className="mt-10 grid gap-4 sm:grid-cols-3"
              data-aos="fade-up"
              data-aos-delay="980"
            >
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
