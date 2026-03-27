import React from "react";
import { Award, ArrowRight, Boxes, Code2, ExternalLink, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";
import TechStackIcon from "../components/TechStackIcon";
import SectionTransition from "../components/SectionTransition";
import { certificates, projects, techStacks } from "../data/portfolioData";

const FEATURED_METRICS = [
  "Interactive insights",
  "Dashboard storytelling",
  "Data-driven decisions",
];

export default function PortfolioShowcase() {
  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1);

  return (
    <SectionTransition
      className="w-full overflow-hidden bg-[#030014] px-[5%] py-20 md:px-[8%] lg:px-[10%]"
      id="Portfolio"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
            <Boxes className="h-4 w-4" />
            Portfolio
          </div>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Selected work shaped like case studies, not just project cards.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            A showcase of full-stack builds, analytics work, and computer science projects,
            with emphasis on practical thinking, clarity, and useful outcomes.
          </p>
        </div>

        {featuredProject && (
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(145deg,rgba(13,18,44,0.92),rgba(6,8,24,0.96))] p-6 shadow-[0_28px_90px_rgba(5,8,24,0.48)] backdrop-blur-2xl md:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_24%)]" />

            <div className="relative z-10 mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-violet-200/75">
                  <Sparkles className="h-3.5 w-3.5" />
                  Featured Case Study
                </div>
                <h3 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                  {featuredProject.Title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {FEATURED_METRICS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/25">
                <img
                  src={featuredProject.Img}
                  alt={featuredProject.Title}
                  className={`h-[260px] w-full ${
                    featuredProject.imageFit === "contain"
                      ? "object-contain bg-slate-950/70 p-4"
                      : "object-cover"
                  } md:h-[340px] lg:h-[420px]`}
                />
              </div>

              <div className="space-y-6">
                <p className="text-base leading-8 text-slate-400 md:text-lg">
                  {featuredProject.Description}
                </p>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.TechStack?.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3">
                  {(featuredProject.Features || []).slice(0, 3).map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300 backdrop-blur-xl"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {featuredProject.Link ? (
                    <a
                      href={featuredProject.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_50px_rgba(99,102,241,0.24)] transition-all duration-300 hover:-translate-y-1"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-500">
                      Live demo unavailable
                    </span>
                  )}

                  <Link
                    to={`/project/${featuredProject.id}`}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.08]"
                  >
                    Explore Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-200">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                More Work
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Supporting projects
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <CardProject
                key={project.id}
                Img={project.Img}
                Title={project.Title}
                Description={project.Description}
                Link={project.Link}
                id={project.id}
                TechStack={project.TechStack}
                imageFit={project.imageFit}
              />
            ))}
          </div>
        </div>

        <div id="Certificates" className="mt-20 scroll-mt-28">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-200">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Credentials
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Certifications and learning milestones
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {certificates.map((certificate) => (
              <Certificate
                key={`${certificate.title}-${certificate.date}`}
                title={certificate.title}
                issuer={certificate.issuer}
                date={certificate.date}
                link={certificate.link}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-200">
              <Boxes className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Stack
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Tools and technologies I work with
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {techStacks.map((stack) => (
              <TechStackIcon
                key={stack.language}
                TechStackIcon={stack.icon}
                Language={stack.language}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
}
