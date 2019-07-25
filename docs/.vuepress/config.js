module.exports = {
  base: '/guides/',
  title: "Knowledge Grid Guides",
  themeConfig: {
    repo: 'kgrid',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'KGrid.org', link: 'https://kgrid.org' },
      { text: "Developer's Guide", link: '/developer/'},
      { text: "Integrator's Guide", link: '/integrator/'},
      { text: "SCORE Tutorial", link: '/tutorial/'},
      { text: "KGrid API", link: '/api/'}
    ],
    search: true,
    searchMaxSuggestions: 10,
    displayAllHeaders: true,
    sidebar: {
        '/tutorial/':[
          '/tutorial/',
          '/tutorial/createko',
          {
            title: 'Deep Dive into the KO ',
            // collapsable: false,
            children: [
              '/tutorial/service',
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

  }
}
