## 16  Text Shadow Mouse Move Effect
In this practice, we will show shadow of a header inside a div <br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. Things to note about evenListening
    * `this` represents the element on which we added eventListener
    * `event.target` doesnot always return the element on which we added event listener. It can also return the children (elements inside the parent element) of that element

2. Properties we used:
    * this.offsetWidth
    * this.offsetHeight
    * e.offsetX
    * e.offsetY
    * e.target.offsetLeft
    * e.target.offsetTop
```
    // Width & height properties of the 'hero' div in relation to the window object
    const { offsetWidth: width, offsetHeight: height } = this;
    // Distance of the mouse from the event's target on both axis
    let {offsetX: x, offsetY: y } = e;
    // If the element that is the current target of the event differs from the event's originating target, 
    // increment the values of the two previously declared variables by the distance between the originating target and the current target on both axis
    if( this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
```

3. We used a variable `walk` to calculate the stretch distance for the element's shadow on both axis.
    ```
    const walk = 100; // 100px
    const xWalk = (x / width * walk) - (walk / 2);  // Normaliza and then rest half the walk
    const yWalk = (y / height * walk) - (walk / 2); 
    ```

4. Object destructuring in ES6


ES6 destruturing:
```
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // Above could have been done in single line using destructuring syntax
    // const {offsetWidth : width, offsetheight: height} = hero;    
```


5. Events 
    * mousemove
    

#### HTML
1. Attribute contenteditable defines that the content of an element is editable.
    ````
     <h1 contenteditable>🔥WOAH!</h1>
    ````

