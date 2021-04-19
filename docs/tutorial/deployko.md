# Deploy the packaged KO

When a KO is packaged into a ZIP file complying with the KGrid packaging specification, it is ready to be uploaded to KGRID Library and Activator, for publishing and activation, respectively. [KGRID Import API](https://kgrid.org/kgrid-shelf/api.html#importing-kos-import-api) provides three ways to add the packaged KOs to the activator. 


## Deploy a single KO by calling `/kos` 

KGRID API has the service to import the KO in ZIP format. You can call the API directly to upload a packaged KO. Some examples of HTTP client can be found the section of [KO Service Clients](../tutorial/clients/curl.html)

```
URL:          {activatorurl}/kos
HTTP request: POST
content-type: application/zip
```
In the request body, assign the zip file name to the key of `ko`.


## Deploy a collection of KOs by calling `/kos/manifest`

A manifest, containing the list of the packaged KOs' URIs, can be used to deploy the KOs to the activator. Similarly, the request can be initiated using one of the HTTP clients.

```
URL:          {activatorurl}/kos/manifest
HTTP request: POST
content-type: application/json
```

The request body should have a json object with the manifest content, as the example shown below:
```json
{
  "manifest": [
    "file://ABSOLUTE_PATH_TO_KO/js-simple-v1.0.zip",
    "https://github.com/kgrid-objects/example-collection/releases/download/4.1.1/js-bundled-v1.0.zip"
  ]
}
```


## Deploy collections of KOs by calling `/kos/manifest-list`

Furthermore, a number of manifests can be posted to deploy the collections of KOs.

```
URL:          {activatorurl}/kos/manifest-list
HTTP request: POST
content-type: application/json
```

The request body should have a json object, an array with a list of the manifest files, as the example shown below:


```json
[
"file://ABSOLUTE_PATH_TO_MANIFEST/manifest.json",
"https://github.com/kgrid-objects/example-collection/releases/download/4.1.1/manifest.json"
]
```



:::tip 

After successfully loading the KOs to the activator via the API, /reload is needed to activate the newly added KOs. (See Activation API - Reload (opens new window))
Once the KOs are activated, you can try the KO endpoints as described in the [Developer's Guide](https://kgrid.org/guides/developer/#try-out-the-object)

:::



