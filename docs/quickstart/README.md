---
sidebarDepth: 2
sidebar: auto
description: Instruction for Deploying R01 KO collection in KGRID
---
# KGrid Quick Start

[![CircleCI](https://circleci.com/gh/kgrid/guides.svg?style=svg)](https://circleci.com/gh/kgrid/guides)

::: tip
**Confirm [Node and NPM (version 10+)](https://nodejs.org) are installed, and [Java 8+ JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) is installed.**
:::

## Step 1 - Install the [KGrid CLI](https://kgrid.org/kgrid-cli)

```bash
> npm install -g @kgrid/cli
```

## Step 2 - Install a micro-grid in your project directory (KGrid workspace)

```bash
> mkdir myproject
> cd myproject
> kgrid setup
```
The terminal might show the following messages:
> KGrid CLI v0.5.0
>
> Setting up kgrid at {path}/myproject/.kgrid
>
> Downloading kgrid components... done
>
> kgrid setup complete


## Step 3 - Install KGrid NodeJS runtime (Optional)

__This step is required only if you will develop, test or try the knowledge objects for NodeJS runtime.__

```bash
> npm install -g @kgrid/noderuntime
```

## Step 4 - Start a local grid

Start KGrid & verify in the browser that the activator and library are running

```bash
> kgrid start -m https://github.com/kgrid-objects/example-collection/releases/latest/download/manifest.json
```

The terminal might show the following messages:
> java -jar .../kgrid-library-1.2.6.jar ...  --server.port=8081 --kgrid.shelf.manifest=https://github.com/kgrid-objects/example-collection/releases/latest/download/manifest.json
>
>
> Starting KGrid library...
>
> java -jar .../kgrid-activator-1.3.1.jar ... --server.port=8080 --kgrid.shelf.manifest=https://github.com/kgrid-objects/example-collection/releases/latest/download/manifest.json
>
>
> Starting KGrid activator...
>
> ...


## Step 5 - Start KGrid NodeJS runtime (Optional)

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

For more information on remote runtimes and developing your own look in the [advanced tutiorials](/guides/tutorial/runtimes).