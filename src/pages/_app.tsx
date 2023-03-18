import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import type { AppProps } from "next/app";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../../prismicio";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
