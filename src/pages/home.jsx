
import {Container, Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import {Stack, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import {AppBar, Toolbar} from '@mui/material';
import Masonry from '@mui/lab/Masonry';



import '../index.css'
import photo1 from '../assets/pandas.jpg'
import photo2 from '../assets/officer-photos/officers.jpg';
import photo3 from '../assets/officer-photos/Sabrina.jpg';
import photo4 from '../assets/officer-photos/Chris.jpg';
import photo5 from '../assets/officer-photos/Kayla.jpeg';

console.log("Chris image:", photo4);

const links = [
{label: "Join our Discord", href: 'https://discord.gg/ThPZAmd59u'},
{label: "Join the Club", href: 'https://docs.google.com/forms/d/e/1FAIpQLSfIvilyOgdLPUQDw7oaqMnMmQ7vzZ9nr48lLOrb7j9he-lDxA/viewform?usp=dialog'},
{label: "Follow us on Instagram", href: 'https://www.instagram.com/ecc_datascienceclub'},
{label: "ECC Engage", href: ''},
{label: "Github", href: 'https://github.com/ecc-data-science-club'},
];

const OurTeam = [
  {
    id: 1,
    image: photo3,
    name: 'Sabrina',
    role: 'President',
    degree: 'Computer Science',
  },
  {
    id: 2,
    image: photo5,
    name: 'Kayla',
    role: 'Vice President',
    degree: 'Data Science',
  },
  {
    id: 3,
    image: photo4,
    name: 'Chris',
    role: 'Treasurer',
    degree: "Master's of Biomedicine in Data Science",
  },
  {
    id: 4,
    name: 'Natalia',
    role: 'Secretary',
    degree: 'Data Science',
  },

]
 
export default function Homepage() {


    return(
  <>
  {/* Start of content */}
    <Container id="content">

          {/* welcome */}
          {/*  image banner and title*/}
          <Box id="welcome-banner">
            <img src={photo1} alt="Pandas-Seminar" className="banner-img" />
            <Box id="welcome-overlay"> 
              <Box id="welcome-content">
                <Typography id="welcome-title" component="h2">
                Welcome to the El Camino College Stats and Data Science Club
              </Typography>
              <Typography className="welcome-text">
                The ECC Stats and Data Science Club is a student-led organization
                dedicated to cultivating the next generation of data scientists
                through hands-on projects, networking, and events. 
              </Typography>
            </Box>
          </Box>
        </Box>

    <Stack direction="row" id="content-row" spacing={4}>   
      <Box id="content-left">
        <Box id="info">
            <Typography id="section-title">
              For the 2026-2027 academic school year, here's what we have planned:
            </Typography>
            <List >
              <ListItem className="list-text" >
                - Semester-long data analysis project: hands-on experience starting with cleaning data to analyzing it for your portfolio </ListItem>
              <ListItem className="list-text">
                - Club meetings: lesson-based meetings to teach skills based on the current project milestone (also sometimes fun activities!) </ListItem>
              <ListItem className="list-text">
                - Social events: Hangout and meet your peers </ListItem>
              <ListItem className="list-text">
                - Professional development and industry events: Campus tours and learning related skills like how to create your resume or network on LinkedIn </ListItem>
              <ListItem className="list-text">
                - Guest Speakers: Q&A’s with full-time data scientists in collaboration with the ECC SEEDS project </ListItem>
              <ListItem className="list-text">
                - And more! </ListItem>
            </List>
        </Box>
      </Box>

    {/* right screen */}

            {/* list of links */}
          <List id="link-list" className="ticks">
            {links.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  className="link-button"
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ListItemText primary={link.label} />
                        </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>

         <Box className="info">
          {/* Who we Are */}
            <Typography id="section-title" >
              Who We Are
            </Typography>
            <Typography className="section-text" sx={{marginTop: "15px"}}>
              In 2025, Alumni Maxime Chung and Ceeb Ancheta founded the club to create a community of students with a genuine interest in exploring and pursuing data science and supporting their community. The club focused on events, hosting their own Pandas seminar, DataJam, and taking part in Texera.
            </Typography>
            <Typography className="section-text" sx={{marginTop: "20px"}}>
             For complicated reasons, the club became inactive during the Spring 2026 semester. The officers were unreachable, meetings weren't held, and the members were forgotten.
            </Typography>
             <Typography className="section-text" sx={{marginTop: "20px"}}>
              In May, Chris, the Vice President at the time, started reaching out to students to revive the club. 
              Thanks to his efforts, as of Fall 2026, the officer team is: 
            </Typography>
        
        {/* array */}
        <Box className="info">
            <Masonry columns={{ xs: 1, sm: 4}} spacing={1} sx={{ marginTop: "20px" }}>
              {OurTeam
                .filter((member) => member.name)
                .map((member) => (
                  <Card key={member.id} className="team-card" sx={{ padding: 2 }}>
                    <CardMedia
                      component="img"
                      height="420"
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3">
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {member.role}
                      </Typography>
                      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        {member.degree}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
            </Masonry>
          </Box>

            <Typography className="section-text" sx={{marginTop: "20px", marginBottom: "20px"}}>
              Our vision is to create a collaborative environment where students can develop their technical and professional skills, and begin networking with professionals.
            </Typography>
            <Typography className="section-text" sx={{marginTop: "20px", marginBottom: "20px"}}>
             Let's create together!
            </Typography>
              {/* Add club images here */}
    
               <Box className="club-photo">
                  <img src={photo2} alt="Sabrina, Chris, Kayla, and Natalia" className="club-photo" />
                </Box>
         </Box>

          <Box id="footnote">
            <Typography id="footnote-text">
            This website was built by Sabrina Moore with React and Vite using Visual Studio Code and Material UI components. Club logo was made using Canva Free Graphics and the El Camino College logo was taken from their website.
          </Typography>
          </Box>
      </Container>
  </>
  );
}