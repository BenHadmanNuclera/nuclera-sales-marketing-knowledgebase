// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nuclera Sales and Marketing Knowledgebase",
  tagline: "Making Proteins Accessible",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Nuclera", // Usually your GitHub org/user name.
  projectName: "Sales & Marketing Knowledgebase", // Usually your repo name.

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
    ({
      navbar: {
        title: "Sales and Marketing Knowledgebase",
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
          }
          // { to: "/blog", label: "Blog", position: "left" },
          /* {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right"
          } */
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Knowledgebase",
            items: [
              {
                label: "Salesforce",
                to: "/docs/Salesforce"
              },
              {
                label: "Marketo",
                to: "/docs/marketo"
              }
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
                  "https://www.figma.com/file/iQ1xPIODTj5fWP5Pl30Bqj/Nuclera-Design-System?node-id=22%3A2"
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
        copyright: `Copyright © ${new Date().getFullYear()} Nuclera Sales and Marketing Knowledgebase.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
