# Docker

Each release of the Activator or Library creates a Docker image of that release.  Our docker images are stored in [KGrid Docker Hub](https://hub.docker.com/u/kgrid). KGrid utilizes those images to create instances of KGrid. 

## KGrid Instances
The KGrid environments (test, staging, production) are managed as docker instances created with docker compose.  Details about the instances can be found at [KGrid Instances](https://github.com/kgrid/kgrid-instances)

## Play With Docker
Play-with-Docker (PWD) is an in-browser free online docker sandbox.  We spin up an Activator and Library utilizing a docker compose file seen below.   

```
version: "3.6"

services:
  activator:
    container_name: kgrid-activator
    environment:
        KGRID_CONFIG: "--kgrid.shelf.cdostore.url=filesystem:file://shelf --cors.url=*  --management.info.git.mode=full"
    image: kgrid/activator:1.1.2
    ports:
      - 8081:8080

  library:
    container_name: kgrid-library
    environment:
      KGRID_CONFIG: "--kgrid.shelf.cdostore.url=filesystem:file://shelf --cors.url=*  --management.info.git.mode=full"
    image: kgrid/library:1.2.2
    ports:
      - 8080:8080

```

The Play-with-Docker (PWD) sandbox allows us to spin up a KGrid enviroment on demand for demos, testing, etc.  
Give it try.... [![Try in PWD](https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png)](https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/kgrid/kgrid-instances/master/pwd/docker-compose.yml)
