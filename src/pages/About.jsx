import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="container mx-auto py-8 animate-slideInLeft"
    transition={{ duration: 1 }}
  >
    <h1 className="text-3xl font-bold mb-6 text-fic-blue text-center">About FIC</h1>
    <p className="mb-4 text-lg">
      Friends International Centre is a Quaker community on Ngong Road, Nairobi, rooted in peace, simplicity, and service. Part of Nairobi Yearly Meeting since the 1950s, we welcome all for worship, reflection, and outreach.
    </p>
    <ul className="list-disc pl-6 space-y-2 mb-6">
      <li className="text-gray-700"><strong>Founded:</strong> 1950s as a Quaker fellowship hub.</li>
      <li className="text-gray-700"><strong>Mission:</strong> Promote peace, equality, and faith-based service.</li>
      <li className="text-gray-700"><strong>Leadership:</strong> Led by Pst. Dkt. Simon Khaemba and community elders.</li>
    </ul>
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-center"
    >
      <p className="text-gray-600 italic">Join us in our journey of faith and community!</p>
    </motion.div>
  </motion.section>
);

export default About;