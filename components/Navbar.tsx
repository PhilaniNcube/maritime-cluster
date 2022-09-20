import { AnimatePresence , motion} from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

const router = useRouter()

const [open, setOpen] = useState(false)

console.log({open})

  return (
    <nav className="bg-white">
      <AnimatePresence exitBeforeEnter>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setOpen(false)}
            className="absolute z-40 top-0 left-0 right-0 w-2/3 md:w-1/4 bg-gray-600 shadow h-screen"
          >
            <p
              className="text-white text-5xl cursor-pointer absolute top-16 right-11 stroke-1 stroke-white"
              onClick={() => setOpen(false)}
            >
              &times;
            </p>
            <div className="flex text-white h-full text-xl flex-col items-center p-10 justify-around">
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
              <Link href="/about">
                <a className="hover:underline">About</a>
              </Link>
              <Link href="/team">
                <a className="hover:underline">Team</a>
              </Link>
              <Link href="/media">
                <a className="hover:underline">Media</a>
              </Link>
              <Link href="/resources">
                <a className="hover:underline">Resources</a>
              </Link>
              <Link href="/contact">
                <a className="hover:underline">Contact</a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto flex py-6 justify-between items-center px-4">
        <img
          src="/images/maritime-cluster.png"
          className="h-12 md:h-28 object-cover"
          alt="Logo"
        />
        <span
          onClick={() => setOpen(!open)}
          className="flex md:hidden space-x-4 items-center cursor-pointer"
        >
          <Menu />
          <p className="text-black text-xl">Menu</p>
        </span>

        <div className="hidden md:flex items-center space-x-3">
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
          <Link href="/team">
            <a className="hover:underline">Team</a>
          </Link>
          <Link href="/media">
            <a className="hover:underline">Media</a>
          </Link>
          <Link href="/resources">
            <a className="hover:underline">Resources</a>
          </Link>
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>
        </div>

        <span
          onClick={() => router.push("/contact")}
          className="hidden md:flex cursor-pointer justify-center items-center border border-black rounded-full px-4 py-1"
        >
          <Mail />
          <button className=" text-black text-md ml-3">Get In Touch</button>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;


const Menu = () => {
  return (


    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-black border border-black rounded-full p-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
        />
    </svg>

  );
}


const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
};
