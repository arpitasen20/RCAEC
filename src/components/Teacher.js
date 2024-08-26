import React, { useState } from 'react';
import styled from 'styled-components';

const Teacher = () => {
  
  const members = [
    {
      id: 1,
      name: 'Sumanta Karmakar',
      image: '/assets/RC/sumanta-sir.jpg', 
    },
    {
      id: 2,
      name: 'Dr. Srijan Paul',
      image: '/assets/RC/Srijan-sir.jpg',
    },
    
    // Add more members as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < members.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <TeamSection id="team">
      <TeamHeader>Meet The Faculty Coordinators</TeamHeader>
      <TeamContainer>
        {members.map((member, index) => (
          <MemberCard key={member.id}>
            <MemberImage src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
          </MemberCard>
        ))}
      </TeamContainer>
      
    </TeamSection>
  );
};

const TeamSection = styled.section`
  padding: 4rem 4rem 1rem 4rem;
  text-align: center;
`;

const TeamHeader = styled.h2`
  color: #5643CC;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  padding: 2rem 0;
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #a4c931 transparent; /* For Firefox */
  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a4c931;
    border-radius: 6px;
  }
`;

const MemberCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  margin: 0 1rem;
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    color: #5643cc;
  }
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-color: #5643CC;
  object-fit: contain; /* Ensures the entire image is visible, might leave empty spaces */
`;





export default Teacher;
