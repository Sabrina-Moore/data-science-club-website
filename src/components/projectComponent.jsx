import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const hasText = (value) => typeof value === 'string' && value.trim() !== '';

export default function ProjectComponent({
  title = '',
  description = '',
  pdfUrl = '',
  slideCount = 1,
  githubUrl = '',
  githubLabel = '',
  presentationLabel = '',
  initialPage = 1,
}) {
  const [page, setPage] = useState(initialPage);

  const label = hasText(presentationLabel)
    ? presentationLabel
    : hasText(title)
      ? `${title} presentation`
      : 'Presentation';

  const linkText = hasText(githubLabel) ? githubLabel : 'View the project on GitHub';


  return (
   <Container maxWidth="md" sx={{ py: 5 }}>
      {hasText(title) && (
        <Typography id="header" component="h1" sx={{ textAlign: 'center', mb: 2 }}>
          {title}
        </Typography>
      )}

      {hasText(description) && (
        <Typography className="section-text" sx={{ textAlign: 'center', mb: 1 }}>
          {description}
        </Typography>
      )}

      {hasText(githubUrl) && (
        <Typography sx={{ textAlign: 'center', mb: 3 }}>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        </Typography>
      )}

      {hasText(pdfUrl) && (
        <Box
          component="section"
          aria-label={label}
          sx={{ border: '2px solid var(--navy)', borderRadius: 2, overflow: 'hidden', bgcolor: 'white' }}
        >
          <Box
            key={page}
            component="iframe"
            title={`${label}, page ${page}`}
            src={`${pdfUrl}#page=${page}&toolbar=0&navpanes=0`}
            sx={{ display: 'block', width: '100%', height: { xs: '55vh', md: '75vh' }, border: 0 }}
          />
        </Box>
      )}
    </Container>
  );
}