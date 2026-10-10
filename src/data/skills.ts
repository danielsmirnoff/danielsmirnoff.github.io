import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    icon: "layers", // Matches key in component
    title: "Game Engines & Frameworks",
    items: ["Unity", "Unreal Engine 5 / 4", "Godot", "Raylib", "SDL3", "OpenGL"]
  },
  {
    icon: "code",
    title: "Programming",
    items: ["C#", "C++", "C", "Python", "Java"]
  },
  {
    icon: "image",
    title: "Art & Design",
    items: ["Blender", "Substance Painter", "Figma", "Aseprite"]
  },
  {
    icon: "pencil",
    title: "Other Tools",
    items: ["Git & GitHub", "Trello / Jira", "FMOD / Wwise", "Perforce / Plastic SCM", "Reflex", "Jetbrains Rider", "VS code"]
  }
];