import { useState } from 'react'
import { Collapse, Button, Box, Typography, Stack, Card, CardContent, CardMedia } from '@mui/material';


export default function EventCard({ event }) {
  const { name, date, time, description, location, rsvpLink, photoLandscape, photoPortrait, flyers } = event;

  const [flyerOpen, setFlyerOpen] = useState(false);

  //lists for rendering
  const portraitPhotos = Array.isArray(photoPortrait) ? photoPortrait.filter(Boolean) : photoPortrait ? [photoPortrait] : [];

  const landscapePhotos = Array.isArray(photoLandscape) ? photoLandscape.filter(Boolean) : photoLandscape ? [photoLandscape] : [];

  const flyersList = Array.isArray(flyers) ? flyers.filter(Boolean) : flyers ? [flyers] : [];

  return (
    <Card sx={styles.card}>
      <CardContent>
        <Typography sx={styles.name}>{name}</Typography>
        {date && <Typography sx={styles.metadata}>Date: {date}</Typography>}
        {time && <Typography sx={styles.metadata}>Time: {time}</Typography>}
        {description && <Typography sx={styles.description}>{description}</Typography>}
        {location && <Typography sx={styles.location}>{location}</Typography>}
        {rsvpLink && (
          <Typography sx={styles.rsvp}>
            <Button sx={styles.Button} contained href={rsvpLink} target="_blank" rel="noopener noreferrer">
              RSVP here
            </Button>
          </Typography>
        )}
      </CardContent>

      {landscapePhotos.length > 0 && (
        <Stack direction="row" spacing={1} sx={styles.photoRow}>
          {landscapePhotos.map((imgSrc, index) => (
            <CardMedia
              key={index}
              component="img"
              image={imgSrc}
              alt={`${name} photoLandscape ${index + 1}`}
              sx={styles.landscape}
                  />
            ))}
        </Stack>
      )}

      {portraitPhotos.length > 0 && (
        <Stack direction="row" spacing={1} sx={styles.photoRow}>
          {portraitPhotos.map((imgSrc, index) => (
            <CardMedia
              key={index}
              component="img"
              image={imgSrc}
              alt={`${name} photoPortrait ${index + 1}`}
              sx={styles.portrait}
                  />
            ))}
        </Stack>
      )}

      {flyersList.length > 0 && (
        <Box>
          <Button variant="contained" onClick={() => setFlyerOpen((open) => !open)} sx={styles.Button}>
      {flyerOpen ? 'Hide flyer' : 'View flyer'}
          </Button>
            <Collapse in={flyerOpen}>
              {flyersList.map((imgSrc, index) => (
              <CardMedia
                key={index}
                component="img"
                image={imgSrc}
                alt={`${name} flyer ${index + 1}`}
                sx={styles.flyer}
              />
              ))}
            </Collapse>
        </Box>
      )}
    </Card>
  );
}

const styles = {
  card: {
    backgroundColor: '#F9FAFD', 
    border: '2px solid #f3cff1', 
    borderRadius: 3,
    boxShadow: '0 4px 14px rgba(11, 37, 69, 0.15)', 
    textAlign: 'left',
    transition: 'transform 0.15s ease, box-shadow 0.2s ease',
    '&:hover': { 
      transform: 'translateY(-2px)', 
      boxShadow: '0 6px 18px rgba(11, 37, 69, 0.2)' },
  },
  name: { 
    display: 'inline-block', 
    mb: 0.5, 
    px: 1.5, 
    py: 0.75, 
    backgroundColor: '#AEBAE3', 
    border: '1px solid #978A96', 
    borderRadius: 2, 
    color: '#1C1E4D', 
    fontSize: 20, 
    fontWeight: 700 
  },
  metadata: { 
    mb: 1, 
    color: '#295b23', 
    fontSize: 14, 
    fontWeight: 600 
  },
  description: { 
    mb: 1, 
    color: '#3c4a5e', 
    fontSize: 15, 
    lineHeight: 1.5 
  },
  location: { 
    mb: 1.5, 
    color: '#295b23', 
    fontSize: 13 
  },
  photoRow: { 
    p: 2, 
    overflowX: 'auto' 
  },
  landscape: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'contain', 
    borderRadius: 1 },
 
  portrait: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'contain', 
    borderRadius: 1 },
  
  Button: { 
    color: '#f9f9fa', 
    backgroundColor: '#A8BFA0', 
    m: 2, '&:hover': { backgroundColor: '#D7789F' } 
  },
  flyer: { 
    width: '100%', 
    height: 'auto', 
    maxHeight: 700, 
    objectFit: 'contain', 
    borderRadius: 1 
  },
  
  rsvp: { 
  mt: 0.5, 
  '& a': { 
    display: 'inline-block', 
    px: 2, py: 1, 
    backgroundColor: '#A8BFA0', 
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 600, 
    textDecoration: 'none', 
    borderRadius: 2, 
    transition: 'background 0.2s ease, transform 0.15s ease', 
    '&:hover': { 
      backgroundColor: '#D7789F', 
      transform: 'translateY(-2px)' } } 
    },
};


/* color pallete */
/* light pink #f3cff1 dark pink #D7789F */
/* dark purple #978A96 */
/* light green #ADC8A3 or #A8BFA0 */
/* green #295b23*/
/* light blue #AEBAE3 navy #1C1E4D */