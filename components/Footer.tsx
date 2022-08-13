import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {

  let date: Date = new Date()


  return (
    <footer className="py-12 px-4">
      <div className="flex justify-center space-x-4 items-center">
        <span className="bg-white rounded-full p-2">
          <FaFacebookF className="bg-white text-gray-800 h-8 w-8 " />
        </span>
        <span className="bg-white rounded-full p-2">
          <FaYoutube className="bg-white text-gray-800 h-8 w-8 " />
        </span>
        <span className="bg-white rounded-full p-2">
          <FaLinkedinIn className="bg-white text-gray-800 h-8 w-8 " />
        </span>
      </div>
      <p className="text-center text-white text-sm py-2">
        &copy; Copyright {date.getFullYear()} Nelson Mandela Bay Maritime
        Cluster
      </p>
    </footer>
  );
};
export default Footer;
