---
sidebarDepth: 2
sidebar: false
description: Instruction for Deploying R01 KO collection in KGRID
--- 
# KGrid Quick Start 

## Using the internal runtime

[![CircleCI](https://circleci.com/gh/kgrid/guides.svg?style=svg)](https://circleci.com/gh/kgrid/guides)

::: tip
**Confirm [Node and NPM (version 10+)](https://nodejs.org) are installed, and [Java 11+ JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) is installed.**
:::

### Step 1 - Install the [KGrid CLI](https://kgrid.org/kgrid-cli)

```bash
> npm install -g @kgrid/cli
```

### Step 2 - Install a micro-grid in your directory storing the KOs (KGrid workspace)

You will create a new directory for a local grid and install the Kgrid Library and Activator

```bash
> mkdir mygrid
> cd mygrid
> kgrid setup
KGrid CLI v0.5.0

Setting up kgrid at {path}/mycollection/.kgrid
Downloading kgrid components... done
kgrid setup complete
>
```
You can check that everything is installed:  
```
> kgrid --version
Checking JAVA Version ...
java version "11.0.1" 2018-10-16 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)

Checking Node Version ...
v10.15.3

KGrid Components Version ...
KGRID Components are installed at: ../mygrid/.kgrid

  KGRID Library:   version 1.2.8    Latest Version

  KGRID Activator: version 1.3.6    Latest Version

______________________________________________________________
@kgrid/cli/0.5.6 darwin-x64 node-v10.15.3
```
### Step 3 - Start a local grid

Start KGrid & verify in the browser that the activator and library are running. You will point to a manifest file to tell the Activator to load example objects.

```bash
> kgrid start -m https://github.com/kgrid-objects/example-collection/releases/3.0.0/download/manifest.json
KGrid CLI v0.5.6

Checking KGrid Components Version ...
KGRID Components are installed at: /Users/pboisver/dev/42/.kgrid

  KGRID Library:   version 1.2.8    Latest Version

  KGRID Activator: version 1.3.6    Latest Version

java -jar ./.kgrid/kgrid-library-1.2.8.jar --kgrid.shelf.cdostore.url=filesystem:file:////Users/pboisver/dev/42 --server.port=8081 --kgrid.shelf.manifest=https://github.com/kgrid-objects/example-collection/releases/3.0.0/download/manifest.json

Starting KGrid library...
java -jar ./.kgrid/kgrid-activator-1.3.6.jar --kgrid.shelf.cdostore.url=filesystem:file:////Users/pboisver/dev/42 --kgrid.shelf.manifest=https://github.com/kgrid-objects/example-collection/releases/3.0.0/download/manifest.json

Starting KGrid activator...
```

### Kicking the tires and taking it for a spin

> ???

## Using a remote runtime

### Step 4 - Install KGrid NodeJS runtime (Optional)

__This step is required only if you will develop, test or try the knowledge objects for NodeJS runtime.__

```bash
> npm install -g @kgrid/noderuntime
```

### Step 5 - Start KGrid NodeJS runtime (Optional)

```bash
> kgrid-node
```

This will start the NodeJS runtime, the runtime will register with the activator. The activator will then activate those KOs if their deployment descriptor indicates the need of `node` engine through `proxy` adapter.


::: tip
You can stop the local micro-grid with `ctrl-C` or open an additional terminal tab or window to continue.
:::

::: tip
Once the Library ([http://localhost:8081](http://localhost:8081)) and Activator ([http://localhost:8080](http://localhost:8080)) are running you can open a browser window verify that both are running

The Library will be loaded with the example KO collection.

The Activator will show a list of links for detailed information.
:::

## What's next?

If you'd like to load existing Knowledge Objects to the Activator or Library, KGrid team has developed several collections of KOs you can try:

[CPIC Collection](https://kgrid-objects.github.io/cpic-collection/deployment/)

More information on KO collections can be found at [https://kgrid-objects.github.io/](https://kgrid-objects.github.io/)

If you'd like to create a new Knowledge Object, please refer to [Developer's Guide](https://kgrid.org/guides/developer/)

For more information on remote runtimes and developing your own look in the [advanced tutiorials](/guides/tutorial/runtimes/overview).
