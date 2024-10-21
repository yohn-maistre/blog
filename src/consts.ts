export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'yose | a dev blog',
  DESCRIPTION:
    'this is a blog focused on the things i do as a developer',
  EMAIL: 'giyaibo@pm.me',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://yose.is-a.dev/blog',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog/posts/view-all', label: 'blog' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/blog/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/yohn-maistre', label: 'GitHub' },
  { href: 'https://twitter.com/jind0sh', label: 'Twitter' },
  { href: 'giyaibo@pm.me', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
