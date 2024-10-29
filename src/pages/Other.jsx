import React, { useState } from 'react';

const images = [
  'https://th.bing.com/th/id/OIP.rU6YA3Y4tSxEoSH3lEDpKgHaHa?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.3kvjsrK--8sBTk9Z0vufcAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.af2c642c1d01df6215dc234a7ecd512a?rik=GTf%2fs63dtxJGgA&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.wXeqa0e-JShEiBes5gc8CAHaHa?rs=1&pid=ImgDetMain',
  'https://images-na.ssl-images-amazon.com/images/I/71R5CSSRAzL._AC_SL1500_.jpg',
  'https://th.bing.com/th/id/R.d0f61f6238a4a287bc83bc64de6173ef?rik=QQrfhK22GRyubg&pid=ImgRaw&r=0'
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
      <h2 className="text-4xl font-bold mb-4 text-center font-maname">වෙනත් සේවාවන්</h2>
      <p className='font-maname text-center'>
        ගෘහ භාණ්ඩ, කැබිනට් මණ්ඩලය සහ තවත් බොහෝ දේ ඇතුළුව ඔබේ පිරිවිතරයන්ට ගැලපෙන වෙනත් අභිරුචි වඩු වැඩ ව්යාපෘති.
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
            <img src={image} alt={`Wooden Door ${index + 1}`} className="w-full h-full object-cover" style={{ height: '350px' }}/>
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
