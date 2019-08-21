# KO calling other KOs

An executive Knowledge Object can call the functions from other knowledge Objects, orchestrating the data flow and process among these KOs.

In this tutorial, we are demonstrating the concept of the executive object. The example KO is  for Nashorn script engine, which is the script engine used in the reference implementation of KGrid Activator.

To do so, you will need to use Nashorn context to retrieve the executor from the dependent KOs.


## Context of Nashhorn
Nashorn script Engine has `context` where the objects and functions are stored. After the KOs are activated, each KO executor can be accessed in the context.

## Get the executor

In the script of the executive object, the following code will retrieve the executor for the KO of `ark:/99999/helloworld/implA`. You will replace this ARK id with the Ark ID of the KO you'd like to call.

``` javascript
  var executor = context.getExecutor("99999-helloworld/implA/welcome")
```

## Pass in the inputs

The executive object should have known the input schema for the KOs it is calling. It will construct the inputs for each child KO and pass to the respective KO's executor as argument.

As shown below, `obj` is the input for `executor`

```javascript
  var result = executor.execute(obj)
```

## Work with the result

As shown in the above code, the result returned from the child KOs will be aggregated by the executive object. The results can then be used in the consecutive codes in the executive object. The Executive object will eventually return its own response to the service request.

## An example

KGRID CLI includes an example template so that you can use `kgrid create` to create an executive object to try it. It will call the simple KO you created during going through the developer's guide.

``` bash
  kgrid create newko --executive
```

After `newko` is created, change to the directory of the implementation folder, modify the file `/src/index.js` to get the executor for the simple KO you created.

You can now try the executive object in your local activator.

## Note

The section shows the concept of 'Executive Object' which orchestrating and calling other KOs. For different implementations of Activator, the actual code structure and syntax for constructing the Executive Object will be different.
