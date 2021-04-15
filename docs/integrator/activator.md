# KGrid Activator

## Quick Start

This [Quick Start Guide](https://kgrid.org/kgrid-activator/) provides the instruction for downloading, configuring and running the KGrid Activator as a Spring-Boot application.

Additional information can be found for:
- [Configuration Documentation](https://kgrid.org/kgrid-activator/configuration.html)
- [API Documentation](https://kgrid.org/kgrid-activator/api.html)

## Deploy a cloud native image

KGrid Activator can also be deployed using the cloud native image, published at DockerHub. Instructions can be found at [Containerization Documentation](https://kgrid.org/kgrid-activator/containers.html)

A cloud native image of the activator can also be built from the source code. Please refer to the section of [Build Image](https://kgrid.org/kgrid-activator/containers.html#build-image) in the above page.

## Running With External Runtime

The activator also has a proxy adapter which can connect to an external runtime and execute code natively in that environment.

Currently we have created two reference implementations:
- [KGrid Node Runtime](https://www.npmjs.com/package/@kgrid/noderuntime), a npm package, which can be used to execute JavaScript code. The project can be found in this [GitHub repo](https://github.com/kgrid/kgrid-node-runtime)
- [KGrid Python Runtime](https://pypi.org/project/kgrid-python-runtime/), a PyPi package, which can be used to execute Python code. The project can be found in this [GitHub repo](https://github.com/kgrid/kgrid-python-runtime)


## Security Configuration

Security Configuration can be set as environment variables, or passed into the terminal command while running the activator. Details can be found in the [Configuration Documentation](https://kgrid.org/kgrid-activator/configuration.html#security-configuration)


## Loading KOs into the activator
A Knowledge Object (KO) or a collection of KOs can be loaded into the activator in a number of ways.
- On startup, KOs can be loaded directly from the shelf, as described in the [Quick Start Guide](https://kgrid.org/kgrid-activator/)

:::tip
   The shelf location can be specified using the shelf location configuration. You can refer to [https://kgrid.org/kgrid-activator/configuration.html#kgrid-shelf-cdostore-url](https://kgrid.org/kgrid-activator/configuration.html#kgrid-shelf-cdostore-url)
:::

- On startup, KOs can also be loaded with the specified manifest(s). Please refer to  [https://kgrid.org/kgrid-activator/configuration.html#kgrid-shelf-manifest](https://kgrid.org/kgrid-activator/configuration.html#kgrid-shelf-manifest)

- Once the activator is running, the KOs can be loaded via the API by posting one of the three endpoints: `/kos`, `/kos/manifest` or `/kos/manifest-list`. For usage, please refer to [https://kgrid.org/kgrid-shelf/api.html#importing-kos-import-api](https://kgrid.org/kgrid-shelf/api.html#importing-kos-import-api)
:::tip
  After successfully loading the KOs to the activator via the API, `/reload` is needed to activated the newly added KOs. (See [https://kgrid.org/kgrid-activator/api.html#get-actuator-activation-reload](https://kgrid.org/kgrid-activator/api.html#get-actuator-activation-reload) )
:::
