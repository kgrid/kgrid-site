---
sidebar: auto
sidebarDepth: 1
description: frequently asked questions
---
# FAQ

## Set up KGrid

#### :milky_way: Can I use OpenJDK to meet the JAVA requirement?
Yes. OpenJDK 12 can be found [here](https://jdk.java.net/12/).

#### :milky_way: Which Node.js version shall I install to run KGrid CLI ?
The LTS version of [Node.js](hhtps://www.nodejs.org) is highly recommended.

#### :milky_way: I'm having problems with permissions when I tried to install or run npm. It suggests I use `sudo`. How do I fix?

You should not have to use `sudo` to install `node`, `npm`, or any additional packages. If you run into trouble see [https://timonweb.com/posts/install-npm-packages-without-sudo/](https://timonweb.com/posts/install-npm-packages-without-sudo/)

#### :milky_way: How do I check if I have the latest version of KGRID components?

The easiest way is to use KGRID CLI. Run `kgrid --version` will check and show the versions for KGRID components as well as JAVA, Node.js.

If you 'd like to check a remote KGrid Library or Activator, call `/info` of the server. For details, please refer to the [KGRID API documentation](http://kgrid.org/guides/swagger/).


## Develop a Knowledge Object

#### :milky_way: I am having problem with `npm install`, failing with `node-gyp`. What could be wrong?

One possibility is that your project has dependencies on some native add-on node modules which in turn require Python27 to build on the fly. Install [Python27](https://www.python.org/downloads/release/python-2716/) and try again.


#### :milky_way: I changed the payload code and rebuilt the KO. However, the KO Service is still using the old code. How to fix that?

If the `auto-reload` feature is not turned on for the activator, you will need to manually re-activate the updated KO so that the KO service can be refreshed. To do so, call the `/activate` of the activator. Please refer to the [KGRID API documentation](http://kgrid.org/guides/swagger/) for details.


## KGrid API

#### :milky_way: How can I upload multiple Knowledge Objects?

You can create a manifest file containing a list of urls pointing to the artifacts. These KOs should be packaged in ZIP format and retrievable from the host. You can then `POST` your manifest `/kos/manifest`. For details, please refer to the [KGRID API documentation](http://kgrid.org/guides/swagger/).


#### :milky_way:


## Miscellaneous

#### :milky_way: How can I get technical support?
You can browse through the guides, tutorials and other materials on this website.
If your question remains unanswered, you can send an email to: [kgrid-developers@umich.edu](mailto:kgrid-developers@umich.edu?subject=[KGrid]Support)
