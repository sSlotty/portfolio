import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {
  Header,
  About,
  Projects,
  Skills,
  Contact,
  Awards
} from "../components"
export default function Home() {
  return (
    <>
      <div className="px-2 sm;px-8 md:px-24 lg:px-29 xl:px-72">
        <Header />
        <About />
        <Awards />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
