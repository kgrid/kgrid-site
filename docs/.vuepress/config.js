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
      { text: "SCORE Tutorial", link: '/tutorial/'},
      { text: "KGrid API", link: '/api/'},
      { text: "Fall 2019 Workshop", link: '/workshop2019.md'}
    ],
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    sidebar: {
        '/tutorial/':[
          '',
          'createko',
          {
            title: 'Deep Dive into the KO',
            collapsable: false,
            children: [
              '/tutorial/ko-intro',
              '/tutorial/service',
              '/tutorial/sourcecode',
              '/tutorial/metadata'
            ]
          },
          {
            title: 'Bring the KO to the Grid',
            collapsable: false,
            children: [
              '/tutorial/buildko',
              '/tutorial/packageko',
              '/tutorial/deployko'
            ]
          },
          {
            title: 'Use the KO',
            collapsable: false,
            children: [
              '/tutorial/shelfapi',
              '/tutorial/simpleapiclient',
              '/tutorial/executiveobject'
            ]
          }
        ]
      }

  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-133554011-1' // UA-00000000-0
      }
    ]
  ]
}
