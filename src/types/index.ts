export interface User {
  name: string;
  email: string;
  city: string;
  pincode: string;
}

export interface Location {
  state: string;
  district: string;
}

export interface Crop {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  farmingMethod: string;
  suitableLocations: string[];
}