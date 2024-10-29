import React, { useState } from 'react';

const images = [
  'https://th.bing.com/th/id/R.29460b3ec834207ee430620b9a220b19?rik=gf%2bSfS7tAKEdLg&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.3kvjsrK--8sBTk9Z0vufcAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.zh6pWsTO2p1HAXA6X33U9AHaFj?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.oTPpfdHzoZl1WKL4BsUaDgHaGX?w=1200&h=1031&rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/originals/42/02/a9/4202a941e24407a723e60f416fb45602.jpg',
  'https://th.bing.com/th/id/OIP.vx6ySlOUvdd6m5JExM04rQHaLF?w=900&h=1347&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.29460b3ec834207ee430620b9a220b19?rik=gf%2bSfS7tAKEdLg&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.3kvjsrK--8sBTk9Z0vufcAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.zh6pWsTO2p1HAXA6X33U9AHaFj?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.oTPpfdHzoZl1WKL4BsUaDgHaGX?w=1200&h=1031&rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/originals/42/02/a9/4202a941e24407a723e60f416fb45602.jpg',
  'https://th.bing.com/th/id/OIP.vx6ySlOUvdd6m5JExM04rQHaLF?w=900&h=1347&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.29460b3ec834207ee430620b9a220b19?rik=gf%2bSfS7tAKEdLg&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.3kvjsrK--8sBTk9Z0vufcAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.zh6pWsTO2p1HAXA6X33U9AHaFj?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.oTPpfdHzoZl1WKL4BsUaDgHaGX?w=1200&h=1031&rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/originals/42/02/a9/4202a941e24407a723e60f416fb45602.jpg',
  'https://th.bing.com/th/id/OIP.vx6ySlOUvdd6m5JExM04rQHaLF?w=900&h=1347&rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.29460b3ec834207ee430620b9a220b19?rik=gf%2bSfS7tAKEdLg&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.3kvjsrK--8sBTk9Z0vufcAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.zh6pWsTO2p1HAXA6X33U9AHaFj?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/OIP.oTPpfdHzoZl1WKL4BsUaDgHaGX?w=1200&h=1031&rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/originals/42/02/a9/4202a941e24407a723e60f416fb45602.jpg',
  'https://th.bing.com/th/id/OIP.vx6ySlOUvdd6m5JExM04rQHaLF?w=900&h=1347&rs=1&pid=ImgDetMain'
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
      <h2 className="text-3xl font-bold mb-4 text-center font-maname">ලී දොරවල්</h2>
      <p className="font-maname mb-8 text-center">
        අලංකාර හා කල් පවත්නා ලී දොරවල් පරිපූර්ණත්වයට සකස් කර ඇති අතර, ඕනෑම අභ්යන්තරයකට ගැලපෙන පරිදි විවිධ මෝස්තර සහ ද්රව්ය වලින් ලබා ගත හැකිය.
      </p>

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
    </div>
  );
};

export default WoodenDoors;
