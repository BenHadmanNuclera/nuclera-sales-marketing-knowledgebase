// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nuclera Sales and Marketing Knowledge base",
  tagline: "Making Proteins Accessible",
  url: "https://nuclera-sales-marketing-knowledgebase.netlify.app",
  baseUrl: "/",
  scripts: [
   {
     src: "https://cdn.auth0.com/js/auth0-spa-js/2.0/auth0-spa-js.production.js",
     defer: true   
   }
 ],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  noIndex: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Nuclera", // Usually your GitHub org/user name.
  projectName: "Sales & Marketing Knowledge base", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: {
          showReadingTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({algolia: {
      // The application ID provided by Algolia
      appId: 'YHZ4L9JEUX',

      // Public API key: it is safe to commit it
      apiKey: '444cf44bdbccd11643efc793a09a670f',

      indexName: 'knowledgebase-nuclera',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //  externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
      navbar: {
        title: "Sales and Marketing Knowledge Base",
        logo: {
          alt: "Nuclera Logo",
          src: "img/nucleralog.svg"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs"
          },
          // { to: "/blog", label: "Blog", position: "left" },
           {
            href: "https://www.appsheet.com/start/3690b1a7-e3fc-4fd7-b5b2-a7728356b52f",
            label: "Asset Register",
            position: "right"
          } 
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Knowledge base",
            items: [
              {
                label: "Salesforce",
                to: "/docs/category/salesforce"
              }
             // {
            //    label: "Marketo",
            //    to: "/docs/category/marketo"
           //   }
            ]
          },
          {
            title: "Other Documentation",
            items: [
              {
                label: "Design Guidelines",
                href:
                  "https://drive.google.com/file/d/14CIor6OwTC5oXL1TWxPY9YvKeqbU77DT/view"
              },
              {
                label: "Design System",
                href:
                  "https://www.figma.com/file/5w3yu0itkiWUbUqPY42F2d/Nuclera-Design-System-%5BImported-9-Sep%5D?node-id=50751%3A75569"
              }
            ]
          },
          {
            title: "Useful Links",
            items: [
              {
                label: "Salesforce Login",
                href: "https://nuclera.lightning.force.com/"
              },
              {
                label: "Marketo Login",
                href: "https://login.marketo.com"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nuclera Sales and Marketing Knowledge Base.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
