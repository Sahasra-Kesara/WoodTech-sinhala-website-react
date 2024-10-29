// Hero.jsx

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-10">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium font-maname">
          හොඳම තත්ත්වයේ
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold font-maname">
          තත්ත්ව නිර්මාණශීලීත්වය හමුවන තැන
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 font-maname">
          දොරේ සිට ජනෙල් දක්වා සහ ඉන් ඔබ්බට, අපි ඔබේ නිවසේ සෑම අස්සක් මුල්ලක් නෑරම අලංකාරය හා ශක්තිය ගෙන එන කාලානුරූපී කොටස් නිර්මාණය කරමු
        </p>
        {/* <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button> */}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/11112750/pexels-photo-11112750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/5502249/pexels-photo-5502249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/10827342/pexels-photo-10827342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3143127/pexels-photo-3143127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1712341478079-bff2b9fb021d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/9756489/pexels-photo-9756489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/172288/pexels-photo-172288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/355802/pexels-photo-355802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/129743/pexels-photo-129743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/325703/pexels-photo-325703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/20190887/pexels-photo-20190887/free-photo-of-wooden-violin-on-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 13,
    src: "https://images.pexels.com/photos/5089178/pexels-photo-5089178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 14,
    src: "https://images.pexels.com/photos/276656/pexels-photo-276656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 15,
    src: "https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 16,
    src: "https://images.pexels.com/photos/5824530/pexels-photo-5824530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, []);

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, [shuffleSquares]); // Fixed the missing dependency warning

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
