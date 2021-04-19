module.exports = {
  base: '/guides/',
  title: "Knowledge Grid Guides",
  head: [
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@kgrid' }],
    ['meta', { name: 'twitter:creator', content: '@kgrid' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:title', content: 'Guides' }],
    ['meta', { property: 'og:site_name', content: 'Guides' }],
    ['meta', { property: 'og:url', content: 'https://kgrid.org' }]
    // ['meta', { property: 'og:image', content: '/guides/assets/image/KGridLogo_Blue.jpg' }]
  ],
  themeConfig: {
    //repo: 'kgrid/guides',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'KGrid.org', link: 'https://kgrid.org' },
      { text: 'Guide', items: [
        { text: "Quick Start", link: '/quickstart/'},
        { text: "Developer's Guide", link: '/developer/'},
        { text: "Integrator's Guide", link: '/integrator/'},
        { text: "Advanced Tutorial", link: '/tutorial/'}
      ]},
      { text: "Documentation", link: '/documentation/'},
      { text: "Awesome", link: '/awesome/'},
      { text: "Help", items: [
        { text: "FAQ", link: '/faq/'},
        // { text: "Chat", link:'https://kgrid-team.slack.com/app_redirect?channel=general'},
        { text: "Email", link: 'mailto:kgrid-developers@umich.edu'}
      ]},
      { text: "Event", items:[
        { text: "Fall 2019 Workshop", link: '/workshop2019'}
      ]},
    ],
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    sidebar: {
        '/integrator/':[
            '',
          'activator'
        ],
        '/tutorial/':[
          '',
          {
            title: 'Anatomy of a KO',
            collapsable: false,
            children: [
              '/tutorial/ko/overview',
              '/tutorial/ko/koio'
            ]
          },
          'createko',
          'packageko',
          'deployko',
          {
            title: 'KO Service OpenAPI',
            collapsable: false,
            children: [
              '/tutorial/openapi/overview',
            ]
          },
          {
            title: 'Deployment Specification',
            collapsable: false,
            children: [
              '/tutorial/deployment/deployment',
            ]
          },
          {
            title: 'KO Service Testing',
            collapsable: false,
            children: [
               '/tutorial/testing/integration'
            ]
          },
          {
            title: 'KO Service Clients',
            collapsable: false,
            children: [
              '/tutorial/clients/curl',
              '/tutorial/clients/httpie',
              '/tutorial/clients/postman',
              '/tutorial/clients/swagger'
            ]
          },
          {
            title: 'Remote Runtimes',
            collapsable: false,
            children: [
              '/tutorial/runtimes/overview',
            ]
          },

          'executiveobject'
        ]
      }

  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-133554011-1' // UA-00000000-0
      }
    ],
     ['@dovyp/vuepress-plugin-clipboard-copy', true]
  ]
}
