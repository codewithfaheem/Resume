/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SkillCards.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
    {/* <LazyMotion features={domAnimation} strict> */}

      {skills.map((skill, index) => (
        <div key={index}
          className="card w-[300px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-600 cursor-default"
        >
          <div className="w-full flex items-center gap-2 p-1 flex-col">
            <img
              className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-primary-400 text-grayscale-950 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
              }}
            >
              {skill.description}
            </span>
          </div>
        </div>
      ))}
    {/* </LazyMotion> */}
    </div>
  );
};

export default SkillsCards;