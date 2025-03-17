import Link from 'next/link'

interface NavItem {
  name: string;
  isExternal?: boolean;
}

const navItems: Record<string, NavItem> = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/blog': {
    name: 'Blog',
  },
  'https://linkedin.com/in/anrami': {
    name: 'Résumé',
    isExternal: true,
  },
}

const projectFilters = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ai', name: 'AI' },
  { id: 'design', name: 'Design' },
  { id: 'backend', name: 'Backend' },
]

export function Navbar() {
  return (
    <aside className="mb-8 tracking-tight pt-10">
      <div>
        <div className="mb-6">
          <h1 className="text-5xl font-light tracking-tighter mb-4">Andrew Ramirez</h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">WEB • MOBILE • FULLSTACK • SEATTLE, WA</p>
          
          {/* Navigation links with rectangular styling */}
          <nav className="flex flex-col w-full space-y-1 mb-8">
            {Object.entries(navItems).map(([path, { name, isExternal }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-300 text-sm px-4 py-2 border border-neutral-200 dark:border-neutral-700 transition-colors block w-full"
                >
                  {name}
                </Link>
              )
            })}
          </nav>
          
          {/* Project filters were moved to page.tsx */}
        </div>
      </div>
    </aside>
  )
}
