# KO with Dependencies

Many of the functions developed for Knowledge Objects are simple and require no external libraries or files.  However the use of these libraries and files can simplify design, increase maintainability and create a better solution.

The [js-bundled object](https://github.com/kgrid-objects/example-collection/tree/master/collection/js-bundled-v1.0) is an object that uses npm to bundle dependencies into a single javascript file that can run in the V8 engine.

Currently the KGrid Activator uses the [Graal V8](https://www.graalvm.org/reference-manual/js/FAQ/) JavaScript engine for execution of JavaScript Objects. V8 is compatible with the [ECMAScript 2020 specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) but doesn't support external dependencies without _bundling_ your function using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/).  The use of webpack and babel allows the function to be transpiled into a graal V8 compliant code artifact.


## Create bundled KO

To create a new KO from the template of bundled KO, run the KGrid CLI command and select the template type of `bundled`:

```
 kgrid create myko
```

Comparing with the project created as a simple KO in the developer's guide, you will notice some additional files `webpack.config.js` and `package.json` in the created KO folder. These files will configure the webpack tool to build the source files into a JAVASCRIPT bundle, ready for KGrid activator.

Looking in to the folder named `/src`, you will find a few more files in addition to `index.js`.

`cvdscore.js` is a Javascript file containing the core function of SCORE computation.

`beta.json` and `coefficients.json` are the data files containing coefficients for the SCORE models. They are referenced in `cvdscore.js` using `require()`.

When we build the bundled KO, `index.js` will be the main entry for `webpack`.


## Build bundled KO

Similar with the simple KO, the bundled KO under development is basically a Javascript project which follows the development pattern of node.js/npm.

In our example template, `webpack` is used to build the bundled script. We use default values for the webpack configuration wherever possible to keep it simple.

This shows the configuration file from the template.

```
let path = require('path');
module.exports = {

  entry: './src/index.js',

  output: {
    library: "score",
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
};
```

By default, the `output.libraryTarget` is set as 'var'. For bundling the KO for Graal V8 Script Engine, only 'var', 'assign' and 'this' are valid options. By default, the output file is set as 'main.js' in the folder defined in `path`. In the example template, it will be `/dist`.


::: danger WARNING
Note library name in the output element _library: "score"_ must match the deployment description element _entry: score_ found on the [deployment specification page](/tutorial/deployment/deployment.html).
:::

For details on customization of the webpack config, please refer to [Webpack Documentation](https://v4.webpack.js.org/concepts/configuration/)

To bundle the code you need to change to the ko directory and run
```
npm install
```

Once `npm` installs all dependencies, run

```
npm run build
```

The build process will create a file `main.js` in `/dist` directory. `deployment.yaml` is referring this file as the artifact for the service. Note that this object will not run in an activator if it has not been bundled.


## Activate bundled KO Service

Now, the bundled KO is ready to be activated. The activation process is the same as described in the developer's guide, referring to the [Kgrid Activator Documentation](http://kgrid.org/kgrid-activator/#activator-quick-start).

