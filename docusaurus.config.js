// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MIT',
  tagline: 'Полезные материалы проекта MIT',
  url: 'https://cmaultop.github.io',
  baseUrl: '/wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CMAULTOP', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Wiki logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📖 Вики',
          },
          {
            position: 'left',
            label: '⚖ Правила',
            items: [
            {
              label: "⚔ ArmyRP",
              to: "docs/category/правила"
            },
            {
              label: "🧨 MIT RPG",
              to: "docs/MIT%20RPG/chatrulesmits"
            }
            ]
          },
          //{to: '/blog', label: 'Новости', position: 'left'},
          {
						href: "https://armyrp.freeflarum.com",
						position: "right",
						label: "💬 Форум",
					},
          {
						position: "right",
						label: "👥 Discord",
            items: [
              {
                label: "⚔ ArmyRP",
                href: "https://discord.gg/CkTcUvQhaF"
              },
              {
                label: "🧨 MIT RPG",
                href: "https://discord.gg/aRBFeQbbyD"
              }
            ]
					},
          {
						href: "https://github.com/MIT-gmod",
						position: "right",
						className: "header-github-link",
						"aria-label": "GitHub repository",
					},
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
