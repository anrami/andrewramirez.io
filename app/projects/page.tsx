import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Projects',
  description: 'Andrew Ramirez\'s portfolio projects and work',
};

// Project type definition
type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
};

// Sample projects data
const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/anrami/my-personal-website',
    link: 'https://andrewramirez.io',
    image: '/media/images/projects/portfolio.png',
  },
  {
    title: 'AWS Deployment Toolkit',
    description: 'A CLI tool for managing and automating AWS deployments across multiple environments.',
    tags: ['Node.js', 'AWS', 'CLI', 'DevOps'],
    github: 'https://github.com/anrami/aws-deployment-toolkit',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with payment processing, order management, and inventory tracking.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/anrami/ecommerce-platform',
  },
];

export default function ProjectsPage() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
        Projects
      </h2>
      
      <p className="text-lg mb-8 text-neutral-800 dark:text-neutral-200">
        Here are some of the projects I've worked on. Each represents different skills and technologies
        I've developed expertise in.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-200 dark:border-neutral-800"
          >
            {project.image && (
              <div className="relative h-48 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={400} 
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
