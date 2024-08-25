import React from 'react';
import styled, { keyframes } from 'styled-components';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <FloatingImage src="/assets/robot.png" alt="Floating Robot" />
      <HeroContent>
        <h1>
          A <span>club</span> where we embrace <br />
          individuals eager to expand <br /> their <span>knowledge and skills</span>
          <br /> in the rapidly growing tech <br />industry! 🤖💡
        </h1>
      </HeroContent>
    </HeroSection>
  );
};

// Keyframes for the floating animation
const floatAnimation = keyframes`
  0% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(-20px);
  }
`;

// Keyframes for the glowing effect
const glowAnimation = keyframes`
  0% {
    text-shadow: 0 0 5px #FB923C;
  }
  50% {
    text-shadow: 0 0 20px #FB923C, 0 0 30px #FB923C, 0 0 40px #FB923C, 0 0 50px #FB923C;
  }
  100% {
    text-shadow: 0 0 5px #FB923C;
  }
`;

const HeroSection = styled.section`
  background: url('/assets/h1.png') center/cover no-repeat fixed;
  height: 100vh;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  color: black;
  padding: 0 100px; /* Adjusted padding for smaller screens */
  position: relative; /* Ensure absolute positioning for FloatingImage */

  @media (min-width: 769px) {
    flex-direction: row; /* Change to row layout for larger screens */
    justify-content: space-between; /* Adjust space between HeroContent and FloatingImage */
  }
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: center; /* Center align text on mobile */
  margin-top: 20%; /* Adjust margin for mobile */

  h1 {
    font-size: 1.0rem; /* Adjust font size for mobile */
    font-weight: bold;
    margin: 0;
    color: #333; /* Base color for text */
    animation: ${glowAnimation} 3s ease-in-out infinite; /* Apply glowing animation */
    
    span {
      color: #5643cc;
    }
  }

  @media (min-width: 769px) {
    text-align: left; /* Left align text on larger screens */
    margin-top: 0; /* Remove margin on larger screens */
    
    h1 {
      font-size: 3rem; /* Font size for larger screens */
    }
  }
`;

const FloatingImage = styled.img`
  position: absolute;
  top: 30%; /* Adjusted position for mobile */
  width: 300px; /* Adjusted width for mobile */
  height: auto; /* Maintain aspect ratio */
  opacity: 0.9; /* Slight transparency for a floating effect */
  animation: ${floatAnimation} 3s ease-in-out infinite; /* Apply animation */

  @media (min-width: 769px) {
    position: absolute;
    right: 80px; /* Adjust as needed for spacing from the right edge */
    top: 5%; /* Center vertically */
    transform: translateY(-50%); /* Offset image to be vertically centered */
    width: 750px; /* Adjust the size as needed */
  }
`;

export default Hero;
