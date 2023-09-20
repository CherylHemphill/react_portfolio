import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="p-2 bg-dark">
      <div className="text-light flex flex-row justify-evenly">
        <a href="https://github.com/CherylHemphill">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/cheryl-hemphill-a52307132">
          <FaLinkedin size={30} />
        </a>
        <a href="https://discord.gg/code">
          <FaDiscord size={30} />
        </a>
      </div>
    </footer>
  );
}