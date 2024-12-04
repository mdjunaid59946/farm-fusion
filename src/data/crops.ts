export const crops = [
  {
    id: '1',
    name: 'Rice',
    description: 'Rice is a staple food crop that thrives in warm temperatures and requires abundant water supply.',
    imageUrl: 'https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=dFtQx_MgXqQ',
    farmingMethod: `1. Land Preparation
   - Level the field perfectly for uniform water distribution
   - Create bunds for water retention
   - Plow the field to a depth of 15-20 cm
   - Puddle the field to reduce water percolation

2. Seed Selection and Treatment
   - Choose high-quality certified seeds
   - Treat seeds with fungicides before sowing
   - Soak seeds for 24 hours before sowing

3. Sowing Methods
   - Direct seeding: Sow pre-germinated seeds directly
   - Transplanting: Plant 20-25 day old seedlings
   - Maintain 20x15 cm spacing between plants

4. Water Management
   - Maintain 2-5 cm water level during growth
   - Critical stages: tillering, panicle initiation, flowering
   - Drain field 10 days before harvesting

5. Nutrient Management
   - Apply NPK as per soil testing
   - Top dress with nitrogen at tillering and panicle initiation
   - Use zinc sulfate in zinc-deficient soils

6. Pest and Disease Management
   - Monitor for stem borers, leaf folders, and hoppers
   - Watch for blast, bacterial blight, and sheath blight
   - Use integrated pest management practices

7. Harvesting
   - Harvest when 80% of grains turn golden yellow
   - Cut crop at ground level
   - Thresh immediately after harvesting
   - Dry grains to 14% moisture content`,
    suitableLocations: [
      // West Bengal
      'West Bengal-Hooghly', 'West Bengal-Bardhaman', 'West Bengal-Birbhum', 'West Bengal-Purba Medinipur',
      'West Bengal-Paschim Medinipur', 'West Bengal-Murshidabad', 'West Bengal-Nadia', 'West Bengal-North 24 Parganas',
      // Odisha
      'Odisha-Cuttack', 'Odisha-Puri', 'Odisha-Balasore', 'Odisha-Bhadrak', 'Odisha-Jajpur',
      'Odisha-Kendrapara', 'Odisha-Khordha', 'Odisha-Jagatsinghpur', 'Odisha-Angul', 'Odisha-Dhenkanal',
      // Andhra Pradesh
      'Andhra Pradesh-East Godavari', 'Andhra Pradesh-West Godavari', 'Andhra Pradesh-Krishna',
      'Andhra Pradesh-Guntur', 'Andhra Pradesh-Prakasam', 'Andhra Pradesh-Nellore',
      // Tamil Nadu
      'Tamil Nadu-Thanjavur', 'Tamil Nadu-Tiruvarur', 'Tamil Nadu-Nagapattinam', 'Tamil Nadu-Cuddalore',
      'Tamil Nadu-Villupuram', 'Tamil Nadu-Tirunelveli', 'Tamil Nadu-Ramanathapuram',
      // Karnataka
      'Karnataka-Mandya', 'Karnataka-Raichur', 'Karnataka-Bellary', 'Karnataka-Koppal',
      'Karnataka-Shimoga', 'Karnataka-Hassan', 'Karnataka-Mysore',
      // Kerala
      'Kerala-Alappuzha', 'Kerala-Palakkad', 'Kerala-Thrissur', 'Kerala-Kottayam',
      'Kerala-Pathanamthitta', 'Kerala-Kollam'
    ]
  },
  {
    id: '2',
    name: 'Wheat',
    description: 'Wheat is a major cereal grain, best suited for cooler climates and well-drained soil.',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=y8kKxMz9Fc4',
    farmingMethod: `1. Soil Preparation
   - Deep plowing to 20-25 cm depth
   - Fine tillage for good seed bed
   - Level field for uniform irrigation
   - Add organic matter if needed

2. Seed Selection and Treatment
   - Use certified seeds of recommended varieties
   - Treat seeds with fungicides
   - Ensure seed viability above 90%

3. Sowing
   - Sow in rows 20-22 cm apart
   - Seed depth: 5-6 cm
   - Seed rate: 100-125 kg/ha
   - Best time: October-November

4. Irrigation
   - First irrigation: 21 days after sowing
   - Critical stages: crown root initiation, flowering
   - Total 4-6 irrigations needed
   - Avoid water logging

5. Nutrient Management
   - Apply NPK based on soil test
   - Split nitrogen application
   - Apply micronutrients if deficient
   - Use organic manures

6. Weed Management
   - Critical period: first 30-45 days
   - Use pre-emergence herbicides
   - Manual weeding if needed
   - Keep field weed-free

7. Harvesting
   - Harvest when grains are hard
   - Moisture content: 12-14%
   - Use combine harvester if available
   - Store properly after drying`,
    suitableLocations: [
      // Punjab
      'Punjab-Amritsar', 'Punjab-Ludhiana', 'Punjab-Patiala', 'Punjab-Sangrur', 'Punjab-Bathinda',
      'Punjab-Moga', 'Punjab-Faridkot', 'Punjab-Muktsar', 'Punjab-Mansa', 'Punjab-Barnala',
      // Haryana
      'Haryana-Karnal', 'Haryana-Kurukshetra', 'Haryana-Ambala', 'Haryana-Hisar', 'Haryana-Sirsa',
      'Haryana-Fatehabad', 'Haryana-Jind', 'Haryana-Kaithal', 'Haryana-Panipat', 'Haryana-Sonipat',
      // Uttar Pradesh
      'Uttar Pradesh-Meerut', 'Uttar Pradesh-Ghaziabad', 'Uttar Pradesh-Aligarh', 'Uttar Pradesh-Agra',
      'Uttar Pradesh-Bulandshahr', 'Uttar Pradesh-Bareilly', 'Uttar Pradesh-Moradabad',
      // Madhya Pradesh
      'Madhya Pradesh-Indore', 'Madhya Pradesh-Ujjain', 'Madhya Pradesh-Bhopal', 'Madhya Pradesh-Sehore',
      'Madhya Pradesh-Hoshangabad', 'Madhya Pradesh-Vidisha', 'Madhya Pradesh-Raisen',
      // Rajasthan
      'Rajasthan-Alwar', 'Rajasthan-Bharatpur', 'Rajasthan-Sri Ganganagar', 'Rajasthan-Hanumangarh',
      'Rajasthan-Sikar', 'Rajasthan-Jhunjhunu'
    ]
  },
  {
    id: '3',
    name: 'Cotton',
    description: 'Cotton is a major fiber crop that requires warm climate and well-distributed rainfall.',
    imageUrl: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=kK6VpBptc8w',
    farmingMethod: `1. Land Preparation
   - Deep plowing in summer
   - Form ridges and furrows
   - Ensure good drainage
   - Add organic matter

2. Seed Treatment and Sowing
   - Treat seeds with fungicides
   - Sow on ridges
   - Maintain proper spacing
   - Gap filling after emergence

3. Irrigation Management
   - Critical stages: flowering, boll formation
   - Avoid water stress and waterlogging
   - Use drip irrigation if possible
   - Maintain soil moisture

4. Nutrient Management
   - Apply balanced NPK
   - Split nitrogen application
   - Foliar spray of nutrients
   - Use organic fertilizers

5. Pest Management
   - Monitor for bollworms
   - Use pheromone traps
   - Implement IPM practices
   - Timely pest control

6. Growth Management
   - Remove excess vegetative growth
   - Top the plants if needed
   - Maintain optimal plant population
   - Remove affected bolls

7. Harvesting
   - Pick when bolls fully open
   - Avoid moisture in cotton
   - Grade the produce
   - Store properly`,
    suitableLocations: [
      // Gujarat
      'Gujarat-Bharuch', 'Gujarat-Vadodara', 'Gujarat-Ahmedabad', 'Gujarat-Rajkot', 'Gujarat-Surendranagar',
      'Gujarat-Bhavnagar', 'Gujarat-Amreli', 'Gujarat-Junagadh', 'Gujarat-Kutch', 'Gujarat-Banaskantha',
      // Maharashtra
      'Maharashtra-Nagpur', 'Maharashtra-Akola', 'Maharashtra-Amravati', 'Maharashtra-Yavatmal',
      'Maharashtra-Wardha', 'Maharashtra-Washim', 'Maharashtra-Buldhana', 'Maharashtra-Jalgaon',
      // Telangana
      'Telangana-Adilabad', 'Telangana-Karimnagar', 'Telangana-Warangal', 'Telangana-Khammam',
      'Telangana-Nalgonda', 'Telangana-Mahbubnagar', 'Telangana-Medak', 'Telangana-Nizamabad',
      // Karnataka
      'Karnataka-Dharwad', 'Karnataka-Haveri', 'Karnataka-Gadag', 'Karnataka-Bellary',
      'Karnataka-Raichur', 'Karnataka-Koppal', 'Karnataka-Bidar',
      // Madhya Pradesh
      'Madhya Pradesh-Khargone', 'Madhya Pradesh-Dhar', 'Madhya Pradesh-Ratlam', 'Madhya Pradesh-Barwani',
      'Madhya Pradesh-Chhindwara', 'Madhya Pradesh-Betul'
    ]
  },
  {
    id: '4',
    name: 'Sugarcane',
    description: 'Sugarcane is a tropical crop that requires high temperature, high humidity, and adequate rainfall.',
    imageUrl: 'https://images.unsplash.com/photo-1610430706258-366951401d6c?auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=jCKi8R4q6XQ',
    farmingMethod: `1. Land Preparation
   - Deep plowing (30-40 cm)
   - Multiple harrowings
   - Field leveling
   - Furrow making

2. Planting Material
   - Select disease-free setts
   - Use 3-budded setts
   - Treat setts with fungicides
   - Hot water treatment if needed

3. Planting Method
   - Ridge and furrow method
   - End-to-end placement
   - Cover setts with soil
   - Maintain row spacing

4. Water Management
   - Regular irrigation
   - Critical growth stages
   - Drainage management
   - Water conservation

5. Nutrient Management
   - NPK application
   - Micronutrients
   - Organic manures
   - Green manuring

6. Weed Management
   - Pre-emergence herbicides
   - Inter-cultivation
   - Manual weeding
   - Trash mulching

7. Harvesting
   - Check maturity
   - Cut at ground level
   - Remove dry leaves
   - Quick transportation`,
    suitableLocations: [
      // Uttar Pradesh
      'Uttar Pradesh-Meerut', 'Uttar Pradesh-Muzaffarnagar', 'Uttar Pradesh-Baghpat',
      'Uttar Pradesh-Shamli', 'Uttar Pradesh-Saharanpur', 'Uttar Pradesh-Bijnor',
      // Maharashtra
      'Maharashtra-Kolhapur', 'Maharashtra-Satara', 'Maharashtra-Sangli', 'Maharashtra-Pune',
      'Maharashtra-Ahmednagar', 'Maharashtra-Solapur',
      // Karnataka
      'Karnataka-Belgaum', 'Karnataka-Bagalkot', 'Karnataka-Bijapur', 'Karnataka-Mandya',
      'Karnataka-Mysore', 'Karnataka-Shimoga',
      // Tamil Nadu
      'Tamil Nadu-Erode', 'Tamil Nadu-Coimbatore', 'Tamil Nadu-Tirupur', 'Tamil Nadu-Salem',
      'Tamil Nadu-Namakkal', 'Tamil Nadu-Karur',
      // Gujarat
      'Gujarat-Surat', 'Gujarat-Bharuch', 'Gujarat-Navsari', 'Gujarat-Valsad',
      'Gujarat-Junagadh', 'Gujarat-Rajkot'
    ]
  }
];