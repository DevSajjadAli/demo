import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'HV Docs',
  tagline: 'Documentation for Hope Valley Cloud',
  favicon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisQ5J6QH7dJHxJW7pf1uRUhyphenhyphenftj2OuNh3wZr_fnPGC5w1urt_YdfrJtz_RP3rl2HUdKNoVyxsG7vPCcDMYNEH7JAvVKStJEnqUlEUS9vIZpCZm-WwfOJylyEtJJDQ5IsH8U8FwQv-eXWURit4TxHMg8greMG3lxPNIX0rldy493iN5FpseRkbM5XloJwSO/s1600/favicong.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.hopevalley.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'omegaark', // Usually your GitHub org/user name.
  projectName: 'demo', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The branch that GitHub pages will deploy from.
  trailingSlash: false, // Whether to add a trailing slash to URLs
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        // Remove or comment out the following line if present:
        // searchResultComponent: '@theme/SearchPage',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDSMaHekIRQxljsi_pp0gKjvxw_yk-BZLTgS9FCXIjWWt-RYZDsT0UR8GBxYGo22-pSWBAhyphenhyphen40uw399DBGfcbyxqOS4OtP1ic8S0TTQE-UsuoIs4wm7fnusHLu8uiNo9B4w85zp6Yusnv9wNSz08MepRrpq7_DrqFjwKa9t0aDWpK8TlYi9yC-JZ4aWJZP/s320/card.png',
    navbar: {
      title: 'HV Docs',
      logo: {
        alt: 'Hope Valley Cloud Logo',
        src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisQ5J6QH7dJHxJW7pf1uRUhyphenhyphenftj2OuNh3wZr_fnPGC5w1urt_YdfrJtz_RP3rl2HUdKNoVyxsG7vPCcDMYNEH7JAvVKStJEnqUlEUS9vIZpCZm-WwfOJylyEtJJDQ5IsH8U8FwQv-eXWURit4TxHMg8greMG3lxPNIX0rldy493iN5FpseRkbM5XloJwSO/s1600/favicong.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://hopevalley.cloud',
          label: 'Get Started',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',

      links: [
        {
          title: 'Products',
          items: [
            {label: 'Web Hosting', to: 'https://hopevalley.cloud/index.php?rp=/store/sha'},
            {label: 'SSL Certificates', to: 'https://hopevalley.cloud/index.php?rp=/store/ssl-certificates'},
            {label: 'VPN', to:'https://hopevalley.cloud/index.php?rp=/store/nordvpn'},
            {label: 'Web Builder', to: 'https://hopevalley.cloud/index.php?rp=/store/website-builder'},
            {label: 'Web Security', to:'https://hopevalley.cloud/index.php?rp=/store/sitelock'},
            {label: 'Email Services', to: 'https://hopevalley.cloud/index.php?rp=/store/email-services'},

          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Terms of Service', to: '/terms-of-service'},
            {label: 'Privacy Policy', to: '/privacy-policy'},
            {label: 'Data Processing Agreement', to: '/data-processing-agreement'},
            {label: 'Cookie Policy', to: '/cookie-policy'},
            {label: 'Refund Policy', to: '/refund-policy'},
            {label: 'Acceptable Use Policy', to: '/acceptable-use-policy'},
          ],
        },

      ],
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'X',
      //         href: 'https://x.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} HV Docs. Made with ❤️ by HopeValley.Cloud`,
      

      
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};


export default config;
