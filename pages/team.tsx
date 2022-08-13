import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import BlackNavbar from "../components/BlackNavbar";
import Footer from "../components/Footer";
import FooterBlack from "../components/FooterBlack";
import Navbar from "../components/Navbar";

const Team: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Team | Maritime Cluster</title>
      </Head>
      <main className="py-8 bg-center bg-cover bg-no-repeat min-h-screen ">
        <BlackNavbar />
        <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[50vh] items-center border-t border-b border-black">
          <div className="grid grid-cols-5">
            <div className="col-span-5 md:col-span-2 relative">
              <div className="absolute z-30 inset-0 flex justify-end p-6">
                <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                  Our Team
                </h1>
              </div>
              <Image
                src="/images/ship.jpg"
                alt="Ship"
                className="w-full object-cover"
                width={1500}
                height={999}
              />
            </div>
            <div className="col-span-5 md:col-span-3 p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="w-full">
                <Image
                  src="/images/faisal.jpeg"
                  alt="team member"
                  className="aspect-square object-cover rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Captain Faisal Sultan</p>
                <p className="text-blue-500 font-bold text-lg">Chairperson</p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/derek.jpg"
                  alt="team member"
                  className="aspect-square object-cover object-top rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Mr Derek Zimmerman</p>
                <p className="text-blue-500 font-bold text-lg">
                  Deputy Chairperson
                </p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/odwa.jpg"
                  alt="team member"
                  className="aspect-square object-cover rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Mr Odwa Mtati</p>
                <p className="text-blue-500 font-bold text-lg">Board Member</p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/person_6.jpg"
                  alt="team member"
                  className="aspect-square object-cover rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Mr John Lawlor </p>
                <p className="text-blue-500 font-bold text-lg">Board Member</p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/person_2.jpg"
                  alt="team member"
                  className="aspect-square object-cover rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Mr Lusanda Fibi </p>
                <p className="text-blue-500 font-bold text-lg">Board Member</p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/person_6.jpg"
                  alt="team member"
                  className="aspect-square object-cover rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Mr Graham Taylor </p>
                <p className="text-blue-500 font-bold text-lg">Board Member</p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/person_3.jpg"
                  alt="team member"
                  className="aspect-square object-cover rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Dr Oswald Franks </p>
                <p className="text-blue-500 font-bold text-lg">Board Member</p>
              </div>
              <div className="w-full">
                <Image
                  src="/images/person_2.jpg"
                  alt="team member"
                  className="aspect-square object-cover rounded w-full"
                  width={500}
                  height={500}
                />
                <p className="text-md text-gray-600">Mr Riedau De Maine </p>
                <p className="text-blue-500 font-bold text-lg">Board Member</p>
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <img
              src="/images/boat.jpg"
              alt="boat"
              width={900}
              height={600}
              className="w-full h-[60vh] object-cover"
            />
            <div className="z-30 absolute inset-0 flex p-8 justify-start items-start">
              <p className="text-xl font-bold text-gray-700 italic max-w-[55ch]">
                'The Ocean is Everyone's Business' <br />
                <span className="text-sm">
                  Peter Myles, past Chairperson and founding member of the
                  MBMC
                </span>
              </p>
            </div>
          </div>
          <div className="w-full my-8">
            <h2 className="text-4xl text-gray-700 font-bold uppercase">
              Our Partners
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/005-zoom.svg"
                  className="h-16 w-16"
                />
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  SAIMI
                </p>
              </div>
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/011-bar chart.svg"
                  className="h-16 w-16"
                />
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  Nelson Mandela Bay Business Chamber
                </p>
              </div>
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/009-high temperature.svg"
                  className="h-16 w-16"
                />
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  Nelson Mandela University
                </p>
              </div>
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/014-resize.svg"
                  className="h-16 w-16"
                />{" "}
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  Nelson Mandela University
                </p>
              </div>
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/001-heart rate.svg"
                  className="h-16 w-16"
                />{" "}
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  Nelson Mandela Bay Municipality
                </p>
              </div>
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/001-heart rate.svg"
                  className="h-16 w-16"
                />{" "}
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  Transnet and TNPA
                </p>
              </div>
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/001-heart rate.svg"
                  className="h-16 w-16"
                />{" "}
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  Rial Fishing (Pty) Ltd
                </p>
              </div>
              <div className="bg-gray-100 rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/icons/svg/001-heart rate.svg"
                  className="h-16 w-16"
                />{" "}
                <p className="text-xl text-center text-gray-800 font-bold mt-2">
                  Coega Development Corporation
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterBlack />
      </main>
    </Fragment>
  );
};

export default Team;