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
            "Hey! I'm Thanathip Chanasri, A Backend Developer and a Student!",
          images: [
            {
              url: "https://scontent.fbkk2-4.fna.fbcdn.net/v/t39.30808-6/272868559_4808064765950420_7508818839187115985_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF3lx-Q1zcbNuoc8jyu0pCChyO5kkrJGhmHI7mSSskaGbNJobe-dMZfFOvHfOjRVFjWmqwI7TsVzIyd8Jjshq9B&_nc_ohc=ZwdzxabXuDMAX_u5fLe&tn=NMNRNkIXZe-THIiH&_nc_ht=scontent.fbkk2-4.fna&oh=00_AT8gRMlGeVokcNZ6EU6eqDoQQ5R2z_8288YexxE-ymGaxA&oe=62A49E04",
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
        <link rel="icon" type="image/png" href="/assets/avatar.png" />
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
