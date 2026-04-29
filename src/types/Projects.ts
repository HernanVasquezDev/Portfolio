export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;

  role: "frontend" | "backend" | "fullstack"
};