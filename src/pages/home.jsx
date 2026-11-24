
import {Container, Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import {Stack, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import photo1 from '../assets/pandas.jpg'
import photo2 from '../assets/officer-photos/officers.jpg';
import photo3 from '../assets/officer-photos/Sabrina.jpg';
import photo4 from '../assets/officer-photos/Chris.jpg';
import photo5 from '../assets/officer-photos/Kayla.jpeg';

const links = [
{label: "Join our Discord", href: 'https://discord.gg/ThPZAmd59u'},
{label: "Join the Club", href: 'https://docs.google.com/forms/d/e/1FAIpQLScdgM2XfNPLCaKpDWW7qMhC7uEhKLSxu7ENzeFwbEJQxMc_Eg/viewform?usp=dialog'},
{label: "Follow us on Instagram", href: 'https://www.instagram.com/ecc_datascienceclub'},
{label: "ECC Engage", href: 'https://elcamino.campuslabs.com/engage/organization/datascienceclub'},
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
    <Container>

          {/* welcome */}
          {/*  image banner and title*/}
          <Box sx={styles.banner}>
            <Box component="img" src={photo1} alt="Pandas-Seminar" sx={styles.bannerImage} />
            <Box sx={styles.overlay}>
              <Box sx={styles.welcomeContent}>
                <Typography component="h2" sx={styles.welcomeTitle}>
                Welcome to the El Camino College Stats and Data Science Club
              </Typography>
              <Typography sx={styles.welcomeText}>
                The ECC Stats and Data Science Club is a student-led organization
                dedicated to cultivating the next generation of data scientists
                through hands-on projects, networking, and events. 
              </Typography>
            </Box>
          </Box>
        </Box>

    <Stack direction="row" spacing={4} sx={styles.contentRow}>
      <Box sx={styles.contentLeft}>
        <Box sx={styles.info}>
            <Typography sx={styles.section}>
              For the 2026-2027 academic school year, here's what we have planned:
            </Typography>
            <List >
              <ListItem sx={styles.listText} >
                - Semester-long data analysis project: hands-on experience starting with cleaning data to analyzing it for your portfolio </ListItem>
              <ListItem sx={styles.listText}>
                - Club meetings: lesson-based meetings to teach skills based on the current project milestone (also sometimes fun activities!) </ListItem>
              <ListItem sx={styles.listText}>
                - Social events: Hangout and meet your peers </ListItem>
              <ListItem sx={styles.listText}>
                - Professional development and industry events: Campus tours and learning related skills like how to create your resume or network on LinkedIn </ListItem>
              <ListItem sx={styles.listText}>
                - Guest Speakers: Q&A’s with full-time data scientists in collaboration with the ECC SEEDS project </ListItem>
              <ListItem sx={styles.listText}>
                - And more! </ListItem>
            </List>
        </Box>
      </Box>

    {/* right screen */}

            {/* list of links */}
          <List sx={styles.links}>
            {links.map((link) => (
              <ListItem key={link.href}>
                <ListItemButton
                  sx={styles.linkButton}
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

         <Box sx={styles.info}>
          {/* Who we Are */}
            <Typography sx={styles.section}>
              Who We Are
            </Typography>
            <Typography sx={{ ...styles.sectionText}}>
              In 2025, Alumni Maxime Chung and Ceeb Ancheta founded the club to create a community of students with a genuine interest in exploring and pursuing data science and supporting their community. The club focused on events, hosting their own Pandas seminar, DataJam, and taking part in Texera.
            </Typography>
            <Typography sx={{ ...styles.sectionText}}>
             For complicated reasons, the club became inactive during the Spring 2026 semester.
            </Typography>
             <Typography sx={{ ...styles.sectionText}}>
              In May, Chris, the Vice President at the time, started reaching out to students to revive the club. 
              Thanks to his efforts, as of Fall 2026, the officer team is: 
            </Typography>
        
        {/* array */}
        <Box sx={styles.info}>
            <Masonry columns={{ xs: 1, sm: 4}} spacing={1} sx={{ marginTop: "20px" }}>
              {OurTeam
                .filter((member) => member.name)
                .map((member) => (
                  <Card key={member.id} sx={styles.teamCard}>
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

            <Typography sx={{ ...styles.sectionText, mt: 2.5, mb: 2.5 }}>
              Our vision is to create a collaborative environment where students can develop their technical and professional skills, and begin networking with professionals.
            </Typography>
            <Typography sx={{ ...styles.sectionText, mt: 2.5, mb: 2.5 }}>
             Let's create together!
            </Typography>
              {/* Add club images here */}
    
               <Box>
                  <Box component="img" src={photo2} alt="Sabrina, Chris, Kayla, and Natalia" sx={styles.clubPhoto} />
                </Box>
         </Box>

          <Box sx={styles.footnote}>
            <Typography sx={{ fontSize: 12 }}>
            This website was built by Sabrina Moore with React and Vite using Visual Studio Code and Material UI components. Club logo was made using Canva Free Graphics and the El Camino College logo was taken from their website.
          </Typography>
          </Box>
      </Container>
  </>
  );
}


const styles = {
  banner: { 
    position: 'relative', 
    width: '100%', 
    minHeight: {xs: 440, sm:400 },
    height: 'auto',
    overflow: 'hidden', 
    borderRadius: 3, 
    border: '1px solid #978A96' 
  },
  bannerImage: { 
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover' 
  },
  overlay: { 
    position: 'absolute', 
    inset: 0, 
    backgroundColor: 'rgba(0,0,0,0.55)' 
  },
  welcomeContent: { 
    position: 'relative', 
    zIndex: 1, 
    p: 5, 
    color: '#F9FAFD' 
  },
  welcomeTitle: { 
    color: '#F9FAFD', 
    fontSize: 32, 
    fontWeight: 800, 
    overflow: 'hidden' 
  },
  welcomeText: { 
    color: '#F9FAFD' 
  },
  contentRow: { 
    alignItems: 'flex-start', 
    mt: 6, mb: 6, 
    gap: 6, 
    flexDirection: { xs: 'column', md: 'row' } 
  },
  contentLeft: { 
    flex: '1 1 auto', 
    minWidth: 0 
  },
  section: { 
    color: '#295b23', 
    fontSize: 24, 
    fontWeight: 700 
  },
  listText: { 
    fontSize: 16 
  },
  links: { 
    width: '100%', 
    maxWidth: 420, 
    flex: '0 0 320px', 
    flexDirection: 'column', 
    gap: 1.75, p: 0, mt: 1.5 
  },
  linkButton: { 
    backgroundColor: '#f3cff1', 
    borderRadius: 2.5, p: '14px 20px', 
    boxShadow: '0 4px 14px rgba(11, 37, 69, 0.15)', 
    transition: 'transform 0.15s ease, background 0.2s ease, box-shadow 0.2s ease', 
    '& .MuiListItemText-primary': { color: '#1C1E4D', fontWeight: 600, fontSize: 16, textAlign: 'center' }, 
    '&:hover': { backgroundColor: '#D7789F', transform: 'translateY(-2px)', boxShadow: '0 6px 18px rgba(11, 37, 69, 0.25)' },
  },
  info: { 
    ml: 1.5, 
    mt: 0.5, 
    mb: 2.5 
  },
  sectionText: { 
    fontSize: 18,
    marginTop: 2,
  },
  teamCard: { 
    fontsize: 2,
  },
  clubPhoto: { 
    display: 'block', width: 'min(100%, 800px)', 
    height: 'auto', 
    mx: 'auto', 
    borderRadius: 2 
  },
  footnote: { 
    mt: 6, 
    mb: 2.5, 
    borderTop: '2px solid #f3cff1' 
  },
};


/* color pallete */
/* light pink #f3cff1 dark pink #D7789F */
/* dark purple #978A96 */
/* light green #ADC8A3 or #A8BFA0 */
/* green #295b23*/
/* light blue #AEBAE3 navy #1C1E4D */