import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="bg-circleStar group relative flex size-[185px] items-center justify-center bg-cover bg-center bg-no-repeat"
      >
        Projetos
        <HiArrowRight
          className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
