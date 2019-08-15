# Create the bundled KO

## SCORE Project and the core function

The SCORE Project utilizes high and low European population risk model for estimation of 10-year risk of fatal cardiovascular disease (CVD), as described in the paper:

[Conroy, R.M., Pyörälä, K., Fitzgerald, A.P., Sans, S., Menotti, A., De Backer, G., De Bacquer, D., Ducimetière, P., Jousilahti, P., Keil, U., et al. (2003). Estimation of ten-year risk of fatal cardiovascular disease in Europe: The SCORE project. European Heart Journal 24, 987–1003.](https://academic.oup.com/eurheartj/article/24/11/987/427645)

The core function is to compute the 10-year CVD risk based on the following patient features as inputs:

```json
{
  "age" : 86,           // age
  "gender" : "female",  // gender
  "risk" : "low",       // European population risk model - high or low
  "sbp" : 140,          // systolic blood pressure in mmHg
  "cholesterol" : 8,    // total cholesterol in mmol/l
  "smoker":true         // True if a current smoker
}

```





## Create a bundled KO using KGRID CLI

To create from the template of bundled KO, run the KGrid CLI command with the flag of `--bundled`:

```
$ kgrid create myko --bundled
```

You will notice a few more files in the created KO directory.

## Build the payload bundle

Similar with the simple KO, the bundled KO under development is basically a Javascript project which follows the development pattern of node.js/npm.

You need to change to the implementation directory and run
```
npm install
```

Once `npm` installs all dependencies, run

```
npm run build
```

The build process will create a file `main.js` in `/dist` directory. `service.yaml` is referring this file as the artifact for the service.
