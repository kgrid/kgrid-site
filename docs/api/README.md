---
sidebarDepth: 6
sidebar: auto
---

# KGrid API

The platform API allows developers to access KGrid and Knowledge Object services.
You can use the KGrid API to evaluate the status of the Activator or Library, import and export Knowledge Objects
discovery Knowledge Object services and interact with Knowledge Object services.
KGrid API is organized around REST. Our API has predictable resource-oriented URLs,
returns JSON-encoded responses, and uses standard HTTP response codes and verbs.


## KGrid Activator API
The API is defined in a [OpenAPI](https://github.com/OAI/OpenAPI-Specification) specification and can accessed at using swagger ui.
[KGrid Activator API](/guides/swagger).


## Resources

### Knowledge Objects
Knowledge Object represents one or more services (a micro API) organized as endpoints
and operations (with media types, schemas, responses etc.).  Using the KOS services you can

- The API allows basic Read Update Delete Knowledge Objects opertions.  These
operations allow you to operate onthe Knowledge Object and Knowledge Object Implantation.
Please review <a href="/guides/swagger/#/Knowledge%20Object%20Read%2FUpdate%2FDelete" target="_blank">Read/Update/Delete Knowledge Objects</a>

- The API allows Knowledge Objects to be imported via packaged Knowledge Object (zip file) or a
Knowledge Object manifest which is a list of references to packaged Knowledge Object (zip file).
Please review <a href="/guides/swagger/#/KGrid%20Activator%20Server" target="_blank">Import Knowledge Objects</a>

- The API allows Knowledge Objects to be exported in a packaged zip format.
Please review <a href="/guides/swagger/#/Knowledge%20Object%20Export" target="_blank" >Export Knowledge Objects</a>


### Endpoints
Endpoints are the activated Knowledge Object services defined by the OpenAPI
specifications in each Knowledge Object.  Please review <a href="/guides/swagger/#/Knowledge%20Object%20Endpoint" target="_blank" >Endpoints</a>

### Knowledge Objects Services
Each Knowledge Object has services/endpoints defined by their OpenAPI specifications. The path
to these services/endpoints follows _/{naan}/{name}/{implementation}/{endpoint}_ pattern, e.g. (_/hello/world/v0.1.0/welcome_).
Please review <a href="/guides/swagger/#/Knowledge%20Object%20Endpoint/serverendpoint" target="_blank" >Knowledge Objects Service</a>

### Knowledge Objects Service Response
All Knowledge Objects Services will return a KGrid reponse which consists of
a result, info and inputs

- **result** element is defined and controlled by the service.
- **info** is the Knowledge Object Implementation where this service is defined
- **inputs** describes the incoming information to the service


```
{
  "result": "Welcome to Knowledge Grid, George Jetson",
  "info": {
    "ko": {
      "@id": "v0.1.0",
      "@type": "koio:Implementation",
      "identifier": "ark:/hello/world/v0.1.0",
      "title": "Implementation koio v1 of Hello World",
      "hasServiceSpecification": "v0.1.0/service.yaml",
      "hasPayload": "v0.1.0/welcome.js",
      "@context": [
        "http://kgrid.org/koio/contexts/implementation.jsonld"
      ]
    },
    "inputs": {
      "name": "George Jetson"
    }
  }
}

```

## API Notes

### CORS
The KGrid API supports cross-origin resource sharing (CORS) so that requests can be sent from browsers
using JavaScript served from any domain.

### Errors
Failing responses will have an appropriate status and a JSON body containing more details about a p
articular error. Codes in the 2xx range indicate success. Codes in the 4xx range indicate
an error that failed given the information provided. Codes in the 5xx range indicate an error with KGrid servers.

