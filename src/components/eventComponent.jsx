import { Container, Box, Typography, Stack, Card, CardContent, CardMedia  } from '@mui/material';



export default function EventCard({ event }) {
  const { name, date, time, description, location, rsvpLink, photo, flyers } = event;

  const photoList = Array.isArray(photo) ? photo.filter(Boolean) : photo ? [photo] : [];

  const flyersList = Array.isArray(flyers) ? flyers.filter(Boolean) : flyers ? [flyers] : [];

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
              sx={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain', 
              borderRadius: 1 }}
                  />
            ))}
        </Stack>
      )}

      {flyersList.length > 0 && (
        <Box>
          {flyersList.map((imgSrc, index) => (
          <CardMedia
            key={index}
            component="img"
            image={imgSrc}
            alt={`${name} flyer ${index + 1}`}
            sx={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            borderRadius: 1 }}
          />
          ))}



        </Box>
      )}
    </Card>
  );
}