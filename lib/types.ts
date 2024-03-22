export type SiteConfig = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  siteThumbnail: string;
  nav: Array<{ label: string; href: string }>;
  social?: {
    github?: string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
};

export type MDXFrontMatter = {
  slug: string;
  title: string;
  image: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  status: "draft" | "published";
};
