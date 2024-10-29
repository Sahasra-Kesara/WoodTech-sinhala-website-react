import React, { useState } from 'react';

const images = [
  'https://th.bing.com/th/id/R.3df266863c33b908824b4ec3ddfe0d61?rik=J9PMg04LEYVcTQ&pid=ImgRaw&r=0',
  'https://i.pinimg.com/originals/58/25/5c/58255c0dfc037a7a647faf6f6a73f44f.jpg',
  'https://image.made-in-china.com/2f0j00MvSELjPcZUoW/Solid-Wood-Kitchen-Cabinet-KC-007-.jpg',
  'https://image.made-in-china.com/2f0j00mBHECbPthMpl/Red-Cherry-Solid-Wood-Kitchens-Cabinets.jpg',
  'https://th.bing.com/th/id/OIP.Qw7oQwJRK-IFJuAyWhhffgHaF7?rs=1&pid=ImgDetMain',
  'https://decoramaegypt.com/wp-content/uploads/2020/08/03-2.jpg',
  'https://th.bing.com/th/id/R.3df266863c33b908824b4ec3ddfe0d61?rik=J9PMg04LEYVcTQ&pid=ImgRaw&r=0',
  'https://i.pinimg.com/originals/58/25/5c/58255c0dfc037a7a647faf6f6a73f44f.jpg',
  'https://image.made-in-china.com/2f0j00MvSELjPcZUoW/Solid-Wood-Kitchen-Cabinet-KC-007-.jpg',
  'https://image.made-in-china.com/2f0j00mBHECbPthMpl/Red-Cherry-Solid-Wood-Kitchens-Cabinets.jpg',
  'https://th.bing.com/th/id/OIP.Qw7oQwJRK-IFJuAyWhhffgHaF7?rs=1&pid=ImgDetMain',
  'https://decoramaegypt.com/wp-content/uploads/2020/08/03-2.jpg',
  'https://th.bing.com/th/id/R.3df266863c33b908824b4ec3ddfe0d61?rik=J9PMg04LEYVcTQ&pid=ImgRaw&r=0',
  'https://i.pinimg.com/originals/58/25/5c/58255c0dfc037a7a647faf6f6a73f44f.jpg',
  'https://image.made-in-china.com/2f0j00MvSELjPcZUoW/Solid-Wood-Kitchen-Cabinet-KC-007-.jpg',
  'https://image.made-in-china.com/2f0j00mBHECbPthMpl/Red-Cherry-Solid-Wood-Kitchens-Cabinets.jpg',
  'https://th.bing.com/th/id/OIP.Qw7oQwJRK-IFJuAyWhhffgHaF7?rs=1&pid=ImgDetMain',
  'https://decoramaegypt.com/wp-content/uploads/2020/08/03-2.jpg'
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
    <div className="p-8 mt-10">
      <div className="p-8">
      <h2 className="text-4xl font-bold mb-4 font-maname text-center">පැන්ට්රි කබඩ්</h2>
      <p className='font-maname text-center'>
        ඔබේ මුළුතැන්ගෙයි අවශ්යතා සපුරාලීම සඳහා සකස් කරන ලද ප්රශස්ත ගබඩා කිරීම සහ සංවිධානය කිරීම සඳහා නිර්මාණය කර ඇති විලාසිතාමය හා ප්රායෝගික පැන්ට්රි කබඩ්.
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
