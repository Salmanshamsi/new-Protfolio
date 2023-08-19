import React, { useState } from 'react';

const ProgressSection = ({percent, skill}) => {
  const [currentSkill, setCurrentSkill] = useState({ percent,skill });
  const circumference = 2 * (22 / 7) * 50; // Assuming r is 50 in your SVG

  return (
    <div className="flex items-center justify-center m-0">
      <svg className="transform -rotate-90 w-72 h-72">
        <circle cx={145} cy={145} r={50} stroke="currentColor" strokeWidth={10} fill="transparent" className="text-gray-700" />
        <circle
          cx={145}
          cy={145}
          r={50}
          stroke="currentColor"
          strokeWidth={10}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
          className="text-blue-500"
        />
      </svg>
      <span className="absolute text-2xl text-white">{`${currentSkill.skill}`}</span>
    </div>
  );
};

export default ProgressSection;
