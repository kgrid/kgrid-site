# Deploy the packaged KO

When a KO is packaged into a ZIP file complying with the KGrid packaging specification, it is ready to be uploaded to KGRID Library and Activator, for publishing and activation, respectively. There are two ways to deploy the packaged KO. You can use KGRID CLI command `kgrid upload` or call KGRID API directly.

## Deploy using KGRID CLI

If you have a ZIP file as the packaged KO, you can deploy the KO using KGRID CLI. The command to use is
```
$ kgrid upload [ARK]
```

By default, the KO will be deployed to the locally running KGrid Activator at http://localhost:8080.

To deploy to a KGrid Library, use the command `kgrid upload:library`.

You can specify the URL or the port where the activator or library is hosted, by using the respective flags, `--url` and `--port`.

Details for the command can be found in [KGRID-CLI Documentation](http://kgrid.org/kgrid-cli/#kgrid-upload-ark)

## Directly call KGRID API

KGRID API has the service to import the KO in ZIP format. You can call the API directly to upload a packaged KO. Some examples of HTTP client can be found the section of [KO Service Clients](http://kgrid.org/guides/tutorial/simpleapiclient.html)

```
URL:          {activatorurl}/kos
HTTP request: POST
content-type: application/zip
```
In the request body, assign the zip file name to the key of `ko`.

Details for the service can be found in [KGRID-API Documentation](http://kgrid.org/guides/api/#kgrid-activator-api)

## Try the deployed KO

If your packaged KO has been deployed to a KGRID Activator, you can activate the KO and try it with KGRID CLI command `kgrid play`

By supplying the ARK ID for the KO to the command, you will be provided a link to the online Swagger Editor loading the KO's service specification.

Details for the command can be found in [KGRID-CLI Documentation](http://kgrid.org/kgrid-cli/#kgrid-play-ark)
