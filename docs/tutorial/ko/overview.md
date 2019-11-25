# Knowledge Object Overview

Conceptually, a knowledge object represents computable knowledge as both a resource and a service. That is, it contains description of what it does, and the code to do it. Also, in order to make the object findable, accessible, interoperable, and reusable, the KO has enough metadata to describe itself as both resource and service.

Here's a picture....

----
![KO Layout](../../assets/img/ko-layout.png)

----

Let's take a look at what's inside a knowledge object ....

```
├── hello-world
    ├── metadata.json
    ├── service.yaml
    └── welcome.js
```

## Knowledge Object

### Metadata

In the packaged object metadata is kept in a `json` file.

Metadata includes an identifier, minimal description data, and required knowledge object properties from the [Knowledge Object Implementation Ontology (KOIO)](koio)

`hello-world/metadata.json`
```json
{
  "@id": "hello-world",
  "@type":"koio:KnowledgeObject",
  "identifier":"ark:/hello/world",
  "version":"1.0.0",
  "title":"Hello World Title",
  "contributors": "Kgrid Team",
  "description": "Test Hello World ",
  "keywords": ["test", "hello world"],
  "hasServiceSpecification": "service.yaml",
  "hasDeploymentSpecification": "deploy.yaml",
  "hasPayload": "welcome.js",
  "@context" : ["http://kgrid.org/koio/contexts/knowledgeobject.jsonld" ]
}
```

Descriptive metadata elements like `title` or `description`, administrative metadata like `identifier`, and technical metadata like the `koio:KnowledgeObject` the element are described in the section [More about Metadata](moreaboutmetadata.md). We recommend using standard *dcterms* metadata elements, or similar. Some items may be required (see [KO Metadata standard](moreaboutmetadata.md)). You may add additional descriptive or domain specific metadata elements as needed. We recommend you use standard vocabularies and express them in the `context` element so as to enable metadata use in linked data scenarios.
