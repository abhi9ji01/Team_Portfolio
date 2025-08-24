import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa6";
import image from "../../src/assests/image.jpeg";
type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  quote?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  tags?: string[];
};

const MeetOurTeam = () => {
  const team: TeamMember[] = [
    {
      name: "Rahul",
      role: "Backend Developer",
      photo: image,
      quote: "Clean code, strong architecture, scalable systems.",
      bio: "Passionate about APIs, databases, and building robust backend solutions that just work.",
      socials: {
        linkedin: "https://linkedin.com/in/example",
        github: "https://github.com/example",
      },
      tags: ["Node.js", "Databases", "APIs"],
    },
    {
      name: "Abhinav",
      role: "Full Stack Developer",
      photo: image,
      quote: "Bridging frontend beauty with backend power.",
      bio: "Enjoys crafting seamless applications, working across the stack from UI to server logic.",
      socials: {
        linkedin: "https://linkedin.com/in/example",
        github: "https://github.com/example",
      },
      tags: ["React", "Node.js", "Full Stack"],
    },
    {
      name: "Hitesh Yadav",
      role: "Frontend Developer",
      photo: image,
      quote: "Interfaces should be fast, fluid, and fun.",
      bio: "Frontend specialist focusing on React, animations, and delivering pixel-perfect experiences.",
      socials: {
        linkedin: "https://linkedin.com/in/example",
        github: "https://github.com/example",
      },
      tags: ["React", "Animations", "UI/UX"],
    },
    {
      name: "Rahul Ka Dost",
      role: "Designer",
      photo: image,
      quote: "Design is intelligence made visible.",
      bio: "Creative thinker passionate about crafting intuitive, accessible, and visually appealing designs.",
      socials: {
        linkedin: "https://linkedin.com/in/example",
      },
      tags: ["UI Design", "UX", "Creativity"],
    },
  ];

  return (
    <section
      className="relative z-0 px-6 sm:px-10 lg:px-16 my-10 font-mono"
      id="Team"
    >
      <div className="mb-10 text-center">
        <h2 className="text-5xl sm:text-4xl xs:text-3xl font-extrabold text-primaryColor tracking-tight">
          Meet Our Team
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <TeamCard key={`${member.name}-${i}`} {...member} />
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;

const TeamCard = ({
  name,
  role,
  photo,
  bio,
  quote,
  socials,
  tags,
}: TeamMember) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="
        relative overflow-hidden rounded-2xl border border-primaryColor/30
        bg-gradient-to-br from-bgColor/80 to-bgColor/60 backdrop-blur-[3px]
        hover:shadow-xl hover:scale-[1.02] transition-transform duration-300
      "
    >
      <div className="h-1 w-full bg-gradient-to-r from-primaryColor/90 via-primaryColor/60 to-primaryColor/30" />

      <div className="p-6">
        <div className="flex items-center gap-4">
          <img
            src={photo}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-2 border-primaryColor/40 shadow-md"
          />
          <div>
            <h3 className="text-2xl font-semibold text-white">{name}</h3>
            <p className="text-md font-medium text-primaryColor/60">{role}</p>
          </div>
        </div>

        {/* {quote && (
          <p className="mt-4 text-sm italic text-primaryColor/80 leading-snug">
            “{quote}”
          </p>
        )} */}

        {tags && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-full bg-primaryColor/10 border border-primaryColor/30 text-primaryColor font-bold uppercase tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Bio */}
        {bio && (
          <div className="mt-4">
            <p
              className={`text-sm leading-relaxed text-gray-400 ${
                expanded ? "" : "line-clamp-2"
              }`}
            >
              {bio}
            </p>
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs font-semibold text-gray-400  underline underline-offset-4 transition"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </div>
        )}

        {/* Socials */}
        {(socials?.linkedin ||
          socials?.github ||
          socials?.twitter ||
          socials?.website) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-lg rounded-full border border-primaryColor/40 text-primaryColor hover:bg-primaryColor hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-lg rounded-full border border-primaryColor/40 text-primaryColor hover:bg-primaryColor hover:text-white transition"
              >
                <FaGithub />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-lg rounded-full border border-primaryColor/40 text-primaryColor hover:bg-primaryColor hover:text-white transition"
              >
                <FaTwitter />
              </a>
            )}
            {socials.website && (
              <a
                href={socials.website}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-lg rounded-full border border-primaryColor/40 text-primaryColor hover:bg-primaryColor hover:text-white transition"
              >
                <FaGlobe />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
