# KGrid Guides for Developers and Integrators

[![CircleCI](https://circleci.com/gh/kgrid/guides.svg?style=svg)](https://circleci.com/gh/kgrid/guides)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This is the site documentation for developers and integrators (integrators).


#### To run the site locally
```
npm install
npm run dev
```

#### Test the build (before committing)

You'll need to have a server that allows proxying since the `vuepress` build currently requires a property set to the deployment path. That path is hardcoded in `config.js` as: 
```javascript
{ base: "/guides/" }
``` 
You can use [`live-server`](https://www.npmjs.com/package/live-server) which is include as a dev dependency, so `npx live-server ...` will work.
```
npm run build
npx live-server --mount=/guides/:./docs/.vuepress/dist/ --open=/guides/
```

Don't forget the trailing slash (`/guides/`) if you're typing the URL. If you need to serve Open API specs to the online Swagger editor add `--cors` flag to the `live-server` command.

You can leave `live-server` running and just rebuild to see changes. Once the production build of the site passes muster go ahead and commit the changes. 

The site will be deployed on github using [CircleCI](https://circleci.com/gh/kgrid/guides) to build and commit the documentation files in the `/docs` directory. The site is published via Github to the [`gh-pages`](https://github.com/kgrid/guides/tree/gh-pages) branch.
