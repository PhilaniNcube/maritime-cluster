import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlackNavbar from "../components/BlackNavbar";
import FooterBlack from "../components/FooterBlack";

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About | Maritime Cluster</title>
      </Head>
      <main className="py-8 min-h-screen ">
        <BlackNavbar />
        <div className="max-w-7xl mx-auto items-center border-t border-b border-black">


          <div className="grid grid-cols-5">
            <div className="col-span-5 md:col-span-2 relative">
              <div className="absolute inset-0 flex justify-end p-6">
                <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                  About <br /> Us
                </h1>
              </div>
              <Image
                src="/images/port.jpg"
                alt="Port"
                className="w-full object-cover"
                width={1400}
                height={944}
              />
            </div>
            <div className="col-span-5 md:col-span-3 p-4">
              <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
                What We Do
              </h2>
              <p className="text-gray-700 py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                corrupti dolore. Quis qui obcaecati sapiente voluptas. Natus sit
                id praesentium, quaerat quod dicta sint? Qui nobis quibusdam
                eos. Nisi, eum! Porro ab et distinctio placeat, corrupti minus
                doloribus, unde incidunt dolore officiis culpa natus. Commodi
                saepe quos provident unde dolorum!
              </p>
              <p className="text-gray-700 py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                corrupti dolore. Quis qui obcaecati sapiente voluptas. Natus sit
                id praesentium, quaerat quod dicta sint? Qui nobis quibusdam
                eos. Nisi, eum! Porro ab et distinctio
              </p>
              <p className="text-gray-700 py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                corrupti dolore. Quis qui obcaecati sapiente
              </p>
              <ul className="text-gray-600 list-disc pl-8">
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  saepe, quos quisquam temporibus aliquam amet.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  saepe, quos quisquam temporibus aliquam amet.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  saepe, quos quisquam temporibus aliquam amet.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  saepe, quos quisquam temporibus aliquam amet.
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  saepe, quos quisquam temporibus aliquam amet.
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            <div className="bg-blue-600 py-16 px-6 w-full flex flex-col justify-center items-center text-center text-white">
               <img src="/images/icons/svg/018-productivity.svg" alt="settings" className="h-16 text-white mb-8 w-16 object-cover"/>
               <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed maiores harum facilis repellat? Possimus porro quos vel nisi recusandae veritatis cumque consequatur.</p>
            </div>
            <div className="bg-blue-600 py-16 px-6 w-full flex flex-col justify-center items-center text-center text-white">
               <img src="/images/icons/svg/019-discount.svg" alt="settings" className="h-16 text-white mb-8 w-16 object-cover"/>
               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius incidunt iste explicabo assumenda voluptatibus corrupti eum laborum. Minus cumque corrupti vel amet.</p>
            </div>
            <div className="bg-blue-600 py-16 px-6 w-full flex flex-col justify-center items-center text-center text-white">
               <img src="/images/icons/svg/005-zoom.svg" alt="settings" className="h-16 text-white mb-8 w-16 object-cover"/>
               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius incidunt iste explicabo assumenda voluptatibus corrupti eum laborum. Minus cumque corrupti vel amet.</p>
            </div>
            <div className="bg-blue-600 py-16 px-6 w-full flex flex-col justify-center items-center text-center text-white">
               <img src="/images/icons/svg/015-speedometer.svg" alt="settings" className="h-16 text-white mb-8 w-16 object-cover"/>
               <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed maiores harum facilis repellat? Possimus porro quos vel nisi recusandae veritatis cumque consequatur.</p>
            </div>
            <div className="bg-blue-600 py-16 px-6 w-full flex flex-col justify-center items-center text-center text-white">
               <img src="/images/icons/svg/021-salary.svg" alt="settings" className="h-16 text-white mb-8 w-16 object-cover"/>
               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius incidunt iste explicabo assumenda voluptatibus corrupti eum laborum. Minus cumque corrupti vel amet.</p>
            </div>
            <div className="bg-blue-600 py-16 px-6 w-full flex flex-col justify-center items-center text-center text-white">
               <img src="/images/icons/svg/031-demotion.svg" alt="settings" className="h-16 text-white mb-8 w-16 object-cover"/>
               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius incidunt iste explicabo assumenda voluptatibus corrupti eum laborum. Minus cumque corrupti vel amet.</p>
            </div>
          </div>
        </div>
        <FooterBlack />
      </main>
    </Fragment>
  );
};

export default About;
