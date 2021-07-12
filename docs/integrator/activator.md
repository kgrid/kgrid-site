# KGrid Activator

## Quick Start

This [Quick Start Guide](https://kgrid.org/kgrid-activator/) provides the instruction for downloading, configuring and running the KGrid Activator as a Spring-Boot application.

Additional information can be found for:
- [Configuration Documentation](https://kgrid.org/kgrid-activator/configuration.html)
- [API Documentation](https://kgrid.org/kgrid-activator/api.html)

## Deploy a cloud native image
### [Pull from DockerHub](https://docs.docker.com/engine/reference/commandline/pull/)
  ```bash
    docker pull kgrid/kgrid-activator
  ```
### [Running the Image](https://docs.docker.com/engine/reference/commandline/run)

- Running in a container mapped to port 8080 (default port for the activator)

```bash
  docker run -p 8080:8080 --name activator kgrid/activator
```

- [Mapped to a local shelf](https://docs.docker.com/engine/reference/commandline/run/#mount-volume--v---read-only)

```bash
  docker run -p 8080:8080 -v ${PWD}/shelf:/applications/shelf --name activator -d kgrid/activator 
```

- Example:

```bash
  docker run -it --rm --network host -p 8080:8080 -e SPRING_PROFILES_ACTIVE=dev -v ${PWD}/shelf:/application/shelf --name activator kgrid/activator:latest
```
- This example has a few things going on:
    - `--network host` [Running with a network bridge](https://docs.docker.com/engine/reference/commandline/run/#connect-a-container-to-a-network---network) (if your containerized activator needs to talk to the network, i.e. you're running an external runtime in another container)
    - `-it --rm` Running interactive and Removing the Container when stopped. can be found in the [options](https://docs.docker.com/engine/reference/commandline/run/#options)
    - `-e` [Pass Environment Variables](https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file)

- Once created, you can stop and start the container using `docker stop activator` and `docker start acivator`.

## Quick start with `docker-compose`

You can also start the activator in your environment by setting up `docker-compose.yaml` file, shown below as an example
```yaml
version: "3.6"

services:
  activator:
    container_name: lion-activator
    environment:
        KGRID_CONFIG: "--kgrid.shelf.cdostore.url=filesystem:file://shelf --cors.url=*  --management.info.git.mode=full"
    image: kgrid/activator:1.5.2
    ports:
      - 8080:8080
    volumes:
      - "activator_shelf:/home/kgrid/shelf"

volumes:
  activator_shelf:
```

that uses the the `kgrid/activator:1.5.2` image, with presets for port and shelf.

Then:

```docker-compose up```

#### Good to Know
1. View Container Logs  ```docker logs activator```
1. Start a shell in the container ```docker exec -it activator sh```

## Running With External Runtime

The activator also has a proxy adapter which can connect to an external runtime and execute code natively in that environment.

Currently, we have created two reference implementations:
- [KGrid Node Runtime](https://github.com/kgrid/kgrid-node-runtime)
    - [NPM Package](https://www.npmjs.com/package/@kgrid/noderuntime)
    - [DockerHub Image](https://hub.docker.com/repository/docker/kgrid/noderuntime)
    

- [KGrid Python Runtime](https://github.com/kgrid/kgrid-python-runtime)
    - [Pypi Package](https://pypi.org/project/kgrid-python-runtime/)
    - [DockerHub Image](https://hub.docker.com/r/kgrid/kgrid-python-runtime)

## Security Configuration

Security Configuration can be set as environment variables, or passed into the terminal command while running the activator. Details can be found in the [Configuration Documentation](https://kgrid.org/kgrid-activator/configuration.html#security-configuration)


## Loading KOs into the activator
A Knowledge Object (KO) or a collection of KOs can be loaded into the activator in a number of ways.
- On startup, KOs can be loaded directly from the shelf, as described in the [Quick Start Guide](https://kgrid.org/kgrid-activator/). The shelf can any persistent form of storage your application has access to and the activator will load any knowledge objects it finds on startup.

:::tip
   The shelf location can be specified using the [shelf location configuration](https://kgrid.org/kgrid-activator/configuration.html#kgrid-shelf-cdostore-url).
:::

- On startup, KOs can also be loaded with the specified manifest(s). Please refer to the Configuration Documentation, see [kgrid-shelf-manifest](https://kgrid.org/kgrid-activator/configuration.html#kgrid-shelf-manifest)

- Once the activator is running, the KOs can be loaded via the API by posting one of the three endpoints: `/kos`, `/kos/manifest` or `/kos/manifest-list`. For usage, please refer to [Import API](https://kgrid.org/kgrid-shelf/api.html#importing-kos-import-api)
:::tip
  After successfully loading the KOs to the activator via the API, `/reload` is needed to activated the newly added KOs. (See [Activation API - Reload](https://kgrid.org/kgrid-activator/api.html#get-actuator-activation-reload) )
:::
