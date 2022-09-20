import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const FooterBlack = () => {
  let date: Date = new Date();

  return (
    <footer className="py-12 px-4">
      <div className="flex justify-center space-x-4 items-center">

      </div>
      <p className="text-center text-black text-sm py-2">
        &copy; Copyright {date.getFullYear()} Nelson Mandela Bay Maritime
        Cluster
      </p>
    </footer>
  );
};
export default FooterBlack;
