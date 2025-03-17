import { GithubIcon, LinkedinIcon, XIcon } from './icons'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-16 mb-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex space-x-5">
            <a
              href="https://github.com/anrami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/anrami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/anrami"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
              aria-label="Twitter/X"
            >
              <XIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-8 text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Andrew Ramirez. All rights reserved.
          </p>
        </div>
          
        <ul className="mt-8 md:mt-0 flex flex-col space-y-2 md:flex-row md:space-x-6 md:space-y-0">
          <li>
            <a
              className="flex items-center text-neutral-600 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              href="/"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Home</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-neutral-600 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              href="/projects"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Projects</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-neutral-600 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              href="/blog"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Blog</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center text-neutral-600 transition-all hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/anrami/my-personal-website"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">Source</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
