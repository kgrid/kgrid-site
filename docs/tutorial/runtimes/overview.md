# Kgrid External Runtimes

External runtimes allow the knowledge grid to execute code in a native environment by passing the payload from the knowledge object through the proxy adapter to a remote environment that implements the external runtime API.

## Using an external runtime

Activating a knowledge object that depends on an external runtime:
1. Start up the activator
1. Start a remote runtime pointed to the activator using the property `KGRID_PROXY_ADAPTER_URL`
1. The objects that require that remote runtime will be passed to it and activated in that environment. 
   
See the documentation for each runtime for more details on how to run and develop objects for them. Currently we have two runtimes:  [nodeJS](https://github.com/kgrid/kgrid-node-runtime) and [python 3](https://github.com/kgrid/kgrid-python-runtime).

The runtimes register themselves with the proxy adapter included in the activator and then assume responsibility of handling execution, storage, and communication for the executable portion (payload) of the knowledge object.

## Developing a new remote runtime

The [proxy adapter readme](https://github.com/kgrid/kgrid-adapter/tree/main/proxy-adapter) documents the API that a remote runtime must interface with. Using this API you can create an environment that uses the common KGrid activator API but executes objects in any given native environment. 
