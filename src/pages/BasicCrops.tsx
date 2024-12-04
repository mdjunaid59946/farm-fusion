import React from 'react';
import { CropCard } from '../components/CropCard';
import { crops } from '../data/crops';

export const BasicCrops = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Basic Crop Guide
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map(crop => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>
    </div>
  );
};