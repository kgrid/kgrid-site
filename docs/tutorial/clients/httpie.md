#  HTTPie
[HTTPie](https://httpie.org)  is a command line HTTP client with an intuitive UI,
JSON support, syntax highlighting, wget-like downloads, plugins, and more.
HTTPie runs on Windows, mac, linux, etc.  The following are examples of using
 `HTTPie` to
access the Knowledge Object and executing the Knowledge Object service.
Below examples of using `HTTPie` access the
[js simple hello world KO](https://library.kgrid.org/#/object/js%2Fsimple)
KO Service.



1. Install [HTTPie](https://httpie.org/#installation)
1. Navigate to your terminal
1. type the GET or POST requests below


Get the js simple hello world KO metadata using
`HTTPie`

```
 http GET https://activator-playground.herokuapp.com/kos/js/simple
```

Executing the Ten-year Fatal Cardiovascular Risk Calculation KO service using `HTTPie`

```
 http POST https://activator-playground.herokuapp.com/js/simple/welcome name=Alex
```

<a href="/guides/image/httpie.gif"> <img src="/guides/image/httpie.gif"/></a>
_click to enlarge_
