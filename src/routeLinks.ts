const routeLinks = {
  homePage: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/`,
  about: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/about`,
  contact: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/contact`,
  projects: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/projects`,
};

export default routeLinks;
