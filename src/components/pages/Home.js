import React, { useState, useEffect } from "react";
import StarVideo from '../assets/Stars.mp4'
    

export default function Home() {
    const [videoCount, setVideoCount] = useState(1);
  
    useEffect(() => {
      function handleResize() {
        const videoElement = document.querySelector('video');
        if (videoElement) {
          const videoHeight = videoElement.clientHeight;
          const containerHeight = window.innerHeight;
          const newVideoCount = Math.ceil(containerHeight / videoHeight);
          setVideoCount(newVideoCount);
        }
      }
      
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <div className="relative flex flex-col items-center">
        <div className="relative w-full overflow-hidden">
          {Array.from({ length: videoCount }).map((_, index) => (
            <video key={index} controls src={StarVideo} autoPlay muted loop className="w-full object-cover"></video>
          ))}
        </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
            <h1 className='text-offWhite text-4xl md:text-6xl p-2'>Cheryl Hemphill</h1>
            <h2 className='text-offWhite text-xl md:text-3xl p-3'>Full Stack Software Engineer</h2>
            <p className='text-offWhite text-sm md:text-base p-6 m-6 overflow-y-auto max-h-[100%]'>Over the course of my 14-year career in the dynamic and fast-paced medical field, I've acquired invaluable skills in patient care, teamwork, and data management. Leveraging my strong foundation in discipline, critical thinking, and problem-solving, I made a strategic career transition into web development. In this new role, I've quickly honed my technical skills, specializing in full-stack application development. My proficiency extends to front-end and back-end technologies such as HTML, CSS, JavaScript, React, Node.js, and database management systems like SQL and MongoDB. My experience in Agile methodologies and DevOps practices further ensures that I bring a well-rounded skill set to any project. I thrive in challenging environments and take great satisfaction in devising innovative, scalable solutions to complex, real-world problems. My commitment to continuous learning and professional development makes me a versatile asset, capable of adapting to new technologies and frameworks swiftly.</p>
            </div>
</div>
       
    );
}