# IPP Collection of KOs (Draft)

[![GitHub release](https://img.shields.io/github/release/kgrid-objects/ipp-collection.svg)](https://github.com/kgrid-objects/ipp-collection/releases/)
[![CircleCI](https://circleci.com/gh/kgrid-objects/ipp-collection.svg?style=svg)](https://circleci.com/gh/kgrid-objects/ipp-collection)



## Status
The current release of ipp collection of knowledge objects is [![GitHub release](https://img.shields.io/github/release/kgrid-objects/ipp-collection.svg)](https://github.com/kgrid-objects/ipp-collection/releases/)

## IPP Work Flow

The google doc can be referenced for the design of [IPP work flow](https://drive.google.com/open?id=1m2KRThrj83CkfCLQnlm0iLKkb2y8AQil9EDi4sVhvHk) 

## IPP Knowledge Objects (KO)

### KO Design

The following schemas are designed for this project and are referenced in the service description YAML file using `$ref`.
- [Patient Feature Panel](https://demo.kgrid.org/schemas/patientFeature.yaml)

A sample patient feature panel is used by the demo app and can be found at:
- [IPP Patient Features Sample](https://demo.kgrid.org/schemas/ippPatientFeaturesSample.json)

The collection will have the following types:

#### Recommendation List Knowledge Object

  The recommendation list KO contains a list of USPSTF A/B recommendations with the following information


``` json
{
  "colorectal-cancer":{
    "name": "Colorectal Cancer: Screening",
    "shortText":"Colorectal Cancer: Screening",
    "description":"The USPSTF recommends  ",
    "type": "Screening",
    "releaseDate": "June 2016",
    "grade":"A",
    "uspstflink":"https://www.uspreventiveservicestaskforce.org/Page/Document/UpdateSummaryFinal/colorectal-cancer-screening2",
    "basePopulation":{
      "population":"Adults",
      "minimumAge":"50",
      "maximumAge":"75"
    },
    "benefit":{
      "lifegain":{
        "ko":"99999/fk44b49n7c/v0.0.1",
        "riskfactors":{
          "framinghamCVD10":"99999-riskcvd10/v0.0.1"
        }
      }
    }
  }
}

```

This KO will take a patient features panel as input and perform the following functions:
- Check the patient features against `basePopulation` to determine if the recommendation is applicable for this patient
- Return a map of all applicable Recommendations
- In the response, the relevant KO IDs are presented in `benefit` for the downstream computation

Endpoint:       ` /recommendationlist`

Input Example:

```json
  {
    "patientID":"",
    "patientFeature":{

    }
    ...
   }
```

Output Example (Only the `result` of the response is shown):

```json
  {
    "recommendations": {

    }
  }
```

####  Calculation of Life expectancy gained per recommendation

Each Knowledge Object will compute the expected number of life-years gained by following the recommendation.

Additional KOs will be called to compute the intermediate results, such as disease-specific mortality, all-cause mortality, relative risks, reduced relative risks, adjustment with adherence, etc.

Endpoint: `/lifeexpectancygained`

Input Example:
```json
  {
    "patientID" : "",
    "patient.features":{

    },
    ...

   }
```

Output Example (Only the `result` of the response is shown):

```json

  {
    "patientID" : "",
    "patient.features":{

    },
    "expectancygained":{
      "aspprev-cvdcrc":1.2
    }
  }
```

#### Additonal Patient Risk Assessment Calculations

The risk assessment KO calculates the risk score based on the patient's features, which will be used as intermediate result to determine the disease-specific mortality. This type of KO will implement a well-known risk model, such as Framingham Risk score for CVD or CHD.

TBD: Output risks can be added to the Patient Feature Panel, directly or as an additional section

Endpoint:       ` /riskscore`

Input Example:
```json
{  
  "patientID" : "",
  "patient.features" : {

  },
  ...
 }
```

Output Example (Only the `result` of the response is shown):
```json
{
  "riskscore": {
    "title":"CVD 10-year Risk Score",
    "value": 8.3,
    "note": "Framingham Heart Study"
  }
}
```


#### Recommendation List Prioritization
  TBD: We might leave the responsibility of return a sorted, bounded list to the Executive Object

#### Others (will be expanded)

- National Average Life Expectancy

- Relative Risk (per patient, disease, age)

- Disease-specific Mortality

- All-cause Mortality




### Knowledge Object List

  - [Recommendation List]
  - [Life Expectancy Gained by following *Aspirin Preventive Medication (Adults 50-59)*] *
  - [Life Expectancy Gained by following *Colorectal Cancer Screening (Adults 50-75)*] *

Note: The KO is currently returning randomized numbers and the actual computation models are yet to be implemented.

## IPP Testing

NPM test will run both unit and integration tests.

```
npm test
```

### Unit Tests

The KO Unit Test are located in the [tests directory](./tests).  These tests utilize
[Jest](https://jestjs.io/) 

```
npm run test:unit
```

### Integration Tests
We test the IPP KO endpoints in a KGrid Activator instance using [Postman](https://www.getpostman.com/) and
[Newman](https://www.npmjs.com/package/newman). The CPIC integration tests are defined in the 
_ipp_collection.postman_collection.json_. The integration script uses the 
[start server and test](https://www.npmjs.com/package/start-server-and-test).  The integration test does the following:

1. downloads the latest KGrid Activator
1. runs the activator with the IPP KOs
1. runs the ipp collection defined as the IPP test/integration 
 
```
npm run test:integration
```
  

**Tricks**

You can start a local activator pointing to the IPP collection 
```
npm run start
```



## IPP Kit
KGrid IPP Kit packages [Activator](http://kgrid.org/kgrid-activator/), [Library](http://kgrid.org/kgrid-library) 
and IPP Demo Site.  The kit is designed as a personal IPP Knowledge Grid used to explore the capabilities 
of KGrid and [IPP Knowledge Objects](https://kgrid-objects.github.io/ipp-collection/).

### Kit Setup

1. Download [KGrid Kit](https://github.com/kgrid-demos/kgrid-kit/releases/latest)
1. Create ipp-kit directory and Unzip kit into directory
1. Get IPP Kit _manifest.json_ [IPP Collections](https://github.com/kgrid-objects/ipp-collection/releases/latest)
1. Replace KGrid Kit _manifest.json(set for hello-world)_ with the one you downloaded from IPP Collections
1. Install and Start the KGrid Kit as instructed


## CI Build and Release
**CI Build**

The IPP Collection utilized [Circle CI](https://circleci.com/gh/kgrid-objects/ipp-collection)

**Release**

Releases and Pre-Releases are created using KGrid-Release tool, for details review 
[KGrid Release CLI](https://github.com/kgrid/kgrid-config/tree/master/release/kgrid-release)





