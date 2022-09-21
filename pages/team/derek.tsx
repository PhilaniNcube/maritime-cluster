import Image from "next/future/image";
import Head from "next/head";
import React, { Fragment } from "react";

const Derek = () => {

  const items = [
    "South African ocean economy within the Operation Phakisa framework on behalf of the Department of Forestry, Fisheries and Environment in 2022.",
    "The Business Plan for the East London industrial Development Zone, which included rail upgrades, port logistics and development.",
    "The Masterplan for the Coega Industrial Development Zone including Aquaculture and the logistics of the Deepwater Port of Ngqura for the IDZ",
    "The preparation of a number a feasibility study reports and business plans for port infrastructure and developments in SA, Africa and the Middle East",
    "That Feasibility Study and Business Plan for the Waterfront in the Port of Port Elizabeth",
    "The Eastern Cape Ocean Economy and road map to highlight commercial opportunities",
    "The preparation of the maritime cluster support framework for this cluster",
  ];

  return (
    <Fragment>
      <Head>
        <title>Derek Zimmerman| Deputy Chairperson</title>
      </Head>
      <main className="my-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/derek.jpg"
              alt="Derek Zimmerman"
              className="h-full aspect-square object-cover object-center"
              width={1154}
              height={1731}
            />
            <div className="w-full px-6">
              <h1 className="text-2xl text-slate-600 font-medium">
                Derek Zimmerman
              </h1>
              <h2 className="text-xl font-bold text-slate-500 mt-2">
                Position: Deputy Chairperson
              </h2>
              <p className="mt-6 text-lg">
                Derek has been involved in the development finance and economics
                realm for the past 30 years with a strong emphasis on
                infrastructure, industrial development, renewable energy and the
                Ocean Economy.
              </p>
              <p className="mt-6 text-lg">
                Derek lectures Maritime Economics at Nelson Mandela University
                at a Masters level, and is Deputy Chairperson of the MBMC.
              </p>
              <p className="mt-6 text-lg">
                Projects of relevance to our Maritime Cluster are as follows:
              </p>

              <ul className="list-disc px-8">
               {items.map((item, i) => (
                <li key={i} className="text-sm font-medium pl-6 text-slate-800 py-3">{item}</li>
               ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Derek;
