import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const events = [
    { title: 'Sunday Worship', date: 'Oct 5, 2025', time: '10:00 AM', desc: 'Join Pst. Simon Khaemba for fellowship.' },
    { title: 'Nyaf Conference Recap', date: 'Oct 12, 2025', time: '2:00 PM', desc: 'Celebrate NRMM & Kabete winners.' }
  ];

  const galleryImages = [
    'https://via.placeholder.com/300x200?text=Worship', // Replace with real FIC photos
    'https://via.placeholder.com/300x200?text=Community',
    'https://via.placeholder.com/300x200?text=Outreach'
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ background: 'linear-gradient(to right, var(--primary-blue), var(--secondary-blue))', color: 'var(--white)', padding: '4rem 0', textAlign: 'center' }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.5rem' }}>Welcome to Friends International Centre</h1>
          <p>Quaker worship and community on Ngong Road, Nairobi.</p>
          <Link to="/services"><button>Join Us</button></Link>
        </div>
      </motion.section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Upcoming Events</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {events.map((event, idx) => (
              <div key={idx} style={{ background: 'var(--white)', padding: '1rem', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <h3>{event.title}</h3>
                <p><strong>{event.date} at {event.time}</strong></p>
                <p>{event.desc}</p>
                <Link to="/events"><button>RSVP</button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our Community</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {galleryImages.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt="Community event"
                style={{ width: '100%', borderRadius: '5px' }}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;