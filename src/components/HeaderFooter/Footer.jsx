
import { BsTelegram } from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai"
import {BiLogoWhatsappSquare} from "react-icons/bi"
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
    <div className="h-64 border-t-2 flex justify-around items-center">
      <div className="cardL flex flex-col justify-center items-center gap-2">
        <h1 className="title text-3xl font-normal p-2 text-gray-100 bg-[#379237] rounded-md">
          HPC STONE
        </h1>
        <h1 className="followUsText" >
          <Link to="/contactus" className="mx-4">
            با ما کار کنید
          </Link>
        </h1>
      </div>
      <div className="cardL">
        <div className="cardItem text-sm mb-5">
          <span>ایران، سنندج، قروه</span>
        </div>
        <div className="cardItem text-sm mb-5 flex flex-col justify-center">
          <span>ehsankhwentao@gmail.com</span>
          <span>09182166666</span>
        </div>
      </div>
      <div className="cardL">
        <div className="cardItem text-sm mb-5 flex flex-col justify-center items-center gap-2">
          <span>ما را دنبال کنید</span>
          <div className="flex items-center gap-1" >
            <BsTelegram className="w-8 h-8 text-blue-600" />
            <AiFillLinkedin className="w-10 h-10 text-blue-700" />
            <BiLogoWhatsappSquare className="w-10 h-10 text-green-700" />
          </div>
        </div>
        <div className="cardItem text-sm mb-5">
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
