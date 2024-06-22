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
  name="Home"
  className="md:h-screen w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col md:flex-row"
>
  <div className="md:flex-1 mt-8 md:mt-44 md:px-8 md:pl-32 px-4 pl-0">
    <div className="mt-20">
      <p className="text-3xl font-ubuntu font-medium pl-4 md:pl-0 "> 
        <Typing />
        <span className="typed-text"></span>
        <span className="cursor">&nbsp;</span>
      </p>
      <p className="text-gray-100 py-4 max-w-md pl-4 md:pl-0"> 
        Looking for challenging roles to utilize my skills that can contribute
        to the company's growth as well as enhance my knowledge by exploring new
        things.
      </p>
    </div>
    
    <Link
      to="Projects"
      smooth
      duration={500}
      className="group text-black w-fit px-6 py-3 ml-3 lg:ml-0 my-2 flex items-center rounded-md bg-gradient-to-r text-xl font-medium from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer"
    >
      Projects
      <span className="group-hover:rotate-90 duration-300">
        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
      </span>
    </Link>
  </div>
  <div className="mb-12 mt-12 md:mt-48">
    <img
      src={HeroImage}
      alt="my profile"
      className="rounded-2xl  w-11/12 md:w-80 h-80 object-cover mx-auto bg-slate-600 md: md:mr-48 md:ml-24 " 
    />
  </div>
</div>


    </>
  );
};

export default Home;
