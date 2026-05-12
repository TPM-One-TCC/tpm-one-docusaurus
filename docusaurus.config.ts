import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'TPM One',
  tagline: 'Gerenciamento de Máquinas e Ordens de Manutenção',
  favicon: '/img/tpmone-logo.svg',

  url: 'https://tpmone.docs.bosch.com',
  baseUrl: '/',

  organizationName: 'ETS-Bosch',
  projectName: 'tpmone-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/tpmone-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      title: 'TPM One',
      logo: {
        alt: 'TPM One Logo',
        src: 'img/tpmone-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação Técnica',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links de Referência',
          items: [
            {
              label: 'Documentação Técnica',
              href: '/docs/intro',
            },
            {
              label: 'Apresentação',
              href: '/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} TPM One 1.0`,
    },
  },
};

export default config;
