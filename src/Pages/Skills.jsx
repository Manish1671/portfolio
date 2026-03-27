import React, { memo } from "react";
import {
  Code2,
  Layers,
  Wrench,
  Users,
  Trophy,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SectionTransition from "../components/SectionTransition";

// ─── Data ─────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    icon: Code2,
    label: "Languages",
    color: "from-[#6366f1] to-[#818cf8]",
    glow: "rgba(99,102,241,0.18)",
    skills: ["C++", "JavaScript", "C", "PHP", "Java"],
  },
  {
    icon: Layers,
    label: "Frameworks & Libraries",
    color: "from-[#a855f7] to-[#c084fc]",
    glow: "rgba(168,85,247,0.18)",
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    color: "from-[#38bdf8] to-[#7dd3fc]",
    glow: "rgba(56,189,248,0.18)",
    skills: ["MongoDB", "Postman", "Git", "GitHub", "MySQL", "Power BI", "Tableau", "Excel"],
  },
  {
    icon: Users,
    label: "Soft Skills",
    color: "from-[#34d399] to-[#6ee7b7]",
    glow: "rgba(52,211,153,0.18)",
    skills: ["Problem-Solving", "Team Player", "Adaptability"],
  },
];

const achievements = [
  {
    icon: "🧩",
    title: "200+ LeetCode Problems Solved",
    description:
      "Consistently practised algorithmic problem-solving, covering arrays, trees, graphs, DP, and more on LeetCode.",
    highlight: "200+ Problems",
  },
  {
    icon: "🏆",
    title: "Adobe Hackathon — Build & Connect Stage 2",
    description:
      "Qualified for Stage 2 of the 'Build and Connect' challenge in the Adobe Hackathon, showcasing innovative thinking and team collaboration.",
    highlight: "Aug '25",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const SkillTag = memo(({ name }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/10 hover:text-white">
    <CheckCircle2 className="h-3 w-3 text-violet-300 flex-shrink-0" />
    {name}
  </span>
));

const SkillCard = memo(({ group }) => {
  const Icon = group.icon;
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(18,24,52,0.9),rgba(7,10,26,0.92))] p-6 shadow-[0_16px_48px_rgba(5,8,24,0.45)] transition-transform duration-300 hover:-translate-y-1">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at top left, ${group.glow}, transparent 60%)`,
        }}
      />
      <div className="relative z-10">
        <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${group.color} bg-opacity-20`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="mb-4 text-base font-semibold uppercase tracking-[0.14em] text-slate-300">
          {group.label}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
});

const AchievementCard = memo(({ item }) => (
  <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(18,24,52,0.9),rgba(7,10,26,0.92))] p-6 shadow-[0_16px_48px_rgba(5,8,24,0.45)] transition-transform duration-300 hover:-translate-y-1">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative z-10 flex gap-4">
      <span className="flex-shrink-0 text-3xl">{item.icon}</span>
      <div>
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <h3 className="text-base font-semibold text-white">{item.title}</h3>
          <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-0.5 text-xs font-medium text-violet-300">
            {item.highlight}
          </span>
        </div>
        <p className="text-sm leading-7 text-slate-400">{item.description}</p>
      </div>
    </div>
  </div>
));

// ─── Page ─────────────────────────────────────────────────────────────────────

const SkillsPage = () => (
  <SectionTransition id="Skills" className="px-[5%] lg:px-[10%] py-20 text-white">
    <div className="mx-auto max-w-7xl">

      {/* ── Section header ── */}
      <div className="mb-12 flex flex-col gap-5 text-center lg:text-left">
        <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
          <Sparkles className="h-4 w-4" />
          Skills &amp; Achievements
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Tools I use. Things I've built toward.
          </h2>
          <p className="text-sm leading-7 text-slate-400 md:text-base lg:text-right">
            A snapshot of my technical toolkit and the milestones that keep me motivated.
          </p>
        </div>
      </div>

      {/* ── Skills grid ── */}
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.label} group={group} />
        ))}
      </div>

      {/* ── Achievements ── */}
      <div className="mt-10">
        <div className="mb-6 flex items-center gap-3">
          <Trophy className="h-5 w-5 text-violet-300" />
          <h3 className="text-xl font-semibold text-white">Achievements</h3>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {achievements.map((item) => (
            <AchievementCard key={item.title} item={item} />
          ))}
        </div>
      </div>

    </div>
  </SectionTransition>
);

export default memo(SkillsPage);
