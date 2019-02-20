## Knowledge Core Platform Developer

If you would like to contribute to the core KGrid components the following will be useful

### Source Repositories

* [KGrid Libary](http://kgrid.org/kgrid-library/)
* [KGrid Activator](http://kgrid.org/kgrid-activator/)
* [KGrid Adapter](http://kgrid.org/kgrid-adapter/)
* [KGrid Self](https://github.com/kgrid/kgrid-shelf)

### Usefull Links
* [KGrid Developer Wiki](https://github.com/kgrid/kgrid.github.io/wiki)

### KGrid Instances
There are a few instances in our delivery pipeline, each stage in the sequence tests the code from a different perspective. Each successive stage becomes more production-like in its testing and provides more confidence in the code as it progresses through the pipeline.

#### Integration (Heroku)
The goal of the Integration environment is to combine and validate the work of the entire project team so 
it can be tested before being promoted to the Testing Environment. The Integration environment is hosted on Heroku. 
CircleCI deploys to the heroku environment with each commit.

* [Library](https://kgrid-library.herokuapp.com/)
* [Activator](https://kgrid-activator.herokuapp.com)

Further details of the Test (Hippo) instance can be found at [Integration (Heroku)](https://github.com/kgrid/kgrid.github.io/wiki/test)

#### Test (Hippo)
The goal of the Test test environment is to allow human testers to exercise new and changed code via either 
automated checks or non-automated techniques. The KGrid team will use this environment for acceptance testing purposes. Hippo Test environment is hosted on UMich ITS server uses docker container architecture.

* [Library](https://hippo-library.kgrid.org/)
* [Activator](https://hippo-activator.kgrid.org/)

Further details of the Test (Hippo) instance can be found at [Test (Hippo)](https://github.com/kgrid/kgrid.github.io/wiki/test)

#### Demo (Monkey)
*COMING SOON* 
The goal of the Demo environment is to allow the KGrid team a place to demo software to your stakeholders 
and they can use for acceptance testing purposes.


Further details of the Test (Hippo) instance can be found at [Sandbox (Monkey)](https://github.com/kgrid/kgrid.github.io/wiki/sandbox)


#### Reference
The goal of the Reference environment is to showcase KGrid application framework and Knowledge Objects.

* [Library](https://library.kgrid.org/)
* [Activator](https://activator.kgrid.org/)


Further details of the Test (Hippo) instance can be found at [Reference)](https://github.com/kgrid/kgrid.github.io/wiki/Reference)


