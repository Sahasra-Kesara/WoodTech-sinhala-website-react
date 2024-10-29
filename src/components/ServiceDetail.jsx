import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceName } = useParams();

  // Here, you can fetch or define the detailed information for each service
  const serviceDetails = {
    "Wooden Doors": "Details about Wooden Doors...",
    "Door Windows": "Details about Door Windows...",
    "Pantry Cupboards": "Details about Pantry Cupboards...",
    "Windows": "Details about Windows...",
    "Other": "Details about Other services...",
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{serviceName}</h2>
      <p>{serviceDetails[serviceName] || "Service not found."}</p>
    </div>
  );
}

export default ServiceDetail;
