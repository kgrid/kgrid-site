# Create the bundled KO

## SCORE Project and the core function

The SCORE Project utilizes high and low European population risk model for estimation of 10-year risk of fatal cardiovascular disease (CVD), as described in the paper:

[Conroy, R.M., Pyörälä, K., Fitzgerald, A.P., Sans, S., Menotti, A., De Backer, G., De Bacquer, D., Ducimetière, P., Jousilahti, P., Keil, U., et al. (2003). Estimation of ten-year risk of fatal cardiovascular disease in Europe: The SCORE project. European Heart Journal 24, 987–1003.](https://academic.oup.com/eurheartj/article/24/11/987/427645)

The core function is to compute the 10-year CVD risk based on the following patient features as inputs:

```json
{
  "age" : 86,           // age in years
  "gender" : "female",  // gender - male or female
  "risk" : "low",       // European population risk model - high or low
  "sbp" : 140,          // systolic blood pressure in mmHg
  "cholesterol" : 8,    // total cholesterol in mmol/l
  "smoker":true         // true if a current smoker; otherwise, false
}

```

## Create a bundled KO using KGRID CLI

To create from the template of bundled KO, run the KGrid CLI command with the flag of `--bundled`:

```
$ kgrid create myko --bundled
```

Comparing with the project created as a simple KO in the developer's guide, you will notice an additional file `webpack.config.js` in the created KO implementation folder. This file will configure the webpack tool to build the source files into a JAVASCRIPT bundle, ready for KGrid activator.

Looking in to the folder of `/src`, you will find a few more files in addition to `index.js`.

`cvdscore.js` is a Javascript file containing the core function of SCORE computation.

`beta.json` and `coefficients.json` are the data files containing coefficients for the SCORE models. They are referenced in `cvdscore.js` using `require()`.

When we build the bundled KO, `index.js` will be the main entry for `webpack`.


## Build the payload bundle

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

By default, the `output.libraryTarget` is set as 'var'. For bundling the KO for Nashorn Script Engine, only 'var', 'assign' and 'this' are valid options.

By default, the output file is set as 'main.js' in the folder defined in `path`. In the example template, it will be `/dist`.

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


## Try the bundled KO

Now, the bundled KO is ready to be activated. The activation process is the same as described in [the developer's guide](../developer/#start-a-local-grid). Once activated, you can use Swagger Editor to try out the KO service.
