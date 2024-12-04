import React from 'react';
import { Link } from 'react-router-dom';
import { Crop } from '../types';

interface CropCardProps {
  crop: Crop;
}

export const CropCard: React.FC<CropCardProps> = ({ crop }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={crop.imageUrl} 
        alt={crop.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{crop.name}</h3>
        <p className="text-gray-600 mt-2">{crop.description}</p>
        <Link
          to={`/crop/${crop.id}`}
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};