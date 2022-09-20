import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlackNavbar from "../components/BlackNavbar";
import FooterBlack from "../components/FooterBlack";
import { AnimatePresence, motion } from "framer-motion";



const cards : {id: number, title: string, objectives: string[], project_leader: string, light_icon: string, dark_icon: string}[] = [
  {
    id: 1,
    title:
      "Promote Sectoral Development through Expansion of Marine Sub-Sectors",
    project_leader: "Riedau DeMaine",
    objectives: [
      "Development of the Marine Tourism and Leisure Sub-Sector",
      "Expansion of Marine Manufacturing & Boat Building",
      "Support Development of Marine Energy Supply and Production, particularly Offshore Oil & Gas",
      "Development of Commercial Fishing Activity",
      "Development of the Aquaculture Industry",
    ],
    light_icon: "/images/icons/gear-light.svg",
    dark_icon: "/images/icons/gear-dark.svg",
  },
  {
    id: 2,
    title:
      "Enhance Enterprise Development through the Promotion of Small Business, B-BBEE, woman and the Provision of Funding",
    project_leader: "Lusanda Fibi",
    objectives: [
      "Creating Meaningful Transformation within the Maritime Sector",
      "Enhancing the Contribution of Small Enterprises in the Maritime Sector",
      "Promote Funding and Incentive Support for Maritime Enterprise Development",
    ],
    light_icon: "/images/icons/building-light.svg",
    dark_icon: "/images/icons/building-dark.svg",
  },
  {
    id: 3,
    title:
      "Develop Human Resources through Education, Skills Development and Training, and Knowledge Development",
    project_leader: "Odwa Mtati",
    objectives: [
      "Promotion and awareness of Maritime Education and Training",
      "Ensure Skills Development and Training is Aligned to Industry Needs",
      "Develop Maritime and Marine Research, Innovation and Development Expertise",
      "Liaise with NMU, CMR and SAIMI for constructive alignment with their programs and strategies ",
    ],
    light_icon: "/images/icons/magnify-light.svg",
    dark_icon: "/images/icons/magnify-dark.svg",
  },
  {
    id: 4,
    title:
      "Align Government, Private Sector, Academia and Civil Society in the Quadruple Helix model",
    project_leader: "Jeremy Dobbin",
    objectives: [
      "Engage with public entities such as SAMSA, SAIMI, DEA, DoT and Transnet",
      "Engage with Academic entities such as NMU, CMR and Rhodes University",
      "Broaden the private sector membership base to all maritime sectors",
      "Keep abreast of Operation Phakisa ‘Ocean Economy’ initiatives under the Department of Environmental Affairs (DEA) ",
    ],
    light_icon: "/images/icons/link-light.svg",
    dark_icon: "/images/icons/link.svg",
  },
  {
    id: 5,
    title:
      "Support the freight and logistics activities of the locationally close two national ports, Ngqura and Port Elizabeth",
    project_leader: "Faisal Sultan",
    objectives: [
      "Support and influence Port Development Projects",
      "Assist with improving efficiencies along port value chains and intermodal connections",
      "Engage with Transnet on all its logistical spheres in order to participate or facilitate projects or research",
      "Involve the private sector in all of these activities",
    ],
    light_icon: "/images/icons/boat-light.svg",
    dark_icon: "/images/icons/boat-dark.svg",
  },
  {
    id: 6,
    title:
      "Connect the MBMC with Africa, Europe and the rest of the world via an international network of maritime clusters",
    project_leader: "Derek Zimmerman",
    objectives: [
      "Engage with the European Network of Maritime Clusters (ENMC)",
      "Facilitate the development of an African Network of Maritime Clusters (ANMC)",
      "Presentation and adoption of the Port Elizabeth Declaration, which is to support AIM 2050",
      "Support the African Union ‘2050 Africa’s Integrated Maritime (AIM) strategy",
    ],
    light_icon: "/images/icons/globe-light.svg",
    dark_icon: "/images/icons/globe.svg",
  },
];



const About: NextPage = () => {

const [selectedId, setSelectedId] = useState<null | number>(null);

console.log(selectedId)

  return (
    <Fragment>
      <Head>
        <title>About | Maritime Cluster</title>
      </Head>
      <main className="py-8 min-h-screen ">

        <div className="max-w-7xl mx-auto items-center  border-b border-black">
          <div className="grid grid-cols-5">
            <div className="col-span-5 md:col-span-2 relative">
              <div className="absolute inset-0 flex justify-end p-6">
                <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl">
                  About <br /> Us
                </h1>
              </div>
              <Image
                src="/images/about.jpg"
                alt="About"
                className="w-full h-full object-cover"
                width={829}
                height={553}
              />
            </div>
            <div className="col-span-5 md:col-span-3 p-4">
              <h2 className="text-xl md:text-2xl text-gray-700 font-bold">
                What We Do
              </h2>
              <p className="text-gray-700 py-3">
                The Nelson Mandela Bay Maritime Cluster was established in 2012
                as a joint initiative of the Nelson Mandela University, Nelson
                Mandela Bay Municipality, and the Nelson Mandela Bay Business
                Chamber and has, until recently, served as a voluntary
                association of like-minded individuals and organisations – a
                strong and diverse membership base holding regular meetings.
              </p>
              <p className="text-gray-700 py-3">
                The vision of the Mandela Bay Maritime Cluster (‘MBMC’) is to be
                a pioneering maritime cluster model for Africa, involving the
                participation of the ocean sciences, the ocean business
                community, government and its agencies, and civil society in
                responsible ocean governance (by adopting the Quadruple Helix
                Innovation Model).
              </p>
              <p className="text-gray-700 py-3">
                The mission and purpose of the Mandela Bay Maritime Cluster are
                to:
              </p>
              <ul className="text-gray-600 list-disc pl-8">
                <li>Act as an incubator of business opportunities,</li>
                <li>Provide opportunities for employment,</li>
                <li>Enhance competitiveness in the manufacturing sector,</li>
                <li>Promote innovation, research and technology,</li>
                <li>
                  Offer education, skills and expertise in the maritime fields,
                </li>
                <li>Ensure economic development of the area,</li>
                <li>
                  Facilitate joint efforts for the protection of the vulnerable
                  marine environment, and
                </li>
                <li>Promote regional cooperation and integration.</li>
              </ul>
            </div>
          </div>
          <h3 className="text-2xl text-center text-gray-700 font-bold mt-16 mb-2">
            Strategy and Objecives
          </h3>
          <p className="text-lg px-8 text-center text-gray-700 font-medium mb-4">
            The service offering and benefits to MBMC members and funders, will
            arise from the implementation of the following strategic goals and
            objectives
          </p>
          <div className="max-w-7xl mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {cards.map((card) => (
              <div key={card.id} className="w-full cursor-pointer relative">
                <div
                  onMouseEnter={() => setSelectedId(card.id)}
                  onClick={() => setSelectedId(card.id)}
                  style={{ backgroundColor: "#0066b3" }}
                  className="w-full px-4 py-8 aspect-square text-white flex flex-col justify-center text-center items-center space-y-4"
                >
                  <img className="h-16 object-cover" src={card.light_icon} />
                  <h3 className="text-base font-semibold">{card.title}</h3>
                  <small className="text-md font-bold">
                    Project Lead: {card.project_leader}
                  </small>
                </div>
                <AnimatePresence exitBeforeEnter>
                  {selectedId === card.id && (
                    <motion.div
                      onMouseLeave={() => setSelectedId(null)}
                      onClick={() => setSelectedId(null)}
                      className="bg-white px-4 text-gray-800 absolute inset-0 aspect-square flex flex-col justify-center text-center items-center space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <img
                        className="h-16 object-cover mb-2"
                        src={card.dark_icon}
                      />
                      {card.objectives.map((object, i) => (
                        <p
                          key={i}
                          className="text-sm font-bold border-b border-spacing-2 border-gray-300"
                        >
                          {object}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        <FooterBlack />
      </main>
    </Fragment>
  );
};

export default About;
