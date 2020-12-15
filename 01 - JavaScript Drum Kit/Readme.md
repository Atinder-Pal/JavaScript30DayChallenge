## 01 JavaScript drum STick
In this practice, the user can simulate functionality of an online Keyboard. The keys "A,S,D,F,G,H,J,K,L" will each produce a different sound and will get highlighted when pressed by a user.<br/>
We are provided with the HTML, CSS, and sound clips necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. [querySelector() function](https://www.w3schools.com/jsref/met_document_queryselector.asp#:~:text=HTML%20DOM%20querySelector%20%28%29%20Method%201%20Definition%20and,attributes%2C%20values%20of%20attributes%2C%20etc.%20More%20items...%20)
    * Syntax:  document.querySelector(CSS selectors)
    * It not nly works on document but any [HTML element](https://www.w3schools.com/jsref/met_element_queryselector.asp)

2. [Node List](https://www.w3schools.com/js/js_htmldom_nodelist.asp)
    * Node List is different from Array and has less methods. You can easily check methods in console under NodeList- _proto

3. Change class of an HTML element via JS
    * element.classList.add()
    * element.classList.remove()
    * [element.classList.toggle()](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_toggle)

4. [setTimeOut() function](https://www.javascripttutorial.net/javascript-bom/javascript-settimeout/#:~:text=The%20setTimeout%20%28%29%20is%20a%20method%20of%20the,The%20following%20illustrates%20the%20syntax%20of%20setTimeout%20%28%29%3A)
    * It sets a timer and exceutes a callback function after th etimer expires
5. Events 
    * transitionend
    * keydown

#### HTML
1. [kbd Tag](https://www.w3schools.com/Tags/tag_kbd.asp) 
    * To represent Text as Keyboard input
2. [audio Tag](https://www.w3schools.com/jsref/prop_audio_controls.asp)
3. [data-* attributes](https://www.w3schools.com/tags/att_global_data.asp)
    * data-* attributes allow us to embed/specify custom data to our HTMl elements
    * In this practice we used dat-* attributes in div for key and audio elements to reference them via keyCode

#### CSS
1. [CSS transitions](https://www.w3schools.com/css/css3_transitions.asp) allows you to change property values smoothly, over a given duration.