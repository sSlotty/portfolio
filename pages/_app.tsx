import type { AppProps } from "next/app";

import '../styles/globals.css'

import { NextSeo } from "next-seo"
import Head from 'next/head'
import Script from 'next/script'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Thanathip Chanasri"
        titleTemplate="Thanathip C."
        defaultTitle="Thanathip C."
        description="Hey! I'm Thanathip Chanasri"
        openGraph={{
          url: "https://www.thanathip.com/",
          title: "Thanathip C. | Programer Developer",
          description:
            "Hey! I'm Anurag, A Frontend Developer, Blogger and a Student!",
          images: [
            {
              url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
              width: 800,
              height: 420,
              alt: "Thanathip C. | Programer Developer",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Thanathip C., Thanathip Chansri, Web Developer, ธนาธิป ชนะศรี, นายธนาธิป ชนะศรี",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
