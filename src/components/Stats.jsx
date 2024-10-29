import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    { label: 'පළපුරුද්ද', value: 30 },
    { label: 'නිපැයුම්', value: 400 },
    { label: 'සේවාන්', value: 20 },
  ];

  return (
    <div className="flex justify-around p-8">
  {stats.map((stat, index) => (
    <div key={index} className="text-center">
      <h3 className="text-5xl font-bold text-blue-600 font-maname">
        <CountUp
          end={stat.value}
          duration={2} // Duration of the animation in seconds
          suffix="+"
        />
      </h3>
      <p className="text-xl text-gray-700 font-maname">{stat.label}</p> {/* Increased size */}
    </div>
  ))}
</div>

  );
};

export default Stats;
