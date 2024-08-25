import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Events = () => {
  // Hardcoded event data
  const upcomingEvents = [
    {
      id: 1,
      name: 'टेक-Talk Session 5',
      date: '2024-08-27',
      time: '7:00 PM',
      venue: 'Google Meet',
      image: '/assets/techtalk5.jpg',
    },
    {
      id: 2,
      name: 'AEC Internal SIH Hackathon',
      date: '2024-09-02',
      time: '9:00 AM',
      venue: 'Online & Offline',
      image: '/assets/sih.jpg',
    },
  ];

  const pastEvents = [
    {
      id: 3,
      name: 'टेक-Talk Session 4',
      date: '2024-08-23',
      time: '10:00 AM',
      venue: 'Vivekananda Seminar Hall',
      image: '/assets/techtalk4.jpg',
    },
    {
      id: 4,
      name: 'Google Cloud Arcade Facilitator Program 2024',
      date: '2024-07-22',
      time: '',
      venue: 'Online',
      image: '/assets/gcaf.jpg',
    },
    {
      id: 5,
      name: 'Portfolio Making Competition',
      date: '2024-05-11',
      time: '',
      venue: 'Online',
      image: '/assets/portfolio.jpg',
    },
    {
      id: 6,
      name: 'Networking & Ethical Hacking',
      date: '',
      time: '',
      venue: 'Online',
      image: '/assets/n.jpg',
    },
    {
      id: 7,
      name: 'Tech Insights to Nutanix',
      date: '2024-01-05',
      time: '7:00 PM',
      venue: 'Google Meet',
      image: '/assets/techtalk2.jpg',
    },
    {
      id: 8,
      name: 'Drone Racing',
      date: '2024-04-06',
      time: '',
      venue: 'College Ground',
      image: '/assets/drone.jpg',
    },
    {
      id: 9,
      name: 'Navigating the World of Adobe',
      date: '2023-11-11',
      time: '7:00 PM',
      venue: 'Zoom Meet',
      image: '/assets/techtalk1.jpg',
    },
    {
      id: 10,
      name: 'Robotics Revolution Rumble',
      date: '2023-11-01',
      time: '11:00 AM',
      venue: 'Vivekananda Seminar Hall',
      image: '/assets/rumble.jpg',
    },
  ];

  return (
    <EventsSection id="events">
      {/* Upcoming Events */}
      <EventHeader>Upcoming Events</EventHeader>
      {upcomingEvents.length ? (
        <EventGrid>
          {upcomingEvents.map((event) => (
            <EventCard key={event.id}>
              <EventImage src={event.image} alt={event.name} />
              <EventDetails>
                <EventName>{event.name}</EventName>
                <EventDate>{new Date(event.date).toLocaleDateString()}</EventDate>
                <EventTime>{event.time}</EventTime>
                <EventVenue>{event.venue}</EventVenue>
                <StyledLink href={`/events/${event.id}`} target="_blank" rel="noopener noreferrer">Register Now</StyledLink>
              </EventDetails>
            </EventCard>
          ))}
        </EventGrid>
      ) : (
        <p>There are currently no upcoming events. Please check again soon.</p>
      )}

      {/* Separator Line */}
      <Separator />

      {/* Past Events */}
      <EventHeader>Past Events</EventHeader>
      {pastEvents.length ? (
        <EventGrid>
          {pastEvents.map((event) => (
            <EventCard key={event.id}>
              <EventImage src={event.image} alt={event.name} />
              <EventDetails>
                <EventName>{event.name}</EventName>
                <EventDate>{new Date(event.date).toLocaleDateString()}</EventDate>
                <EventTime>{event.time}</EventTime>
                <EventVenue>{event.venue}</EventVenue>
              </EventDetails>
            </EventCard>
          ))}
        </EventGrid>
      ) : (
        <p>No past events found.</p>
      )}
    </EventsSection>
  );
};

const EventsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const EventHeader = styled.h2`
  color: #5643CC;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Separator = styled.hr`
  border: none;
  border-top: 2px solid #a4c931;
  margin: 2rem auto;
  width: 900px;
`;

const EventGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.5rem;
  margin-bottom: 2rem;
`;

const EventCard = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 320px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 470px;

  &:hover {
    transform: rotate(2deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const EventImage = styled.img`
  height: 250px;
  width: auto;
  margin-top: 1rem;
  border-radius: 4px;
`;

const EventDetails = styled.div`
  padding: 0rem;
`;

const EventName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const EventDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const EventTime = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const EventVenue = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const StyledLink = styled.a` // Use styled.a for anchor elements
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background-color: #a4c931;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  width: 250px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8fb82e;
  }
`;

export default Events;
