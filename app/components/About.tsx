import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const About = () => {
  return (
    <div className="absolute top-[25%] left-[50%] transform -translate-x-1/3 -translate-y-1/4">
      <h1 className="text-4xl font-bold">{process.env.NEXT_PUBLIC_NAME}</h1>
      <h2 className="text-xl">{process.env.NEXT_PUBLIC_DESIGNATION}</h2>
      <p className="text-gray-500 text-lg mt-4">
        {process.env.NEXT_PUBLIC_ABOUT_ME_DESCRIPTION}
      </p>
      <div className="flex gap-4 mt-10">
        <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
          <VscGithub
            size={32}
            className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
          />
        </div>

        <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
          <FaXTwitter
            size={32}
            className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
          />
        </div>
        <div className="p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700">
          <FaLinkedin
            size={32}
            className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
};
