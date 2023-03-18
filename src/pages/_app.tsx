import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <div className={roboto.className}>
        <Component {...pageProps} />
        </div>
      </PrismicPreview>
    </PrismicProvider>
  );
}
