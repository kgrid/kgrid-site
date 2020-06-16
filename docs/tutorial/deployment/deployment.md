# Deployment Specification
The deployment specification tells the activator where to find the required artifacts and the necessary info to load and execute them.
The specification can change depending on the type of adapter used to execute the code. Here are the two ways currently supported by our adapters:

## Internal Nashorn Environment Activation

**Required fields:**
- artifact - path to the file where the function can be found.  
- adapter - type of adapter to use
- entry - the function name

```yaml
endpoints:
  /welcome:
    artifact: 'src/index.js'
    adapter: 'JAVASCRIPT'
    entry: 'welcome'
```

## External Node.js Runtime Activation

For objects using an external remote runtime more information is required in addition to the fields above:
- engine - specifies the type of remote environment
- function - specifies the 'main' function where code execution begins
- entry - now specifies the code file containing the main function
- also note that artifact can be an array containing multiple files to be used by the remote environment

```yaml
endpoints:
  /welcome:
        artifact:
          - 'src/welcome.js'
        adapter: 'PROXY'
        engine: 'node'
        entry: 'src/welcome.js'
        function: 'welcome'
```