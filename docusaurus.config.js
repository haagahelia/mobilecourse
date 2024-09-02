// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mobile Programming',
  tagline: 'Haaga-Helia University of Applied Sciences',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://haagahelia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mobilecourse/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haagahelia', // Usually your GitHub org/user name.
  projectName: 'mobilecourse', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/haagahelia/mobileprogramming.git',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'LC5ULIZ0WS',

        // Public API key: it is safe to commit it
        apiKey: 'c26ffde8d1af6f8c78ac0d8733f77d77',
  
        indexName: 'haagaheliaio',
        contextualSearch: false,
      },
      navbar: {
        title: 'Mobile Programming',
        logo: {
          alt: 'Haaga-Helia',
          src: 'img/haagahelia.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Course Material',
          },
          {
            href: 'https://github.com/haagahelia/mobilecourse',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Haaga-Helia',
            items: [
              {
                label: 'Moodle',
                to: 'https://hhmoodle.haaga-helia.fi/login/index.php',
              },
            ],
          },
         ],
        copyright: `Mobile Programming © (${new Date().getFullYear()}) is licensed under CC BY-NC-SA 4.0`,      
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
