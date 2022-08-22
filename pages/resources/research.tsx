import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import BlackNavbar from "../../components/BlackNavbar";
import FooterBlack from "../../components/FooterBlack";


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
                <a className="text-lg font-bold text-gray-500 uppercase text-center">
                  Gallery
                </a>
              </Link>
              <Link href="/resources/useful-contacts">
                <a className="text-lg font-bold text-gray-500 uppercase text-center">
                  Useful Contacts
                </a>
              </Link>
              <Link href="/resources/research">
                <a className="text-lg font-bold text-blue-500 uppercase text-center">
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
              <Disclosure>
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button className="bg-gray-200 text-gray-700 flex items-center space-x-6 rounded px-5 py-2">
                      <span className="font-bold">
                        NMBCM Presentations-Frame workplan
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500 transition-all duration`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <Link
                        href="/images/framework.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <a className="font-bold my-2 py-2 px-6 bg-sky-200 rounded text-gray-800">
                          View Document
                        </a>
                      </Link>
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button className="bg-gray-200 mt-3 text-gray-700 flex items-center space-x-6 rounded px-5 py-2">
                      <span className="font-bold">
                        The Ocean Economy of the Bay, & Local Maritime
                        Opportunities
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500 transition-all duration`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      <Link
                        href="/images/vladivostok.pdf"
                        target="_blank"
                        rel="noopener"
                      >
                        <a className="font-bold my-2 py-2 px-6 bg-sky-200 rounded text-gray-800">
                          View Document
                        </a>
                      </Link>
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button className="bg-gray-200 text-gray-700 flex items-center space-x-6 mt-3 rounded px-5 py-2">
                      <span className="font-bold">Journal Papers</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500 transition-all duration`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Iure harum eius porro quaerat tempora illum asperiores
                      pariatur soluta? Doloremque pariatur nobis praesentium
                      necessitatibus natus rerum?
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <Fragment>
                    <Disclosure.Button className="bg-gray-200 text-gray-700 flex items-center space-x-6 mt-3 rounded px-5 py-2">
                      <span className="font-bold">
                        International Conferences
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-gray-500 transition-all duration`}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore ab distinctio aperiam impedit voluptatibus
                      doloremque accusamus optio voluptate praesentium animi.
                    </Disclosure.Panel>
                  </Fragment>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
        <FooterBlack />
      </main>
    </Fragment>
  );
};

export default Media;
