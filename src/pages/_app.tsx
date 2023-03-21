import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'

import { Analytics } from '@vercel/analytics/react'
import { defaultTheme } from '@/styles/default'
import { GlobalStyle } from '@/styles/global'
import { DefaultLayout } from '@/templates/default'
import { PrismicPreview } from '@prismicio/next'
import { ThemeProvider } from 'styled-components'
import { repositoryName } from '../../prismicio'
import { roboto, robotoMono } from '@/fonts'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2409528349640523"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <PrismicPreview repositoryName={repositoryName}>
          <div className={`${robotoMono.variable} ${roboto.className}`}>
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
