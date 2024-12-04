import React from 'react';
import './About.css';

export const About = () => {
  const owners = [
    {
      name: "Owner 1",
      description: "Owner 1 is a passionate individual with a deep interest in sustainable agriculture and technology.",
      imagePath: "/images/owner1.jpg",
      instagramLink: "https://instagram.com/owner1",
    },
    {
      name: "Owner 2",
      description: "Owner 2 specializes in crop research and has a decade of experience in agricultural innovation.",
      imagePath: "/images/owner2.jpg",
      instagramLink: "https://instagram.com/owner2",
    },
    {
      name: "Owner 3",
      description: "Owner 3 is a technology enthusiast focusing on the intersection of AI and agriculture.",
      imagePath: "/images/owner3.jpg",
      instagramLink: "https://instagram.com/owner3",
    },
    {
      name: "Owner 4",
      description: "Owner 4 is dedicated to educating farmers about best practices in farming and crop management.",
      imagePath: "/images/owner4.jpg",
      instagramLink: "https://instagram.com/owner4",
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
              Follow on Instagram
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
