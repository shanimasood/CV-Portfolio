export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'product' | 'enterprise' | 'workflow' | 'mobile';
  status: 'shipping' | 'live' | 'personal';
  tags: string[];
  highlights?: string[];
  links?: { live?: string; github?: string; case?: string };
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  description: string[];
  tags: string[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
  proficiency: number; // 0-100
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  bullets: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
