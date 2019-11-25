#  HTTPie
[HTTPie](https://httpie.org)  is a command line HTTP client with an intuitive UI,
JSON support, syntax highlighting, wget-like downloads, plugins, and more.
HTTPie runs on windows, mac, linux, etc.  The following are examples of using
 [HTTPie](https://httpie.org) to
access the Knowledge Object and executing the Knowledge Object service.
Below examples of using [HTTPie](https://httpie.org) to access the
[Ten-year Fatal Cardiovascular Risk Calculation KO Service](https://library.kgrid.org/#/object/score%2Fcalc)
KO Service.



1. Install [HTTPie](https://httpie.org/#installation)
1. Navigate to your terminal
1. type the GET or POST requests below

Get the Ten-year Fatal Cardiovascular Risk Calculation KO metadata using
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
