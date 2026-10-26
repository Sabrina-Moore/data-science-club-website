import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import '../index.css'
import ProjectComponent from "../components/projectComponent";

import PdfPresentationDatathon26 from '../slides/Datathon26_GDP_Unemployment.pdf'



const presentations = [
  {
    id: 'datathon',
    title: 'LACC Datathon',
    description:
      "For the competition, our team had one hour to analyze a dataset about the relationship between a country's GDP and unemployment by gender using R and RStudio.",
    githubUrl: 'https://github.com/Sabrina-Moore/Datathon26',
    pdfUrl: PdfPresentationDatathon26,
    slideCount: 5,
  },
  {id: '',
    title:'',
    description:'',
    githubUrl:'',
    pdfUrl: '',
    slideCount: 1,

  },
];

export default function Projects() {
  return (
    <>
      {presentations.map(({ id, ...props }) => (
        <ProjectComponent key={id} {...props} />
      ))}
    </>
  );
}