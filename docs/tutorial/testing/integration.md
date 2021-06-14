# Integration Testing
The KGrid Team does both manual and automated Integration Testing of KO Services.  We currently use a combination of [Postman](https://kgrid.org/guides/tutorial/clients/postman.html) and 
[Newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/)


## Postman
Postman is a great tool when trying to slice and dice RESTful APIs.  It helps in creating, editing and testing APIs.  Please review our short demonstration of the KGrid Teams dive into [Postman](https://kgrid.org/guides/tutorial/clients/postman.html). 

KGrid Team's KO collections use Postman in their Integration Testing 

- [Opioid Collection](https://kgrid-objects.github.io/opioid-collection/#integration-tests)


## Newman
[Newman](https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/) is a command line Collection Runner for Postman.

For KO Service Integration Testing the KGrid Team develops some packing scripting to handle the process.  The following process comes from the [Opioid Collection](https://github.com/kgrid-objects/opioid-collection).  

1. A _start_ script will download an KGid Activator if needed and start the activator pointing to the collection of KOs
1. The _test:integration_ calls the _start_ script and waits for the KGrid activator to come online, when it does it call the _postman_ script
1. The _postman_ script runs a newman command using the Postman collection


This is a snipped of the package.json in the [Opioid Collection](https://github.com/kgrid-objects/opioid-collection)
```json
...
  "scripts": {
    "package": "scripty",
    "start": "node scripts/start.js",
    "test:unit": "jest --passWithNoTests --ci --reporters=default --reporters=jest-junit",
    "test:integration": "server-test :8080 postman",
    "postman": "newman run tests/integration/opioid.postman_collection.json -e tests/integration/activator.postman_environment.json --reporters  cli,junit --reporter-junit-export test_results ",
    "test": "npm run test:unit && npm run test:integration"
  }

```
