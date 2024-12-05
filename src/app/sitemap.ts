import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://andrewramirez.io'

export default async function sitemap() {
    // dynamically includes pages
    let blogs = getBlogPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  
    // for static pages
    let routes = ['', '/blog'].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  
    return [...routes, ...blogs]
  }