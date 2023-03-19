import { GetServerSideProps } from 'next'
import { format } from 'date-fns'
import { prismicClient } from '../../prismicio'

export default function Sitemap() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml')
  const xml = await generateSitemap()
  res.write(xml)
  res.end()

  return {
    props: {},
  }
}

const getBlogPages = async () => {
  const baseURL = process.env.APP_BASE_URL

  const client = prismicClient()
  //TO-DO: use All pages from Prismic and generate pages dinamically from routes.
  const response = await client.getAllByType('blogpost')

  const blogPagesId = response.map((page) => ({
    url: `${baseURL}/${page.uid}`,
    lastModifiedDate: page.last_publication_date,
  }))

  const blogPages = [
    {
      url: baseURL,
      lastModifiedDate: new Date().toISOString(),
    },
    {
      url: `${baseURL}/posts`,
      lastModifiedDate: new Date().toISOString(),
    },
    ...blogPagesId,
  ]

  return blogPages
}

async function generateSitemap(): Promise<string> {
  const pages = await getBlogPages()
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${pages
         .map((page) => {
           return `
          <url>
              <loc>${page.url}</loc>
              <lastmod>${format(
                new Date(page.lastModifiedDate),
                'yyy-MM-dd'
              )}</lastmod>
          </url>
          `
         })
         .join('')}
    </urlset>`
}
