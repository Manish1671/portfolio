import React from "react";
import {
  Linkedin,
  Github,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { profile } from "../data/portfolioData";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: profile.linkedin,
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Email",
    displayName: "Email",
    subText: profile.email,
    icon: Mail,
    url: `mailto:${profile.email}`,
    color: "#a855f7",
    gradient: "from-[#6366f1] to-[#a855f7]",
  },
  {
    name: "Phone",
    displayName: "Phone",
    subText: profile.phone,
    icon: Phone,
    url: `tel:${profile.phone.replace(/\s+/g, "")}`,
    color: "#22c55e",
    gradient: "from-[#16a34a] to-[#22c55e]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Manish1671",
    icon: Github,
    url: profile.github,
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
];

const SocialCard = ({ link, fullWidth = false }) => (
  <a
    href={link.url}
    target={link.url.startsWith("http") ? "_blank" : undefined}
    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
    className={`group relative flex items-center gap-3 p-4 rounded-xl 
      bg-white/5 border border-white/10 overflow-hidden
      hover:border-white/20 transition-all duration-500 ${fullWidth ? "" : ""}`}
  >
    <div
      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
      bg-gradient-to-r ${link.gradient}`}
    />

    <div className="relative flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
        group-hover:scale-125 group-hover:opacity-30"
        style={{ backgroundColor: link.color }}
      />
      <div className="relative p-2 rounded-lg">
        <link.icon
          className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
          style={{ color: link.color }}
        />
      </div>
    </div>

    <div className="flex flex-col min-w-0">
      <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
        {link.displayName}
      </span>
      <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
        {link.subText}
      </span>
    </div>

    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  </a>
);

const SocialLinks = () => {
  const linkedIn = socialLinks[0];
  const others = socialLinks.slice(1);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        <SocialCard link={linkedIn} fullWidth />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((link) => (
            <SocialCard key={link.name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
