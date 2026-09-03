 import { useEffect, useState } from 'react'
import React from 'react';

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

import '../index.css'


const links = [
{label: "Join our Discord", href: 'https://discord.gg/ThPZAmd59u'},
{label: "Join the Club", href: 'https://docs.google.com/forms/d/e/1FAIpQLSfIvilyOgdLPUQDw7oaqMnMmQ7vzZ9nr48lLOrb7j9he-lDxA/viewform?usp=dialog'},
{label: "Follow us on Instagram", href: ''},
{label: "ECC Engage", href: '' },
{label: "Github", href: ''},
];
 
export default function Homepage() {


    return(
  <>
  {/* Start of content */}
    <Container id="content">

          {/* welcome */}
          {/*  image banner and title*/}
          <Box id="welcome-banner">
            <img src="/src/assets/pandas.jpg" alt="Pandas-Seminar" className="banner-img" />
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
                - Social eents: Hangout and meet your peers </ListItem>
              <ListItem className="list-text">
                - Professional development and industry events: Campus tours and learning related skills like how to create your resume or network on LinkedIn </ListItem>
              <ListItem className="list-text">
                - Fireside chats with Data Scientists: Q&A’s with full-time data scientists in collaboration with the ECC SEEDS project </ListItem>
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
              In 2025, Alumni Maxime Chung and Ceeb Ancheta founded the club to create a community of students with a genuine interest in exploring and pursuing data science and supporting their community. The club is ...
            </Typography>
            <Typography className="section-text" sx={{marginTop: "40px"}}>
              In Spring 2026, the club unfortunately became inactive. 
            </Typography>
              {/* Add club images here */}
            <Box id="club-photos">
              <img src="/src/assets/data-con.jpeg" alt="data-con with Sabrina and Chris" className="club-photo" />
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