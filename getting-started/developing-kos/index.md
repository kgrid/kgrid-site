---
layout: page
---

## Getting Started Developing Knowledge Objects

The **Knowledge Grid** consists of **Libraries**, **Activators**, and collections of **Knowledge Objects**.
Knowledge Objects (or **KOs**) are wrappers around a bit of code that implements some piece of computable biomedical knowledge. 
The **Library** is a place for keeping *KOs* once they are ready for use. **Activators** bring to life the KOs in the Knowledge Grid.

We will focus on **KOs** and **Activators**  here, and you'll be working with Javascript code, 
metadata files, programming editors, and the command line to test, change, and create new **Knowledge Objects**.  

This guide starts from simple KO examples and shows how to extend, build, test, and deploy them. 
We will install an Activator for deploying and running KOs, download example KOs and add them to the Activator's "shelf", make changes, and see the results in the running Activator. We will also talk about how to [save our new versions of a KO to a Kgrid Library](managing-kos-in-a-library). 
                                                                                             

## Quick Start

Download and install an [Activator](http://kgrid.org/kgrid-activator/). The Activator is a framework 
for "activation" and exposing the code in a KO as a simple RESTful API. 

The Activator getting started guide includes testing deploying using a "hello world" KO. 

## Introduction to Knowledge Objects

Knowledge Objects themselves are a simple collection of files and metadata. The core elements are 
_Knowledge Object_, _Knowledge Object Implementation,_ a _Implementation Service Specification_, 
_Implementation Deployment Specification_ and the _code_ itself. 

The Knowledge Object metadata is JSON-LD defined by Knowledge Object Implementation Ontology (KOIO). 
The Knowledge Object Implementation Ontology (KOIO) is a formal, standardized representational 
framework spanning what exists and is implemented in the form of Knowledge Objects.  
                                                            
KOIO is defined by KOIO JSON-LD Context, which has these elements:

- [Knowledge Object](http://kgrid.org/koio/contexts/knowledgeobject.jsonld) - is an Information Artifact capable of serving a role as the atomic unit of 
computable knowledge and therefore comprised of at least one Knowledge Object Implementation. 

- [Knowledge Object Implementation](http://kgrid.org/koio/contexts/implementation.jsonld) - an Information Artifact that describes a functional instance of the Knowledge Object. 
    - Implementation Service Specification is an Information Artifact that describes a computational 
    service that is enabled by a KnowledgeObject
    - Implementation Deployment Specification a relation that holds between a whole KnowledgeObject 
    and its Deployment Instruction parts
    - Implementation Payload - Computable Knowledge Resource represented in manner that is machine-interpretable 
    
For the simple file system shelf we will be using with the Activator everything is in files and folders, 
the metadata is in JSON format, the Service and Deployment Specification are in YAML formatted file, and the code is in a Javascript file. 

Each version of a KO is uniquely identified by it's Ark Id (naan-name) and it's Implementation identifier. 
So, in our file system layout we will start from `name-name/implementation` (in our **hello-world** example:
 inside `../shelf` we find `hello-world/koio.v1`)

```
├── hello-world
    ├── metadata.json 
    └── koio.v1
        ├── deployment-specification.yaml
        ├── metadata.json 
        ├── service-specification.yaml
        └── welcome.js
```

Change directories from the command line to the `hello-world` folder and open it up in a coding e
ditor (the *Atom* editor from GitHub is great!)

```bash
cd path/to/shelf/hello-world
atom .
```

Open up the Knowledge Object `metadata.json` file. It'll look something like this:

```json
{
  "@id": "hello-world",
  "@type":"koio:KnowledgeObject",
  "identifier":"ark:/hello/world",
  "title":"Hello World Title",
  "contributors": "Kgrid Team",
  "description": "Test Hello World ",
  "keywords": "test hello world",
  "hasImplementation":[
    "hello-world/koio.v1"
  ],
  "@context" : ["http://kgrid.org/koio/contexts/knowledgeobject.jsonld" ]
}
```

Navigate to the `koio.v1` directory and Open up the Knowledge Object Implementation `metadata.json` file. 
It'll look something like this:

```json
{
  "@id": "koio.v1",
  "@type": "koio:Implementation",
  "identifier": "ark:/hello/world/koio.v1",
  "title": "Implementation koio v1 of Hello World",
  "hasServiceSpecification": "koio.v1/service-specification.yaml",
  "hasDeploymentSpecification": "koio.v1/deployment-specification.yaml",
  "hasPayload": "koio.v1/welcome.js",
  "@context": [
    "http://kgrid.org/koio/contexts/implementation.jsonld"
  ]
}

```

These four files are the core of the Knowledge Object. Together they allow the Activator to create a 
REST endpoint that can accept and process messages using the code that implements a particular model of computable biomedical knowledge.


### The standard KO result 

...

### Using the Swagger UI test platforms

You can use `https://petstore.swagger.io` or `https://editor.swagger.io` to test the objects running in your local Activator, which is super useful when you're updating and changing the implementation.

try pasting this into your browser:

```http request
https://editor.swagger.io/?url=http://localhost:8080/hello/world/v0.0.1/service
```   

## Next Steps

> **Developing _real_ Knowledge Objects**
>
>In a real world scenario you would be keeping your KO source code (metadata, service descriptions, etc.) in a source control system like GitHub, you'd be locking versions when they are deposited in a Library, you'd testing and committing changes over time and deciding when to release a newer version to the Knowledge Grid.

### Change "Hello, world!" to "Hello, galaxy!"

> Limitations of the current Javascript environment

## More things to try

### Change the service description

#### Use a different endpoint name

...

#### Change the input and output schema

### Change the metadata for your object

### Create a new version

> Some additional tools to try (testing frameworks, jjs, git, linking objects, kgrid cli)


## Working with JavaScript KOs

Take a look at the objects in the [example-collection](https://github.com/kgrid-objects/example-collection) and find the `new-hello` object in the `collection` directory.

There will be three versions of a KO from very simple to complex. All the objects come with a `package.json` file and scripts to build, test and package the KO for distribution to the Knowledge Grid.

**The simple KO** contains a single function called `welcome` that accepts a name property, `{name: "Bob"}`, and returns a greeting, `Welcome to the Knowledge Grid, Bob`. This KO is written in ES5 to be deployable in teh Activator's Nashorn script engine.

**The second KO** builds the same object, using Babel and Webpack, into a bundled artifact. The `index.js` file is written in ES6, transpiled to ES5 using Babel, and bundled into a `main.js` file in the `dist` directory. 

**The complex, multifile KO** builds a somewhat more advanced object from multiple source files and bundles all the necessary files into a single Javascipt file, again `main.js`, so that the `npm run package` command can zip it up into a distributable KO.

### Good practices

Coming soon
 
### Gotchas

Coming soon

### Tests

Coming soon

#### Running in Nashorn vs. running in Nodejs

Coming soon