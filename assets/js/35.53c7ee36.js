(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{399:function(e,t,n){"use strict";n.r(t);var r=n(44),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"kgrid-external-runtimes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kgrid-external-runtimes"}},[e._v("#")]),e._v(" Kgrid External Runtimes")]),e._v(" "),n("p",[e._v("External runtimes allow the knowledge grid to execute code in a native environment by passing the payload from the knowledge object through the proxy adapter to a remote environment that implements the external runtime API.")]),e._v(" "),n("h2",{attrs:{id:"using-an-external-runtime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-an-external-runtime"}},[e._v("#")]),e._v(" Using an external runtime")]),e._v(" "),n("p",[e._v("Activating a knowledge object that depends on an external runtime:")]),e._v(" "),n("ol",[n("li",[e._v("Start up the activator")]),e._v(" "),n("li",[e._v("Start a remote runtime pointed to the activator using the property "),n("code",[e._v("KGRID_PROXY_ADAPTER_URL")])]),e._v(" "),n("li",[e._v("The objects that require that remote runtime will be passed to it and activated in that environment.")])]),e._v(" "),n("p",[e._v("See the documentation for each runtime for more details on how to run and develop objects for them. Currently we have two runtimes:  "),n("a",{attrs:{href:"https://github.com/kgrid/kgrid-node-runtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("nodeJS"),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://github.com/kgrid/kgrid-python-runtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("python 3"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The runtimes register themselves with the proxy adapter included in the activator and then assume responsibility of handling execution, storage, and communication for the executable portion (payload) of the knowledge object.")]),e._v(" "),n("h2",{attrs:{id:"developing-a-new-remote-runtime"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developing-a-new-remote-runtime"}},[e._v("#")]),e._v(" Developing a new remote runtime")]),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"https://github.com/kgrid/kgrid-adapter/tree/main/proxy-adapter",target:"_blank",rel:"noopener noreferrer"}},[e._v("proxy adapter readme"),n("OutboundLink")],1),e._v(" documents the API that a remote runtime must interface with. Using this API you can create an environment that uses the common KGrid activator API but executes objects in any given native environment.")])])}),[],!1,null,null,null);t.default=a.exports}}]);