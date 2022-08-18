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
        <title>Useful Resources | Maritime Cluster</title>
      </Head>
      <main className="py-8 min-h-screen ">
        <BlackNavbar />
        <div className="max-w-7xl mx-auto items-center border-t border-b border-black">
          <div className="grid grid-cols-5">
            <div className="col-span-5 grid grid-cols-2 relative">
              <div className="absolute w-1/2 inset-0 flex flex-col justify-center items-end bg-slate-800/70 p-3">
                <h1 className="font-bold text-white text-3xl text-right md:text-5xl lg:text-6xl">
                  Useful <br /> Resources
                </h1>
                <p className="text-md mt-3 text-white max-w-[40ch] text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  sint veritatis natus optio dolorem, quisquam ipsam.
                </p>
              </div>
              <img
                src="/images/resources.jpg"
                alt="Media"
                className="w-full h-80 object-cover col-span-2"
                width={1400}
                height={944}
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div
              className="max-w-7xl mx-auto border-t border-spacing-6 py-4 mt-10 border-black  grid grid-cols-2 lg:grid-cols-5"
              style={{ color: "#0066b3" }}
            >
              <Link href="/resources/gallery">
                <a className="text-lg font-bold  uppercase text-center">
                  Gallery
                </a>
              </Link>
              <Link href="/resources/useful-contacts">
                <a className="text-lg font-bold  uppercase text-center">
                  Useful Contacts
                </a>
              </Link>
              <Link href="/resources/research">
                <a className="text-lg font-bold  uppercase text-center">
                  Research & Publications
                </a>
              </Link>
              <Link href="/resources/regulatory">
                <a className="text-lg font-bold  uppercase text-center">
                  Regulatory
                </a>
              </Link>
              <Link href="/resources/documents">
                <a className="text-lg font-bold  uppercase text-center">
                  Public Documents
                </a>
              </Link>
            </div>
            <div className="max-w-7xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
              <div className="w-full">
                <Image
                  src="/images/cranes.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">January 2020</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem, ipsum dolor.
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/cranes_2.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">February 2020</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/containers.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">April 2021</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/yard.jpg"
                  width={1000}
                  height={666}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">April 2021</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/vessel.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">April 2021</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/dock-worker.jpg"
                  width={1000}
                  height={667}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">April 2021</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/barge.jpg"
                  width={1000}
                  height={553}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">April 2021</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
                </div>
              </div>
              <div className="w-full">
                <Image
                  src="/images/logistics.jpg"
                  width={1000}
                  height={562}
                  alt="news"
                  className="w-full aspect-video object-cover"
                />
                <div className=" px-3 py-4">
                  <p className="mt-4 text-gray-800 text-sm">April 2021</p>
                  <h3 className="text-blue-600 text-md font-bold">
                    Lorem ipsum dolor sit amet consectetur.
                  </h3>
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
