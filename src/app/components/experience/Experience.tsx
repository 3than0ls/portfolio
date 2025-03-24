import React from "react";
import FadeInDiv from "../utils/FadeInDiv";
import experience from "../../../data/experience.json";
import ExperienceDiv from "./ExperienceDiv";

const Experience = () => {
  const experienceDivs = experience.experience.map((exp) => (
    <FadeInDiv key={exp.title + exp.company}>
      <ExperienceDiv experienceData={exp} />
    </FadeInDiv>
  ));

  return (
    <div className="px-2 md:px-24 flex flex-wrap gap-4 flex-col items-center w-full lg:items-start">
      <FadeInDiv>
        <span className="text-6xl font-bold text-left">Experience</span>
      </FadeInDiv>
      <div className="px-2 flex flex-col gap-y-8 w-full">{experienceDivs}</div>
    </div>
  );
};

export default Experience;
