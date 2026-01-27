export const Projects = () => {
  const projects = [
    [
      "Sorting Visualizer",
      "https://github.com/namansharma05/Sorting-Visualizer",
      "Sorting Visualizer is an interactive website that demonstrates Merge Sort, Quick Sort, and Selection Sort through real-time animations. Users can adjust the array size, control the visualization speed, and generate a new unsorted array to understand each algorithm step by step.",
    ],
    [
      "Sorting Visualizer",
      "https://github.com/namansharma05/Sorting-Visualizer",
      "Sorting Visualizer is an interactive website that demonstrates Merge Sort, Quick Sort, and Selection Sort through real-time animations. Users can adjust the array size, control the visualization speed, and generate a new unsorted array to understand each algorithm step by step.",
    ],
    [
      "Sorting Visualizer",
      "https://github.com/namansharma05/Sorting-Visualizer",
      "Sorting Visualizer is an interactive website that demonstrates Merge Sort, Quick Sort, and Selection Sort through real-time animations. Users can adjust the array size, control the visualization speed, and generate a new unsorted array to understand each algorithm step by step.",
    ],
    [
      "Sorting Visualizer",
      "https://github.com/namansharma05/Sorting-Visualizer",
      "Sorting Visualizer is an interactive website that demonstrates Merge Sort, Quick Sort, and Selection Sort through real-time animations. Users can adjust the array size, control the visualization speed, and generate a new unsorted array to understand each algorithm step by step.",
    ],
  ];
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-2xl md:text-3xl lg:text-3xl font-bold underline text-center mb-10">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 group cursor-default p-3 bg-gray-100 dark:bg-zinc-800/50 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-zinc-200 dark:hover:bg-zinc-700"
          >
            <div className="">
              <img
                src={null}
                alt={"project image"}
                className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300"
              />
            </div>
            <div className="text-sm font-medium text-zinc-500 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              {project[0]}
            </div>
            <div className="text-sm font-medium text-zinc-500 transition-colors duration-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
              {project[2]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
