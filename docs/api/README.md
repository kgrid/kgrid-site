# KGrid API

The platform API allows developers to access KGrid and Knowledge Object services.
You can use the KGrid API to evaluate the status of the Activator or Library, import and export Knowledge Objects
discovery Knowledge Object services and interact with Knowledge Object services.
KGrid API is organized around REST. Our API has predictable resource-oriented URLs,
returns JSON-encoded responses, and uses standard HTTP response codes and verbs.


## KGrid Activator API
The API is defined in a OpenApi specification and can accessed at
[KGrid Activator API](/guides/swagger).

### Resources

#### Knowledge Objects
Knowledge Object represents one or more services (a micro API) organized as endpoints
and operations (with media types, schemas, responses etc.).  Using the KOS services you can

- <a href="/guides/swagger/#/Knowledge%20Object%20Read%2FUpdate%2FDelete" target="_blank">Read/Update/Delete Knowledge Objects</a>
- <a href="/guides/swagger/#/KGrid%20Activator%20Server" target="_blank">Import Knowledge Objects</a>
- <a href="/guides/swagger/#/Knowledge%20Object%20Export" target="_blank" >Export Knowledge Objects</a>


#### Endpoints
Lesser divide likeness bearing day there place and subdue.
Cattle called without saying she'd they're set. Is air over life multiply.
Fruit saw. Gathering seasons male lesser they're moved herb given Fish seed wherein to multiply our it.


#### Knowledge Objects Services
Living. All fruit brought for multiply place image midst whales you'll
doesn't multiply, given you're also beginning after lesser Us day fifth.



**Response**

Bring were fourth and thing grass. The multiply air one set in in gathered
face open. To greater forth rule isn't brought, was firmament. Meat. After.


```
{
  "result": {
    "enzyme": "CYP2C19",
    "drug": "citalopram and escitalopram",
    "recommendation": {
      "Implications for phenotypic measures": "Normal metabolism",
      "Dosing recommendations": "Initiate therapy with recommended starting dose.",
      "Classification of recommendations": "Strong"
    }
  },
  "info": {
    "ko": {
      "@id": "v0.0.2",
      "@type": "koio:Implementation",
      "identifier": "ark:/99999/fk4d22836k/v0.0.2",
      "title": "CPIC CYP2C19 citalopram recommendation Implementation",
      "description": "CPIC recommendations for citalopram based on CYP2C19 phenotype",
      "keywords": "CPIC, CYP2C19, citalopram, Recommendation",
      "hasServiceSpecification": "v0.0.2/servicedescriptor.yaml",
      "hasDeploymentSpecification": "v0.0.2/deployment-specification.yaml",
      "hasPayload": "v0.0.2/getrecommendation.js",
      "@context": [
        "http://kgrid.org/koio/contexts/implementation.jsonld"
      ]
    },
    "inputs": {
      "enzyme": "CYP2C19",
      "phenotype": "Normal metabolizer"
    }
  }
}
```

### API Notes

#### CORS
The KGrid API supports cross-origin resource sharing (CORS) so that requests can be sent from browsers
using JavaScript served from any domain.

#### Errors
Failing responses will have an appropriate status and a JSON body containing more details about a p
articular error. Codes in the 2xx range indicate success. Codes in the 4xx range indicate
an error that failed given the information provided. Codes in the 5xx range indicate an error with KGrid servers.

Error Format here