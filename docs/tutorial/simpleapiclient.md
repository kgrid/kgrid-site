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

Get the Ten-year Fatal Cardiovascular Risk Calculation KO Implementation metadata using
 [HTTPie](https://httpie.org)

```
 http GET http://activator.kgrid.org/kos/score/calc/v0.3.0
```

Executing the Ten-year Fatal Cardiovascular Risk Calculation KO service using [HTTPie](https://httpie.org)

```
 http POST http://activator.kgrid.org/score/calc/v0.3.0/score age:=48 gender=Female risk=low spb:=120 cholesterol:=8 smoker:=false
```

## Postman
[Postman](https://www.getpostman.com/) is a powerful tool for performing
integration testing with your API. It allows for repeatable, reliable tests
that can be automated and used in a variety of environments.

Import Postman [Cardiovascular Risk Calculation Collection](/guides/Cardiovascular_Risk_Calculation.postman_collection.json)
into Postman. You will see two requests.  KO implementation request and KO service. Each
request has a set of tests.

MORE TO COME!!!!

## Swagger Editor
The [Swagger Editor](https://swagger.io/tools/swagger-editor/) is an open source editor to
design, define and document RESTful APIs in the OpenAPI Specification.

MORE TO COME!!!!

## Simple web app

MORE TO COME!!!!

## Simple batch client

MORE TO COME!!!!
