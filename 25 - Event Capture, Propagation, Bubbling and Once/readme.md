## 25 Event Capture, Propagation, Bubbling and Once
In this practice, we will learn about Event Capture, Propagation, Bubbling and Once.
We are provide with a set of three nested divs, each have a different class, and we attach an event click to each of them.<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to demo eah concept.

### Notes:
#### JavaScript
1. Nested divs are in this orde:
```
<div class="one">
    <div class="two">
      <div class="three">
      </div>
    </div>
  </div>
```


2. [Event Capture](https://javascript.info/bubbling-and-capturing):
    * When we click the third (inner most) div, the browser starts capturing the event from top to bottom (from ancestors to the child where it happened)
    >* the browser ripples down, so goes from the most external element to the deepest one and captures all off the events binded to them. This process is called Event Capture. This process has the aim to figure it out what the user has clicked on:
    * so the order of capture would be 
    ```
    one
    two
    three
    ```
    In the capture phase, events are just captured and not fired.

3. Bubbling: after the capture phase comes the bubbling phase. The browser then starts firing up events from innermost to outermost (from child to its parent to oother ancestors)
> When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
    * so the order in whih events will be fired up :
    ```
    three
    two
    one
    ```

4. We can change th eorder of firing up events by passing a third argument to addEventListener method called options object. This object has property called capture which is false by default.
We can set it to true to start firing up events as they are captured and stop bubbling
```
    // function is fired up not on way up (as in bubbling) but on the way down when events are captured
    //this is because we provided third argument here -options object which says capture: true i.e fire up function on capture instead of on bubble

    divs.forEach(div => div.addEventListener('click', logText,{
    capture: true
    }));
``` 
    
* Now the order of firing up event would be 
```
one
two
three
```
5. stopPropagation():
```
function logText(e){
  console.log(this.classList.value);
  console.log(this);
  // this will stop bubbling. so events will no longer be triggered on parents
  //browser will capture the events from up to down but then bubbling will trigger the last event and stop propagating the event trigger on the upper parents

  e.stopPropagation();
}
```

6. once: once property in options object basically removes the eventListener after listening and firing up event once
```
//demo the use of once property in options object
divs.forEach(div => div.addEventListener('click', logText,{
  capture: false,
  once: true
}));
```


7. Events 
    * click
    

