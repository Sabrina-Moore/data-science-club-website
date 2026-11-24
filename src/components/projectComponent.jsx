import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';

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
   <Container maxWidth="md" sx={styles.container}>
      {hasText(title) && (
        <Typography component="h1" sx={styles.heading}>
          {title}
        </Typography>
      )}

      {hasText(description) && (
        <Typography sx={styles.description}>
          {description}
        </Typography>
      )}

      {hasText(githubUrl) && (
        <Typography sx={styles.github}>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        </Typography>
      )}

      {hasText(pdfUrl) && (
        <Box
          component="section"
          aria-label={label}
          sx={styles.presentation}
        >
          <Box
            key={page}
            component="iframe"
            title={`${label}, page ${page}`}
            src={`${pdfUrl}#page=${page}&toolbar=0&navpanes=0`}
            sx={styles.frame}
          />
        </Box>
      )}
    </Container>
  );
}

const styles = {
  container: { py: 5 },
  heading: { textAlign: 'center', mb: 2, color: '#1C1E4D', fontSize: 56, fontWeight: 800, lineHeight: 1.1 },
  description: { textAlign: 'center', mb: 1, fontSize: 18 },
  github: { textAlign: 'center', mb: 3 },
  presentation: { border: '2px solid #1C1E4D', borderRadius: 2, overflow: 'hidden', backgroundColor: '#fff' },
  frame: { display: 'block', width: '100%', height: { xs: '55vh', md: '75vh' }, border: 0 },
};
