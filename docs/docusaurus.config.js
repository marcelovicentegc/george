module.exports = {
  title: "George", // Title for your website.
  tagline: "The DIY home automation, assistance and analytics project.",
  url: "https://three-o-four.github.io",
  baseUrl: "/george/",
  favicon: "img/george-favicon.png",
  organizationName: "three-o-four",
  projectName: "george",
  themeConfig: {
    navbar: {
      title: "George",
      logo: {
        alt: "George logo",
        src: "img/george.png",
      },
      links: [
        {
          to: "/docs/about/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/three-o-four/george",
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
              label: "About",
              to: "/docs/about/",
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
      ],
      logo: {
        alt: "George Logo",
        src: "img/george-favicon.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} - 304. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "about",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/three-o-four/george/edit/docs/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
