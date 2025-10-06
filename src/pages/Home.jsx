import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const events = [
    { title: 'Sunday Worship', date: 'Oct 6, 2025', time: '10:00 AM', desc: 'Join Pst. Simon Khaemba.' },
    { title: 'Nyaf Conference Recap', date: 'Oct 13, 2025', time: '2:00 PM', desc: 'Celebrate NRMM & Kabete winners.' },
  ];

  const galleryImages = [
    'https://via.placeholder.com/300x200?text=Worship',
    'https://via.placeholder.com/300x200?text=Community',
    'https://via.placeholder.com/300x200?text=Outreach',
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-fic-blue to-fic-light-blue text-white py-12 text-center animate-slideInLeft"
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Welcome to Friends International Centre</h1>
          <p className="text-lg">Quaker worship and community on Ngong Road, Nairobi.</p>
          <Link to="/services">
            <button className="mt-4 bg-fic-light-blue text-white py-2 px-4 rounded hover:bg-blue-300 animate-slideInRight">
              Join Us
            </button>
          </Link>
        </div>
      </motion.section>

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6 animate-slideInLeft">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-4 rounded shadow"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600"><strong>{event.date} at {event.time}</strong></p>
              <p>{event.desc}</p>
              <Link to="/events">
                <button className="mt-2 bg-fic-light-blue text-white py-1 px-3 rounded hover:bg-blue-300">
                  RSVP
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6 animate-slideInRight">Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt="Community event"
              className="w-full rounded shadow hover:scale-105 transition-transform"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;