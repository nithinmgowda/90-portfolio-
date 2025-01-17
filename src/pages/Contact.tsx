import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:nithinmgowda12@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pixel-box min-h-[80vh]">
      <h1 className="text-2xl md:text-4xl mb-8 text-center">SEND A MESSAGE</h1>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">PLAYER NAME:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="pixel-box w-full bg-gray-800 p-2 text-white"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">PLAYER EMAIL:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pixel-box w-full bg-gray-800 p-2 text-white"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">YOUR MESSAGE:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="pixel-box w-full bg-gray-800 p-2 text-white h-32"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="retro-button w-full hover:bg-blue-700 transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="pixel-box bg-yellow-900">
            <h2 className="text-xl mb-4">LOCATION</h2>
            <p>Bangalore, India</p>
          </div>
          
          <div className="pixel-box bg-pink-900">
            <h2 className="text-xl mb-4">SOCIAL LINKS</h2>
            <div className="space-y-2">
              <a 
                href="https://github.com/nithinmgowda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href="http://surl.li/rgqsfs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a 
                href="mailto:nithinmgowda12@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope /> nithinmgowda12@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
