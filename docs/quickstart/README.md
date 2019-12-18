---
sidebarDepth: 2
sidebar: auto
description: KGrid Developer's Guide - Get Started
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

## Step 2 - Install a micro-grid in your project directory(KGrid workspace)

```bash
> mkdir myproject
> cd myproject
> kgrid setup
KGrid CLI v0.4.0

Setting up kgrid at /Users/pboisver/dev/foof/.kgrid
Downloading kgrid components... done
kgrid setup complete
```

## Step 3 - Start a local grid

Start KGrid & verify in the browser that the activator and library are running

```bash
> kgrid start
java -jar .../kgrid-library-1.2.3.jar ...  --server.port=8081
java -jar .../kgrid-activator-1.1.5.jar ... --server.port=8080
library: You have the latest version.
Starting KGrid library...
activator: You have the latest version.
Starting KGrid activator...
...
```
::: tip
You can stop the local micro-grid with `ctrl-C` or open an additional terminal tab or window to continue.
:::

::: tip
Once the Library ([http://localhost:8081](http://localhost:8081)) and Activator ([http://localhost:8080](http://localhost:8080)) are running you can open a browser window verify that both are running

The Library will be empty and the Activator should show an empty KO list, `{}`.
:::

## What's next?

If you'd like to load existing Knowledge Objects to the Activator or Library, KGrid team has developed several collections of KOs you can try:

[Example Collection](https://kgrid-objects.github.io/example-collection/)

[CPIC Collection](https://kgrid-objects.github.io/cpic-collection/deployment/)

More information on KO collections can be found at [https://kgrid-objects.github.io/](https://kgrid-objects.github.io/)


If you'd like to create a new Knowledge Object, please refer to [Developer's Guide](https://kgrid.org/guides/developer/)
