import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getWorkPosts } from 'app/utils/utils'

export function WorkPosts() {
  let allWorks = getWorkPosts()

  return (
    <div className="grid gap-12">
      {allWorks
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div key={post.slug} className="group">
            <Link
              href={`/work/${post.slug}`}
              className="grid md:grid-cols-[2fr,3fr] gap-8"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                {post.metadata.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                    />
                    <div 
                      className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-black/60 to-black"
                      style={{ 
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.005) 0%, rgba(0,0,0,0.95) 90%)'
                      }}
                    />
                    {post.metadata.logo && (
                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full overflow-hidden bg-white/8d0 backdrop-blur-sm z-20">
                        <Image
                          src={post.metadata.logo}
                          alt={`${post.metadata.title} logo`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    No image
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
                    {post.metadata.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    at {post.metadata.employer} 
                  </p>
                </div>
                {post.metadata.summary && (
                  <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3">
                    {post.metadata.summary}
                  </p>
                )}
                <span className="inline-flex items-center text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  Read more
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}
