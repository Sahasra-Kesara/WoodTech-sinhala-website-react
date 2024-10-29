import React, { useState } from 'react';

const images = [
  'https://th.bing.com/th/id/R.f18e0a4d35bc1a211895a90fa16c79ce?rik=Zg%2bkf3FjeAg8TA&pid=ImgRaw&r=0',
  'https://3.bp.blogspot.com/-365XGyEC43A/Wl4dFEpqAkI/AAAAAAAAAEY/W8z-DA2GcWEvD3VS5W9J0HRXniEqjc4cwCLcBGAs/s1600/wooden+wind+0.jpg',
  'https://housing.com/news/wp-content/uploads/2022/11/Why-draught-proofing-is-important-for-wooden-windows-UK_.jpg',
  'https://www.insulatingwindows.co.uk/wp-content/uploads/2020/03/HICKORY-min-2.jpg',
  'https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/1392/5-things-to-mak_2584fcdbd9fa6b.jpg',
  'https://th.bing.com/th/id/OIP.NTJDqAbGfeCKLTEMzGrVpAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.f18e0a4d35bc1a211895a90fa16c79ce?rik=Zg%2bkf3FjeAg8TA&pid=ImgRaw&r=0',
  'https://3.bp.blogspot.com/-365XGyEC43A/Wl4dFEpqAkI/AAAAAAAAAEY/W8z-DA2GcWEvD3VS5W9J0HRXniEqjc4cwCLcBGAs/s1600/wooden+wind+0.jpg',
  'https://housing.com/news/wp-content/uploads/2022/11/Why-draught-proofing-is-important-for-wooden-windows-UK_.jpg',
  'https://www.insulatingwindows.co.uk/wp-content/uploads/2020/03/HICKORY-min-2.jpg',
  'https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/1392/5-things-to-mak_2584fcdbd9fa6b.jpg',
  'https://th.bing.com/th/id/OIP.NTJDqAbGfeCKLTEMzGrVpAAAAA?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.f18e0a4d35bc1a211895a90fa16c79ce?rik=Zg%2bkf3FjeAg8TA&pid=ImgRaw&r=0',
  'https://3.bp.blogspot.com/-365XGyEC43A/Wl4dFEpqAkI/AAAAAAAAAEY/W8z-DA2GcWEvD3VS5W9J0HRXniEqjc4cwCLcBGAs/s1600/wooden+wind+0.jpg',
  'https://housing.com/news/wp-content/uploads/2022/11/Why-draught-proofing-is-important-for-wooden-windows-UK_.jpg',
  'https://www.insulatingwindows.co.uk/wp-content/uploads/2020/03/HICKORY-min-2.jpg',
  'https://dc69b531ebf7a086ce97-290115cc0d6de62a29c33db202ae565c.ssl.cf1.rackcdn.com/1392/5-things-to-mak_2584fcdbd9fa6b.jpg',
  'https://th.bing.com/th/id/OIP.NTJDqAbGfeCKLTEMzGrVpAAAAA?rs=1&pid=ImgDetMain'
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
      <h2 className="text-4xl font-bold mb-4 font-maname text-center">ජනේල</h2>
      <p className='font-maname text-center'>
        බලශක්ති කාර්යක්ෂමතාව සහ ශෛලිය සපයන උසස් තත්ත්වයේ කවුළු, සියලු අවකාශයන්ට ගැලපෙන පරිදි සහ දර්ශනය වැඩි දියුණු කිරීම සඳහා අභිරුචි-සාදන ලදී.
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
