import React from 'react';
import './About.css';

export const About = () => {
  const owners = [
    {
      name: "Shaswat Mishra",
      description: "BE In CSE-Artificial Intelligence",
      imagePath: "WhatsApp Image 2024-12-05 at 01.45.58_3971687a.jpg",
      instagramLink: "https://www.instagram.com/shaswat9692/profilecard/?igsh=c2tjbmVodm9yeDE2",
    },
    {
      name: "Mohamed Junaid",
      description: "BE In CSE-Artificial Intelligence",
      imagePath: "WhatsApp Image 2024-12-05 at 01.46.59_cb505a82.jpg",
      instagramLink: "https://www.instagram.com/mdjunaid59946?igsh=bzg3NHd0Ynh5ODg1",
    },
    {
      name: "Sai Harini",
      description: "BE In CSE-Artificial Intelligence",
      imagePath: "WhatsApp Image 2024-12-05 at 01.47.49_24e70900.jpg",
      instagramLink: "https://www.instagram.com/sai_harini_10/profilecard/?igsh=ZWt1bXpoOHhma2c4",
    },
    {
      name: "Satya Pravinya",
      description: "BE In CSE-Artificial Intelligence",
      imagePath: "WhatsApp Image 2024-12-05 at 01.48.17_1f57cbb7.jpg",
      instagramLink: "https://www.instagram.com/satya_pravinya/profilecard/?igsh=Mmo4ZzA0M282bm1j",
    },
  ];

  return (
    <div className="about-page">
      <h1>About Our Website</h1>
      <p>
        Welcome to our website! We aim to revolutionize the agricultural industry by providing insights, tools, and
        technology to empower farmers and agricultural enthusiasts. Our team is committed to delivering the best
        resources for crop management and farming solutions.
      </p>
      <h2>Meet Our Team</h2>
      <div className="owners-container">
        {owners.map((owner, index) => (
          <div key={index} className="owner-card">
            <img src={owner.imagePath} alt={owner.name} className="owner-image" />
            <h3>{owner.name}</h3>
            <p>{owner.description}</p>
            <a href={owner.instagramLink} target="_blank" rel="noopener noreferrer">
              <img
                src="instagram logo 1 copy.webp" // Replace with the correct path to your logo
                alt="Instagram"
                className="instagram-logo"
              />
              Follow on Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
