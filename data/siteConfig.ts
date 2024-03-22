import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.jpeg",
  siteUrl: "https://zoyaworld.eu",
  siteName: "Zoya's World",
  siteDescription:
    "Блог за пътувания, кулинарни преживявания, размишления и още нещо...",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Публикации", href: "/posts" },
    { label: "За мен", href: "/about" },
  ],
  social: {
    github: "https://github.com/zoyaatanasova",
    facebook: "https://www.facebook.com/zoya.atanasova90",
    linkedin: "https://www.linkedin.com/in/zoya-atanasova/",
    instagram: "https://www.instagram.com/zoya.atanassova/",
  },
};
export default siteConfig;
