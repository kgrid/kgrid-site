# KO Service Clients

There are several ways to interact with RESTFul KO Services.  We have outlined
a few tools and methods below.  We also have included examples using the
[Ten-year Fatal Cardiovascular Risk Calculation KO Service](https://library.kgrid.org/#/object/score%2Fcalc)
KO Service.

##  Curl
 [Curl](https://curl.haxx.se/)  is a command line tool and library for
transferring data with URLs.  The following are examples of using  [curl](https://curl.haxx.se/)  to
access the Knowledge Object Implementation and executing the Knowledge Object service.

Get the Ten-year Fatal Cardiovascular Risk Calculation KO Implementation metadata using [curl](https://curl.haxx.se/)

```
curl -X GET \
  http://activator.kgrid.org/kos/score/calc/v0.3.0 \
  -H 'Content-Type: application/json'
```


Executing the Ten-year Fatal Cardiovascular Risk Calculation KO Service using [curl](https://curl.haxx.se/)

```
curl -X POST \
  http://activator.kgrid.org/score/calc/v0.3.0/score \
  -H 'Content-Type: application/json' \
  -d '{"age": 48,"gender": "female","risk": "low","sbp": 120,"cholesterol": 8,"smoker": false}'
```

##  HTTPie
[HTTPie](https://httpie.org)  is a command line HTTP client with an intuitive UI,
JSON support, syntax highlighting, wget-like downloads, plugins, and more.
HTTPie runs on windows, mac, linux, etc.  The following are examples of using
 [HTTPie](https://httpie.org)   to
access the Knowledge Object Implementation and executing the Knowledge Object service.

1. Install [HTTPie](https://httpie.org/#installation)
1. Navigate to your terminal
1. type the GET or POST requests below

Get the Ten-year Fatal Cardiovascular Risk Calculation KO Implementation metadata using
 [HTTPie](https://httpie.org)

```
 http GET http://activator.kgrid.org/kos/score/calc/v0.3.0
```

Executing the Ten-year Fatal Cardiovascular Risk Calculation KO service using [HTTPie](https://httpie.org)

```
 http POST http://activator.kgrid.org/score/calc/v0.3.0/score age:=48 gender=Female risk=low spb:=120 cholesterol:=8 smoker:=false
```

<a href="/guides/image/httpie.gif"> <img src="/guides/image/httpie.gif"/></a>
_click to enlarge_


## Postman
[Postman](https://www.getpostman.com/) is a powerful tool for performing
integration testing with your API. It allows for repeatable, reliable tests
that can be automated and used in a variety of environments.

1. Download [Postman](https://www.getpostman.com/downloads/)
1. Download Postman [Cardiovascular Risk Calculation](/guides/Cardiovascular_Risk_Calculation.postman_collection.json) Collection
1. Import Cardiovascular Risk Calculation collection [Postman](https://learning.getpostman.com/docs/postman/collections/intro_to_collections)
1. Select the Get Cardiovascular Risk Knowledge Object Implementation request or
   Calculate Cardiovascular Risk request and _Send_

<a href="/guides/image/postman.gif"> <img src="/guides/image/postman.gif"/></a>
_click to enlarge_


**Postman Resources**

 - [Sending the first request](https://learning.getpostman.com/docs/postman/launching_postman/sending_the_first_request)
 - [Writing tests in Postman](https://blog.getpostman.com/2017/10/25/writing-tests-in-postman/)
 - [Test examples](https://learning.getpostman.com/docs/postman/scripts/test_examples/)
 - [Command Line Integration With Newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/)

## Swagger Editor
The [Swagger Editor](https://swagger.io/tools/swagger-editor/) is an open source editor to
design, define and document RESTful APIs in the [OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) Specification. 
[OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md) definitions 
are simple JSON or YAML files that you can create and edit with any text editor. 
But the right tooling can make your job a lot easier.  The Swagger Editor can also added in
testing of our KO Service.

1. We will view the OpenAPI specification for the Cardiovascular Risk Calculation KO Implementation. 
Each KO Implementation exposes its OpenAPI specifications via a 
_/kos/naan/name/implementation/service_ endpoint for example [http://activator.kgrid.org/kos/score/calc/v0.3.0/service](http://activator.kgrid.org/kos/score/calc/v0.3.0/service)

2. Now in the Swagger Editor we can reference this specification and access Swagger Editor 
[http://editor.swagger.io/?url=http://activator.kgrid.org/kos/score/calc/v0.3.0/service](http://editor.swagger.io/?url=http://activator.kgrid.org/kos/score/calc/v0.3.0/service).  
You notice the we passed the OpenAPI spec via the url query parameter

3. Once in the editor for Cardiovascular Risk Calculation KO Implementation you can
test the service via the POST method.  Example data will appear which you can alter.


**Swagger Editor Resources**

 - [Importing OpenAPI documents](https://github.com/swagger-api/swagger-editor/blob/master/docs/import.md)
 - [Create Your First OpenAPI Definition With Swagger Editor](https://dzone.com/articles/create-your-first-openapi-definition-with-swagger)

## Simple web app

MORE TO COME!!!!

## Simple batch client

MORE TO COME!!!!
