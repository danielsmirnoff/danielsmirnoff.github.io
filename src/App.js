import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import headshot from './assets/face.jpeg';
import labRatsVideo from './assets/LabRatsGameplay.mp4';
import soulBelowVideo from './assets/SoulBelowGameplay.mp4';
import gearsGritVideo from './assets/GearsandGritGameplay.mp4';
import beneathMountainsVideo from './assets/Beneath the Mountains Gameplay.mp4';
import fallenAngelVideo from './assets/FallenAngelGameplay.mp4';
import mcboomsKaboomVideo from './assets/McboomsKaboomGameplay.mp4';
import './App.css';

export default function App() {
  const [projects] = useState([
    {
      title: "Lab Rats",
      description: "This project is a way for me to experiment with 3D steam multiplayer development. The premise is that its a cooperative horror experience where you collect loot with friends.",
      tags: ["Unity", "C#", "Multiplayer", "Steam", "3D"],
      link: "#",
      role: "Solo Developer",
      status: "3 Months",
      video: labRatsVideo
    },
    {
      title: "Soul Below",
      description: "This project was part of a competative game jam in my university's game dev club. It's a 2D rouguelike that is reminiscent of vampire survivors.",
      tags: ["Unity", "C#", "2D", "Roguelike"],
      link: "https://dandadev.itch.io/soul-below",
      role: "Gameplay Programmer",
      status: "1 Week",
      video: soulBelowVideo
    },
    {
      title: "Gears & Grit",
      description: "This project was part of the 2023 Epic MegaJam. The concept for this game was to make a 3D puzzle platformer. I worked on implementing puzzle systems that tied in with the player movement mechanics.",
      tags: ["Unreal Engine", "3D", "Puzzle Platformer"],
      link: "https://dandadev.itch.io/gearsandgrit",
      role: "Solo Developer",
      status: "1 Week",
      video: gearsGritVideo
    },
    {
      title: "Beneath the Mountains",
      description: "This project was part of Metroidvania month game jam. This might be my largest finished product, since it involved so many mechanics and systems.",
      tags: ["Unity", "C#", "2D", "Metroidvania"],
      link: "https://dandadev.itch.io/beneath-the-mountains",
      role: "Solo Developer",
      status: "1 Month",
      video: beneathMountainsVideo
    },
    {
      title: "Fallen Angel",
      description: "This project was part of a gamejam. I was in charge of implementing game mechanics such as movement, abilities and enemy behaviour.",
      tags: ["Unity", "C#", "Gameplay Programming", "Arcade"],
      link: "https://dairyproductt.itch.io/fallen-angel",
      role: "Gameplay Programmer",
      status: "1 Week",
      video: fallenAngelVideo
    },
    {
      title: "Mcbooms Kaboom",
      description: "This project was for a game jam in for my university's game dev club. I was in charge of implementing systems for puzzles and overall game programming.",
      tags: ["Unity", "C#", "Puzzle"],
      link: "https://dandadev.itch.io/mcbooms-kaboom",
      role: "Gameplay Programmer",
      status: "1 Week",
      video: mcboomsKaboomVideo
    }
  ]);

  const [skills] = useState({
    "Programming Languages": ["C#", "C++", "Java", "Lua", "Python", "HTML", "CSS"],
    "Game Engines/Frameworks": ["Unity", "Unreal Engine", "Godot", "Raylib", "OpenGL"],
    "Tools & Technologies": ["Git", "Azure DevOps", "Jira","Trello", "Figma", "Aseprite", "Blender"]
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
      degree: "Computer Science",
      institution: "San Francisco State University",
      year: "2026",
      details: "I am currently pursuing a Bachelor's degree in Computer Science at San Francisco State University. I am expected to graduate in Spring 2026."
    },
    {
      degree: "Business Certification",
      institution: "Stanford University",
      year: "2025",
      details: "I completed a business certification course from Stanford University. The course covered a variety of business topics, including finance, marketing, and entrepreneurship."
    },
    {
      degree: "Computer Science (Associates)",
      institution: "Sierra College",
      year: "2023",
      details: "I completed an Associates degree in Computer Science at Sierra College. During my time there, I took general education courses, as well as a variety of undergraduate computer science courses."
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
              I actively participate in game jams and my university game development club, where I've worked on 
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
            <h2 className="section-title">Projects</h2>
            <div className="projects-container">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  {/* Video Section */}
                  {project.video && (
                    <div className="project-video-wrapper">
                      <video 
                        src={project.video} 
                        loop 
                        muted 
                        playsInline
                        className="project-video"
                        onMouseEnter={(e) => e.target.play()}
                        onMouseLeave={(e) => {
                          e.target.pause();
                          e.target.currentTime = 0;
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Content Section */}
                  <div className="project-content">
                    <div className="project-header">
                      <div className="project-header-info">
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-meta">
                          <span className="project-role">{project.role}</span>
                          <span>•</span>
                          <span>{project.status}</span>
                        </div>
                      </div>
                      {project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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