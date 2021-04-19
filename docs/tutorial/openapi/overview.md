# KO Service OpenAPI

KO Service interfaces are described using the [OpenAPI](https://spec.openapis.org/oas/v3.1.0) specification.  This specification defines the path(s) to the service, the request and response scheme and much more.  Here we will briefly describe the minimal information needed to describe a KO Service.  You can write OpenAPI definitions in YAML or JSON, our templates in KGrid CLI and our examples all use the YAML format, we found the format easier and more concise.  

## Structure
The following describes the basic structure of OpenAPI 3.0 definition. We will use the [JS Simple V1.0](https://kgrid-activator-demo.herokuapp.com/kos/js/simple/v1.0/service.yaml) OpenAPI 3.0 definition for this example.


### Metadata
Define the version of the OpenAPI Specification and basic information about this API
```yaml
openapi: 3.0.2
info:
  version: '1.0'
  title: 'Hello, world'
  description: An example of simple Knowledge Object
  license:
    name: GNU General Public License v3 (GPL-3)
    url: >-
      https://tldrlegal.com/license/gnu-general-public-license-v3-(gpl-3)#fulltext
  contact:
    name: KGrid Team
    email: kgrid-developers@umich.edu
    url: 'http://kgrid.org'
```  

### Servers
The servers section specifies the API server and base URL. for KO Services we use the [Archival Resource Key](https://en.wikipedia.org/wiki/Archival_Resource_Key) (ark id) which is naan/name.  Using the ark id ensures the paths are unique. 
```yaml
...
servers:
  - url: /js/simple
    description: Hello world
```

### Paths
The paths section defines individual endpoints (paths) in your API.  Currently KO Service activation support the _POST_ HTTP method.
```yaml
...
paths:
  /welcome:
    post:
      tags:
        - KO Endpoints
      description: Welcome.
      operationId: welcome
```
### Request Body
The requestBody keyword describes the body content and media type. KO Service use json inputs.  The json format is defined in the _input_ scheme components section of the  definition.
```yaml
...
      requestBody:
        description: inputs
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/input'
 ```

Here is the _input_ json definition with type and examples.

```yaml
...
components:
  schemas:
    input:
      required:
        - name
      properties:
        name:
          type: string
          x-kgrid-label: 'Please enter your name'
          x-kgrid-unit: ''
          example: Bob
```
### Responses
To response definition is categorized by status code.  The content defines the type and format via a scheme _output_.

```yaml
...
      responses:
        '200':
          description: response
          content:
            application/json:
              schema:
                $ref: 'https://demo.kgrid.org/schemas/openapischemas.yaml#/components/schemas/genericresponse'
```


## Resources

- [OpenAPI Basic Structure](https://oai.github.io/Documentation/specification-structure.html)
- [OpenAPI Tools](https://openapi.tools/)
