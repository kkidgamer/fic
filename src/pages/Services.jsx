const Services = () => (
    <section className="section">
      <div className="container">
        <h1>Our Services</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div>
            <h2>Worship</h2>
            <p>Sundays, 10 AM: Silent reflection and sermons. Watch live on YouTube.</p>
            <iframe width="100%" height="150" src="https://www.youtube.com/embed/TwogRe3V5oo" title="Service" style={{ borderRadius: '5px' }}></iframe>
          </div>
          <div>
            <h2>Community</h2>
            <p>Youth groups, Bible studies, and Nyaf conferences for growth.</p>
          </div>
          <div>
            <h2>Member Portal</h2>
            <p>Coming soon: Personalized devotionals and updates.</p>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Services;