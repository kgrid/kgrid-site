module.exports = {
  base: '/guides/',
  title: "Knowledge Grid Guides",
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
            title: 'Deep Dive into the KO ',
            // collapsible: false,
            children: [
              'ko-intro',
              'service',
              '/tutorial/sourcecode',
              '/tutorial/metadata'
            ]
          },
          {
            title: 'Bring the KO to life',
            // collapsable: false,
            children: [
              '/tutorial/buildko',
              '/tutorial/deployko',
              '/tutorial/packageko'
            ]
          },
          {
            title: 'Use the KO',
            // collapsable: false,
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
