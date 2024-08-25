// src/components/About.js

import React from 'react';
import styled from 'styled-components';
import { Tilt } from 'react-tilt';
import { FaBolt, FaLock, FaTools, FaNetworkWired } from 'react-icons/fa'; // Import icons


const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <h2>About us</h2>
        <h3>Robotics Club Asansol Engineering College</h3>
        <Description>
          Harness the power of automation and creativity. Join us to explore the future.
        </Description>
        <Features>
          <FeatureItem>
            <FaBolt /> Cutting-Edge Tech
          </FeatureItem>
          <FeatureItem>
            <FaLock /> Expert Speakers
          </FeatureItem>
          <FeatureItem>
            <FaTools /> Hands-On Workshops
          </FeatureItem>
          <FeatureItem>
            <FaNetworkWired /> Networking Opportunities
          </FeatureItem>
        </Features>
        <Button href="/about-us" target="_blank">Discover More</Button>
      </AboutContent>
      <TiltWrapper options={{ max: 25, speed: 400, scale: 1.05 }}>
        <AboutImage src="/assets/a1.jpg" alt="Team" />
      </TiltWrapper>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  display: flex;
  padding: 40px 80px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on small screens */
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;

const AboutContent = styled.div`
  max-width: 500px;
  margin-right: 2rem;

  h2 {
    font-size: 2.5rem;
    color: #a4c931;
    margin-bottom: 1rem;
    text-align: center; /* Center align text on small screens */
  }

  h3 {
    font-size: 30px;
    font-weight: bold;
    color: #455EB5;
    margin-bottom: 1rem;
    text-align: center; /* Center align text on small screens */
  }

  @media (max-width: 768px) {
    margin-right: 0;
    text-align: center; /* Center align text on small screens */
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  font-weight: 300;
  margin: 1rem 0;
  text-align: center; /* Center align text on small screens */

  @media (max-width: 768px) {
    font-size: 16px; /* Adjust font size for smaller screens */
  }
`;

const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center items on small screens */
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem; /* Reduce gap for smaller screens */
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  width: 200px;
  height: 60px;
  box-sizing: border-box;

  svg {
    color: #a4c931;
  }

  @media (max-width: 768px) {
    width: auto; /* Adjust width for smaller screens */
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #a4c931;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #8fb82e;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem; /* Adjust padding for smaller screens */
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }
`;

const TiltWrapper = styled(Tilt)`
  max-width: 300px;
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem; /* Add margin on top for better spacing on small screens */
  }
`;

const AboutImage = styled.img`
  height: 300px;
  width: auto;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  transform: perspective(1000px);

  &:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
  }

  @media (max-width: 768px) {
    height: 200px; /* Adjust height for smaller screens */
    width: auto;
  }
`;

export default About;
