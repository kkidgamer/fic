import { useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Sunday Worship', date: new Date('2025-10-05'), time: '10:00 AM', rsvp: false },
    { id: 2, title: 'Community Outreach', date: new Date('2025-10-12'), time: '2:00 PM', rsvp: false }
  ]);

  const toggleRSVP = (id) => {
    setEvents(events.map(e => e.id === id ? { ...e, rsvp: !e.rsvp } : e));
  };

  return (
    <section className="section">
      <div className="container">
        <h1>Events</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {events.map(event => (
            <motion.div
              key={event.id}
              style={{ background: 'var(--white)', padding: '1rem', borderRadius: '5px' }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>{event.title}</h3>
              <p>{format(event.date, 'MMM d, yyyy')} at {event.time}</p>
              <button onClick={() => toggleRSVP(event.id)}>{event.rsvp ? 'RSVPd!' : 'RSVP'}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;