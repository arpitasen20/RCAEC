import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Team from './Team';
import Teacher from './Teacher';

// Example image URLs
const imageUrls = [
  '/assets/eve/a (1).jpg',
  '/assets/eve/a (2).jpg',
  '/assets/eve/a (3).jpg',
  '/assets/eve/a (4).jpg',
  '/assets/eve/a (5).jpg',
  '/assets/eve/a (6).jpg',
  '/assets/eve/a (7).jpg',
  '/assets/eve/a (8).jpg',
  '/assets/eve/a (9).jpg',
  '/assets/eve/a (10).jpg',
  // Add more image URLs as needed
];
const imgUrls = [
  '/assets/eve/b (1).jpg',
  '/assets/eve/b (2).jpg',
  '/assets/eve/b (3).jpg',
];
const imUrls = [
  '/assets/eve/c.jpg',
  '/assets/eve/c1.jpg',
  '/assets/eve/c2.jpg',
  '/assets/eve/c3.jpg',
  '/assets/eve/c4.jpg',
  '/assets/eve/c5.jpg',
  '/assets/eve/c6.jpg',
];
const iUrls = [
  '/assets/eve/d.jpg',
  '/assets/eve/d1.jpg',
  '/assets/eve/d2.jpg',
  '/assets/eve/d3.jpg',
  '/assets/eve/d4.jpg',
];
const moreUrls = [
  '/assets/eve/m (1).jpg',
  '/assets/eve/m (2).jpg',
  '/assets/eve/m (3).jpg',
  '/assets/eve/m (4).jpg',
  '/assets/eve/m (5).jpg',
  '/assets/eve/m (6).jpg',
  '/assets/eve/m (7).jpg',
  '/assets/eve/m (8).jpg',
  '/assets/eve/m (9).jpg',
  '/assets/eve/m (10).jpg',
  '/assets/eve/m (11).jpg',
  '/assets/eve/m (12).jpg',
  '/assets/eve/m (13).jpg',
  '/assets/eve/m (14).jpg',
  '/assets/eve/m (15).jpg',
  '/assets/eve/m (16).jpg',
  '/assets/eve/m (17).jpg',
  '/assets/eve/m (18).jpg',
  '/assets/eve/m (19).jpg',
  '/assets/eve/m (20).jpg',
  '/assets/eve/m (21).jpg',
  '/assets/eve/m (22).jpg',
  '/assets/eve/m (23).jpg',
  '/assets/eve/m (24).jpg',
  '/assets/eve/m (25).jpg',
  '/assets/eve/m (26).jpg',
  '/assets/eve/m (27).jpg',
  '/assets/eve/m (28).jpg',
  '/assets/eve/m (29).jpg',
];

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Section>
        <h1>About Us</h1>
        <p>
          Welcome to Robotics Family. Here you can find more information about our club, our mission, and our members.
        </p>
      </Section>

      {/* Section with ID "photos" for navigation */}
      <PhotoSection id="photos">
        <EventGallerySection
          title="टेक-Talk Session 4"
          imageUrls={imageUrls}
        />
        <EventGallerySection
          title="Portfolio Making Competition"
          imageUrls={imgUrls}
        />
        <EventGallerySection
          title="Session on Cyber Security!"
          imageUrls={imUrls}
        />
        <EventGallerySection
          title="Kascade Event"
          imageUrls={iUrls}
        />
        <EventGallerySection
          title="More Events"
          imageUrls={moreUrls}
        />
      </PhotoSection>

      <Teacher/>
      <Team /> {/* Team component */}
      <Footer /> {/* Footer component */}
    </AboutUsContainer>
  );
};

// Custom component to handle each event gallery section
const EventGallerySection = ({ title, imageUrls }) => (
  <>
    <TitleWithLine>
      <h1>{title}</h1>
      <Line />
    </TitleWithLine>
    <Gallery>
      {imageUrls.map((url, index) => (
        <Image key={index} src={url} alt={`${title} ${index + 1}`} />
      ))}
    </Gallery>
  </>
);

const AboutUsContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const PhotoSection = styled.div`
  margin-top: 2rem;
`;

const TitleWithLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  padding: 2rem 6rem;

  h1 {
    color: #5643cc;
    font-size: 2rem;
    margin-right: 1rem;
    margin-left: 0;
  }
`;

const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #5643cc;
  max-width: 900px;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Image = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default AboutUs;
