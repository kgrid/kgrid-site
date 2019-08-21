# KOIO

The Knowledge Object Implementation Ontology (KOIO) is a formal, standardized representational 
framework spanning what exists and is implemented in the form of Knowledge Objects.  
                                                            
KOIO is defined by KOIO JSON-LD Context, which has these elements:

- [Knowledge Object](http://kgrid.org/koio/contexts/knowledgeobject.jsonld) - is an Information Artifact capable of serving a role as the atomic unit of 
computable knowledge and therefore comprised of at least one Knowledge Object Implementation. 

- [Knowledge Object Implementation](http://kgrid.org/koio/contexts/implementation.jsonld) - an Information Artifact that describes a functional instance of the Knowledge Object. 
    - Implementation Service Specification is an Information Artifact that describes a computational 
    service that is enabled by a KnowledgeObject
    - Implementation Deployment Specification a relation that holds between a whole KnowledgeObject 
    and its Deployment Instruction parts
    - Implementation Payload - Computable Knowledge Resource represented in manner that is machine-interpretable 
