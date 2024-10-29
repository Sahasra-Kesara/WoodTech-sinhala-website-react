import React, { useState } from 'react';

const images = [
  'https://th.bing.com/th/id/R.0172e06795aff0f57f5f98b8eac293ff?rik=FYkJVQydzaKRNw&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.T0OosjbsckEbIeQxkvxAUAHaI4?w=2250&h=2700&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.wajAq5O1DXOIYzTPbI5lTwHaFU?rs=1&pid=ImgDetMain',
  'https://endurancedoors.co.uk/wp-content/uploads/Fieldside-Urban-1-1-scaled-e1714475038723-450x550.jpg',
  'https://builderssupplyco.com/wp-content/uploads/2019/11/service_windows-doors.jpg',
  'https://admiralhomespace.com/wp-content/uploads/2019/06/Double-Front-Door-modern.jpg',
  'https://th.bing.com/th/id/R.0172e06795aff0f57f5f98b8eac293ff?rik=FYkJVQydzaKRNw&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.T0OosjbsckEbIeQxkvxAUAHaI4?w=2250&h=2700&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.wajAq5O1DXOIYzTPbI5lTwHaFU?rs=1&pid=ImgDetMain',
  'https://endurancedoors.co.uk/wp-content/uploads/Fieldside-Urban-1-1-scaled-e1714475038723-450x550.jpg',
  'https://builderssupplyco.com/wp-content/uploads/2019/11/service_windows-doors.jpg',
  'https://admiralhomespace.com/wp-content/uploads/2019/06/Double-Front-Door-modern.jpg',
  'https://th.bing.com/th/id/R.0172e06795aff0f57f5f98b8eac293ff?rik=FYkJVQydzaKRNw&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.T0OosjbsckEbIeQxkvxAUAHaI4?w=2250&h=2700&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.wajAq5O1DXOIYzTPbI5lTwHaFU?rs=1&pid=ImgDetMain',
  'https://endurancedoors.co.uk/wp-content/uploads/Fieldside-Urban-1-1-scaled-e1714475038723-450x550.jpg',
  'https://builderssupplyco.com/wp-content/uploads/2019/11/service_windows-doors.jpg',
  'https://admiralhomespace.com/wp-content/uploads/2019/06/Double-Front-Door-modern.jpg',
  'https://th.bing.com/th/id/R.0172e06795aff0f57f5f98b8eac293ff?rik=FYkJVQydzaKRNw&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.T0OosjbsckEbIeQxkvxAUAHaI4?w=2250&h=2700&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.wajAq5O1DXOIYzTPbI5lTwHaFU?rs=1&pid=ImgDetMain',
  'https://endurancedoors.co.uk/wp-content/uploads/Fieldside-Urban-1-1-scaled-e1714475038723-450x550.jpg',
  'https://builderssupplyco.com/wp-content/uploads/2019/11/service_windows-doors.jpg',
  'https://admiralhomespace.com/wp-content/uploads/2019/06/Double-Front-Door-modern.jpg'
];

const WoodenDoors = () => {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="p-8">
      <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 font-maname text-center">දොර ජනෙල්</h2>
      <p className='font-maname text-center'>
        ඕනෑම ශෛලියකට සහ පිරිවිතරයකට ගැලපෙන පරිදි නිර්මාණය කර ඇති දොරවල් සඳහා අභිරුචි-සාදන ලද කවුළු, ඔබේ අවකාශයට අලංකාරය සහ ක්රියාකාරිත්වය එකතු කරයි.
      </p>
    </div>

      {/* Responsive Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => openPopup(image)}
          >
            <img src={image} alt={`Wooden Door ${index + 1}`} className="w-full h-full object-cover"  style={{ height: '350px' }}/>
          </div>
        ))}
      </div>

      {/* Image Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={closePopup}
        >
          <img src={popupImage} alt="Popup" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default WoodenDoors;
