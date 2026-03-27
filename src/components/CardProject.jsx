import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";

const CardProject = ({
  Img,
  Title,
  Description,
  Link: ProjectLink,
  id,
  TechStack = [],
  featured = false,
  imageFit = "cover",
}) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  const handleDetails = (e) => {
    if (!id) {
      e.preventDefault();
      alert("Project details are not available");
    }
  };

  return (
    <div className="group relative w-full">
      <div
        className={`relative overflow-hidden ${
          featured ? "rounded-[28px]" : "rounded-[24px]"
        } border border-white/10 bg-[linear-gradient(145deg,rgba(15,20,42,0.96),rgba(8,10,25,0.96))] backdrop-blur-lg shadow-[0_24px_80px_rgba(5,8,24,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:shadow-[0_26px_90px_rgba(76,29,149,0.22)]`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(99,102,241,0.08),rgba(255,255,255,0.02),rgba(168,85,247,0.08))] opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_32%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

        <div className={`relative z-10 ${featured ? "p-6 lg:p-7" : "p-5"}`}>
          <div
            className={`relative overflow-hidden ${
              featured ? "rounded-2xl" : "rounded-xl"
            }`}
          >
            <img
              src={Img}
              alt={Title}
              className={`w-full transition-transform duration-700 group-hover:scale-105 ${
                imageFit === "contain"
                  ? "object-contain bg-slate-950/70 p-3"
                  : "object-cover"
              } ${
                featured ? "h-[260px] sm:h-[300px] lg:h-[340px]" : "h-[220px]"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/70 via-transparent to-transparent"></div>
            {featured && (
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-purple-300" />
                <span className="text-xs font-medium text-slate-200">
                  Featured Project
                </span>
              </div>
            )}
          </div>

          <div className={`space-y-3 ${featured ? "mt-5" : "mt-4"}`}>
            <h3
              className={`${
                featured ? "text-2xl sm:text-3xl" : "text-xl"
              } bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text font-semibold text-transparent`}
            >
              {Title}
            </h3>

            <p
              className={`leading-relaxed text-gray-300/80 ${
                featured ? "line-clamp-3 text-sm sm:text-base" : "line-clamp-2 text-sm"
              }`}
            >
              {Description}
            </p>

            {TechStack.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {TechStack.slice(0, featured ? 4 : 3).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}

            <div
              className={`flex items-center justify-between border-t border-white/10 pt-4 ${
                featured ? "gap-4" : ""
              }`}
            >
              {ProjectLink ? (
                <a
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-violet-400/30 hover:bg-white/[0.08]"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-sm text-gray-500">Demo Not Available</span>
              )}

              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] px-4 py-2 text-sm font-medium text-white shadow-[0_14px_35px_rgba(99,102,241,0.22)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-sm text-gray-500">
                  Details Not Available
                </span>
              )}
            </div>
          </div>

          <div
            className={`absolute inset-0 -z-50 border border-white/0 transition-colors duration-300 group-hover:border-purple-500/40 ${
              featured ? "rounded-[28px]" : "rounded-[24px]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
