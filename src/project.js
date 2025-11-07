import React from 'react';
import ReactPlayer from 'react-player'
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';
import './App.css';

function Project({projects = [] }) {
    return (
    <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                    {/* Video Section */}
                    {project.video && (
                        <div className="project-video-wrapper">
                        <ReactPlayer 
                            className="project-video"
                            src={project.video}
                            width= "100%"
                            height= "100%"
                            loop
                            muted
                            playing
                            controls={false}
                            playsInline
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
                            <span>•</span>
                            <span>{project.year}</span>
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
    );
}

export default Project;