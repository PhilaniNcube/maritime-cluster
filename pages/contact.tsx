import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact | Maritime Cluster</title>
      </Head>
      <main
        className="py-8 bg-center bg-cover bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url(/images/horizon.jpg)" }}
      >
        <Navbar />
        <div className="max-w-7xl mx-auto h-[80vh] border-t border-b border-white grid grid-cols-5">
          <div className="col-span-5 md:col-span-3">
            <h1 className="text-3xl md:text-5xl mt-3 font-bold text-gray-700 uppercase">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              We would love to hear from you, so drop us a message!
            </p>
            <form className="mt-4">
              <div className="flex flex-col">
                <label
                  className="text-md font-bold text-gray-700"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="bg-transparent border border-gray-700 rounded-lg px-2 py-1 text-md placeholder:text-gray-500"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex flex-col mt-4">
                <label
                  className="text-md font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  className="bg-transparent border border-gray-700 rounded-lg px-2 py-1 text-md placeholder:text-gray-500"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="flex flex-col mt-4">
                <label
                  className="text-md font-bold text-gray-700"
                  htmlFor="message"
                >
                  Message:
                </label>
                <textarea
                  rows={5}
                  className="bg-transparent border border-gray-700 rounded-lg px-2 py-1 text-md placeholder:text-gray-500"
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                />
              </div>
              <button className="bg-blue-500 text-white font-bold text-lg px-12 mt-4 py-1 rounded-full">
                Submit
              </button>
            </form>
          </div>
          <div className="col-span-5 md:col-span-3 lg:col-span-2 p-8">
            <iframe
            className="w-full aspect-square"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13230.729924580619!2d25.6665891!3d-34.0006886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6dae6ad74573fc64!2sNelson%20Mandela%20University%20-%20Ocean%20Sciences%20Campus!5e0!3m2!1sen!2sza!4v1660406677788!5m2!1sen!2sza"

              loading="lazy"
            ></iframe>
          </div>
        </div>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Contact;
