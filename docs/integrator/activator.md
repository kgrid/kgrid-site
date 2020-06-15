# KGrid Activator

## Running the Activator

Download the latest activator jar from GitHub [Latest Activator Release](https://github.com/kgrid/kgrid-activator/releases/latest).

1. Create a activator directory
1. Create a directory named shelf in the new activator directory
1. Download [kgrid-activator-#.#.#.jar](https://github.com/kgrid/kgrid-activator/releases/latest)  
1. Place the kgrid-activator-#.#.#.jar into the activator
1. Download [hello-world-v1.0.zip](https://github.com/kgrid-objects/example-collection/releases/latest)
1. Place the hello-world.zip into the activator/shelf directory and unzip. This will place the KOs into the shelf directory

Directory structure should look similar to the following

```text  
 ├── activator   
 │  └──  shelf
 │     └── hello-world-v1.0  
 │          ├── metadata.json
 │          ├── service.yaml
 │          └── src
 │             └── index.js

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
  "status" : "UP",
  "components" : {
    "activationService" : {
      "status" : "UP",
      "details" : {
        "kos" : 1,
        "endpoints" : 1
      }
    },
    "diskSpace" : {
      "status" : "UP",
      "details" : {
        "total" : 499514339328,
        "free" : 29091233792,
        "threshold" : 10485760,
        "exists" : true
      }
    },
    "org.kgrid.adapter.javascript.JavascriptAdapter" : {
      "status" : "UP",
      "details" : {
        "type" : "JAVASCRIPT",
        "created" : "2020-06-15T14:59:15.540257500Z"
      }
    },
    "org.kgrid.adapter.proxy.ProxyAdapter" : {
      "status" : "UP",
      "details" : {
        "type" : "PROXY",
        "created" : "2020-06-15T14:59:15.540257500Z"
      }
    },
    "ping" : {
      "status" : "UP"
    },
    "shelf" : {
      "status" : "UP",
      "details" : {
        "numberOfKOs" : 1,
        "kgrid.shelf.cdostore.url" : "shelf"
      }
    }
  }
}

```

The Hello World is a very simple KO with a Javascript based service that takes in a name and displays
 a _Welcome to the Knowledge Grid_ message.

First lets look at the Hello World's metadata. Hello World

 * View the [Hello World](http://localhost:8080/hello/world) Knowledge Object

The Hello World KO has one service called _welcome_.  The welcome service expects you to pass it a name as a json
object, for example _{"name":"Fred Flintstone"}_.  The following is a curl POST to the Hello World
welcome.

```bash
curl -X POST -H "Content-Type:application/json"  \
    -d "{\"name\": \"Fred Flintstone\"}" \
     http://localhost:8080/hello/world/v1.0/welcome

```

The Hello World KO will return the following

```json
{
  "result": "Welcome to Knowledge Grid, Fred Flintstone",
  "info": {
    "ko": {
      "@id": "hello-world",
      "@type": "koio:KnowledgeObject",
      "identifier": "ark:/hello/world",
      "version": "v1.0",
      "title": "Hello world",
      "description": "An example of Knowledge Object",
      "keywords": [
        "Hello",
        "example"
      ],
      "hasServiceSpecification": "service.yaml",
      "hasDeploymentSpecification": "service.yaml",
      "hasPayload": "src/index.js",
      "@context": [
        "http://kgrid.org/koio/contexts/knowledgeobject.jsonld"
      ]
    },
    "inputs": {
      "name": "Fred Flintstone"
    }
  }
}
```

The hello world example object uses the embedded javascript runtime. There is also a remote javascript runtime service which is more powerful and is used for the hello proxy example.

To use the remote environment you must download and start up the remote javascript runtime environment project by running `npm install -g @kgrid/noderuntime` and running the command `kgrid-node` 

Note the configuration options at the end of this page.

**Running the hello-proxy object**

1. Follow the same steps as above for downloading and starting up an activator.
1. Download the [hello proxy object](https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/hello-proxy-v1.0.zip) and unzip it in your shelf directory
1. Download the javascript runtime by running `npm install -g @kgrid/noderuntime`
1. Start the javascript runtime with the command `kgrid-node`
1. You can use the same commands as above for inspecting and running the object. For example:

```bash
curl -X POST -H "Content-Type:application/json"  \
    -d "{\"name\": \"Fred Flintstone\"}" \
     http://localhost:8080/hello/proxy/v1.0/welcome
```

returns
```json
{
  "result": {
    "result": "Welcome to Knowledge Grid, Fred Flintstone",
    "request_id": "b75c5846-af22-499a-8547-2e9e1d85ea70"
  },
  "info": {
    "ko": {
      "@id": "hello-proxy",
      "@type": "koio:KnowledgeObject",
      "title": "the best hello world ever",
      "identifier": "ark:/hello/proxy",
      "version": "v1.0",
      "description": "A native node js object run through the proxy adapter with one artifact",
      "contributors": "Kgrid Team",
      "keywords": [
        "Hello",
        "example"
      ],
      "hasServiceSpecification": "service.yaml",
      "hasDeploymentSpecification": "deployment.yaml",
      "hasPayload": "src/index.js",
      "@context": [
        "http://kgrid.org/koio/contexts/knowledgeobject.jsonld"
      ]
    },
    "inputs": {
      "name": "Fred Flintstone"
    }
  }
}
```


## Configuration
There are several settings that you can control on the Activator.

**Activator Knowledge Object Shelf Location**

By default the activator will look for a _shelf_ in jar execution directory but the location the _shelf_ can be configured:

```bash
java -jar kgrid-activator-1.3.1.jar --kgrid.shelf.cdostore.url=filesystem:file:///data/myshelf

java -jar kgrid-activator-1.3.1.jar --kgrid.shelf.cdostore.url=filesystem:file:///c:/Users/me/myshelf
```

**Activator Cross-Origin Resource Sharing (CORS)**
The Activator by default allows all origins access to the api. You can tighten that access via the
cors.url parameter.

To change the origins allowed:

```java -jar kgrid-activator-1.3.1.jar --cors.url=https://myservice.com```


**Activator Server Port**

To change the port:

```java -jar kgrid-activator-1.3.1.jar --server.port=9090```


**Activator Server Path**

By default the endpoints of the activator at the root of the activator server.  To change the server root path:

```java -jar kgrid-activator-1.3.1.jar --server.contextPath=/activator```

**Activator Object Auto-Reload**

By default the activator does not automatically reload objects but it can be configured to activate an object when it detects a change to a file on the shelf by setting this property:

```java -jar kgrid-activator-1.3.1.jar --kgrid.activator.autoreload=true```

**Activator Manifest Loading**

To have the activator start up with a collection of knowledge objects you can specify a manifest file with a list of knowledge object urls to be downloaded and unpacked at startup.

```java -jar kgrid-activator-1.3.1.jar --kgrid.activator.manifest=file:/path/to/manifest```
or
```java -jar kgrid-activator-1.3.1.jar --kgrid.activator.manifest=http://path-to-manifest```

For example a manifest file for the example collection would look like this:

```json
{"manifest":[
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/99999-fk4n99hh99-v0.0.2.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/exec-example-v1.0.0.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/exec-step-v1.0.0.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/hello-world-v1.0.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/hello-world-v1.3.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/ri-bmicalc-v2.0.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/score-calc-v0.1.0.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/score-calc-v0.2.0.zip",
  "https://github.com/kgrid-objects/example-collection/releases/download/2.0.0/score-calc-v0.3.0.zip"
]}
```
 ####Configuring the remote runtime
 
 **Adapter Location**
 
 This property has to point to the adapter that the remote environment will register with and be used in
 
 `KGRID_ADAPTER_PROXY_URL = http://path-to-adapter`
 
**Self Location**

This has to point to the public url that can be used to access this runtime environment

`ENVIRONMENT_SELF_URL = http://path-to-this-runtime`


