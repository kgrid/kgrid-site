# Use the KO as dependency

An executive Knowledge Object can call the functions from other knowledge Objects, orchestrating the data flow and process among these KOs.

To do so, you will need to use Nashorn context to retrieve the executor from the dependent KOs.


## Context of Nashhorn
Nashorn script Engine has `context` where the objects and functions are stored. After the KOs are activated, each KO executor can be accessed in the context.

## Get executor

``` javascript
  var executor = context.getExecutor("99999-helloworld/implA/welcome")
```
## Pass in the inputs
```javascript
  var result = executor.execute(obj)
```

## Work with the result

`result` from the above line can then be used in the consecutive codes in the executive object.

## An example
``` bash
$ kgrid create newko --executive
```
After `newko` is created, change to the directory of the implementation folder, modify the file `/src/index.js` to get the executor for the simple KO you created during going through the developer's guide.

You can now try the executive object in your local activator
