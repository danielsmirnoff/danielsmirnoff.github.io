import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Patreon } from 'lucide-react';

import Project from './project.js';

import headshot from './assets/face.jpeg';

import labRatsVideo from './assets/LabRatsGameplay.mp4';
import soulBelowVideo from './assets/SoulBelowGameplay.mp4';
import gearsGritVideo from './assets/GearsandGritGameplay.mp4';
import beneathMountainsVideo from './assets/Beneath the Mountains Gameplay.mp4';
import fallenAngelVideo from './assets/FallenAngelGameplay.mp4';
import mcboomsKaboomVideo from './assets/McboomsKaboomGameplay.mp4';
import excarnateVideo from './assets/excarnate-video.mp4';
import './App.css';

export default function App() {
  const [commercialGames] = useState([
    {
      title: "You Suck at Football",
      description: "This game was developed by GorkaGames, I helped with level design and some general game development tasks / bug fixes.",
      tags: ["Unreal Engine", "Coop", "3D", "Platformer"],
      link: "https://store.steampowered.com/app/3842740/You_Suck_At_Football/",
      role: "Level Designer / Generalist",
      status: "Completed",
      year: "2025",
      video: "https://youtu.be/Hj4940py_9Q?si=Le4Ng08etZ_VwEpD",
      thumbnail: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3842740/fd50651c97776d043d8aa2b860e8ac258c1382e9/ss_fd50651c97776d043d8aa2b860e8ac258c1382e9.1920x1080.jpg?t=1754744082"
    },
  ]);
  const [projects] = useState([
    {
      title: "Excarnate",
      description: "This project was part of the Jackspeticeye game jam. It's a roguelike deck building game where you explore a dungeon and fight enemies using cards. I'm currently working on this project with a team of 2 other talented developers.",
      tags: ["Unity", "Roguelike", "Card Battler"],
      link: "https://dandadev.itch.io/excarnate",
      role: "Game Programmer",
      status: "(In Progress)",
      year: "2025",
      video: excarnateVideo
    },
    {
      title: "Lab Rats",
      description: "This project is a way for me to experiment with 3D steam multiplayer development. The premise is that its a cooperative horror experience where you collect loot with friends.",
      tags: ["Unity", "C#", "Multiplayer", "Steam", "3D"],
      link: "#",
      role: "Solo Developer",
      status: "Unfinished",
      year: "2025",
      video: labRatsVideo
    },
  ]);

  const [gamejams] = useState([
    {
      title: "Soul Below",
      description: "This project was part of a competative game jam in my university's game dev club. It's a 2D rouguelike that is reminiscent of vampire survivors.",
      tags: ["Unity", "C#", "2D", "Roguelike"],
      link: "https://dandadev.itch.io/soul-below",
      role: "Gameplay Programmer",
      status: "Finished",
      year: "2024",
      video: soulBelowVideo
    },
    {
      title: "Gears & Grit",
      description: "This project was part of the 2023 Epic MegaJam. The concept for this game was to make a 3D puzzle platformer. I worked on implementing puzzle systems that tied in with the player movement mechanics.",
      tags: ["Unreal Engine", "3D", "Puzzle Platformer"],
      link: "https://dandadev.itch.io/gearsandgrit",
      role: "Solo Developer",
      status: "Finished",
      year: "2023",
      video: gearsGritVideo
    },
    {
      title: "Beneath the Mountains",
      description: "This project was part of Metroidvania month game jam. This might be my largest finished product, since it involved so many mechanics and systems.",
      tags: ["Unity", "C#", "2D", "Metroidvania"],
      link: "https://dandadev.itch.io/beneath-the-mountains",
      role: "Solo Developer",
      status: "Finished",
      year: "2023",
      video: beneathMountainsVideo
    },
    {
      title: "Fallen Angel",
      description: "This project was part of a gamejam. I was in charge of implementing game mechanics such as movement, abilities and enemy behaviour.",
      tags: ["Unity", "C#", "Gameplay Programming", "Arcade"],
      link: "https://dairyproductt.itch.io/fallen-angel",
      role: "Gameplay Programmer",
      status: "Finished",
      year: "2023",
      video: fallenAngelVideo
    },
    {
      title: "Mcbooms Kaboom",
      description: "This project was for a game jam in for my university's game dev club. I was in charge of implementing systems for puzzles and overall game programming.",
      tags: ["Unity", "C#", "Puzzle"],
      link: "https://dandadev.itch.io/mcbooms-kaboom",
      role: "Gameplay Programmer",
      status: "Finished",
      year: "2024",
      video: mcboomsKaboomVideo
    }
  ]);

  const [skills] = useState({
    "Programming Languages": ["C#", "C++", "Java", "Lua", "Python", "HTML", "CSS"],
    "Game Engines/Frameworks": ["Unity", "Unreal Engine", "Godot", "Raylib", "OpenGL"],
    "Tools & Technologies": ["Git", "Azure DevOps", "Jira", "Trello", "Figma", "Aseprite", "Blender"]
  });

  const [favoriteGames] = useState([
    {
      name: "Dark Souls 3",
      image: "https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png?w=440",
      description: "Dark Souls 3 is a challenging and rewarding game that I have spent countless hours playing. It is a game that I have always wanted to create."
    },
    {
      name: "Portal 2",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Portal2cover.jpg/250px-Portal2cover.jpg",
      description: "Portal 2 is a challenging and rewarding game that I have spent countless hours playing. It is a game that I have always wanted to create."
    }
  ]);
  const [education] = useState([

    {
      degree: "B.S. in Computer Science",
      institution: "San Francisco State University",
      year: "Expected 2026",
      details: "Pursuing a Bachelor of Science in Computer Science with a focus on software development and applied programming. Expected graduation: Spring 2026."
    },
    {
      degree: "Business Certification",
      institution: "Stanford University",
      year: "2025",
      details: "Completed a professional certification in Business, covering key disciplines such as finance, marketing, strategic management, and entrepreneurship."
    },
    {
      degree: "A.S. in Computer Science",
      institution: "Sierra College",
      year: "2023",
      details: "Earned an Associate of Science in Computer Science, building a strong foundation in programming, data structures, and general education studies."
    }
  ]);

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img src={headshot} alt="Daniel Smirnoff" className="profile-image" />
            </div>
            <h1 className="profile-name">Daniel Smirnoff</h1>
            <p className="profile-title">Game Developer</p>
            <p className="profile-description">
              A Passionate developer focused on creating fun gaming experiences.
            </p>
          </div>

          {/* Contact Info */}
          <div className="contact-section">
            <h2 className="section-heading">Contact</h2>
            <div className="contact-links-container">
              <a href="mailto:danielsmirnoff8@gmail.com" className="contact-link">
                <Mail size={18} className="contact-icon" />
                <span className="contact-text">Contact me</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="section-heading">Links</h2>
            <div className="social-links-container">
              <a href="https://github.com/danielsmirnoff" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-smirnoff-8132ba211/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={22} />
              </a>
              <a href="https://x.com/danda_dev" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={22} />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* About Section */}
          <section className="content-section">
            <h2 className="section-title">About Me</h2>
            <p className="section-text">
              I'm a game developer with a passion for creating engaging and innovative gaming experiences. 
              With expertise in Unity and Unreal Engine, I bring ideas to life by focusing on fun and creative 
              problem-solving. I specialize in gameplay programming, and implementing complex 
              game mechanics.
            </p>
            <p className="section-text-last">
              Outside of being a developer I love volleyball, rock climbing and video games. Im a gamer at heart a
              I actively participate in game jams and my university game development club. I've worked on 
              projects ranging from 2D roguelikes to 3D puzzle platformers. Currently, I'm working with my team on Excarnate, 
              a roguelike card battler!
            </p>
            {/*
            <h3 className="section-title">Favorite Games</h3>
            <div className="favorite-games-container">
            <p className="favorite-games-description">gfdsfg</p>
              {favoriteGames.map((game, index) => (
                <div key={index} className="favorite-game-card">
                  <h3 className="favorite-game-name">{game.name}</h3>
                  <img src={game.image} alt={game.name} className="favorite-game-image" />
                </div>
              ))}
            </div>
            */}
          </section>

          {/* Projects Section */}
          <section className="content-section">
            <h2 className="section-title">Commercial Games</h2>
            <Project projects={commercialGames} />
          </section>
          <section className="content-section">
            <h2 className="section-title">Personal Projects</h2>
            <Project projects={projects} />
          </section>
          <section className="content-section">
            <h2 className="section-title">Gamejams</h2>
            <Project projects={gamejams} />
          </section>


          {/* Skills Section */}
          <section className="content-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-card">
                  <h3 className="skill-category">{category}</h3>
                  <div className="skills-container">
                    {items.map((skill, index) => (
                      index <= 2 ? (
                        <span key={skill} className="skill-tag-important">
                        {skill}
                        </span>
                      ) : (
                        <span key={skill} className="skill-tag">
                        {skill}
                        </span>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="content-section">
            <h2 className="section-title">Education</h2>
            <div className="education-container">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  {edu.year && (
                    <p className="education-year">{edu.year}</p>
                  )}
                  {edu.details && (
                    <p className="education-details">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}