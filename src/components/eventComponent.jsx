import { Container, Box, Typography, Stack, Card, CardContent, CardMedia  } from '@mui/material';

export default function EventCard({ event }) {
  const { name, date, time, description, location, rsvpLink, photo } = event;

  const photoList = Array.isArray(photo) ? photo.filter(Boolean) : photo ? [photo] : [];

  return (
    <Card className="event-card">
      <CardContent>
        <Typography className="event-name">{name}</Typography>
        {date && <Typography className="event-date">Date: {date}</Typography>}
        {time && <Typography className="event-time">Time: {time}</Typography>}
        {description && <Typography className="event-description">{description}</Typography>}
        {location && <Typography className="event-location">{location}</Typography>}
        {rsvpLink && (
          <Typography className="event-rsvp">
            <a href={rsvpLink} target="_blank" rel="noopener noreferrer">
              RSVP here
            </a>
          </Typography>
        )}
      </CardContent>

      {photoList.length > 0 && (
        <Stack direction="row" spacing={1} sx={{ p: 2, overflowX: 'auto' }}>
          {photoList.map((imgSrc, index) => (
            <CardMedia
              key={index}
              component="img"
              image={imgSrc}
              alt={`${name} photo ${index + 1}`}
              sx={{ maxHeight: '100%', width: '100%', objectFit: 'cover', borderRadius: 1 }}
            />
          ))}
        </Stack>
      )}
    </Card>
  );
}