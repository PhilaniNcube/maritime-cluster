import Image from 'next/future/image'
import Head from 'next/head'
import React, { Fragment } from 'react'

const Faisal = () => {
  return (
    <Fragment>
      <Head>
        <title>Cpt Faisal Sultan| Chairperson</title>
      </Head>
      <main className="my-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/images/faisal.jpeg"
              alt="Cpt Faisal Sultan"
              className="w-full aspect-square object-cover"
              width={1022}
              height={575}
            />
            <div className="w-full px-6">
              <h1 className="text-2xl text-slate-600 font-medium">
                Cpt Faisal Sultan
              </h1>
              <h2 className="text-xl font-bold text-slate-500 mt-2">
                Position: Chairperson
              </h2>
              <p className="mt-6 text-lg">
                Captain Faisal completed his cadetship training at sea through a
                very prestigious maritime nautical college in Warsash,
                Southampton in U.K. Faisal achieved the prestigious
                qualifications of Master Mariner from U.K.in 1989 and in the
                same year obtained command (became a Captain) on board a
                foreign-going vessel. The Master Mariner’s qualification
                entitles Faisal to a B-Tech degree. Furthermore, Faisal holds a
                diploma in business management from Damelin and is also in
                possession of an International Harbour Master’s Diploma obtained
                in 2014.
              </p>
              <p className="mt-6 text-lg">
                Showcasing as a tug master to an open-licensed pilot, holding
                open pilot’s licenses in three South African Ports
                simultaneously. He also holds a piloting license in the Port of
                Cape town and piloting experience in the Port of Saldanha. He
                held Harbour Master and Port Manager positions in the Port of
                Mossel Bay which included management of the entire port together
                with piloting duties at Single Point Mooring (SPM) and
                Conventional Buoy Mooring (CBM). He acted in the capacity of
                Marine Operations Manager and Senior manager: Port Operations in
                the Port of Port Elizabeth before eventually getting appointed
                as Senior Manager: Port Operations on 01 April 2014.
              </p>

            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Faisal
