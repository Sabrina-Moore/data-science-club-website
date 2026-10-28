import { Container } from '@mui/material'
import EventList from '../components/eventList'

import photo1 from '../assets/event-photos/data-con.jpeg'
import photo2 from '../assets/event-photos/9-24-26-speakers.jpg'
import photo3 from '../assets/event-photos/9-24-26-speakers2.jpg'
import photo4 from '../assets/flyers/Lancer_Hacks.png'
import photo5 from '../assets/event-photos/LACC_Datathon_Awards.png'
import '../index.css'
import photo6 from '../assets/flyers/Careers_Day_26.png'
import photo7 from '../assets/flyers/ECC_spring_conference_26.webp'
import photo8 from '../assets/flyers/industry_event_11-12.png'



 //do I want this to be supabase run???? or hard-coded?

    //if yes
    // const [visible, setVisible] = useState(false);
    // const [events, setEvents] = useState([]);

    //then fetch data like from events table
    //then filter events
    //show live event
    //group upcoming events
    //group past events


    //hard coded version
    // add new object here for more events
    const events = [
  {
  name: "Data Science Spring Conference 2026", 
    description: "Explore real-world applications fo data science, hear from industry professionals and guests from the University of California, Berkeley, and connect with fellow students. Whether you're just starting or already interested in data and AI, this event offers insights, inspiration, and opportunities for your future.",
    date: "05-01-2026",
    time: "8:30 AM - 2:30 PM PST",
    location: "El Camino College",
    rsvpLink: "",
    photo: [photo7], 
  },
  { name: "SEEDS Data Industry Event: Dr. Yong-Chuan Liu", 
    description: "Join the ECC SEEDS Project for an industry event at the Lab. The speaker is Dr Yong-Chuan Liu, the former Chief Data Scientist at IBM and founder of RMDS Lab who will be talking about his field. Free parking and free food. RSVP required.",
    date: "09-24-2026", 
    time: "6:00 PM - 8:00 PM PST",
    location: "15916 Crenshaw Blvd, Gardena, CA 90249",
    rsvpLink: "https://www.eventbrite.com/e/2026-fall-data-science-industry-event-924-tickets-1998698386678?aff=ebdsoporgprofile",
    photo: [photo2, photo3],
  },
  {
  name: "Data Con LA 2026", 
    description: "For more than a decade, Data Con LA has been Southern California's gathering for data and technology enthusiasts, from students taking their first steps in the field to seasoned professionals shaping the future of AI, analytics, and data engineering.",
    date: "08-22-2026",
    time: "",
    location: "CSU Long Beach, 1250 Bellflower Blvd, Long Beach, CA 90840",
    rsvpLink: "",
    photo: [photo1], 
  },
  {
  name: "Datathon at Los Angeles City College", 
    description: "Join us at the LACC Datathon. Register ASAP! 'The purpose of Datathon is to provide students with hands-on experience in data science, helping them build skills in coding, analyzing, and data visualization in an inclusive, collaborative environment. Students will be introduced to R Studio through a series of self-guided coding exercises, after which they will work in teams to analyze datasets. Students give presentations in order to demonstrate the ability to apply newly acquired skills in innovative and educational ways.  Prior coding experience is unnecessary; we welcome interested students of all levels!'",
    date: "10-24-2026",
    time: "Pending",
    location: "Pending, LACC Campus",
    rsvpLink: "https://www.lacc.edu/academics/pathways/stem/math-dept/datathon",
    photo: [photo5], 
  },
{
  name: "Lancer Hacks at Pasadena City College", 
    description: "Join the ECC Data Science Club at Pasadena City College for an all day hackathon. 'Brought to you by four campus clubs (She.Codes, STEM Competition Society, AI Club, and Data Science Club) and our two amazing sponsors, MESA and the Greater LA Data Science Pathways Program, LancerHacks is your chance to build something awesome in just one day. Sharpen your coding skills, meet fellow builders, and most importantly, have fun! We'll keep you fueled with free lunch, dinner, and energy drinks. Plus, compete for prizes like AirPods, mechanical keyboards, blind boxes, and more!'",
    date: "10-30-2026",
    time: "9:00 AM - 9:00 PM PST",
    location: "WIFI Lounge, PCC Campus",
    rsvpLink: "",
    photo: [photo4], 
  },
  {
  name: "Career Day @ CSU Fullerton", 
    description: "Careers Day is an opportunity for future statisticians and users of statistics to prepare for careers in the field. We welcome all local students, as well as professionals interested in a career change, to talk with our academic statisticians, biostatisticians, business analysts, data scientists, market researchers, etc. about the career paths that best match their experience and interest and what they can do now to prepare themselves for those careers.",
    date: "11-7-2026",
    time: "9:00 AM - 12:30 PM PST",
    location: "McCarthy Hall, CSU Fullerton",
    rsvpLink: "https://docs.google.com/forms/d/e/1FAIpQLSfbU0uE156ZdVQuAVkx5FklVyJyLJPLHRQ5F77kRuQqE3pvqQ/viewform",
    photo: [photo6], 
  },
  {
   name: "SEEDS Data Industry Event: Sandhya Kambhampati", 
    description: "Join us for an evening exploring how data, statistics, and storytelling come together to shape our understanding of our communities and the world around us. Our featured speaker, Sandhya Kambhampati, is a data reporter on the Los Angeles Times Data Desk, where she specializes in statistical analysis and demographic data. Her work focuses on using data to uncover patterns, explain complex issues, and tell stories that have real-world impact. Before joining the Los Angeles Times, Sandhya worked at The Chronicle of Higher Education, Correctiv, and ProPublica Illinois, bringing experience across journalism, public-interest reporting, and data-driven investigations.",
    date: "11-12-2026",
    time: "6:00 PM - 8:00 PM PST",
    location: "The Lab, 15916 Crenshaw Blvd Gardena, CA",
    rsvpLink: "https://www.eventbrite.com/e/2026-fall-data-science-industry-event-1112-tickets-2003358618557?utm_term=US-Los%20Angeles-1.NonTwoTowers-Reactivation.FreeTickets-listing.previousorganizer&utm_content=69a699f2-1028-4684-982c-ced9e6f5ec7f__6acf9a59f55d477e52e6d38a34747d9b__04a9bfbc-d724-4925-9c4e-ff477bfc3c41__c5add454-d8cf-4c4b-b7b4-4c4a5cdd8940&aff=ebemnsebconsumeremail&utm_medium=ebml&utm_campaign=clab_coex_lcm_dss_mec_mc_mum_0_0_previousorganizer-reactivation&utm_source=braze&lid=u18a01m2llzx&keep_tld=true",
    photo: [photo8], 
  },
];


// Today's date
const today = new Date();

// Upcoming events
const upcomingEvents = events
  .filter((event) => new Date(event.date) >= today)
  .sort((a, b) => new Date(a.date) - new Date(b.date));

// Past events
const pastEvents = events
  .filter((event) => new Date(event.date) < today)
  .sort((a, b) => new Date(b.date) - new Date(a.date));



export default function Events() {
  return (
    <Container>
      <EventList
        title="Upcoming Events"
        titleId="upcoming-title"
        events={upcomingEvents}
        emptyMessage="No upcoming events right now. Check back soon!"
      />
      <EventList
        title="Past Events"
        titleId="past-title"
        events={pastEvents}
      />
    </Container>
  );
}