# Build the bundled KO

## Unit Test

[The Developer's Guide](../developer/#unit-test-the-implementation) has shown how to run the unit test on the source code of the implementation. You can add your own test scripts in addition to the example test script provided through the template.

Similarly, the bundled KO template includes a sample test script `score.test.js`. After setting up the project by running `npm install`, you can run `npm test` to see theis test in action. Examining the test file, you will find this first line:

```javascript
const scoreFunction = require('../src/index')
```

This test is intended to test the entry script `/src/index.js`. Again, you can add your own test scripts for the entry script.

Additionally, you may already have test scripts for the unit test of the core function, in our example being `/src/cvdscore.js`. Those core function test scripts can be added to the test directory. Certain modifications might be needed depending on the original test platform used.


## Configure webpack.config.js

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

By default, the `output.libraryTarget` is set as 'var'. For bundling the KO for Nashorn Script Engine, only 'var', 'assign' and 'this' are valid options.

By default, the output file is set as 'main.js' in the folder defined in `path`. In the example template, it will be `/dist`.

For details on customization of the webpack config, please refer to [Webpack Documentation](https://webpack.js.org/configuration/)

## Build Process

To build the javascript bundle, change to the implementation folder if not there yet and run

`npm run build`

Once the build process is finished, the KO is ready to be activated.

## Integration Test

TBA
