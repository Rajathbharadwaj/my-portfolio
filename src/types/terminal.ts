export interface Command {
  name: string;
  description: string;
  execute: (args: string[]) => string;
}

export interface TerminalHistory {
  command: string;
  output: string;
}

export interface Education {
  degree: string;
  location: string;
  institution: string;
  period: string;
  courses?: string[];
  gpa?: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
  platforms: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  tech?: string[];
  period?: string;
}

export interface Seminar {
  title: string;
  institution?: string;
  link: string;
}

export interface Contact {
  email: string;
  phone: string;
  portfolio?: string;
  github: string;
  linkedin?: string;
}