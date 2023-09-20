import React, { useState } from 'react';
import backgroundImage from '../assets/a-scenic.jpg';
import secondImage from '../assets/felix-night.jpg'
import { FaCode, FaLaptop } from 'react-icons/fa';
import ProjectData from '../assets/ProjectData';

export default function Projects() {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      
    };

    const secondBackgroundStyle = {
        backgroundImage: `url(${secondImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
      };
  
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        alert('Message sent successfully!'); 
      };

   return ( 
  <div id="projects" style={backgroundStyle} className="bg-cover  h-auto">
  <h1 className="text-center text-white text-4xl py-10">Projects</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-8">
  {ProjectData.map((project, index) => (
        <div key={index} className="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-lg p-4" style={{ maxWidth: '540px' }}>
          <div key={index} className="relative aspect-w-16 aspect-h-9" style={{ maxWidth: '540px' }}>
    <div className="row g-0">
      <div className="col-md-8">
        <div className="video-container">
          <video src={project.videoSrc} autoPlay muted loop className="video">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="mt-4 p-2">
        <div className="card-body">
          <h5 className="text-lg font-bold text-center">{project.title}</h5>
          <p className="text-md mt-2">{project.description}</p>
          <p>
            <div className="mt-4 flex justify-evenly">
            <a href={project.githubLink} className="card-link">
              <FaCode size={20} className='text-accent'/>
            </a>
            <a href={project.demoLink} className="card-link">
              <FaLaptop size={20} className='text-accent' />
            </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  </div>
  
         </div>
      ))}  
       </div>
       <div style={secondBackgroundStyle} className="bg-cover h-screen flex justify-center items-center">
  <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-center text-2xl mb-4">Contact</h2>
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="flex flex-col">
      <input type="hidden" name="form-name" value="contact" />
      
      <label htmlFor="name" className="text-lg font-semibold mb-2">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="p-2 border rounded mb-4"
      />

      <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="p-2 border rounded mb-4"
      />

      <label htmlFor="message" className="text-lg font-semibold mb-2">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required
        className="p-2 border rounded mb-4 h-32"
      ></textarea>

      <button type="submit" className="bg-light text-dark hover:bg-accent p-2 rounded">
        Submit
      </button>
    </form>
  </div>
</div>

  </div>
    );
  }