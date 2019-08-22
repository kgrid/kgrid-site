# KO Service OpenAPI

KO Service interfaces are describe using the [OpenAPI](https://github.com/OAI/OpenAPI-Specification) specification.  This specification defines the path(s) to the service, the request and response scheme and much more.  Here we will briefly describe the minimal information needed to describe a KO Service.  You can write OpenAPI definitions in YAML or JSON, our templates in KGrid CLI and our examples all use the YAML format, we found the format easier.  

## Structure 
The following describes the basic structure of OpenAPI 3.0 definition for the [Cardiovascular Risk Calculation KO Implementaion v0.3.0](http://activator.kgrid.org/kos/score/calc/v0.3.0/service)


### Metadata
Define the version of the OpenAPI Specification and basic information about this API
```yaml
openapi: 3.0.0
info:
  version: 1.0.0
  title: SCORE risk calculation v0.3.0
  description: SCORE risk calculation v0.3.0.
  ...
```  

### Servers
The servers section specifies the API server and base URL. for KO Services we use the [Archival Resource Key](https://en.wikipedia.org/wiki/Archival_Resource_Key) (ark id) which is name/naan/implementation.
```yaml
servers:
  - url: /score/calc/v0.3.0
    description: SCORE risk calculation.
```

### Paths
The paths section defines individual endpoints (paths) in your API.  Currently KO Services support the _POST_ HTTP method.
```yaml
paths:
  /score:
    post:
      tags:
        - KO Endpoints
      description: SCORE risk calculation.
      operationId: cvdriskscore
        
```
### Request Body
The requestBody keyword to describe the body content and media type. KO Services use json inputs.  I this example the json format is defined in the _input_ scheme defined in the document.
```yaml
      requestBody:
        description: inputs
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/input'
 ```

Here is the input json definition with type and examples.

```yaml
components:
  schemas:
    input:
      required:
        - age
        - gender
        - risk
        - sbp
        - cholesterol
        - smoker
      properties:
        age:
          type: number
          example: 48
        gender:
          type: string
          enum:
            - Male
            - Female
          example: Female
        risk:
          type: string
          enum:
            - high
            - low
          example: low
        sbp:
          type: number
          example: 120
        cholesterol:
          type: number
          example: 8
        smoker:
          type: boolean
          example: false
```
### Responses
To response definition is by status code.  The content defines the type and format via a scheme. 

```yaml
      responses:
        '200':
          description: response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/output'
```


Here is the output json definition with type and examples.

```yaml
components:
  schemas:
     ...

    output:
      required:
        - result
      properties:
        result:
          type: object
```

### Extensions
Extensions, or vendor extensions, are custom properties that start with _x-_.   KGrid defines a small set of attributes the Activator uses for activating the KO Service.

- artifact - path to the file where the function can be found.  
- adapter - type of adapter to use
- entry - the function name 
        
```yaml
      x-kgrid-activation:
        artifact: dist/main.js
        adapter: JAVASCRIPT
        entry: score
```
## Resources

- [OpenAPI Basic Structure](https://swagger.io/docs/specification/openapi-extensions/)
- [OpenAPI Extensions](https://swagger.io/docs/specification/openapi-extensions/)
- [OpenAPI Tools](https://openapi.tools/)
