// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

const katexPlugin = [
  katex,
  /** @type {import('katex').KatexOptions} */
  ({
    strict: false,
    macros: {
      '\\and': '\\wedge',
      '\\or': '\\vee',
    }
  })
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '忘忧北萱草月刊',
  tagline: '了解一下最新最热的忘忧北萱草！',
  url: 'https://wybxc-monthly.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Wybxc',
  projectName: 'wybxc-monthly',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en-US']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'posts',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          editUrl: 'https://github.com/Wybxc/wybxc-monthly/edit/posts',
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katexPlugin]
        },
        blog: {
          path: 'featured',
          blogSidebarTitle: '忘忧北萱草精选',
          showReadingTime: true,
          editUrl: 'https://github.com/Wybxc/wybxc-monthly/edit/featured',
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katexPlugin]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '忘忧北萱草月刊',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '月刊'
          },
          { to: '/blog', label: '精选', position: 'left' },
          {
            href: 'https://github.com/Wybxc/wybxc-monthly',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '忘忧北萱草月刊',
            items: [
              {
                label: '月刊',
                to: '/docs/intro'
              },
              {
                label: '精选',
                to: '/blog'
              }
            ]
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Wybxc/wybxc-monthly'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 忘忧北萱草。使用 Docusaurus 构建。`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
  stylesheets: [
    {
      href: 'https://unpkg.com/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    }
  ]
}

module.exports = config
