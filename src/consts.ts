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
  TITLE: 'yose.is-a.dev',
  DESCRIPTION:
    'this is a blog focused on the things i do as a developer',
  EMAIL: 'giyaibo@pm.me',
  NUM_POSTS_ON_HOMEPAGE: 3,
  POSTS_PER_PAGE: 5,
  SITEURL: 'https://yose.is-a.dev/blog',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog/posts', label: 'all posts' },
  { href: '/blog/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/yohn-maistre', label: 'GitHub' },
  { href: 'https://twitter.com/jind0sh', label: 'Twitter' },
  { href: 'giyaibo@pm.me', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
