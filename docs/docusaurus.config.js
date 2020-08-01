module.exports = {
  title: "George", // Title for your website.
  tagline: "The DIY home automation, assistance and analytics project.",
  url: "https://marcelovicentegc.github.io/george",
  baseUrl: "/george/",
  favicon: "img/george-favicon.png",
  organizationName: "marcelovicentegc",
  onBrokenLinks: "warn",
  projectName: "george",
  themeConfig: {
    navbar: {
      title: "George",
      logo: {
        alt: "George logo",
        src: "img/george.png",
      },
      items: [
        {
          to: "/docs/setup",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/marcelovicentegc/george",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Useful resources",
              to: "/docs/useful-resources/",
            },
            {
              label: "Configuration",
              to: "/docs/config/",
            },
            {
              label: "Setup",
              to: "/docs/setup/",
            },
            {
              label: "IoT setup",
              to: "/docs/iot/",
            },
          ],
        },
        {
          title: "Contributing",
          items: [
            {
              label: "Guidelines",
              to: "/docs/contrib/",
            },
            {
              label: "Code of Conduct",
              to: "/docs/code-of-conduct/",
            },
            {
              label: "Roadmap",
              to: "/docs/roadmap/",
            },
          ],
        },
      ],
      logo: {
        alt: "George Logo",
        src: "img/george-favicon.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} - Marcelo Cardoso. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/marcelovicentegc/george/edit/docs/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
