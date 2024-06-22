import React from "react";

export default function About() {
  return (
    <>
      <div
        name="About"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-20 text-justify ">
            Greetings! I am a dedicated Information Technology (IT) student at
            PES Modern College of Engineering in Pune. My journey in the realm
            of technology began with a Diploma in Computer Engineering from
            Government Polytechnic Osmanabad. During my academic pursuit, I have
            developed a keen interest in the dynamic world of web development.
          </p>

          <br />

          <p className="text-xl">
            Recently, I had the opportunity to apply my skills in a real-world
            setting through a web development internship at Oasis Infobyte. This
            experience not only honed my technical abilities but also fueled my
            passion for creating innovative and user-friendly web solutions.
          </p>
        </div>
      </div>
    </>
  );
}
