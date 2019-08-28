# KO Service with Dependencies

Many of the functions developed for KO Services are simple and require no external libraries or files.  However the use of these libraries and files can simplify design, increase maintainability and create a better solution.

The [10-Year Risk of Cardiovascular Disease KO](https://github.com/kgrid-objects/example-collection/tree/master/collection/score-calc) is a object the could be developed using a function the has not dependencies ( [score-calc v0.1.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/score-calc/v0.1.0)).  However the introduction of external dependencies in the form of libraries and files creates a more testable, adaptable and maintainable function ([score-calc v0.3.0](https://github.com/kgrid-objects/example-collection/tree/master/collection/score-calc/v0.3.0)).

Currently the KGrid Activator uses the [Nashorn](https://openjdk.java.net/projects/nashorn/) JavaScript engine for execution of JavaScript Objects. Nashorn implements [ECMAScript 5.1 specification](https://www.ecma-international.org/ecma-262/5.1/) which doesn't support external dependencies without _bundling_ your function using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/).  The use of [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) allows the function to be transpiled to [Nashorn](https://openjdk.java.net/projects/nashorn/) compliant [ECMAScript 5.1 specification](https://www.ecma-international.org/ecma-262/5.1/) artifact.


## Create bundled KO Service

To create from the template of bundled KO, run the KGrid CLI command with the flag of `--bundled`:

```
 kgrid create myko --bundled
```

Comparing with the project created as a simple KO in the developer's guide, you will notice an additional file `webpack.config.js` in the created KO implementation folder. This file will configure the webpack tool to build the source files into a JAVASCRIPT bundle, ready for KGrid activator.

Looking in to the folder of `/src`, you will find a few more files in addition to `index.js`.

`cvdscore.js` is a Javascript file containing the core function of SCORE computation.

`beta.json` and `coefficients.json` are the data files containing coefficients for the SCORE models. They are referenced in `cvdscore.js` using `require()`.

When we build the bundled KO, `index.js` will be the main entry for `webpack`.


## Build bundled KO Service

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

By default, the `output.libraryTarget` is set as 'var'. For bundling the KO for Nashorn Script Engine, only 'var', 'assign' and 'this' are valid options. By default, the output file is set as 'main.js' in the folder defined in `path`. In the example template, it will be `/dist`.


::: danger
Note score in the output element _library: "score"_ must match the  x-kgrid-activation element _entry: score_ the [OpenAPI](tutorial/openapi/overview.html#extensions)
:::

For details on customization of the webpack config, please refer to [Webpack Documentation](https://webpack.js.org/configuration/)

You need to change to the implementation directory and run
```
npm install
```

Once `npm` installs all dependencies, run

```
npm run build
```

The build process will create a file `main.js` in `/dist` directory. `service.yaml` is referring this file as the artifact for the service.


## Activate bundled KO Service

Now, the bundled KO is ready to be activated. The activation process is the same as described in [the developer's guide](../developer/#start-a-local-grid).

Go back to the project directory, start the local grid by running

```sh
kgrid start
```

Once activated, you can use Swagger Editor to try out the KO service. To get the url link, run

```sh
kgrid play ark:/<username>/myko
```
