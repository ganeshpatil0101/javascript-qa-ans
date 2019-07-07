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

#### 7. What are the differences between Component and Directive?
| Component        | Directive           |
| ------------- | ------------- |
| To register a component we use @Component meta-data annotation      | To register directives we use @Directive meta-data annotation |
| Components are typically used to create UI widgets      | Directive is used to add behavior to an existing DOM element      |
| Component is used to break up the application into smaller components | Directive is use to design re-usable components      |
| Only one component can be present per DOM element | Many directives can be used per DOM element |
| @View decorator or templateurl/template are mandatory | Directive doesn't use View |

#### 8. What is dependency injection in Angular?
  Dependency injection (DI), is an important application design pattern in which a class asks for dependencies from external sources rather than creating them itself. Angular comes with its own dependency injection framework for resolving dependencies( services or objects that a class needs to perform its function).So you can have your services depend on other services throughout your application.
    
#### 9. How do you categorize data binding types?
  Binding types can be grouped into three categories distinguished by the direction of data flow. They are listed as below,
  1. From the source-to-view
  2. From view-to-source
  3. View-to-source-to-view

  | Data direction | Syntax | Type |
  |---- | --------- | ---- |
  | From the source-to-view(One-way)  | 1. {{expression}} 2. [target]="expression" 3. bind-target="expression" | Interpolation, Property, Attribute, Class, Style|
  | From view-to-source(One-way) | 1. (target)="statement" 2. on-target="statement" | Event |
  | View-to-source-to-view(Two-way)| 1. [(target)]="expression" 2. bindon-target="expression"| Two-way |
      
      
 #### 10. What is the difference between pure and impure pipe?
  - A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe. For example, any changes to a primitive input value (String, Number, Boolean, Symbol) or a changed object reference (Date, Array, Function, Object). 
  - An impure pipe is called for every change detection cycle no matter whether the value or parameters changes. i.e, An impure pipe is called often, as often as every keystroke or mouse-move.
  

#### 11. What are the advantages with AOT?
  Below are the list of AOT benefits,
  1. **Faster rendering:** The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.
  2. **Fewer asynchronous requests:** It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.
  3. **Smaller Angular framework download size:** Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.
  4. **Detect template errors earlier:** Detects and reports template binding errors during the build step itself
  5. **Better security:** It compiles HTML templates and components into JavaScript.  So there won't be any injection attacks.


#### 12. What is folding?
  The compiler can only resolve references to exported symbols in the metadata. Where as some of the non-exported members are folded while generating the code. i.e Folding is a process in which the collector evaluate an expression during collection and record the result in the .metadata.json instead of the original expression.
  For example, the compiler couldn't refer selector reference because it is not exported
  ```javascript
  let selector = 'app-root';
  @Component({
    selector: selector
  });
  //Will be folded into inline selector
  @Component({
    selector: 'app-root'
  });
  ```
  Remember that the compiler can’t fold everything. For example, spread operator on arrays, objects created using new keywords and function calls.
