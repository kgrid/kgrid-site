# Kgrid External Runtimes

External runtimes allow the knowledge grid to execute code in a native environment by passing the payload from the knowledge object through the proxy adapter to a remote environment that implements the external runtime API.

## Using an external runtime

To activate objects that require an external runtime first start the activator then start up the remote runtime making sure to set up the runtime to point to your activator. See the [integrator setup docs](/guides/integrator/activator) for more info.
Create your knowledge object as normal but remember to include all the necessary [deployment](/guides/tutorial/deployment/deployment) information. Check with the documentation included with your runtime for any additional setup you may need to perform.

The runtimes register themselves with the proxy adapter included in the activator and then assume responsibility of handling execution, storage, and communication for the executable portion (payload) of the knowledge object.

## Developing a new remote runtime

This describes the API your runtime will have to use to communicate with the proxy adapter. Using this api you can create an environment that uses the common Kgrid activator api but executes objects in any given remote environment.

### Registering a runtime
When the external runtime starts up it **must** send a POST request to the `/proxy/environments` endpoint of the proxy adapter which is at the same base url as the activator. The request **must** contain a JSON object body with the values `type` and `url`. 
`type` matches the `engine` value in the deployment spec of objects that will run in this environment and `url` is the url that the proxy adapter can call to communicate with this runtime environment. For example here is the body of a request sent by a local Node.js runtime
```json
{
    "type": "node",
    "url": "http://localhost:3000"
}
```

After registering with the proxy adapter the external runtime can activate the objects that run in the environment by sending another POST request to `/activate`.

### Required endpoints of the remote runtime
#### GET /info
This endpoint is used by the proxy adapter to determine if the remote is up and running. If it is running the runtime must return a JSON object that contains a "Status" string with a value of "Up" as below:
```json
{
    "Status": "Up",
    "Url": "http://localhost:3000"
}
``` 

#### POST /deployments
This endpoint is used by the proxy adapter to send the executable payload to the runtime environment and get a url that can be used to execute the object payload.
 
 The proxy adapter will send the arkId, version, and endpoint of the object along with the full deployment descriptor for that endpoint that is usually found in the `deployment.yaml` file.
For example activating the hello proxy object sends the following request body:
```json
{
    "identifier": "ark:/hello/proxy",
    "version": "v1.0",
    "endpoint": "welcome",
    "artifact": ["src/welcome.js"],
    "adapter": "PROXY",
    "engine": "node",
    "entry": "src/welcome.js",
    "function": "welcome"
}
```
Note that everything after `identifier`, `version`, and `endpoint` can be customized and supplied by putting them in the deployment descriptor of the objects that use your remote environment. However `"adapter":  "PROXY"` is used by the activator to determine the correct adapter to use and is part of the activator requirement.

The remote environment must then return a response to the proxy adapter with an `endpoint_url` value that points to a resource that the proxy adapter can call with inputs to execute the object payload and get a result.
```json
{
    "endpoint_url": "http://localhost:3000/0451"
}
```
It is the responsibility of the remote environment to ensure that the url is unique. Other details may be sent in the response for debugging purposes but they are currently ignored by the proxy adapter.

#### POST /{endpoint_url}
When the activator receives a request to execute the knowledge object payload it will pass the JSON object input to the activator through the proxy adapter to the runtime environment. Each object payload can handle this input in whatever way it wants but it must return a JSON object that will be wrapped with extra metadata and returned to the service that called the activator in a `result:` field. 

The inputs and outputs for this request can be any valid JSON object and it is up to the people creating and using the knowledge object to determine the data and structure needed.

### Optional endpoints (not used for object activation and execution)
#### GET /deployments
Returns a JSON object containing a list of the knowledge object payloads and their urls. Useful for debugging but not used by the proxy adapter which handles the URL mapping internally.

 