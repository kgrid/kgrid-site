#  Curl
[Curl](https://curl.haxx.se/) is a command line tool and library for
transferring data with URLs. The following are examples of using `curl` to
access the Knowledge Object and executing the Knowledge Object service.
Below examples of using `curl` to access the
[js simple hello world KO](https://library.kgrid.org/#/object/js%2Fsimple)
KO Service.


Get the js simple hello world KO metadata using `curl`

```
curl -X GET \
  https://activator-playground.herokuapp.com/kos/js/simple \
  -H 'Content-Type: application/json'
```


Executing the js simple hello world welcome service using `curl`

```
curl -X POST \
  https://activator-playground.herokuapp.com/js/simple/welcome \
  -H 'Content-Type: application/json' \
  -d '{"name": "Alex"}'
```
