import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_b11z72t', // Replace with your EmailJS service ID
        'template_kshtky7', // Replace with your EmailJS template ID
        {
          title: subject,
          name: name,
          email: email,
          message: message,
          
        },
        '4NVT4jiLSC5BMp0oB' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'baluprakash7n@gmail.com',
      link: 'mailto:baluprakash7n@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+91 (988) 573-9887',
      link: 'tel:+919885739887'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Hyderabad, India',
      
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          </div>
          
          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out. I'm always interested in hearing about new 
                projects and opportunities to apply my full stack development skills.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.link}
                    className="flex items-start p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed' 
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                  ) : (
                    <Send size={18} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus && (
                  <div 
                    className={`mt-4 p-3 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' 
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}
                  >
                    {submitStatus === 'success' 
                      ? 'Thank you for reaching out! I have received your message and will get back to you shortly.' 
                      : 'There was an error sending your message. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;