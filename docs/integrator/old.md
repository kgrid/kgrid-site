---
sidebarDepth: 2
sidebar: auto
---
# Integrator's Guide


# Refers to a previous version — updates coming soon!

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
 │          ├── metadata.json
 │            ├── v0.1.0
 │            │   ├── metadata.json
 │            │   ├── service.yaml
 │            │   └── src
 │            │       └── index.js
 │            ├── v0.2.0
 │            │   ├── dist
 │            │   │   └── main.js
 │            │   ├── metadata.json
 │            │   └── service.yaml
 │            └── v0.3.0
 │                ├── dist
 │                │   └── main.js
 │                ├── metadata.json
 │                └── service.yaml
 └── kgrid-activator-#.#.#.jar
```

The activator is executable jar and can be run from the command line.  Open a terminal window and navigate to the direcoty where the jar and shelf are located.  

Type in the following.

```bash
 java -jar kgrid-activator-#.#.#.jar
```

By default the activator will run on port 8080. You can validate the activator is up and running using
the [activators health endpoint](http://localhost:8080/health).  The health of the Activator should display a status of **UP**.  

```json
{
   "status": "UP",
   "shelf": {
      "status": "UP",
      "kgrid.shelf.cdostore.url": "shelf"
   },
   "activationService": {
      "status": "UP",
      "Knowledge Objects found": 1,
      "Adapters loaded": [
        "JAVASCRIPT",
        "PROXY"
       ],
   "EndPoints loaded": [
        "hello/world/v0.0.1/welcome"
   ]
   },
   "diskSpace": {
      "status": "UP",
      "total": 499963170816,
      "free": 415911948288,
      "threshold": 10485760
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
     http://localhost:8080/hello/world/v0.1.0/welcome

```

The Hello World KO will return the following

```json
{
  "result" : "Welcome to Knowledge Grid, Fred Flintstone",
  "info" : {
    "ko" : {
      "@id" : "v0.1.0",
      "@type" : "koio:Implementation",
      "identifier" : "ark:/hello/world/v0.1.0",
      "title" : "Implementation koio v1 of Hello World",
      "hasServiceSpecification" : "v0.1.0/service.yaml",
      "hasPayload" : "v0.1.0/welcome.js",
      "@context" : [ "http://kgrid.org/koio/contexts/implementation.jsonld" ]
    },
    "inputs" : {
      "name" : "Fred Flintstone"
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
 └── library
     └── shelf  
     └── kgrid-library-#.#.#.jar
```

The library is executable jar and can be run from the command line.  Open a terminal window and navigate to the directory where the jar and shelf are located.  

Type in the following.

```bash
 java -jar kgrid-library-#.#.#.jar
```

By default the activator will run  on port 8080. You can validate the activator is up and running using
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


