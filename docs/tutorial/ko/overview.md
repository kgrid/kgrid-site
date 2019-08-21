# Knowledge Object Overview

Conceptually, a knowledge object represents computable knowledge as both a resource and a service. That is, it contains description of what it does, and the code to do it. Also, in order to make the object findable, accessible, interoperable, and reusable, the KO has enough metadata to describe itself as both resource and service.

Let's take a look at what's inside a knowledge object, starting from the top level folder....

```
├── hello-world
    ├── metadata.json 
    └── v0.1.0
        ├── metadata.json 
        ├── service.yaml
        └── welcome.js
```

## Knowledge Object

### Metadata

In the packaged object metadata is kept in two `json` files, one for the object as a whole, and the other for each implementation(KOs can have multiple implementations, **BUT JUST DON'T!** )

Metadata at the top level includes an identifier, minimal description data, and required knowledge object properties from the [Knowledge Object Information Ontology (KOIO)](koio)

`hello-world/metadata.json`
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
    "hello-world/v0.1.0","hello-world/v0.2.0","hello-world/v0.3.0"
  ],
  "@context" : ["http://kgrid.org/koio/contexts/knowledgeobject.jsonld" ]
}
```

Descriptive metadata elements like `title` or `description`, administrative metadata like `identifier`, and technical metadata like the `koio:KnowledgeObject` the element are described in the section [More about Metadata](moreaboutmetadata.md) may be repeated at the implementation level. We recommend using standard *dcterms* metadata elements, or similar. Some items may be required (see [KO Metadata standard](moreaboutmetadata.md)). You may add additional descriptive or domain specific metadata elements as needed. We recommend you use standard vocabularies and express them in the `context` element so as to enable metadata use in linked data scenarios.

**Has Implementation element**

Notice that the top-level metadata uses the `hasImplementation` element to point to one or more implementations. In the KO package an implementation is represented by a folder containing all the required and optional files needed to deploy the object in a suitable runtime and route requests to the service it exposes.

::: warning
While multiple implementation folders (each with its own version identifier) are allowed, it can complicate things in source code. We prefer to version the code in a typical SCM workflow and generate a new release (with a new version identifier) as part of the KO packaging step. See [Packaging and publishing]().
:::

##  Knowledge Object Implementation

### Metadata

Just as in the top-level object, the implementation has it's own metadata. THe identifier element should extend the parent's identifier (ARK), adding an additional version string. While there is no constraint on the version string we suggest using a [semantic versioning scheme](https://semver.org/). In some cases, additional specifiers might make sense, e.g. `ark://99999-fk41a2s3d/v.1.2-simple` vs. `ark://99999-fk41a2s3d/v.1.2-simple`. Metadata at the implementation level includes an identifier, minimal description data, and required knowledge object implementation properties from the [Knowledge Object Information Ontology (KOIO)](koio)

::: tip
One of the difficulties in versioning knowledge objects arises from their dual nature. They are both code objects *and* small services. Versioning code and versioning service APIs each have their own set of drivers. Don't worry about that for now; the topic is addressed further in [Packaging and Publishing]().
:::

and the implementation metadata 
`hello-world/v0.1.0/metadata.json`
```json
{
  "@id": "v0.1.0",
  "@type": "koio:Implementation",
  "identifier": "ark:/hello/world/v0.1.0",
  "title": "Implementation koio v1 of Hello World",
  "hasServiceSpecification": "v0.1.0/service.yaml",
  "hasPayload": "v0.1.0/welcome.js",
  "@context": [
    "http://kgrid.org/koio/contexts/implementation.jsonld"
  ]
}
```

