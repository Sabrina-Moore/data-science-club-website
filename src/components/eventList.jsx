import { Stack, Typography } from '@mui/material';
import EventCard from './eventComponent';

const styles = {
  title: { mb: 2, color: '#1C1E4D', fontSize: 32, fontWeight: 800 },
  list: { maxWidth: 720, mx: 'auto' },
};

export default function EventList({ title, titleId, events = [], emptyMessage = '' }) {
  return (
    <>
      {title && <Typography id={titleId} sx={styles.title}>{title}</Typography>}
      <Stack spacing={2} sx={styles.list}>
        {events.length > 0
          ? events.map((event) => <EventCard key={`${event.name}-${event.date}`} event={event} />)
          : emptyMessage && <Typography>{emptyMessage}</Typography>}
      </Stack>
    </>
  );
}
