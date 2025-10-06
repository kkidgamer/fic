import { motion } from 'framer-motion';

const Services = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="container mx-auto py-8 animate-slideInLeft"
    transition={{ duration: 1 }}
  >
    <h1 className="text-3xl font-bold mb-6 text-fic-blue text-center">Our Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-fic-blue mb-2">Worship</h2>
        <p className="mb-2">Sundays at 10:00 AM EAT: Silent reflection and sermons. Watch live on <a href="https://youtube.com" className="text-fic-light-blue hover:underline">YouTube</a>.</p>
        <iframe
          width="100%"
          height="150"
          src="https://www.youtube.com/embed/TwogRe3V5oo"
          title="Service"
          className="rounded"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-fic-blue mb-2">Community</h2>
        <p>Programs include youth groups, Bible studies, and Nyaf conferences for spiritual growth.</p>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-4 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-fic-blue mb-2">Member Portal</h2>
        <p>Coming soon: Personalized devotionals and updates.</p>
        <button className="mt-2 bg-fic-light-blue text-white py-2 px-4 rounded hover:bg-blue-300">Sign Up</button>
      </motion.div>
    </div>
  </motion.section>
);

export default Services;