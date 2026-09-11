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
    const upcomingEvents = [
  { name: "SEEDS Data Industry Event: Dr. Yong-Chuan Liu", 
    description: "Join the ECC SEEDS Project for an industry event at the Lab. The speaker is Dr Yong-Chuan Liu, the former Chief Data Scientist at IBM and founder of RMDS Lab who will be talking about his field. Free parking and free food. RSVP required.",
    date: "9/24/2026", 
    time: "6:00 PM - 8:00 PM PST",
    location: "15916 Crenshaw Blvd, Gardena, CA 90249",
    rsvpLink: "https://www.eventbrite.com/e/2026-fall-data-science-industry-event-924-tickets-1998698386678?aff=ebdsoporgprofile",
  },
];

const pastEvents = [
  { name: "Data Con LA 2026", 
    description: "For more than a decade, Data Con LA has been Southern California's gathering for data and technology enthusiasts, from students taking their first steps in the field to seasoned professionals shaping the future of AI, analytics, and data engineering.",
    date: "9/25/2026",
    time: "",
    location: "CSU Long Beach, 1250 Bellflower Blvd, Long Beach, CA 90840",
    rsvpLink: "",
    photo: photo1, 
 },
];
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
              <CardMedia
                      component="img"
                      height="420"
                      image={event.photo}
                    />
            </Card>
          ))}
        </Stack>
      </Container>

     </>
    );
}