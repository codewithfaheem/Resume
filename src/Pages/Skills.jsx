/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Skills.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full flex flex-col xl:w-[70%] pb-16">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="" />
        </div>
        <div className="relative p-6">
            <SkillsCards />
        </div>
      </div>
    </div>
  );
};

export default Skills;
