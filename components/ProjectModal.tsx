"use client";

export default function ProjectModal({ project, onClose }: any) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#0b0f17] border border-white/10 rounded-2xl max-w-lg w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >

        <img
          src={project.image}
          className="rounded-xl mb-4"
        />

        <h2 className="text-white text-xl font-bold">
          {project.title}
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          {project.desc}
        </p>

        <p className="text-indigo-300 mt-4 text-xs">
          {project.tech}
        </p>

        <div className="flex gap-4 mt-6 text-sm">
          <a href={project.github} className="text-gray-300 hover:text-white">
            GitHub
          </a>
          <a href={project.live} className="text-gray-300 hover:text-white">
            Live
          </a>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
        >
          Close
        </button>

      </div>
    </div>
  );
}