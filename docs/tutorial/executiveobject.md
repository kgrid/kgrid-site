# KO calling other KOs

An executive Knowledge Object can call the functions from other knowledge Objects, orchestrating the data flow and process among these KOs.

In this tutorial, we are demonstrating the concept of the executive object. The example KO is for the V8 script engine, which one of the engines included by default in the reference implementation of the KGrid Activator.

To do so, you will need to use V8 context to retrieve the executor from the dependent KOs.


## Context of V8
The V8 script engine has a `context` object where the objects and functions are stored. After the KOs are activated, each KO executor can be accessed in the context.

## Get the executor

In the script of the executive object, the following code will retrieve the executor for the KO of `ark:/js/simple/`. You will replace this ARK id with the Ark ID of the KO you'd like to call.

```js
  var executor = context.getExecutor("js/simple/1.0/welcome");
```
:::tip 
Note that 1.0 refers to the api version in the service specification of the object being called.
:::
## Pass in the inputs
The executive object should know the input schema for the KO it is calling. It will construct the inputs for each child KO and pass to the respective KO's executor as argument.
Execute also takes the MIME type of the input as a second argument.

As shown below, `ted` is the input for `executor` with the type "text/plain"

```js
  var result = executor.execute("ted", "text/plain");
```

Due to a limitation of the Graal V8 engine it is not possible to pass a javascript object between KOs.
Thus if you wish to pass an object stringify the object first and use the type `application/json` as the MIME type. The javascript engine will parse the inputs back into an object before passing it into the function being called.

## Work with the result

As shown in the above code, the result returned from the child KOs will be aggregated by the executive object. The results can then be used in the consecutive codes in the executive object. The executive object will eventually return its own response to the service request.

## More examples
The [example collection](https://github.com/kgrid-objects/example-collection) contains examples of an executive object for the javascript V8 engine, the node engine and the python engine. 

## Node.js engine example:

In each engine the syntax for getting another object from the context is slightly different. This is the code in the node-executive-v1.0 example object:

```js
  var hello = global.cxt.getExecutorByID("node/simple/1.0/welcome");
```
You can then call `hello.execute()` to invoke the main function of the other knowledge object.

```js
  results.message = await hello.execute(inputs);
```

In node you can pass javascript objects between KOs so there is no need to stringify your inputs as is needed for the V8 engine.

## Python engine example:

Python is similar to node in how you can call another KO. This is the code from the python-executive-v1.0 object:
```python
from kgrid_python_runtime.context import Context
def execute(json_input):
  ctx = Context()
  return ctx.get_executor_by_id('python/simple/1.0/welcome')(json_input)
```

Note that the input is passed to the object in the same line that the executor is retrieved from the context.