import dolla from "@/assets/images/projects-screenshot/dolla-web.png";
import portfolio from "@/assets/images/projects-screenshot/portfolio-web.png";
import explorix from "@/assets/images/projects-screenshot/explorix-web.png";
import netflix from "@/assets/images/projects-screenshot/netflix-web.png";
import amazon from "@/assets/images/projects-screenshot/amazon-web.png";

export type ProjectInfo = {
  img: string;
  title: string;
  objectives: string;
  description: string;
  tool: string[];
  link: string;
  slug: string;
  sourceCode: string;
  features: string[];
};

export const projectInfos: ProjectInfo[] = [
  {
    slug: "portfolio",
    img: portfolio.src,
    title: "Personal Portfolio",
    objectives:
      "This project is a personal portfolio website designed to showcase my work and skills as a Front-End developer.",
    description:
      "It features a clean and modern design, with easy navigation to view my projects, experience, and contact information. The website is responsive, ensuring a seamless experience across devices. Explore my portfolio to see examples of my work and learn more about my background and expertise",
    tool: ["Typescript", "NextJs", "Emotion"],
    link: "https://iminb2b.com",
    sourceCode: "https://github.com/iminb2b/iminb2b-portfolio",
    features: ["Multi Languages", "Darkmode", "Project gallery"],
  },
  {
    slug: "explorix",
    img: explorix.src,
    title: "Explorix",
    objectives: "Share travel guides and tips",
    description:
      "A travel website to share insightful travel guides, tips, and personal experiences from around the world.",
    tool: ["GraphQl", "Gatsby", "Typescript", "NextJs", "Emotion"],
    link: "https://explorix.projects.iminb2b.com",
    sourceCode: "https://github.com/iminb2b/explorix",
    features: ["Dynamic content", "SEO optimized", "Responsive design"],
  },
  {
    slug: "dolla",
    title: "Dolla",
    img: dolla.src,
    objectives: "Provide financial information and analysis",
    description:
      "A financial website offering real-time stock data, financial news, and analysis tools.",
    tool: ["GraphQl", "Gatsby", "Typescript", "NextJs", "Emotion"],
    link: "https://dolla.projects.iminb2b.com/",
    sourceCode: "https://github.com/iminb2b/dolla",
    features: ["Responsive design"],
  },
  {
    img: netflix.src,
    title: "Netflix",
    objectives: "Clone Netflix UI",
    description:
      "A Netflix clone project to mimic the UI/UX of Netflix for learning purposes.",
    tool: ["React", "Redux", "Firebase", "fuse.js", "Styled Components"],
    link: "http://netflix-nhungnguyen.surge.sh/",
    slug: "netflix",
    sourceCode: "https://github.com/iminb2b/netflix",
    features: ["User authentication", "Video streaming", "Responsive design"],
  },
  {
    img: amazon.src,
    title: "Amazon",
    objectives: "Clone Amazon UI",
    description:
      "An Amazon clone project to replicate the shopping experience of Amazon for educational purposes.",
    tool: ["Reactjs", "Redux", "Firebase", "Styled-components"],
    link: "https://amazon-nhungnguyen.surge.sh/",
    slug: "amazon",
    sourceCode: "https://github.com/iminb2b/amazon",
    features: ["Shopping cart", "Product search and filter", "User reviews"],
  },
];
