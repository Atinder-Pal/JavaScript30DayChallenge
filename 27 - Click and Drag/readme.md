## 27 Click and Drag to Scroll
In this practice, we will replicate the click and drag effect as it is on website Hover States <br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. Important thing to note here is to first get the initial position of mousedown(click) and then calaculating the position of mouse on mousemove to calculate the walk- how much the mouse has been moved and then setting scrollLeft of slider relative to the walk.
```
    slider.addEventListener('mousemove', (e)=> {
        if(!isDown) return;
        console.log(isDown);
        console.log('Do work');
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        console.log(x, startX);
        const walk = (x - startX) *  3;
        console.log(walk);
        slider.scrollLeft = scrollLeft - walk;
    });
```
2. Events 
    * mouseup
    * mouseleave   
    * mousedown
    * mousemove

3. event.pageX: Another way to get position of mouse along x axis

#### CSS
1. There are some good effects used in the CSS
    * perspective
    * scale (zoom a lil)
    * [will-change](https://css-tricks.com/almanac/properties/w/will-change/) property: optimizes animations by letting the browser know which properties and elements are just about to be manipulated, potentially increasing the performance of that particular operation.
