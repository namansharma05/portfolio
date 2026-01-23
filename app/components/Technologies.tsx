import { RiNextjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiRust } from "react-icons/si";
import { FaAnchor } from "react-icons/fa";
export const Technologies = () => {
  const technologies = [
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Node.js", icon: RiNodejsLine },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Git", icon: SiGit },
    { name: "Rust", icon: SiRust },
    { name: "Anchor", icon: FaAnchor },
  ];

  return (
    <div className="absolute top-[95%] left-1/2 -translate-x-1/2 w-full max-w-6xl pb-20">
      <div className="text-2xl font-bold text-center mb-10">
        Technologies I Use
      </div>
      <div className="max-h-[350px] px-4">
        <div className="grid grid-cols-4 gap-3">
          {technologies.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
                <Icon
                  size={32}
                  className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
                />
              </div>
              <div className="text-sm font-medium text-zinc-500 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
