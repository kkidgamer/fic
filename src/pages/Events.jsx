import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Sunday Worship', date: new Date('2025-10-06T10:00:00+03:00'), time: '10:00 AM EAT', rsvp: false },
    { id: 2, title: 'Community Outreach', date: new Date('2025-10-13T14:00:00+03:00'), time: '2:00 PM EAT', rsvp: false },
    { id: 3, title: 'Youth Fellowship', date: new Date('2025-10-20T16:00:00+03:00'), time: '4:00 PM EAT', rsvp: false },
  ]);

  useEffect(() => {
    const savedEvents = localStorage.getItem('ficEvents');
    if (savedEvents) setEvents(JSON.parse(savedEvents));
  }, []);

  useEffect(() => {
    localStorage.setItem('ficEvents', JSON.stringify(events));
  }, [events]);

  const toggleRSVP = (id) => {
    setEvents(events.map(e => e.id === id ? { ...e, rsvp: !e.rsvp } : e));
    const event = events.find(e => e.id === id);
    toast[event.rsvp ? 'success' : 'info'](event.rsvp ? 'RSVP confirmed!' : 'RSVP removed.');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-8 animate-slideInRight"
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-fic-blue text-center">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: event.id * 0.1 }}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-fic-blue">{event.title}</h3>
            <p className="text-gray-600">Date: {format(event.date, 'PPP')} at {event.time}</p>
            <p className="text-gray-600">Today is {format(new Date(), 'PPP')} at {format(new Date(), 'p')} EAT</p>
            <button
              onClick={() => toggleRSVP(event.id)}
              className={`mt-4 ${event.rsvp ? 'bg-green-500' : 'bg-fic-light-blue'} text-white py-2 px-4 rounded hover:opacity-90`}
            >
              {event.rsvp ? 'RSVPd!' : 'RSVP'}
            </button>
          </motion.div>
        ))}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </motion.section>
  );
};

export default Events;