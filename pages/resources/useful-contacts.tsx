import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import BlackNavbar from "../../components/BlackNavbar";
import FooterBlack from "../../components/FooterBlack";

const UsefulContacts: NextPage = () => {

  const contacts = [
    {
      title: "Ministry of Transport",
      tel: "Tel: +27 (0)12 309 3380 / 3774",
      text: "The Department of Transport is responsible for regulation and coordination of Transportation in South Africa that is Public Transport, Rail Transportation, Civil Aviation, Maritime Transport and Road Transport",
      href: "",
      image: "https://saimi.co.za/site/uploads/contact/transport_165x110.jpg",
    },
    {
      title: "Ministry of Science & Technology",
      tel: "Tel: +27 (0)12 843 6300",
      text: "The Department of Science and Technology seeks to boost socio-economic development in South Africa through research and innovation. To achieve its goals, the Department provides leadership, an enabling environment and resources for science, technology and innovation.  ",
      href: "",
      image: "https://saimi.co.za/site/uploads/contact/science_165x110.jpg",
    },
    {
      title: "South African Maritime Safety Authority (SAMSA)",
      tel: "Tel: +27 (0)12 366 2600",
      text: "To promote South Africa's maritime interests and development and position the country as an international Maritime Centre while ensuring maritime safety, health and environmental protection. ",
      href: "",
      image: "https://saimi.co.za/site/uploads/contact/samsa_165x110.jpg",
    },
    {
      title: "Transport Education & Training Authority (TETA)",
      tel: "Tel: +27 (0)11 577 7000 / +27 (0)11 577 7040",
      text: "As TETA, our mission is - To provide an innovative Quality Assurance and Skills Development (QASD) Framework to the Transport Sector by exceeding the Government SLA and requirements in a cost effective manner by our motivated competent people.",
      href: "",
      image: "https://saimi.co.za/site/uploads/contact/teta_165x110.jpg",
    },
    {
      title: "Ministry of Higher Education",
      tel: "Tel: +27 (0)800 87 2222",
      text: "The Department of Higher Education and Training oversees universities and other post-secondary education in South Africa.",
      href: "",
      image: "https://saimi.co.za/site/uploads/contact/dhet1_165x110.png",
    },
    {
      title: "Nelson Mandela University",
      tel: "Tel: +27 (0)41 504 1111",
      text: "Nelson Mandela Metropolitan University offers an extensive range of internationally recognized certificates, diplomas and degrees up to doctoral level to match students’ academic interests and career aspirations. Courses are offered in the Faculties of Arts, Business & Economic Sciences, Education, Engineering; the Built Environment & Information Technology, Health Sciences, Law and Science.",
      href: "",
      image: "https://saimi.co.za/site/uploads/contact/nmu_165x110.png",
    },
    {
      title: "Transnet",
      tel: "Tel: +27 (0)11 308 3000",
      text: "Transnet is South Africa’s State-owned freight transport and logistics company and is the custodian of rail, ports and pipelines.",
      href: "",
      image: "https://saimi.co.za/site/uploads/contact/transnet_165x110.png",
    },
  ];


  return (
    <Fragment>
      <Head>
        <title>Useful Resources | Maritime Cluster</title>
      </Head>
      <main className="py-8 min-h-screen ">
        <div className="max-w-7xl mx-auto items-center border-b border-black">
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
                <a className="text-lg font-bold text-blue-500 uppercase text-center">
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
              <div className="w-full md:w-3/4 ">
                {contacts.map((contact, i) => (
                  <div
                    className="flex gap-4 my-6 py-4 border-b border-spacing-3 border-gray-300"
                    key={i}
                  >
                    <img
                      src={contact.image}
                      alt={contact.title}
                      className="h-44 object-cover "
                    />
                    <div className="flex-1 p-4">
                      <h3 className="font-bold text-lg text-slate-700">{contact.title}</h3>
                      <small className="text-md font-light">{contact.tel}</small>
                      <p className="text-lg font-normal text-slate-600">{contact.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <FooterBlack />
      </main>
    </Fragment>
  );
};

export default UsefulContacts;
