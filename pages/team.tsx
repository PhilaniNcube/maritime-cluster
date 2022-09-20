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

        <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[50vh] items-center  border-b border-black">
          <div className="grid grid-cols-5 mb-5">
            <div className="col-span-5 md:col-span-2 relative">
              <div className="absolute z-30 top-0 right-0 flex justify-end p-6">
                <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                  Our Team
                </h1>
              </div>
              <img
                src="/images/team.jpg"
                alt="Ship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-5 md:col-span-3 p-4 grid grid-cols-2 md:grid-cols-3 gap-4 ">
                <Link href="/images/cpt_faisal_profile.pdf" passHref>
                    <div className="w-full cursor-pointer">
                      <Image
                        src="/images/faisal.jpeg"
                        alt="team member"
                        className="aspect-square object-cover rounded w-full"
                        width={500}
                        height={500}
                      />
                      <p className="cursor-pointer text-md text-gray-600">Captain Faisal Sultan</p>
                      <p className="text-blue-500 font-bold text-lg">Chairperson</p>
                    </div>
                </Link>
                <Link href="/images/derek_profile.pptx">
                    <div className="w-full cursor-pointer">
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
                  </Link>

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
              <Link href="/images/lusanda_profile.docx">
                  <div className="w-full cursor-pointer">
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
              </Link>
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
          <div className="relative mt-8 w-full">
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
                  Peter Myles, past Chairperson and founding member of the MBMC
                </span>
              </p>
            </div>
          </div>
          <div className="w-full my-8">
            <h2 className="text-4xl text-gray-700 font-bold uppercase">
              Our Partners
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              <div className=" rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/saimi.png"
                  className="h-16 object-cover"
                />

              </div>
              <div className=" rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/chamber.png"
                  className="h-16 object-cover"
                />

              </div>
              <div className=" rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/nmu.png"
                  className="w-full object-cover"
                />

              </div>

              <div className=" rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/nmbm.png"
                  className="h-16 object-cover"
                />{" "}

              </div>
              <div className=" rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/transnet.png"
                  className="h-full object-cover"
                />{" "}

              </div>
              <div className=" rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/rial.jpeg"
                  className="w-3/4 object-cover"
                />
              </div>
              <div className=" rounded flex flex-col justify-center items-center h-36">
                <img
                  src="/images/coega.png"
                  className="w-2/5 object-cover"
                />{" "}

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
