import { GithubIcon, LinkedinIcon, XIcon, EmailIcon } from './icons';

export default function Footer() {
  return (
    <footer className="pt-8 pb-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Social icons row */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a
              href="https://github.com/anrami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full border border-neutral-200 dark:border-neutral-800 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anrami"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full border border-neutral-200 dark:border-neutral-800 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="work@andrewramirez.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full border border-neutral-200 dark:border-neutral-800 transition-colors"
              aria-label="Email"
            >
              <EmailIcon className="w-6 h-6" />
              <span className="font-medium">Email</span>
            </a>
          </div>
          
          {/* Copyright notice */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Andrew Ramirez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}