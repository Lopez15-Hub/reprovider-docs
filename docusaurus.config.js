// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Reprovider",
  tagline: "A service injector designed for React and Redux",
  favicon: "img/reprovider_logo.png",

  // Set the production url of your site here
  url: "https://docs.reprovider.com.ar/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lopez15-hub", // Usually your GitHub org/user name.
  projectName: "reprovider-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: "current",
          versions: {
            current: {
              label: "Latest - 1.1.0",
              path: "latest",
            },
          },
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Lopez15-Hub/reprovider-docs/tree/master/docs",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Lopez15-Hub/reprovider-docs/tree/master/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo",
      navbar: {
        title: "Reprovider",
        logo: {
          alt: "Reprovider Logo",
          src: "img/reprovider_logo.png",
        },

        items: [
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/Lopez15-Hub/reprovider/tree/master/examples",
            label: "Examples",
            position: "left",
          },
          {
            href: "https://github.com/lopez15-hub/reprovider",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.npmjs.com/package/reprovider",
            label: "Npm",
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
                label: "Overview",
                to: "/docs/latest/overview",
              },
              {
                label: "Quickstart",
                to: "/docs/latest/quickstart",
              },
              {
                label: "Buildux",
                to: "/docs/latest/buildux/overview",
              },
              {
                label: "Examples",
                to: "/docs/latest/examples",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/lopez15-hub/reprovider",
              },
              {
                label: "Npm",
                href: "https://www.npmjs.com/package/reprovider",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Reprovider. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
