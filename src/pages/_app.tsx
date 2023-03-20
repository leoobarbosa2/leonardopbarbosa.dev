import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

import { Analytics } from '@vercel/analytics/react'
import { defaultTheme } from '@/styles/default'
import { GlobalStyle } from '@/styles/global'
import { DefaultLayout } from '@/templates/default'
import { PrismicPreview } from '@prismicio/next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { repositoryName } from '../../prismicio'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <PrismicPreview repositoryName={repositoryName}>
          <div className={roboto.className}>
            <DefaultLayout>
              <Component {...pageProps} />
              <Analytics />
            </DefaultLayout>
          </div>
        </PrismicPreview>
        <GlobalStyle />
      </ThemeProvider>
    </PrismicProvider>
  )
}
