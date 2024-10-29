import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    name: "ලී දොරවල්",
    description: "අලංකාර හා කල් පවත්නා ලී දොරවල් පරිපූර්ණත්වයට සකස් කර ඇත.",
    image: "https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/service/wooden-doors"
  },
  {
    name: "දොර ජනෙල්",
    description: "දොරවල් සඳහා අභිරුචි කවුළු ඕනෑම මෝස්තරයක් සහ පිරිවිතරයකට ගැලපේ.",
    image: "https://images.pexels.com/photos/29114487/pexels-photo-29114487/free-photo-of-colorful-modern-door-with-geometric-shadows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/service/door-windows"
  },
  {
    name: "පැන්ට්‍රි කබඩ්",
    description: "ලස්සනට නිර්මාණය කර ඇති සහ ක්රියාකාරී පැන්ට්රි කබඩ්.",
    image: "https://images.pexels.com/photos/4682113/pexels-photo-4682113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/service/pantry-cupboards"
  },
  {
    name: "ජනේල",
    description: "සියලු වර්ගවල අවකාශයන් සඳහා අභිරුචි ජනේල.",
    image: "https://images.pexels.com/photos/14707557/pexels-photo-14707557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/service/windows"
  },
  {
    name: "වෙනත්",
    description: "ඔබේ අවශ්යතා අනුව වෙනත් අභිරුචි වඩු වැඩ ව්යාපෘති.",
    image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/service/other"
  },
];

const Services = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleServiceClick = (servicePath) => {
    navigate(servicePath); // Use navigate to change the route
  };

  return (
    <section id="services" className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center font-maname">අපගේ සේවාවන්</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.name} className="rounded overflow-hidden flex flex-col max-w-xl mx-auto font-maname">
            <button 
              onClick={() => handleServiceClick(service.path)}
              className="relative block p-6 transition duration-500 ease-in-out hover:bg-blue-100"
            >
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
              <h3 className="font-semibold text-lg mb-2 font-maname">{service.name}</h3>
              <p className="text-gray-500 font-maname">{service.description}</p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
