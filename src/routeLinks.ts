const routeLinks = {
  homePage: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/`,
  about: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/about`,
  contact: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/contact`,
  projects: ({ lang }: { lang: "en" | "vi" }) => `/${lang}/projects`,
  project: ({ lang, slug }: { lang: "en" | "vi"; slug: string }) =>
    `/${lang}/projects/${slug}`,
};

export default routeLinks;
