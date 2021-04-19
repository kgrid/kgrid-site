#  Curl
[Curl](https://curl.haxx.se/)  is a command line tool and library for
transferring data with URLs.  The following are examples of using  [curl](https://curl.haxx.se/)  to
access the Knowledge Object and executing the Knowledge Object service.
Below examples of using `curl` to access the
[js simple hello world KO](https://library.kgrid.org/#/object/js%2Fsimple)
KO Service.


Get the Ten-year Fatal Cardiovascular Risk Calculation KO metadata using [curl](https://curl.haxx.se/)

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
