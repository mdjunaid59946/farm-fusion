import React from 'react';
import { states } from '../data/locations';
import { useUserStore } from '../store/userStore';

export const LocationSelector = () => {
  const { setLocation } = useUserStore();
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedDistrict, setSelectedDistrict] = React.useState('');

  const districts = states.find(s => s.name === selectedState)?.districts || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedState && selectedDistrict) {
      setLocation({ state: selectedState, district: selectedDistrict });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">State</label>
        <select
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedDistrict('');
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
          required
        >
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state.name} value={state.name}>{state.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">District</label>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
          required
          disabled={!selectedState}
        >
          <option value="">Select District</option>
          {districts.map(district => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        disabled={!selectedState || !selectedDistrict}
      >
        Find Suitable Crops
      </button>
    </form>
  );
};