import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import { Roboto } from 'next/font/google'
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/default";
import { ThemeProvider } from "styled-components";
import { DefaultLayout } from "@/templates/default";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <ThemeProvider theme={defaultTheme}>
      <PrismicPreview repositoryName={repositoryName}>
        <div className={roboto.className}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </div>
      </PrismicPreview>
      <GlobalStyle />
        </ThemeProvider>
    </PrismicProvider>
  );
}
