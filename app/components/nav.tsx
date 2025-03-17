import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://linkedin.com/in/anrami': {
    name: 'résumé',
    isExternal: true,
  },
  '/games': {
    name: 'games',
  },
}

const projectFilters = [
  { id: 'all', name: 'All' },
  { id: 'web', name: 'Web' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'ai', name: 'AI' },
  { id: 'design', name: 'Design' },
  { id: 'backend', name: 'Backend' },
  { id: 'other', name: 'Other' }
]

export function Navbar() {
  return (
    <aside className="mb-8 tracking-tight pt-10">
      <div>
        <div className="mb-6">
          <h1 className="text-5xl font-light tracking-tighter mb-4">Andrew Ramirez</h1>
          <p className="text-gray-400 text-sm mb-6">WEB • MOBILE • FULLSTACK • SEATTLE, WA</p>
          
          {/* Navigation links with pill styling */}
          <nav className="flex flex-wrap mb-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="bg-gray-900 text-gray-300 text-xs px-3 py-1 rounded-full mr-2 mb-2 hover:bg-gray-800 transition-colors"
                >
                  {name}
                </Link>
              )
            })}
          </nav>
          
          {/* Project filter tabs */}
          <div className="flex flex-wrap gap-2 mb-2">
            {projectFilters.map((filter) => (
              <button 
                key={filter.id}
                className="bg-gray-900 text-xs px-3 py-1 rounded-full text-gray-300 border border-gray-800 hover:bg-gray-800 transition-colors"
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
