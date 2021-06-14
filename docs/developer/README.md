---
sidebarDepth: 2
sidebar: auto
description: KGrid Developer's Guide - Get Started
---
# Developer's Guide

[![CircleCI](https://circleci.com/gh/kgrid/guides.svg?style=svg)](https://circleci.com/gh/kgrid/guides)


## Introduction to the Knowledge Grid

The **Knowledge Grid** (KGrid) is an open-source platform for managing and running **computable biomedical knowledge** (CBK).

The kind of knowledge that works well in the KGrid might be risk calculators, computable guidelines, or reference and lookup tables — anything that can be represented as a set of services. A researcher or developer writes code to implement the knowledge as one or more functions, and the resulting code is packaged along with service and deployment descriptions as a **knowledge object** (KO).

::: tip
The fundamental thing the Knowledge Grid does is allow you to externalize key pieces of computable biomedical knowledge that would otherwise be embedded in applications, EHRs, databases, and backend services. This makes it easier to reuse and update that knowledge, across time, for multiple channels, and in many organizations.
:::

### Basics
KGrid uses a "plugin" model. An **activator** component loads KOs at runtime, extracts and deploys the code to a suitable runtime environment, exposes the service the code implements as a simple RESTful API, and routes requests and responses. The service description (using OpenAPI 3) also specifies the inputs and outputs for the KO.

There is also a **library** component that can be used to manage and browse KOs. Since the activator and the library share a storage mechanism, they are typically deployed together. But one library can serve as a source of KOs for many activators, and one activator can import KOs from many libraries.

<img alt="Kgrid overview" src="../assets/img/kgridoverview.png" width="90%">

This guide will focus on creating and modifying knowledge objects, deploying KOs as services in an activator, and using the services with simple clients.

For more information see [Integrator's guide](../integrator) and [Kgrid platform](../platform).

### How it works

Currently, KGrid supports the embedded [Graal JavaScript V8 engine](https://www.graalvm.org/reference-manual/js/FAQ/), an [embedded resource adapter](https://github.com/kgrid/resource-adapter), a remote [python runtime](https://github.com/kgrid/kgrid-python-runtime), and a [remote Node.js runtime](https://github.com/kgrid/kgrid-node-express-adapter). Additional runtimes are planned including an r environment, and cloud services like AWS Lambda and Google Cloud for serverless deployments. Knowledge objects are packaged as `.zip` files containing:

 - a metadata file (`metadata.json`) containing identifiers and simple descriptive elements; the structural metadata follows the Knowledge Object Information Ontology (KOIO)
 - code artifact(s)
 - an OpenAPI `.yaml` document describing the service interface(s) the object provides
 - a deployment descriptor `.yaml` document specifying the runtime environment(s), the entry point, etc.
 - additional metadata if applicable

The activator and library are Spring Boot microservices written in Java. The library frontend is a [Vue](https://vuejs.org) Single Page Application (SPA). They can be deployed directly in most environments. We also provide `docker` images for container scenarios.


## Setup

See the [kgrid activator documentation](http://kgrid.org/kgrid-activator/#activator-quick-start) for instructions on getting an activator running locally.

## My first object

### Create an object

Clone the [example collection](https://github.com/kgrid-objects/example-collection) to get example objects of every type the knowledge grid currently supports.
For your first object editing the js-simple-v1.0 object in the `/collection` directory is a good place to start and will allow you to run javascript in the V8 engine in the activator.

First copy the js-simple-v1.0 directory and rename it to something that describes your object.

In that directory open the `metadata.json` file. It should look like this:
```json
{
  "@id": "js/simple/v1.0",                                ← rename using same format
  "@type":"koio:KnowledgeObject",
  "identifier": "ark:/js/simple/v1.0",                    ← match with @id
  "version":"v1.0",                                       ← match version at end of id
  "title": "Hello world",                                 ← descriptive title
  "description":"An example of simple Knowledge Object",  ← more info about object
  "keywords":["Hello","example"],                         ← categories or main features
  "hasServiceSpecification": "service.yaml",              ← point to service spec
  "hasDeploymentSpecification": "deployment.yaml",        ← point to deployment spec
  "hasPayload": "src/index.js",                           ← point to main code artifact
  "@context" : ["http://kgrid.org/koio/contexts/knowledgeobject.jsonld" ]
}
```
Change the `@id` to an [ark id](https://n2t.net/e/ark_ids.html) and version formatted string of `naan/name/version` using only letters, numbers and periods.
In the future this ark id will be generated by a global identifer authority but for now feel free to name use something discriptive for the NAAN (Name Assigning Authority Number) and name.
Change `identifier` to match using the "ark:/" format in front eg: `ark:/naan/name/version` 

Also change the `version` field to match the version on the end of the `identifier`.

Edit the name, description and tags to describe your object.

Then edit the deployment description `deployment.yaml`

```yaml
/welcome:                     ← endpoint for running code
  post:                       ← type of HTTP request
    artifact: src/index.js    ← point to main code file, can be a list
    engine: javascript        ← runtime, javascript uses the V8 engine
    function: welcome         ← main function inside the artifact
```

Change `/welcome` to whatever the endpoint you will call to run the code to be named.

The second line is the type of HTTP request this endpoint will accept. For a javascript object or most other objects which run code and return a result the second line must be `POST` but for a resource object it must be `GET`.

Change the `artifact` to point to your main code file inside the object.

The engine matches the type specified by the internal V8 engine `javascript`. You can see which types of objects your activator supports by going to [http://localhost:8080/actuator/health](http://localhost:8080/actuator/health) and scrolling down to a section similar to this:
```json
        "org.kgrid.adapter.proxy.ProxyAdapter": {
            "status": "up",
            "details": {
                "engines": [
                  "node"        
              ]
            }
        },
        "org.kgrid.adapter.resource.ResourceAdapter": {
            "status": "UP",
            "details": {
                "engines": [
                    "resource"
                ]
            }
        },
        "org.kgrid.adapter.v8.JsV8Adapter": {
            "status": "UP",
            "details": {
                "engines": [
                    "javascript"
                ]
            }
        },
```

You can see that this activator supports objects running code in the `node` environemnt, in the `javascript` V8 environment or objects that return a `resource`. All of these are valid `engine` values in this activator.

Change the `function` to match the name of the main function in your code. For example, our js-simple-v1.0 object's main function inside src/index.js is `welcome`.

For other engines there may be more to edit in the deployment spec. The documentation for each engine will specify which fields are required.

Now edit the service spec `service.yaml`

```yaml
openapi: 3.0.2
info:
  version: '1.0'                                      ← api version
  title: 'Hello, world'                               ← descriptive name
  description: An example of simple Knowledge Object  ← more info about the object
  license:
    name: GNU General Public License v3 (GPL-3)
    url: >-
      https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)#fulltext
  contact:                                            ← your info
    name: KGrid Team
    email: kgrid-developers@umich.edu
    url: 'http://kgrid.org'
servers:
  - url: /js/simple                                   ← needs to match your /naan/name
    description: Hello world
tags:
  - name: KO Endpoints
    description: Hello world Endpoints
paths:
  /welcome:                                       ← the endpoint in the deployment spec
    post:                                         ← the HTTP method in the deployment spec
      tags:
        - KO Endpoints
      description: Welcome.
      operationId: welcome
      requestBody:
        description: inputs
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/input'
      responses:
        '200':
          description: response
          content:
            application/json:
              schema:
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericresponse'
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericerror'
components:
  schemas:
    input:
      required:
        - name
      properties:
        name:
          type: string
          example: Bob
```
The service spec is a standard [OpenAPI](https://spec.openapis.org/oas/v3.1.0) REST API spec. You can make sure it follows the spec by going to [editor.swagger.io](https://editor.swagger.io/) and pasting your service spec into the website.

Change the title and description to match your object's title and description.

Note that you should change the other information such as the license and contact info to the license you are using and your own contact info.

Change the url to match your object's id. It must be in the format `/{naan}/{name}`

Change the path endpoint and HTTP method to match the ones in the deployment spec.

Note the rest of the path spec is used to display the demo on [editor.swagger.io](https://editor.swagger.io/) and give users information about the data your object will accept as inputs and return as output.

Finally, make sure your code is in the location specified in the deployment spec. In our example the code is in a `src` directory and called `index.js`. You can simply overwrite this file or copy your own code file into the object and have the deployment spec point to it.


### Try out the object

::: warning
You may have to reload the Activator after creating or modifying code or metadata. Go to the [`http://localhost:8080/actuator/activation/reload`](http://localhost:8080/actuator/activation/reload) endpoint in a browser or use `curl localhost:8080/actuator/activation/reload` from the command line
:::
Once you reload the objects in your activator or go to [`http://localhost:8080/endpoints`](http://localhost:8080/endpoints) you can see the details of your object in the activator.
```json
    {
        "title": "Hello world",
        "swaggerLink": "https://editor.swagger.io?url=http://localhost:8083/kos/js/simple/v1.0/service.yaml",
        "hasServiceSpecification": "/kos/js/simple/v1.0/service.yaml",
        "activated": "2021-04-15T13:49:27.9384452",
        "status": "ACTIVATED",
        "engine": "javascript",
        "knowledgeObject": "/kos/js/simple/v1.0",
        "@id": "js/simple/1.0/welcome",
        "@context": [
            "http://kgrid.org/koio/contexts/knowledgeobject.jsonld",
            "http://kgrid.org/koio/contexts/implementation.jsonld"
        ]
    }
```
You can use the swaggerLink to go to the swagger demo of your object using a simple interface.

![The Swagger Editor](../assets/img/SwaggerEditor.png)

- Select the (green) `POST` operation for the `/welcome` endpoint
- Click on `Try it out`
- The input section should have example inputs filled in:
```
{
  "name": "Bob"
}
```
- Scroll down to the blue `Execute` button and click it
- Scroll down to the response section. You should see a `200` code and a JSON response object
```
{
  "result": "Welcome to Knowledge Grid, Bob",
   ...
}
```
### Change the inputs
Scroll back up to the inputs section and change the `"name"`.
```
{
  "name": "Ted"
}
```
- `Execute` the endpoint operation again. The response body should change.
```
{
  "result": "Welcome to Knowledge Grid, Ted",
   ...
}
```

For more information on the structure of the object, OpenAPI, and activating and using endpoints, see [Anatomy of a KO](https://kgrid.org/guides/tutorial/ko/overview.html) and the [documentation](/documentation)

:::tip
If your object is not running check these common error points:
- Does your `metadata.json` correctly point to the deployment spec and service spec?
- Does the endpoint name and HTTP method (POST or GET) in the deployment spec and service spec match?
- Does your deployment spec point to your code and has the correct engine and entry function?
- Is your id consistent between the `metadata.json` and the service spec?
:::

## What's next?
Now, you learned the basics of Knowledge Grid. [KGRID Advanced Tutorial](../tutorial/) will guide you through the process of developing a KO implementing SCORE risk calculation. The tutorial will also cover a wide range of advanced topics.

## Runtime Information
More information on individual runtimes can be found at their github pages:
- [Node.js runtime](https://github.com/kgrid/kgrid-node-runtime#writing-a-knowledge-object-in-node)
- [Python runtime](https://github.com/kgrid/kgrid-python-runtime#creating-a-python-knowledge-object)
- [Resource adapter](https://github.com/kgrid/resource-adapter#guidance-for-knowledge-object-developers)
- [JavaScript V8 adapter](https://github.com/kgrid/javascript-v8-adapter#guidance-for-knowledge-object-developers)