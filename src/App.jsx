//runs the navigation bar

import { useEffect, useState } from 'react'
import React from 'react';

import { Analytics } from "@vercel/analytics/react" //for vercel analytics

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import './index.css'
import Homepage from './pages/home';
import Projects from './pages/projects';
import Events from './pages/events';

import clubLogo from '/src/assets/club-logo.png';
import eccLogo from '/src/assets/ECC-logo.png';

function App() {

  //website lists links (discord, instagram, ecc data science page)
//states for navigation
const [currentPage, setCurrentPage] = useState("home");


  return (
    <>
      <AppBar id="navbar" position="static" elevation={0}>
        {/* Navbar and logo */}
        <Toolbar>
          {/* logo - left */}
          <Box id="club-logo" className="club-logo">
            <img src={clubLogo} alt="club logo" className="club-logo-img" />
          </Box>
          <Typography id="header" component="h1">
            ECC Stats and Data Science Club
          </Typography>
           <Box id="club-logo" className="club-logo">
            <img src={eccLogo} alt="ECC logo" className="club-logo-img" />
          </Box>
          {/* pushes anything after it to the right */}
          <Box sx={{ flexGrow: 1 }} />
          <Stack
          id="nav-links"
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {/* Home Page */}
          <Button className="nav-link-button"
          variant={currentPage == "home" ? "contained" : "outlined"}
              onClick={() => setCurrentPage("home")} > Home </Button>
          {/* Projects */}
          <Button className="nav-link-button"
           variant={currentPage == "projects" ? "contained" : "outlined"}
            onClick={() => setCurrentPage("projects")}> Projects </Button>
          <Button className="nav-link-button"
          variant={currentPage == "events" ? "contained" : "outlined"}
            onClick={() => setCurrentPage("events")}> Events </Button>
        </Stack>
        </Toolbar>
      </AppBar>

      {/* rendering contet */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          
          {currentPage === "home" && <Homepage />}

          {currentPage === "projects" && <Projects />}
          {currentPage === "events" && <Events />}
        </Container>
   </>
  )
}

export default App
