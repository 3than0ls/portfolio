import React from "react";

type ExperienceData = {
  title: string;
  company: string;
  span: string;
  description: string[];
};

type ExperienceDivProps = {
  experienceData: ExperienceData;
};

const ExperienceDiv = ({ experienceData }: ExperienceDivProps) => {
  const { title, company, span, description } = experienceData;
  return (
    <div className="flex flex-col leading-none">
      <div className="flex flex-col md:flex-row md:justify-between">
        <span className="font-bold text-3xl">{title}</span>
        <span className="text-gray-400 mb-0.5 md:mb-0 md:mt-2">{span}</span>
      </div>
      <span>{company}</span>
      <ul className="text-xl mt-1 list-disc list-inside leading-snug">
        {description.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceDiv;
