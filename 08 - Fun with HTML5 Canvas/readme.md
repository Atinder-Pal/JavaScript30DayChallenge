## 08 Fun with HTML5 Canvas
In this practice, We will use HTML5 Canvas to draw on the browser screen<br/>
We are provided with the HTML, CSS necessary to start this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. To draw on canvas using JS, we need [context](https://www.tutorialspoint.com/What-is-getContext-in-HTML5-Canvas)
    * `const context = canvas.getContext('2d')`
2. Other properties and methods used to draw on canvas using context include:
    * context.[lineJoin](https://www.w3schools.com/tags/canvas_linejoin.asp): to make the corner rounded where two or more lines meet
    * context.[lineCap](https://www.w3schools.com/tags/canvas_linecap.asp) = 'round': to make end caps of a line round
    * context.[beginPath()](https://stackoverflow.com/questions/22852071/what-does-beginpath-and-closepath-do-exactly)
    * context.[stroke()](https://www.w3schools.com/tags/canvas_stroke.asp)
    * context.[strokeStyle](https://www.w3schools.com/tags/canvas_strokestyle.asp) ='red'
3. Note- This practice is basically for drawing on desktop/laptop.
    To do th epractice on Touchscreen Mobile phones- events on JS would be different
    
    try: 
    ```
    // dealing with touch screen
    if (e.type != "mousemove") {
    x = e.changedTouches[0].clientX;
    y = e.changedTouches[0].clientY;
    }
    ```

    (courtesy of https://github.com/amelieyeh/JS30/tree/master/08-Fun%20with%20HTML5%20Canvas)

4. Events 
    * mousemove
    * mousedown
    * mouseup
    *mouseout

#### HTML
1. [Canvas](https://www.w3schools.com/html/html5_canvas.asp): in HTML5 `<canvas>` is a container used to draw graphics using JavaScript. Canvas is just a container, we need to use JS to draw on it. This [video](https://www.youtube.com/watch?v=EO6OkltgudE) gives a nice tutorial to make cool graphics using HTML5 canvas via JS. More details [here](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
2. [HSL](https://mothereffinghsl.com/)


