---
title: Basic
root: "/docs"
parents: ["Angular"]
---
<h1 align="center">
  Angular
</h1>

#### 1. What is provider
Provider is an object with a (dollar)get method, the Injector calls the get method to create an new instance of service. provider can have additional method which would allow for configuration of provider.
*1*. constacts 2. value 3. service 4. factory 5. decorator 6. provider
````javascript
app.config(function($provider)=>{
  $provider.constant('movie', 'matrix');
  $provide.constant('SHARD_HEIGHT', 306);
  $provide.constant('MY_COLOURS', ['red', 'blue', 'grey']);

  // decorator for $log service 
  $provide.decorator('$log', ['$delegate', function($delegate) {
    $delegate.warn = $delegate.error;
    return $delegate;
  }]);
});

````

