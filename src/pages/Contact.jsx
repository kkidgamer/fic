import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Add EmailJS for real functionality)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section">
      <div className="container">
        <h1>Contact Us</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="4" required />
            <button type="submit">Send</button>
          </form>
          <div>
            <p><strong>Location:</strong> Ngong Road, Nairobi</p>
            <p><strong>Email:</strong> info@ficquakers.org</p>
            <p><strong>Phone:</strong> +254-XXX-XXXXXX</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123456789!2d36.789!3d-1.292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMuKCsDE3JzI5LjIiUyAzN8KwNDcnMjguNSJF!5e0!3m2!1sen!2ske!4v1234567890" width="100%" height="200" style={{ border: 0 }}></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;