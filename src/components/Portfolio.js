import React from "react";
import cheapkart from "../assets/portfolio/cheapkart.jpg";
import advice from "../assets/portfolio/advice.png";
import blog from "../assets/portfolio/blog.png";
import masterai from '../assets/portfolio/masterai.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: masterai,
      demo: "",
    },
    {
      id: 2,
      src: cheapkart,
      demo: "https://swapnildevkate.github.io/CheapKart/",
    },
    {
      id: 3,
      src: blog,
      demo: "https://swapnildevkate.github.io/blogweb-reactjs/",
    },
    {
      id: 4,
      src: advice,
      demo: "https://advice-generator-react-app-steel.vercel.app/",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 mb-20">
          {portfolios.map(({ id, src, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-8 duration-200 hover:scale-105 border-amber-400 border rounded-lg "
                  onClick={function openUrlInNewTab(url) {
                    window.open(demo, "_blank");
                  }}
                >
                  Demo
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
