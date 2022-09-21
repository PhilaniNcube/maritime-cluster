import Image from 'next/future/image'
import Head from 'next/head'
import React, { Fragment } from 'react'

const Odwa = () => {
  return (
    <Fragment>
      <Head>
        <title>Odwa Mtati| Board Member</title>
      </Head>
      <main className="my-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/odwa.JPG"
              alt="Odwa Mtati"
              className="w-full aspect-square object-cover"
              width={2648}
              height={2619}
            />
            <div className="w-full px-6">
              <h1 className="text-2xl text-slate-600 font-medium">
                Odwa Mtati
              </h1>
              <h2 className="text-xl font-bold text-slate-500 mt-2">
                Position: Board Member
              </h2>
              <p className="mt-6 text-lg">
                He played an instrumental role as a consultant in the
                establishment of SAIMI in 2014 and formed part of the core team
                who envisioned and pioneered an entity with the critical task of
                unlocking the socio- economic potential of South Africa’s - and
                Africa’s - maritime environment. Mtati has wide-spread
                experience in various industries, in particular the blue
                economy, for which he holds a special passion. He previously
                also followed a career in the non-governmental organisational
                sector, higher education, government and the private sector.
              </p>
              <p className="mt-6 text-lg">
                He holds a Master’s Degree in Development Studies from the
                Nelson Mandela University. His past experience includes service
                as Chief Executive Officer of the Port Elizabeth Regional
                Chamber of Commerce and Industry (PERCCI) and he has served on
                and/ or led various Boards focusing on economic and social
                development, such as the Nelson Mandela Bay Tourism Board,
                Methodist Homes for the Aged, Nelson Mandela ICT Incubator and
                the Eastern Cape Gambling Board. He is currently a board member
                of the Nelson Mandela Bay Business Chamber.
              </p>
              <p className="mt-6 text-lg">
                His areas of interest are Research, Skills Development, Economic
                Development, Entrepreneurship and Innovation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Odwa
