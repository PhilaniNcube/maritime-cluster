import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home | Maritime Cluster</title>
      </Head>
      <main
        className="py-8 bg-center bg-cover bg-no-repeat min-h-screen bg-fixed bg-gray-500 bg-blend-multiply"
        style={{ backgroundImage: "url(/images/sea.jpg)" }}
      >
        <Navbar />
        <div className="max-w-7xl mx-auto flex flex-col justify-center h-[80vh] items-center border-t border-b border-white">
          <h1 className="text-3xl md:text-5xl max-w-5xl text-white text-center font-extrabold">
            Delivering opportunities in South Africa&apos;s Maritime industry
          </h1>
          <Link href="/contact" passHref>
            <button className="bg-blue-300 text-sky-900 font-bold text-xl px-6 py-1 rounded-full mt-16">
              Learn more
            </button>
          </Link>
        </div>
        <Footer />
      </main>
    </Fragment>
  );
}

export default Home
