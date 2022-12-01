interface Link {
  name: string;
  link: string;
}

interface Meta {
  name: string;
  title: string;
  logo: {
    path: string;
    alt: string;
  };
  graphic: {
    path: string;
    alt: string;
  };
  about: string[];
}

interface Navigation extends Link {
  external?: boolean;
}

interface Project {
  name: string;
  subtitle?: string;
  description: string[];
  logo: string;
  links: Link[];
}

interface Experience extends Link {
  dates: string;
  role: string;
  location: string;
  responsibilities: string[];
}

interface Contact extends Link {
  alias: string;
}

interface Portfolio {
  meta: Meta;
  navigation: Navigation[];
  projects: Project[];
  experience: Experience[];
  contact: Contact[];
}
