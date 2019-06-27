module.exports = {
  base: '/guides/',
  title: "Knowledge Grid Documentation",
  themeConfig: {
    repo: 'kgrid',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'KGrid.org', link: 'https://kgrid.org' },
      { text: "Integrator's Guide", link: '/integrator/'},
      { text: "Developer's Guide", link: '/developer/'},
      { text: "KGrid API", link: '/api/'}
    ],
    search: true,
    searchMaxSuggestions: 10,
    sidebar: 'auto',
    displayAllHeaders: true
  }
}
