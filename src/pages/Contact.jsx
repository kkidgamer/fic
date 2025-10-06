import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { format } from 'date-fns';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    console.log('Env vars:', process.env); // Debug env variables
    if (!process.env.REACT_APP_EMAILJS_USER_ID) {
      console.error('EmailJS User ID is missing or undefined');
      setStatus('EmailJS configuration error. Check console or use hardcoded fallback.');
      // Fallback to hardcoded values for testing (remove in production)
      emailjs.init('your-correct-user-id'); // Replace with your User ID
      return;
    }
    emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: format(new Date(), "PPP 'at' p z"), // e.g., "October 06, 2025 at 02:40 PM EAT"
    };

    console.log('Sending email with params:', templateParams); // Debug log

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your-correct-service-id', // Fallback
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your-correct-template-id', // Fallback
      templateParams
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      },
      (error) => {
        console.error('Email failed with error:', error); // Log full error object
        setStatus('Failed to send message. Please try again. Check console for details.');
      }
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto py-8 animate-slideInRight"
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold mb-6 text-fic-blue text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.form
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="Contact Form"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-fic-light-blue"
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-fic-light-blue"
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-fic-light-blue"
              rows="4"
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-fic-light-blue text-white py-2 px-4 rounded hover:bg-blue-300 transition-colors"
          >
            Send
          </button>
          {status && <p className={`mt-2 ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
        </motion.form>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <p><strong>Location:</strong> Ngong Road, Nairobi</p>
          <p><strong>Email:</strong> info@ficquakers.org</p>
          <p><strong>Phone:</strong> +254-XXX-XXXXXX</p>
          <p><strong>Current Time:</strong> {format(new Date(), "PPP 'at' p z")}</p> {/* e.g., October 06, 2025 at 02:40 PM EAT */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456789!2d36.789!3d-1.292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMuKCsDE3JzI5LjIiUyAzN8KwNDcnMjguNSJF!5e0!3m2!1sen!2ske!4v1234567890"
            width="100%"
            height="200"
            className="border-0 rounded"
            allowFullScreen
            loading="lazy"
            aria-label="Map of Ngong Road, Nairobi"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;