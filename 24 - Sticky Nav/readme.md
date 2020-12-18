## 24 Sticky Nav
In this practice, we are gonna make a navigation fixed and show a hidden logo in navigation bar as soon as it becomes fixed to top<br/>
We are provided with the HTML, basic CSS necessary to create this page/application. All we need is to add JS and some CSS to add the functionality.

### Notes:
#### JavaScript
1. In order to make a nav bar fixed to top, we must know when th enav bar touckes the top of the screen/window. We first get  `offsetTop` of nav bar that tell us how far is it from top of the window. Then we get `window.scrollY` to see how much we have scrolled down. Then we can decide to run the `fixNav` function as soon as window scroll reaches the number of pixels equal to to the `offsetTop` of nav bar.
```
    const topOfNavBar = nav.offsetTop;

    if(window.scrollY >= topOfNavBar){
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    }else {
        document.body.style.paddingTop =0;
        document.body.classList.remove('fixed-nav');
    }
```

* We are adding padding to body on top, because when we make an element position fixed in CSS, it no longer takes space, it rather floats on top of browser and that free space is taken by the next element and this looks janky. so to not change th epositioning of other elements when nav bar is set fixed- we add padding to body on top equal to the space taken by nav bar previously (height of the av bar).

2. We change the class `fixed-nav` to make th eposition of nav bar fixed
```
.fixed-nav nav{
  position: fixed;
  box-shadow: 0 5px rgba(0,0,0,0.1);
}
```

3. Events 
    * scroll


#### CSS
1. [CSS transitions](https://www.w3schools.com/css/css3_transitions.asp) allows you to change property values smoothly, over a given duration : Important point to note is that we can not transition width of something from 0 to auto instead we need to use max-width to achieve that transition.
