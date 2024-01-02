import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import "../index.css";
import Typing from "./Typing";

const Home = () => {
  return (
    <>
    <div
  name="home"
  className="md:h-screen w-full bg-cream flex flex-col md:flex-row"
>
  <div className="md:flex-1 mt-8 md:mt-44 md:px-8 md:pl-32   ">
    <div className="mt-20">
    <p className="text-2xl font-ubuntu font-medium ">
      <Typing />
      <span className="typed-text"></span>
      <span className="cursor">&nbsp;</span>
    </p>
    </div>
    <p className="text-gray-500 py-4 max-w-md ">
      Looking for challenging roles to utilize my skills that can contribute
      to the company's growth as well as enhance my knowledge by exploring new
      things.
    </p>
    <Link
      to="portfolio"
      smooth
      duration={500}
      className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
    >
      Portfolio
      <span className="group-hover:rotate-90 duration-300">
        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
      </span>
    </Link>
  </div>
  <div className="sm:flex-col sm:flex-row mt-14 md:mt-48">
    <img
      src={HeroImage} 
      alt="my profile"
      className="rounded-2xl md:mr-48 md:ml-24 w-full md:w-80 h-72 bg-slate-500 object-fill ml-4 md:mt-8 md:mt-48 mb-16   "
    />
  </div>
</div>

    </>
  );
};

export default Home;
