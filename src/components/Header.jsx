import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    style={{ background: 'var(--primary-blue)', color: 'var(--white)', position: 'sticky', top: 0, zIndex: 100 }}
  >
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0' }}>
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--white)', textDecoration: 'none' }}>
        FIC Quakers
      </Link>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0 }}>
          <li><Link to="/" style={{ color: 'var(--white)', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'var(--white)', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/events" style={{ color: 'var(--white)', textDecoration: 'none' }}>Events</Link></li>
          <li><Link to="/services" style={{ color: 'var(--white)', textDecoration: 'none' }}>Services</Link></li>
          <li><Link to="/contact" style={{ color: 'var(--white)', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </motion.header>
);

export default Header;