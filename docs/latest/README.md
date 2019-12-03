---
sidebarDepth: 6
sidebar: auto
---
# Latest Development

Knowledge Grid is still in its early stage; therefore, our team and the community is working diligently on the continuous development. As our understanding of Computable Biomedical Knowledge advances, the technology will evolve accordingly, although may not be as quickly as we wish.

We will update this page frequently to reflect our thinking and understandings. More importantly, document the development in the specifications, the ontology and the reference implementation of KGrid components.

## November 2019

### Knowledge Object Structure

- Implementation subfolder has been removed from the file layout of a Knowledge Object (KO);
- Each KO has the file of `metadata.json` with the type of `koio:KnowledgeObject`;
- `version` is added to the metadata;
- `hasImplementation` is removed from the metadata;
- In `service.yaml`, `server.url` contains `{naan}/{name}` only;

### Activation of the versioned KO
- After activation, the endpoint can be requested by `{naan}/{name}/{endpoint}`;
- A specific version can be reached by `{naan}/{name}/{endpoint}?v={version}`;

### KO collections
As of November 2019, the following KO collections have been updated and released:
- [Example collections](https://github.com/kgrid-objects/example-collection)
- [CPIC collections](https://github.com/kgrid-objects/cpic-collection)

### KGRID CLI
Published via npm, KGrid CLI v0.4.1 is available to develop the knowledge objects with the new file layout. Please refer to the [KGRID CLI documentation](https://kgrid.org/kgrid-cli/) for usage.

To install,

```bash
npm install -g @kgrid/cli
```
::: warning
Before the kgrid activator/library are released, you will need the development version in the folder of `.kgrid`
:::
