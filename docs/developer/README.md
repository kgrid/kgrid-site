# Developer's Guide

[![CircleCI](https://circleci.com/gh/kgrid-objects/ipp-collection.svg?style=svg)](https://circleci.com/gh/kgrid-objects/ipp-collection)


## Introduction to the Knowledge Grid

## Installation

## Activator Quick Start

These instructions will get the Kgrid Activator running with sample set of Knowledge Objects.

### Prerequisites

For running the application you need:

- [Java 8 or higher](https://www.oracle.com/java/)

### Running the Activator

Download the latest activator jar from GitHub [Latest Activator Release](https://github.com/kgrid/kgrid-activator/releases/latest).

1. Create a activator directory
1. Create a directory named shelf in the new activator directory
1. Download [kgrid-activator-#.#.#.jar](https://github.com/kgrid/kgrid-activator/releases/latest)  
1. Place the kgrid-activator-#.#.#.jar into the activator
1. Download [hello-world.zip](https://github.com/kgrid-objects/example-collection/releases/latest) 
1. Place the hello-world.zip into the activator/shelf directory and unzip. This will place the KOs into the shelf directory


Directory structure should look similar to the following

```text  
 ├── activator   
 │  └──  shelf
 │     └── hello-world  
 │        └── v0.0.1
 │           ├── model
 │           └── metadata.json
 └── kgrid-activator-#.#.#.jar
```

The activator is executable jar and can be run from the command line.  Open a terminal window and navigate to the direcoty where the jar and shelf are located.  

Type in the following. 

```bash
 java -jar kgrid-activator-#.#.#.jar 
```

By default the activator will run on port 8080. You can validate the activator is up and running using 
the [activators health endpoint](http://localhost:8080/health).  The health of the Activator should display a status of **UP**.  

```yaml
{
   status: "UP",
   shelf: {
      status: "UP",
      kgrid.shelf.cdostore.url: "shelf"
   },
   activationService: {
      status: "UP",
      Knowledge Objects found: 1,
      Adapters loaded: [
        "JAVASCRIPT",
        "PROXY"
       ],
   EndPoints loaded: [
        "hello/world/v0.0.1/welcome"
   ]
   },
   diskSpace: {
      status: "UP",
      total: 499963170816,
      free: 415911948288,
      threshold: 10485760
   }
 }
 
```

### Using the Hello World KO on the Activator 

The Hello World is a very simple KO with a Javascript based service that takes in a name and displays 
 a _Welcome to the Knowledge Grid_ message. 
 
First lets look at the Hello World's metadata. Hello World
 
 * View the [Hello World](http://localhost:8080/hello/world) Knowledge Object
 * View version 0.0.1 of the [Hello World 0.0.1](http://localhost:8080/hello/world//v0.0.1)  

The Hello World KO has one service called _welcome_.  The welcome service expects you to pass it a name as a json 
object, for example _{"name":"Fred Flintstone"}_.  The following is a curl POST to the Hello World 
welcome.

```bash
curl -X POST -H "Content-Type:application/json"  \
    -d "{\"name\": \"Fred Flintstone\"}" \
     http://localhost:8080/hello/world/v0.0.1/welcome

```

The Hello World KO will return the following

```json
{
    "result": "Welcome to Knowledge Grid, Fred Flintstone",
    "info": {
        "ko": "hello/world/v0.0.1",
        "inputs": {
            "name": "Fred Flintstone"
        }
    }
}
```



## Library Quick Start

These instructions will get the Kgrid Library running with sample set of Knowledge Objects.

### Prerequisites

For running the application you need:

- [Java 8 or higher](https://www.oracle.com/java/)

### Running the Library

Download the latest library jar from GitHub [Latest Activator Release](https://github.com/kgrid/kgrid-library/releases/latest).

1. Create a _library_ directory
1. Download [kgrid-library-#.#.#.jar](https://github.com/kgrid/kgrid-library/releases/latest)  
1. Place the _kgrid-library-#.#.#.jar_ into the _library_ 
1. Create a directory named _shelf_ in the new _library_ directory 

Directory structure should look similar to the following

```text 
 ├── library
     └── shelf  
     └── kgrid-library-#.#.#.jar
```

The library is executable jar and can be run from the command line.  Open a terminal window and navigate to the directory where the jar and shelf are located.  

Type in the following. 

```bash
 java -jar kgrid-library-#.#.#.jar 
```

By default the activator will run on port 8080. You can validate the activator is up and running using 
the [library health endpoint](http://localhost:8080/health).  The health of the Activator should display a status of **UP**.  

```yaml
{
   status: "UP",
   userDetailService: {
     status: "UP",
     number of users: 2
    }  ,
    ezidService: {
      status: "UP",
      ezid.base.url: "https://ezid.lib.purdue.edu/",
      ezid.mock: "false"
    },
    shelf: {
      status: "UP",
      kgrid.shelf.cdostore.url: "/Users/me/library/shelf"
    },
    diskSpace: {
      status: "UP",
      total: 402672611328,
      free: 269428576256,
      threshold: 10485760
    },
      db: {
      status: "UP",
      database: "H2",
      hello: 1
    }
}
 
```

Now simply navigate to the [KGrid Library](http://localhost:8080).

### Adding the Hello World KO on the Library 

The Library allows you to take deposit a Knowledge Object archive (zip file).  On the KGrid Library 
main page you will see a _Deposit Knowledge Object_. 

1. Download [hello-world.zip](https://github.com/kgrid-objects/example-projects/releases/latest)
1. Navigate to the [KGrid Library](http://localhost:8080) site.
1. Follow this screen flow
<ol type="A">
<li>
<div>
<a target="_blank" href="./img/AddKOScreenShot1.png">
  <img src="./assets/img/AddKOScreenShot1.png" alt="" width=350>
</a>
<div>Click on <i>Deposit Knowledge Object</i> in the right side of the screen</div>
</div></li>
<li>
<div>
<a target="_blank" href="./img/AddKOScreenShot2.png">
  <img src="./assets/img/AddKOScreenShot2.png" alt=""  width=350>
</a>
<div>Click in the grey box to bring up a file select window.</div>
</div></li>
<li>
<div>
<a target="_blank" href="./img/AddKOScreenShot3.png">
  <img src="./assets/img/AddKOScreenShot3.png" alt=""  width=350>
</a>
<div>Select the hello-world.zip you just download<br>
Click <i>Deposit Object</i> in the lower right of the screen.</div>
</div></li>
<li>
<div>
<a target="_blank" href="./img/AddKOScreenShot4.png">
  <img src="./assets/img/AddKOScreenShot4.png" alt=""  width=350>
</a>
<div> The file will be upload to the 
     library and you return to library main screen.</div>
</div></li>
</ol>


## Example Collection

This repository contains a collection of KGrid Knowledge Objects that demonstrate features
of the grid, good development practices and useful tools.

### Anatomy of this Knowledge Object project.
The following structure is not an requirement or enforced, it is a recommendation based
on what the JavaScript and in particular Node community at large have been following by convention.

#### Prerequisites
There are testing and packaging features in this project that require npm, npm is installed with Node.js
[npm](https://www.npmjs.com/get-npm).  Once npm is installed run  ```npm install``` at the root of this project.

#### Directories

* **collection/** contains one to many directories representing knowledge objects
  * **naan-name** is intended for each knowledge object (e.g. _hello-world_)
* **tests/** is for all of your project test scripts
* **etc/** is a sub-directory for miscellaneous project
* **docs/** is a sub-directory for more detailed information about these KOs
* **dist/** is created and destroyed when running ```npm run package```
* **scripts/** is intended to capture various scripts need for the project (using [scripty](https://www.npmjs.com/package/scripty))
* **scriptswin/** windows versions of the scripts

### Example Knowledge Objects
 * [Hello World](https://github.com/kgrid-objects/example-collection/tree/master/collection/hello-world) - Simple KO designed as a starting point. Demonstrates a project structure the includes unit testing and scripts to package the KO deposit.
 * [BMI Calculator](https://github.com/kgrid-objects/example-collection/tree/master/collection/ri-bmicalc) -  Simple KO designed to calculate BMI based on height and weight.  Demostrates passing mulitple attributes.
 * [Minimum Viable](https://github.com/kgrid-objects/example-collection/tree/master/collection/mvo-kgrid) -  Simple KO designed demostrate the smallest amount of information needed to get KO


### Bundled Object Example

Currently the KGrid Activator uses the 
[Nashorn JavaScript engine](https://openjdk.java.net/projects/nashorn/ ) for execution of JavaScript 
Objects.  Nashorn implements [ECMAScript 5.1 specification](http://www.ecma-international.org/ecma-262/5.1/)  
This limits the tools and technics avalable to the KO developer.  The KGrid has experimented with 
[webpack](https://webpack.js.org/) and [babel](https://babeljs.io/) as a method to all the developer it until
more current tools and techniques.  Very simple example is Nashorn doesn't support _const_ and _let_ statements but 
use babel transpiler we can convert es6 to es5.

Please review [Hello World](https://github.com/kgrid-objects/example-collection/tree/master/collection/hello-world)
_bundle.v1_ and _bundle.v2_ implementations.

## Executive Object Example


### Testing
Sample tests are located in the tests directory and can be executed using _npm_.  These tests utilize
[Jest](https://jestjs.io/) and  [rewire](https://github.com/jhnns/rewire). est provides the testing
framework and rewire allows the tests to access the javascript function without the
convienace of the export modules (KGrid Javascript adaptor limitation).  The [tests](../tests) are in
the tests directory.  You can execute the tests via npm

```
npm test
```

### Integration Testing

#### Running Example KOs in an Activator
You can now test the example objects in an activator via a npm script. This script will download the 
latest released activator and start up the activator using the example repository as it's shelf. 

Open a terminal window at the root of the cloned repository and run the following command.

```
npm run dev
```


#### Package

You can create zip file of the Knowledge Object which can be used to deposit to a KGrid
Library or load/activate on a KGrid Activator.

```
npm run package
```

#### Tools

*NPM Tool*
* [scripty](https://www.npmjs.com/package/scripty)
* [jest](https://jestjs.io/)
* [rewire](https://github.com/jhnns/rewire)


