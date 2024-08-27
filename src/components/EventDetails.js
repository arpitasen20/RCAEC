// src/components/EventDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Sample data to simulate fetching event details
const eventData = [
  {
    id: 1,
    name: 'टेक-Talk Session 5',
    date: '2024-08-27',
    time: '7:00 PM',
    venue: 'Google Meet',
    image: '/assets/techtalk5.jpg',
    description: `Get ready for an exhilarating टेक-Talk Session 5! 🚀 This session is all about the Smart India Hackathon (SIH), where we'll be joined by Mannan Tyagi, the SIH 2023 Winner. Mannan will be sharing his expert advice, revealing tips and tricks that can help you dominate the hackathon. 💡 Whether you're a first-timer or a seasoned participant, you'll gain valuable insights on how to craft standout projects that can make a difference. 🛠️

    In addition to the tips, Mannan will also provide an orientation on how to approach your SIH project, offering a step-by-step guide on what it takes to succeed in this national-level competition. 🌟 This session is an incredible opportunity to learn from a champion and to prepare yourself for the challenges ahead. Don’t miss out on this chance to be inspired and to elevate your hackathon game! 🤖💻
    
    Join us and be part of the future of innovation!  `,
    registrationUrl: 'https://forms.gle/Kjtt2WTYcZuG3MBY9',
  },
  {
    id: 2,
    name: 'AEC Internal SIH Hackathon',
    date: '2024-09-02',
    time: '9:00 AM',
    venue: 'Online & Offline',
    image: '/assets/sih.jpg',
    description: `Guidelines:👇

    All team members must be from the same college; inter-college teams are not allowed.
    Encourage students from different branches within your college or institute to form diverse teams. 

     • Each team should consist of six members, including at least one female team member.
     • The choice of Problem statements could be from any theme or from the problem statement which is already published on the official SIH-2024 website
     • Last Date to Register: 25th August,2024

     • SIH screening stages
    - 2nd September PPT shortlisting 
    - 6th September 12 hrs Hackathon and shortlisting 
    - 9th September final PPT based presentation and shortlisting by External experts 
    - All of you be ready with yours PPT by choosing Problem statements given by Ministries in SIH portal 👍

    Round One:

This round focuses on presenting your ideas effectively. Your task is to create a compelling presentation and video submission that clearly outlines your project, its goals, and how it addresses the problem statement.

Submission Guidelines:

Presentation (PPT) Submission:

Slide Limit: Follow the official Format provided by SIH 2024.
Content: Your presentation should include the following:
Title Slide: Project name, team name, and members.
Problem Statement: Briefly explain the issue you are addressing.
Solution Overview: Describe your proposed solution and how it works.
Technology Stack: Highlight the technologies you will use.
*Unique Selling Proposition (USP): What makes your solution stand out?
Implementation Plan: Outline the steps you plan to take to develop the project.
Team Roles: Describe each team member's role in the project.
Format: PDF format.
Naming Convention: [TeamName_ProjectName_Round1.pdf]

Video Submission:

Duration: 3-5 minutes.(5 minutes Maximum) 
Content: The video should cover the following:
Introduction: Briefly introduce your team and project.
Project Walkthrough: Explain your project, how it addresses the problem, and your approach.
Demo (if applicable): Show any prototypes, wireframes, or initial work you've done.
Closing Remarks: Sum up why your project deserves to move to the next round.
Format: MP4 or MOV format.
Naming Convention: [TeamName_ProjectName_Round1.mp4]
Submission Process:

Deadline: 30th August, 2024
Submission Link: <a href="https://forms.gle/RUzD5atmGKtVhTND8" target="_blank" rel="noopener noreferrer">https://forms.gle/RUzD5atmGKtVhTND8</a>
Important Note: Ensure that both the PPT and video are uploaded before the deadline. Late submissions will not be accepted.

    
    The problem statements which is given under <a href="https://www.sih.gov.in/sih2024PS" target="_blank" rel="noopener noreferrer">https://www.sih.gov.in/sih2024PS</a>    
    
    Join WhatsApp group: <a href="https://chat.whatsapp.com/JdOuq37VfSNEx6PXfq3ysN" target="_blank" rel="noopener noreferrer">https://chat.whatsapp.com/JdOuq37VfSNEx6PXfq3ysN</a> `,

    registrationUrl: 'https://forms.gle/sCu34TGyph2oBVBz8',
  },
  // Add more events as needed
];

const EventDetails = () => {
  const { id } = useParams(); // Extract the event ID from the URL
  const event = eventData.find((event) => event.id === parseInt(id)); // Find the event by ID

  if (!event) {
    return <ErrorMessage>Event not found.</ErrorMessage>; // Display a message if the event is not found
  }

  return (
    <EventDetailsContainer>
      <EventTitle>{event.name}</EventTitle>
      <EventImage src={event.image} alt={event.name} />
      <EventInfo>
        <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
      </EventInfo>
      <EventInfo>
        <strong>Time:</strong> {event.time}
      </EventInfo>
      <EventInfo>
        <strong>Venue:</strong> {event.venue}
      </EventInfo>
      <EventDescription
        dangerouslySetInnerHTML={{ __html: event.description }}
      />
      <RegisterButton
        href={event.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Here
      </RegisterButton>
    </EventDetailsContainer>
  );
};

// Styled-components for better styling management
const EventDetailsContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const EventTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const EventImage = styled.img`
  height: 500px;
  width: auto;
  border-radius: 8px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const EventInfo = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const EventDescription = styled.p`
  font-size: 1.2rem;
  color: #444;
  margin-top: 1.5rem;
  white-space: pre-line; /* Handles line breaks in description */
  text-align: left; /* Aligns text to the left */

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const RegisterButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  color: #fff;
  background-color: #5643cc;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #4432a0;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
  text-align: center;
`;

export default EventDetails;
