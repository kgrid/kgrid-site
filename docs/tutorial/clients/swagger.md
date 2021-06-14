# Swagger Editor
The [Swagger Editor](https://swagger.io/tools/swagger-editor/) is an open source editor to
design, define and document RESTful APIs in the [OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) Specification.
[OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) definitions
are simple JSON or YAML files that you can create and edit with any text editor.
But the right tooling can make your job a lot easier.  The Swagger Editor can also added in
testing of our KO Service. Below are examples of using  [Swagger Editor](https://swagger.io/tools/swagger-editor/) to access and test the
[Ten-year Fatal Cardiovascular Risk Calculation KO Service](https://library.kgrid.org/#/object/score%2Fcalc) KO Service.

1. We will view the OpenAPI specification for the Cardiovascular Risk Calculation KO.
Each KO exposes its OpenAPI specifications via a
_/kos/naan/name/service_ endpoint for example [https://activator.kgrid.org/kos/score/calc/service](https://activator.kgrid.org/kos/score/calc/v0.3.0/service)

2. Now in the Swagger Editor we can reference this specification and access Swagger Editor
[http://editor.swagger.io/?url=https://activator.kgrid.org/kos/score/calc/v0.3.0/service](http://editor.swagger.io/?url=https://activator.kgrid.org/kos/score/calc/v0.3.0/service).  
You notice the we passed the OpenAPI spec via the url query parameter

3. Once in the editor for Cardiovascular Risk Calculation KO, you can
test the service via the POST method.  Example data will appear which you can alter.


**Swagger Editor Resources**

 - [Importing OpenAPI documents](https://github.com/swagger-api/swagger-editor/blob/master/docs/import.md)
 - [Create Your First OpenAPI Definition With Swagger Editor](https://dzone.com/articles/create-your-first-openapi-definition-with-swagger)
