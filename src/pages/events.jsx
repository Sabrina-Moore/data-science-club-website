import { useEffect, useState } from 'react'
import React from 'react';

import { Container, Box, Typography, Stack, Card, CardContent, CardMedia  } from '@mui/material';

import photo1 from '../assets/officer-photos/data-con.jpeg'
import '../index.css'

export default function Events() {

    //do I want this to be supabase run???? or hard-coded?

    //if yes
    // const [visible, setVisible] = useState(false);
    // const [events, setEvents] = useState([]);

    //then fetch data like from events table
    //then filter events
    //show live event
    //group upcoming events
    //group past events


    //hard coded version
    // add new object here for more events
    const events = [
  { name: "SEEDS Data Industry Event: Dr. Yong-Chuan Liu", 
    description: "Join the ECC SEEDS Project for an industry event at the Lab. The speaker is Dr Yong-Chuan Liu, the former Chief Data Scientist at IBM and founder of RMDS Lab who will be talking about his field. Free parking and free food. RSVP required.",
    date: "09-24-2026", 
    time: "6:00 PM - 8:00 PM PST",
    location: "15916 Crenshaw Blvd, Gardena, CA 90249",
    rsvpLink: "https://www.eventbrite.com/e/2026-fall-data-science-industry-event-924-tickets-1998698386678?aff=ebdsoporgprofile",
    photo: "",
  },
  {
  name: "Data Con LA 2026", 
    description: "For more than a decade, Data Con LA has been Southern California's gathering for data and technology enthusiasts, from students taking their first steps in the field to seasoned professionals shaping the future of AI, analytics, and data engineering.",
    date: "08-22-2026",
    time: "",
    location: "CSU Long Beach, 1250 Bellflower Blvd, Long Beach, CA 90840",
    rsvpLink: "",
    photo: photo1, 
  },
  {
  name: "Datathon at Los Angeles City College", 
    description: "Join the President Sabrina at the LACC Datathon. Register ASAP! 'The purpose of Datathon is to provide students with hands-on experience in data science, helping them build skills in coding, analyzing, and data visualization in an inclusive, collaborative environment. Students will be introduced to R Studio through a series of self-guided coding exercises, after which they will work in teams to analyze datasets. Students give presentations in order to demonstrate the ability to apply newly acquired skills in innovative and educational ways.  Prior coding experience is unnecessary; we welcome interested students of all levels!'",
    date: "10-24-2026",
    time: "Pending",
    location: "Pending, LACC Campus",
    rsvpLink: "https://www.lacc.edu/academics/pathways/stem/math-dept/datathon",
    photo: "", 
  }
];

// Today's date
const today = new Date();

// Upcoming events
const upcomingEvents = events
  .filter((event) => new Date(event.date) >= today)
  .sort((a, b) => new Date(a.date) - new Date(b.date));

// Past events
const pastEvents = events
  .filter((event) => new Date(event.date) < today)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

    return(
        <>
        <Container>
        <Typography id="upcoming-title">
          Upcoming Events
        </Typography>
        <Stack className="event-list" spacing={2}>
          {upcomingEvents.map((event) => (
            <Card key={event.name} className="event-card">
              <CardContent>
                <Typography className="event-name">
                  {event.name}
                </Typography>
                <Typography className="event-date">
                  Date: {event.date}
                </Typography>
                <Typography className="event-time">
                  Time: {event.time}
                </Typography>
                <Typography className="event-description">
                  {event.description}
                </Typography>
                 <Typography className="event-location">
                  {event.location}
                </Typography>
                {event.rsvpLink && (
                <Typography className="event-rsvp">
                  <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
                    RSVP here
                  </a>
                </Typography>
                )}
              </CardContent>
              {event.photo && (
              <CardMedia
                component="img"
                height="420"
                image={event.photo}
              />
            )}
            </Card>
          ))}
        </Stack>

        {/* past events */}
         <Typography id="past-title">
          Past Events
        </Typography>
        <Stack className="event-list" spacing={2}>
          {pastEvents.map((event) => (
            <Card key={event.name} className="event-card">
              <CardContent>
                <Typography className="event-name">
                  {event.name}
                </Typography>
                <Typography className="event-date">
                  Date: {event.date}
                </Typography>
                <Typography className="event-time">
                  Time: {event.time}
                </Typography>
                <Typography className="event-description">
                  {event.description}
                </Typography>
                 <Typography className="event-location">
                  {event.location}
                </Typography>
                {event.rsvpLink && (
                <Typography className="event-rsvp">
                  <a href={event.rsvpLink} target="_blank" rel="noopener noreferrer">
                    RSVP here
                  </a>
                </Typography>
                )}
              </CardContent>
              {event.photo && (
                <CardMedia
                  component="img"
                  height="420"
                  image={event.photo}
                />
              )}     
            </Card>
          ))}
        </Stack>
      </Container>

     </>
    );
}