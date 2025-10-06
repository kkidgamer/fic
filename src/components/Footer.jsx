import React from 'react';
import { format } from 'date-fns';

const Footer = () => {
  return (
    <footer className="bg-fic-light-blue text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Friends International Centre. All rights reserved.</p>
      <p>Last updated: {format(new Date(), "PPP 'at' p z")}</p> {/* e.g., October 06, 2025 at 03:05 PM EAT */}
    </footer>
  );
};

export default Footer;