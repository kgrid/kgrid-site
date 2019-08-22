# Unit Testing

Currently KGrid Activator supports Javascript KO Services.  KGrid Activator uses the [Nashorn JavaScript](https://openjdk.java.net/projects/nashorn/) engine for execution of JavaScript Objects. Nashorn implements [ECMAScript 5.1 specification](http://www.ecma-international.org/ecma-262/5.1/). 

Modern Javascript Unit Testing frameworks like [Jest](https://jestjs.io/) require access to your functions which is accomplished by exporting you modules.  The [ECMAScript 5.1 specification](http://www.ecma-international.org/ecma-262/5.1/) supplied by [Nashorn JavaScript](https://openjdk.java.net/projects/nashorn/) engine doesn't not support _export_.  We have two options, 
1. workaround the missing _export_ support using [Rewire](https://www.npmjs.com/package/rewire) or
2. build and test ECMAScript 8/9 Javascript functions as normal and transpile to ECMAScript 5.1 for activation in KGrid Activator (see details [Create Bundled KO](../createko)

## Using Rewire

Rewire is a module for dependency injection meant to help you modify the behavior of your code for unit testing. With Rewire you can capture these non-exported methods, and execute them.  Below you can see we that we instantiated our score moudle and use the __get__ to expose the score function for testing.

```javascript

var rewire = require('rewire');

var scoreFunction = rewire("../score").__get__("score");

test('Female non-smoker 65', () => {
    let inputs = {
        age: 65,
        gender: "female",
        smoker: 0,
        sbp: 120,
        cholesterol: 4,
        risk: "low"
    }

    let outputs = {
        "cvdrisk":{
            "chd": 0.005954730043426726,
            "nonchd": 0.008040824758006049,
            "total": 0.013995554801432775,
        }
    }

    expect(scoreFunction(inputs).cvdrisk).toEqual(outputs.cvdrisk);

});

```




