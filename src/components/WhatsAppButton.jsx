import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "+94770568688"; // Your phone number
  const message = "Hello, I need help with..."; // Default message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
      style={{ 
        zIndex: 1000,
        width: '70px',  // Set a width for the button
        height: '70px', // Set a height for the button
        display: 'flex', // Align the content centrally
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        fontSize: '24px' // Increase the font size for the icon
      }}
    >
      <i className="fab fa-whatsapp"></i> {/* FontAwesome icon */}
    </a>
  );
};

export default WhatsAppButton;
