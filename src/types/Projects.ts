export interface Project {
  title: string;
  description: string;
  tech: string[];
  links?: {
  label: string;
  url: string;
  variant?: "primary" | "secondary";
  }[];
  image?: string;
  featured?: boolean;
  role: "frontend" | "backend" | "fullstack";
  status?: "Live" | "In Progress";
}