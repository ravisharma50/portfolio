import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitStatus, setFormSubmitStatus] = useState(''); // '', 'sending', 'success', 'error'
  const [formErrors, setFormErrors] = useState({});

  // Validate form fields (basic)
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setFormErrors(prev => ({ ...prev, [e.target.name]: '' })); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormSubmitStatus('sending');

    // Simulate sending message (replace with real API call)
    setTimeout(() => {
      setFormSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
      setTimeout(() => setFormSubmitStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-muted max-w-4xl mx-auto">
      <h2 className="text-3xl max-w-md mx-auto font-bold text-center mb-12">Get In Touch</h2>
      <div className=" ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
          <p className="text-muted-foreground mb-6">
            I'm currently looking for full-time opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
          <div className="space-y-4">
            {[
              { icon: '📧', text: 'john.doe@email.com' },
              { icon: '📱', text: '+91 9876543210' },
              { icon: '📍', text: 'New Delhi, India' }
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 text-primary-foreground text-lg">
                  {icon}
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                aria-invalid={formErrors.name ? "true" : "false"}
                aria-describedby="name-error"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  formErrors.name ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Your full name"
              />
              {formErrors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600">
                  {formErrors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                aria-invalid={formErrors.email ? "true" : "false"}
                aria-describedby="email-error"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  formErrors.email ? 'border-red-500' : 'border-border'
                }`}
                placeholder="your.email@example.com"
              />
              {formErrors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                aria-invalid={formErrors.subject ? "true" : "false"}
                aria-describedby="subject-error"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  formErrors.subject ? 'border-red-500' : 'border-border'
                }`}
                placeholder="What's this about?"
              />
              {formErrors.subject && (
                <p id="subject-error" className="mt-1 text-sm text-red-600">
                  {formErrors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                aria-invalid={formErrors.message ? "true" : "false"}
                aria-describedby="message-error"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-y ${
                  formErrors.message ? 'border-red-500' : 'border-border'
                }`}
                placeholder="Tell me about your project or opportunity..."
              />
              {formErrors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600">
                  {formErrors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={formSubmitStatus === 'sending'}
              className="w-full bg-blue-500 text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              aria-busy={formSubmitStatus === 'sending'}
            >
              {formSubmitStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success Message */}
            {formSubmitStatus === 'success' && (
              <div
                role="alert"
                className="p-3 bg-green-100 text-green-700 rounded-lg mt-4"
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* Error Message (optional) */}
            {formSubmitStatus === 'error' && (
              <div
                role="alert"
                className="p-3 bg-red-100 text-red-700 rounded-lg mt-4"
              >
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;