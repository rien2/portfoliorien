import { Play } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectThumbnailProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectThumbnail({ project, onClick }: ProjectThumbnailProps) {
  return (
    <div
      className="relative aspect-video cursor-pointer group overflow-hidden"
      onClick={onClick}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-lg font-medium absolute inset-x-0 bottom-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
          {project.title}
        </h3>
        <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}