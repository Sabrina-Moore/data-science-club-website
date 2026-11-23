//runs the navigation bar

import { useState } from 'react'
import { Container, Box, Stack, Divider, Button, Typography } from '@mui/material';
import { AppBar, Toolbar, IconButton, Menu,  MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './app.css';

import Homepage from './pages/home';
import Projects from './pages/projects';
import Events from './pages/events';

import clubLogo from '/src/assets/club-logo.png';
import eccLogo from '/src/assets/ECC-logo.png';

function App() {

  //website lists links (discord, instagram, ecc data science page)
//states for navigation
const [currentPage, setCurrentPage] = useState("home");

//states for mobile hamburger navigation
const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
const mobileMenuOpen = Boolean(mobileMenuAnchor);

const openMobileMenu = (event) => setMobileMenuAnchor(event.currentTarget);
const closeMobileMenu = () => setMobileMenuAnchor(null);

const goToPage = (page) => {
  setCurrentPage(page);
  closeMobileMenu();
};

  return (
    <>
    <Box>
      <AppBar position="static" elevation={0} sx={styles.navbar}>
        {/* Navbar and logo */}
        <Toolbar>
          {/* logo - left */}
          <Box sx={styles.logo}>
            <Box component="img" src={clubLogo} alt="club logo" sx={styles.logoImage} />
          </Box>
          <Typography component="h1" sx={styles.heading}>
            ECC Stats and Data Science Club
          </Typography>
           <Box sx={styles.logo}>
            <Box component="img" src={eccLogo} alt="ECC logo" sx={styles.logoImage} />
          </Box>
          {/* pushes anything after it to the right */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}  />
          <Stack
          sx={{...styles.navLinks, display: { xs: 'none', md: 'flex' } }}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {/* Home Page */}
          <Button sx={styles.navButton}
          variant={currentPage == "home" ? "contained" : "outlined"}
              onClick={() => setCurrentPage("home")} > Home </Button>
          {/* Projects */}
          <Button sx={styles.navButton}
           variant={currentPage == "projects" ? "contained" : "outlined"}
            onClick={() => setCurrentPage("projects")}> Projects </Button>
          <Button sx={styles.navButton}
          variant={currentPage == "events" ? "contained" : "outlined"}
            onClick={() => setCurrentPage("events")}> Events </Button>
        </Stack>
        
        <IconButton
          aria-label="Open navigation menu"
          aria-controls={mobileMenuOpen ? 'mobile-nav-menu' : undefined}
          aria-expanded={mobileMenuOpen}
          onClick={openMobileMenu}
          sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#1C1E4D' }}
        >
        <MenuIcon />
        </IconButton>

        <Menu
          id="mobile-nav-menu"
          anchorEl={mobileMenuAnchor}
          open={mobileMenuOpen}
          onClose={closeMobileMenu}
        >
          <MenuItem onClick={() => goToPage('home')}>Home</MenuItem>
          <MenuItem onClick={() => goToPage('projects')}>Projects</MenuItem>
          <MenuItem onClick={() => goToPage('events')}>Events</MenuItem>
        </Menu>
        </Toolbar>
      </AppBar>

      {/* rendering contet */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          
          {currentPage === "home" && <Homepage />}

          {currentPage === "projects" && <Projects />}
          {currentPage === "events" && <Events />}
        </Container>
    </Box>
   </>
  )
}

export default App


const styles = {
  page: {
    backgroundColor: '#A8BFa0',
  },
  navbar: { 
    backgroundColor: '#8ba084', 
    boxShadow: 'none', 
    borderBottom: '3px solid #f3cff1' 
  },
  logo: { 
    width: 80, 
    height: 80, 
    overflow: 'hidden', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    flexShrink: 0 
  },
  logoImage: { 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    display: 'block' 
  },
  heading: { 
    color: '#1C1E4D', 
    fontSize: { xs: 24, md: 40, lg: 56 }, 
    fontWeight: 800, 
    lineHeight: 1.1, mx: 2 
  },
  navLinks: { 
    alignItems: 'center', 
    mr: 4 
  },
  navButton: { 
    color: '#1C1E4D', 
    textTransform: 'none', 
    fontWeight: 500, 
    fontSize: 17, 
    border: '2px solid #1C1E4D' 
  },
};

