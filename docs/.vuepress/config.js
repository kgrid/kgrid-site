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
    repo: 'kgrid/guides',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'KGrid.org', link: 'https://kgrid.org' },
      { text: "Developer's Guide", link: '/developer/'},
      { text: "Integrator's Guide", link: '/integrator/'},
      { text: "KGrid API", link: '/api/'},
      { text: "Advanced Tutorial", link: '/tutorial/'},
      { text: "Awesome", link: '/awesome/'},
      { text: "Fall 2019 Workshop", link: '/workshop2019.md'}
    ],
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    sidebar: {
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
              '/tutorial/openapi/tools',
              '/tutorial/openapi/resources'
            ]
          },
          {
            title: 'KO Service Testing',
            collapsable: false,
            children: [
              '/tutorial/testing/testing',
              '/tutorial/testing/unit',
              '/tutorial/testing/integration',
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
