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
        className="h-screen w-full bg-cream"
      >
        
        <div className="max-w-screen-lg ml-0 flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full mx-10">
            <div className="container flex flex-row text-xl sm:text-7xl whitespace-nowrap font-bold text-black ">
              <p className="text-2xl ">
                <Typing/><span className="typed-text"></span>
                <span className="cursor">&nbsp;</span>
              </p>
            </div>
            <p className="text-gray-500 py-4 max-w-md">
              Looking for challenging role to utilize my skills that can
              contribute to the company's growth as well as enhance my knowledge
              by exploring new things.
            </p>

            <div>
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
          </div>
          <div className=" w-80 h-42 mb-14">
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl ml-96  md:w-full bg-slate-500"
            />
          </div>
          
        </div>

     
      </div>
    </>
  );
};

export default Home;
