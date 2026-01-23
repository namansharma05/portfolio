export const About = () => {
  return (
    <div className="absolute top-[25%] left-[50%] transform -translate-x-1/3 -translate-y-1/4">
      <h1 className="text-4xl font-bold">{process.env.NEXT_PUBLIC_NAME}</h1>
      <h2 className="text-xl">{process.env.NEXT_PUBLIC_DESIGNATION}</h2>
      <p className="text-gray-500 text-lg mt-4">
        {process.env.NEXT_PUBLIC_ABOUT_ME_DESCRIPTION}
      </p>
      <div className="flex gap-4 mt-10">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
          LinkedIn
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
          GitHub
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
          Twitter
        </button>
      </div>
    </div>
  );
};
