---
sidebar: auto
description: frequently asked questions
---
# FAQ

Here are some frequently asked questions:

## Set up KGrid

### Can I use OpenJDK to meet the JAVA requirement?
Yes. OpenJDK 12 can be found [here](https://jdk.java.net/12/).

### Which Node.js version shall I install to run KGrid CLI ?
The LTS version of [Node.js](hhtps://www.nodejs.org) is highly recommended. (Currently, v10.16.3)

::: warning
Certain packages, such as `gulp3`, have issues with Node.js v12. Avoid v12 if you has module dependencies on those packages.
:::


## Develop a Knowledge Object

### I am having problem with `npm install`, failing with `node-gyp`. What could be wrong?

One possibility is that your project has dependencies on some native add-on node modules which in turn require Python27 to build on the fly. Install [Python27](https://www.python.org/downloads/release/python-2716/) and try again.


### I changed the payload code and rebuilt the KO. However, the KO Service is still using the old code. How to fix that?

If the `auto-reload` feature is not turned on for the activator, you will need to manually re-activate the updated KO so that the KO service can be refreshed. To do so, call the `/activate` of the activator. Please refer to the [KGRID API documentation](http://kgrid.org/guides/swagger/) for details.


## KGrid API

### 




## Miscellaneous

### How can I get technical support?
You can browse through the guides, tutorials and other materials on this website.
If your question remains unanswered, you can send an email to: [dlhs.knowledge.grid@umich.edu](mailto:dlhs.knowledge.grid@umich.edu?subject=[KGrid]Support)
