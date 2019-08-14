# Clients interacting with KO

## Existing Tools

### Command Line

#### [Curl](https://curl.haxx.se/)
 [Curl](https://curl.haxx.se/)  is a command line tool and library for
transferring data with URLs.  The following is examples of using  [curl](https://curl.haxx.se/)  to
access the Knowledge Object Implementation and executing the Knowledge Object service.

Get the Ten-year Fatal Cardiovascular Risk Calculation KO Service implementation via [curl](https://curl.haxx.se/)

```
curl -X GET \
  http://kgrid-activator.herokuapp.com/score/calc/v0.3.0 \
  -H 'Content-Type: application/json'
```


Executing the Ten-year Fatal Cardiovascular Risk Calculation KO Service via [curl](https://curl.haxx.se/)

```
curl -X POST \
  http://kgrid-activator.herokuapp.com/score/calc/v0.3.0/score \
  -H 'Content-Type: application/json' \
  -d '{"age": 48,"gender": "female","risk": "low","sbp": 120,"cholesterol": 8,"smoker": false}'
```

####  [HTTPie](https://httpie.org)
[HTTPie](https://httpie.org)  is a command line HTTP client with an intuitive UI,
JSON support, syntax highlighting, wget-like downloads, plugins, and more.
HTTPie runs on windows, mac, linux, etc.  The following is examples of using  [HTTPie](https://httpie.org)   to
access the Knowledge Object Implementation and executing the Knowledge Object service.

Get the Ten-year Fatal Cardiovascular Risk Calculation KO Service implementation via  [HTTPie](https://httpie.org)

```
 http GET  http://activator.kgrid.org/kos/score/calc/v0.3.0
```

Executing the Ten-year Fatal Cardiovascular Risk Calculation KO service KO Service via  [HTTPie](https://httpie.org)

```
 http POST http://activator.kgrid.org/score/calc/v0.3.0/score age:=48 gender=Female risk=low spb:=120 cholesterol:=8 smoker:=false
```

### Postman
[Postman](https://www.getpostman.com/) is a powerful tool for performing
integration testing with your API. It allows for repeatable, reliable tests
that can be automated and used in a variety of environments.

### Swagger Editor
The [Swagger Editor](https://swagger.io/tools/swagger-editor/) is an open source editor to
design, define and document RESTful APIs in the OpenAPI Specification.


## Build a simple web app

## Build batch client
