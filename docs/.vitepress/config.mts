import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daniel Ajayi",
  description: "Personal website ",
  // TODO: add your base here; this should be your repo name!
  base: "/asa-portfolio-site/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Resume", link: "/resume" },
      { text: "Projects", link: "/projects" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/aboutme" },
    ],

    sidebar: {
      "/blogs": [
        {
          text: "Blogs",
          link: "/blogs",
          collapsed: true,
        },
      ],
      "/projects": [
        {
          text: "Projects",
          link: "/projects",
          collapsed: true,
        },
      ],
    },

    socialLinks: [{ icon: "linkedin", link: "#" }],
  },
});
