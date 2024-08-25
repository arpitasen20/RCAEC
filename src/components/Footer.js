// src/components/Footer.js

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection id="contact">
      <FooterContent>
        <FooterColumn>
          <h3>Robotics Club Asansol Engineering College</h3>
          <p>© 2024</p>
        </FooterColumn>
        <FooterColumn>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#events">Upcoming Events</a></li>
            <li><a href="#about">About RCAEC</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <h4>Social</h4>
          <ul>
            <li><a href="https://www.linkedin.com/company/robotics-club-aec/mycompany/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/roboticsaec" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/aecroboticsclub/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </FooterColumn>
      </FooterContent>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background-color: #a4c931;
  padding: 2rem;
  color: white;
  box-sizing: border-box; /* Ensure padding is included in the total width */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Allow wrapping on smaller screens */
  gap: 1rem; /* Add gap between columns */
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px; /* Ensure columns don't get too narrow */

  h3, h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center; /* Center align text on small screens */
  }

  p {
    text-align: center; /* Center align text on small screens */
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center; /* Center align list on small screens */
  }

  li {
    margin: 0.5rem 0;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      color: #5643cc;
    }
  }

  @media (max-width: 768px) {
    h3, h4 {
      font-size: 1.2rem; /* Adjust font size for smaller screens */
    }

    p {
      font-size: 0.9rem; /* Adjust font size for smaller screens */
    }
  }
`;

export default Footer;
