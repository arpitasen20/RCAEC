import React, { useState } from 'react';
import styled from 'styled-components';

const Team = () => {
  
  const members = [
    {
      id: 1,
      name: 'Aditya Kumar Pandey',
      role: 'President',
      image: '/assets/RC/Aditya Bhaiya.jpg', 
    },
    {
      id: 2,
      name: 'Purba Mondal',
      role: 'Secretary',
      image: '/assets/RC/purba.jpg',
    },
    {
      id: 3,
      name: 'Arunima Bhowmick',
      role: 'Vice Secretary',
      image: '/assets/RC/Arunima.jpg',
    },
    {
      id: 4,
      name: 'Shristi Majee',
      role: 'Treasurer',
      image: '/assets/RC/Shristi.jpg', 
    },
    {
      id: 5,
      name: 'Subham Bhattacharya',
      role: 'Technical Lead',
      image: '/assets/RC/subham.jpg', 
    },
    {
      id: 6,
      name: 'Ayush Ghatak',
      role: 'Co Technical Lead',
      image: '/assets/RC/Ayush.jpg', 
    },
    {
      id: 7,
      name: 'Shreya Shrivastava',
      role: 'Graphics Lead',
      image: '/assets/RC/Shreya.jpg', 
    },
    {
      id: 8,
      name: 'Shreya Biswakarma',
      role: 'Co Graphics Lead',
      image: '/assets/RC/Shreya Biswakarma.jpg', 
    },
    {
      id: 9,
      name: 'Samrat Chatterjee',
      role: 'Management Lead',
      image: '/assets/RC/samrat.jpg', 
    },
    {
      id: 10,
      name: 'Saksham Basisth',
      role: 'Co Management Lead',
      image: '/assets/RC/Saksham.png', 
    },
    {
      id: 11,
      name: 'Arpita Sen',
      role: 'Web Dev Lead',
      image: '/assets/RC/arpita.jpg', 
    },
    {
      id: 12,
      name: 'Suryashish Kundu',
      role: 'Co Web Dev Lead',
      image: '/assets/RC/Suryashish.jpg', 
    },
    {
      id: 13,
      name: 'SK Jiyad',
      role: 'Event & Resource Lead',
      image: '/assets/RC/jiyad.jpg', 
    },
    {
      id: 13,
      name: 'Hiya Chatterjee',
      role: 'Co Event & Resource Lead',
      image: '/assets/RC/hiya.jpg', 
    },
    {
      id: 14,
      name: 'Jhinuk Roy',
      role: 'Social Media Lead',
      image: '/assets/RC/Jhinuk.jpg',
    },
    {
      id: 15,
      name: 'Shibangi Roy Chowdhury',
      role: 'Co Social Media Lead',
      image: '/assets/RC/Shibangi.jpg', 
    },
    {
      id: 16,
      name: 'Yuvraj Singh',
      role: 'Co Internal & External Affair Lead',
      image: '/assets/RC/yuvraj.jpg', 
    },
    {
      id: 17,
      name: 'Snehal Singh',
      role: 'Co Internal & External Affair Lead',
      image: '/assets/RC/snehal.jpg', 
    },
    {
      id: 18,
      name: 'Tanushree Paul',
      role: 'Event & Multimedia Lead',
      image: '/assets/RC/tanushree.jpg', 
    },
    {
      id: 19,
      name: 'Gargi Mahata',
      role: 'Co Event & Multimedia Lead',
      image: '/assets/RC/gargi.jpg', 
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
      <TeamHeader>Meet The Team</TeamHeader>
      <TeamContainer>
        {members.map((member, index) => (
          <MemberCard key={member.id}>
            <MemberImage src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </MemberCard>
        ))}
      </TeamContainer>
      
    </TeamSection>
  );
};

const TeamSection = styled.section`
  padding: 4rem 4rem 10rem 4rem;
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



const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #a4c931;
  cursor: pointer;
  margin: 0 1rem;

  &:disabled {
    color: grey;
  }
`;

export default Team;
