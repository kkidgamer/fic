(function () {
    window.process = window.process || {};
    window.process.env = window.process.env || {};
    // Fallback to hardcoded values if not loaded (for debugging)
    window.process.env.REACT_APP_EMAILJS_USER_ID = window.process.env.REACT_APP_EMAILJS_USER_ID || 'U5HGgHLjzEjUZG-8F'; // Replace with a default or remove
    window.process.env.REACT_APP_EMAILJS_SERVICE_ID = window.process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_pfmiywg';
    window.process.env.REACT_APP_EMAILJS_TEMPLATE_ID = window.process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_bfb73lf';
    // Log to verify
    console.log('Loaded env vars:', window.process.env);
  })();