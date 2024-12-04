import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { crops } from '../data/crops';

export const CropDetail = () => {
  const { id } = useParams();
  const crop = crops.find(c => c.id === id);

  if (!crop) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={crop.imageUrl} 
          alt={crop.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{crop.name}</h1>
          <p className="text-gray-600 mb-6">{crop.description}</p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Farming Method</h2>
          <div className="prose max-w-none">
            {crop.farmingMethod.split('\n').map((step, index) => (
              <p key={index} className="mb-2">{step}</p>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Video Guide</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={crop.videoUrl.replace('watch?v=', 'embed/')}
                title={`${crop.name} Farming Guide`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};