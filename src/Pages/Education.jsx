import React from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionTransition from "../components/SectionTransition";
import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <SectionTransition
      id="Education"
      className="px-[5%] lg:px-[10%] py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 text-center lg:text-left">
          <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
            <GraduationCap className="h-4 w-4" />
            Education
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Academic journey built on strong fundamentals.
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-400 md:text-base lg:text-right">
              My education reflects both core computer science learning and the
              discipline that shaped how I approach practical software work.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {education.map((item, index) => (
            <div
              key={item.institution}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(14,18,44,0.92),rgba(6,8,24,0.96))] p-6 shadow-[0_24px_80px_rgba(5,8,24,0.45)] backdrop-blur-xl md:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_24%)]" />
              <div className="relative z-10 grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 text-violet-200">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {item.institution}
                    </h3>
                    {index === 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-200">
                        <Sparkles className="h-3 w-3" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-base text-slate-200">{item.degree}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span>{item.period}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 md:min-w-[160px]">
                  {item.score}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
};

export default Education;
