import React from "react";
import { Award, CalendarDays, Building2, ExternalLink } from "lucide-react";

const Certificate = ({ title, issuer, date, link }) => {
  const inner = (
    <div className="group relative h-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-6 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="relative z-10 h-full flex flex-col">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
          <Award className="w-6 h-6 text-purple-300" />
        </div>

        <h3 className="text-xl font-semibold text-white leading-snug">{title}</h3>

        <div className="mt-5 space-y-3 text-sm text-slate-300">
          <div className="flex items-center gap-3">
            <Building2 className="w-4 h-4 text-blue-300" />
            <span>{issuer}</span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarDays className="w-4 h-4 text-purple-300" />
            <span>{date}</span>
          </div>
        </div>

        {link && (
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-medium text-violet-300 group-hover:text-violet-200 transition-colors duration-200">
            <ExternalLink className="w-3.5 h-3.5" />
            View Certificate
          </div>
        )}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
      {inner}
    </a>
  ) : (
    inner
  );
};

export default Certificate;

