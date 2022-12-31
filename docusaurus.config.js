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
      '\\or': '\\vee'
    }
  })
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '忘忧北萱草月刊',
  tagline: '了解一下最新最热的忘忧北萱草月刊！',
  url: 'https://monthly.wybxc.cc',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          editUrl: 'https://github.com/Wybxc/wybxc-monthly/edit',
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katexPlugin]
        },
        blog: {
          path: 'featured',
          routeBasePath: '/featured',
          blogSidebarTitle: '忘忧北萱草精选',
          showReadingTime: true,
          editUrl: 'https://github.com/Wybxc/wybxc-monthly/edit',
          remarkPlugins: [math, require('mdx-mermaid')],
          rehypePlugins: [katexPlugin]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        gtag: {
          trackingID: 'G-Y6MP145EDG',
          anonymizeIP: true,
        },
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '忘忧北萱草月刊',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: '月刊'
          },
          { to: '/featured', label: '精选', position: 'left' },
          {
            href: 'https://github.com/Wybxc/wybxc-monthly',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ],
        hideOnScroll: true
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '忘忧北萱草月刊',
            items: [
              {
                label: '月刊',
                to: '/'
              },
              {
                label: '精选',
                to: '/featured'
              }
            ]
          },
          {
            title: '社交媒体',
            items: [
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/Wybxc'
              },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/85438718'
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
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'YiriMirai',
                href: 'https://yiri-mirai.wybxc.cc'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 忘忧北萱草。使用 Docusaurus 构建。`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        respectPrefersColorScheme: true
      }
    }),
  stylesheets: [
    {
      href: 'https://unpkg.com/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    }
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
        docsRouteBasePath: '/',
        indexBlog: false,
        docsDir: 'posts',
      }
    ]
  ]
}

module.exports = config
