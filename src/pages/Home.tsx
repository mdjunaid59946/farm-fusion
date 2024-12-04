import React from 'react';
import { LocationSelector } from '../components/LocationSelector';
import { CropCard } from '../components/CropCard';
import { useUserStore } from '../store/userStore';
import { crops } from '../data/crops';

export const Home = () => {
  const location = useUserStore((state) => state.location);
  
  const suitableCrops = React.useMemo(() => {
    if (!location) return [];
    const locationString = `${location.state}-${location.district}`;
    
    // Find crops that match the exact location
    const matchingCrops = crops.filter(crop => 
      crop.suitableLocations.includes(locationString)
    );

    // If no exact matches, find crops that are grown in the state
    if (matchingCrops.length === 0) {
      return crops.filter(crop => 
        crop.suitableLocations.some(loc => loc.startsWith(location.state + '-'))
      );
    }

    return matchingCrops;
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Find the Perfect Crop for Your Location
        </h1>
        
        {!location ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <LocationSelector />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                Showing recommended crops for {location.district}, {location.state}
              </p>
              {suitableCrops.length === 0 ? (
                <p className="text-sm text-green-600 mt-2">
                  No exact matches found. Showing crops suitable for {location.state}.
                </p>
              ) : null}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suitableCrops.map(crop => (
                <CropCard key={crop.id} crop={crop} />
              ))}
            </div>
            
            {suitableCrops.length === 0 && (
              <div className="text-center text-gray-600">
                <p>No crops found for your location.</p>
                <p className="mt-2">Please try selecting a different location or check our Basic Crops section for general farming information.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};