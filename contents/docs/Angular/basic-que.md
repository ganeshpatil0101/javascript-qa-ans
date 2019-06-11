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
#### 2. What are directives?
Directives add behaviour to an existing DOM element or an existing component instance.
you can invoke directive by using 
- 1. ElementName - <my-custom-directive></my-custom-directive>
- 2. Attribute - <div my-custongAfterViewInit -m-attr></div> after 
- 3. class - <div class='my-custom-class' ></div>
- 4. comments - <!-- directive : my-test-directive -->

#### 3. Angular 2 component lifecycle hooks
Following are the few useful hooks 
- 1. ngOnChanges - perform action when values changes
- 2. ngOnInit - perform component initialization , called once
- 3. ngDoCheck - Called during every change detection run, immediately after ngOnChanges and ngOnInit
- 4. ngAfterContentInit - after angular loading external content into the component views, called once
- 5. ngAfterContentChecked - after angular content check
- 6. ngAfterViewInit - called after angular initilize compoent and childs view, once
- 7. ngAfterViewChecked - after angular checks components views and childs views
- 8. ngOnDestroy - perform clean-up

#### 4. How angular bootstrap app
Angular 2 apps need to be bootstrapped using the root component for the app, It is created inside app.module.ts using bootstrap method
````javascript
import {bootstrap} from @angular/platform-browser-dynamic;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
});
````

#### 5. ways to share data between controller
- 1. Parent to child - Input()
- 2. child to parent - @viewchild(childcomponent) child;
- 3. child to parent - Output() msgEvent : EventEmitter<String>();
- 4. Unrelated Components - using service, using RxJs Objserable , subjects, behaviousSubjects
  
#### 6. Three main components used for routing
- 1. Routesdescriber & app's routers
- 2. RouterOuter is placeholder componet holds rotes content
- 3. RouterLink is used to link to routes

#### 7. 



