import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlackNavbar from "../components/BlackNavbar";
import FooterBlack from "../components/FooterBlack";

const Media: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Media | Maritime Cluster</title>
      </Head>
      <main className="py-8 min-h-screen ">

        <div className="max-w-7xl mx-auto items-center  border-spacing-3 border-b border-black">
          <div className="grid grid-cols-5">
            <div className="col-span-5 grid grid-cols-2 relative">
              <div className="absolute w-1/2 inset-0 flex flex-col items-end justify-center bg-slate-800/70 p-3">
                <h1 className="font-bold text-white text-3xl text-right md:text-5xl lg:text-6xl">
                  Media <br /> Room
                </h1>
                <p className="text-md mt-3 text-white max-w-[40ch] text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  sint veritatis natus optio dolorem, quisquam ipsam.
                </p>
              </div>
              <img
                src="/images/media.jpg"
                alt="Media"
                className="w-full h-80 object-cover col-span-2"
                width={1400}
                height={944}
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto ">
            <div
              className="max-w-7xl mx-auto border-t border-spacing-6 py-4 mt-10 border-black  grid grid-cols-2 lg:grid-cols-4"
              style={{ color: "#0066b3" }}
            >
              <Link href="/media/latest-news">
                <a className="text-lg font-bold uppercase text-center">
                  Latest News
                </a>
              </Link>
              <Link href="/media/legislative-news">
                <a className="text-lg font-bold uppercase text-center">
                  Legislative News
                </a>
              </Link>
              <Link href="/media/press-releases">
                <a className="text-lg font-bold uppercase text-center">
                  Press Releases
                </a>
              </Link>
              <Link href="/media/stakeholder-news">
                <a className="text-lg font-bold uppercase text-center">
                  Stakeholder News
                </a>
              </Link>
            </div>
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              <div className="w-full">
                <Image
                  src="/images/cranes.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-200 px-3 py-4">
                  <Link href="http://maritimereview.co.za/article/ArtMID/450/ArticleID/1666">
                    <a className="text-blue-600 text-md font-bold">
                      A wake-up call for ports to respond to climate change
                    </a>
                  </Link>
                  <p className="mt-4 text-gray-800 text-sm">
                    The recent events of coastal flooding in the KwaZulu-Natal
                    province of South Africa in April 2022 should be regarded as
                    a wakeup call to ports to start taking the necessary action.
                    These events severely interrupted operations at the Port of
                    Durban, which is one of the busiest ports of its kind in
                    Africa.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/cranes_2.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-200 px-3 py-4">
                  <Link href="http://maritimereview.co.za/article/ArtMID/450/ArticleID/1692">
                    <a className="text-blue-600 text-md font-bold">
                      Co-ocean management system to help protect resources
                    </a>
                  </Link>
                  <p className="mt-4 text-gray-800 text-sm">
                    Despite declaring 42 marine protected areas (MPA) that cover
                    5.4 percent of the exclusive economic zone (EEZ), some of
                    South Africa's MPAs are not being sufficiently managed and
                    there is resistance to them from some local communities.
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/containers.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full h-64 object-cover"
                />
                <div className="bg-gray-200 px-3 py-4">
                  <Link href="http://maritimereview.co.za/article/ArtMID/450/ArticleID/1692">
                    <a className="text-blue-600 text-md font-bold">
                      Master plan or merely promises
                    </a>
                  </Link>
                  <p className="mt-4 text-gray-800 text-sm">
                    The announcement of a Master Plan for the Port of Durban
                    this week should create a sense of relief especially as it
                    follows close on the commitment to separate Transnet
                    National Ports Authority (TNPA) from Transnet SOC to form an
                    independent subsidiary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBlack />
      </main>
    </Fragment>
  );
};

export default Media;
