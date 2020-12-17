## 22 Follow Along Link Highlighter
In this practice, we are going to first part of a bigger project where we want to build a replica of website [Stripe](https://stripe.com/en-ca).The practice page we got has links on top navigation as well as scattered among the text on th epage. We want to build a Link Highlighter feature where when we hover on a link anywhere on page- it gets highlighted. and the transition of highlighter as we move mouse from one link to another should appear smooth<br/>
We are provided with the HTML, CSS, and fake text data necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. The Highlighter is actually a span element which has a class 'highlight' applied to it. The 'highlight' class has CSS transition on it which is dynamic. The coordinates- top, left and width and height of span transition is updated according to the relative coordinates of the link and the width and height of that link.
    * We created `<span>` element via JS and added class Highlight to it
    ```
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);
    ```

2. [getBoundingClientRect() method](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp): We added eventListener on all the links and event is `mouseenter` and get the coordinates of link relative to viewport via getBoundingClientRect() method.
    * [getBoundingClientRect](https://www.digitalocean.com/community/tutorials/js-getboundingclientrect) returns an object with several key/value pairs that give you information on the element’s size and positioning within the webpage.
```
Output
{
  top: 450,
  left: 400,
  right: 825,
  bottom: 500,
  x: 400,
  y: 450,
  width: 425,
  height: 50
}
```

3.  Important point to note is that we cannot use left and top coordinates returned by getBoundingClientRect method directly in transform because they are relative to viewport. We need to account for the amount of scrolling we have done on screen to get the correct coordinates. We add the amount of scrolled screen with `window.scrollX` and `window.scrollY`, to position correctly the 'span' element.
```
function highlightLink(){
      console.log(this);
      const linkCoordinates = this.getBoundingClientRect();
      console.log(linkCoordinates);

      const coords = {
        width: linkCoordinates.width,
        height: linkCoordinates.height,
        top: linkCoordinates.top + window.scrollY,
        left: linkCoordinates.left + window.scrollX
      };

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;
      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }
```

4. Events 
    * mouseenter


#### CSS
1. [CSS transitions](https://www.w3schools.com/css/css3_transitions.asp) allows you to change property values smoothly, over a given duration.
