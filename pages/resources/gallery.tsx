import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import BlackNavbar from "../../components/BlackNavbar";
import FooterBlack from "../../components/FooterBlack";

const Gallery: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Useful Resources | Maritime Cluster</title>
      </Head>
      <main className="py-8 min-h-screen ">

        <div className="max-w-7xl mx-auto items-center  border-b border-black">
          <div className="grid grid-cols-5">
            <div className="col-span-5 grid grid-cols-2 relative">
              <div className="absolute w-1/2 inset-0 flex flex-col items-end bg-slate-800/70 p-3">
                <h1 className="font-bold text-white text-3xl text-right md:text-5xl lg:text-6xl">
                  Useful <br /> Resources
                </h1>
                <p className="text-md mt-3 text-white max-w-[40ch] text-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  sint veritatis natus optio dolorem, quisquam ipsam.
                </p>
              </div>
              <img
                src="/images/controller.jpg"
                alt="Media"
                className="w-full h-80 object-cover col-span-2"
                width={1400}
                height={944}
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-3 mt-3">
              <Link href="/resources/gallery">
                <a className="text-lg font-bold text-blue-500 uppercase text-center">
                  Gallery
                </a>
              </Link>
              <Link href="/resources/useful-contacts">
                <a className="text-lg font-bold text-gray-500 uppercase text-center">
                  Useful Contacts
                </a>
              </Link>
              <Link href="/resources/research">
                <a className="text-lg font-bold text-gray-500 uppercase text-center">
                  Research & Publications
                </a>
              </Link>
              <Link href="#">
                <a className="text-lg font-bold text-gray-500 uppercase text-center">
                  Regulatory
                </a>
              </Link>
              <Link href="#">
                <a className="text-lg font-bold text-gray-500 uppercase text-center">
                  Public Documents
                </a>
              </Link>
            </div>
            <div className="max-w-7xl mx-auto my-8 px-4">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                <Link href="/images/meeting.jpg" passHref>
                  <img
                    src="/images/meeting.jpg"
                    alt="gallery"
                    className="bg-slate-200 object-cover w-full aspect-video rounded-lg hover:shadow flex justify-center items-center font-bold text-3xl text-gray-700"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FooterBlack />
      </main>
    </Fragment>
  );
};

export default Gallery;
