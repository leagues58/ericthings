import { getArticles } from 'app/articles/utils'

export const baseUrl = 'https://ericthings.com'

export default async function sitemap() {
  let blogs = getArticles().map((post) => ({
    url: `${baseUrl}/articles/${post.articleType}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
