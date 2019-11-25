# KOIO

The Knowledge Object Implementation Ontology (KOIO) is a formal, standardized representational framework spanning what exists and is implemented in the form of Knowledge Objects.  

KOIO is defined by KOIO JSON-LD Context, which has these elements:

- [Knowledge Object](http://kgrid.org/koio/contexts/knowledgeobject.jsonld) - is an Information Artifact capable of serving a role as the atomic unit of
computable knowledge and therefore comprised of at least one Knowledge Object Implementation. The following are required elements of a koio:KnowledgeObject.  

  - @id - identifies the ko (e.g. hello-world).  This is combined with the naan/name of the KO to create
  - @type - classifies the object, (e.g. koio:KnowledgeObject)
  - identifier - arkid for the object   (e.g. ark:/hello/world)
  - version - version of the object
  - hasServiceSpecification - This specification is in the form of a OpenAPI document.  Details can be found at [Using OpenAPI](../openapi/overview)
  - hasDeploymentSpecification - This specification is in the form of yaml.
  - hasPayload - specifies the code artifact(s)
