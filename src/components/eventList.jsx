import { Stack, Typography } from '@mui/material';
import EventCard from './eventComponent';

export default function EventList({ title, titleId, events = [], emptyMessage = '' }) {
  return (
    <>
      {title && <Typography id={titleId}>{title}</Typography>}
      <Stack className="event-list" spacing={2}>
        {events.length > 0
          ? events.map((event) => <EventCard key={`${event.name}-${event.date}`} event={event} />)
          : emptyMessage && <Typography>{emptyMessage}</Typography>}
      </Stack>
    </>
  );
}