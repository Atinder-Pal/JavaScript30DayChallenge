## 12 Slide in on Scroll
In this practice, when we scroll through the page, the image will slide in as soon as we reach half the height of the image. When we scroll past an image, it will slide out and disappear from screen.<br/>
We are provided with the HTML, CSS, and images necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. [debounce](https://davidwalsh.name/javascript-debounce-function)- this function was provided originally by webos. It helps to limit the rate at which a function is fired/executed. If we execute a function on event scroll- that function will be executed too many times and will break the browser performance.If we wrap that function in debounce- it will be exected after a regular(specified) interval.
```
 window.addEventListener('scroll', debounce(checkSlide));
```

2. Properties to know about:
    * window.scrollY: will give you how many pixels you are scrolled down at the very top of the browser.
    * To get what pixels we at of the document at the bottom of the window- 
    ```
    window.scrollY + window.innerHeight
    ```
    * image.offsetTop: How far is the top of the image from the top of the window
    
3. There are some calculations to be done to know exactly where the user is in reference to the image
```
   sliderImages.forEach(sliderImage => {
        //half-way through the sliderImage
        const slideInAt = (window.scrollY + window.innerHeight)-sliderImage.height /2;
        //bottom of the sliderImage
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isImageHalfShown = slideInAt > sliderImage.offsetTop;
        const isImageNotScrolledPast = window.scrollY < imageBottom;

        if(isImageHalfShown && isImageNotScrolledPast) sliderImage.classList.add('active');
        else sliderImage.classList.remove('active');
        
      });

```    
   
5. Events 
    * scroll - We add eventListener 'scroll' on window to listen if user is scrolling through the page.


#### CSS
1. To slide out the image(from left or right)(hide the image from screen) : we use transform property
```
 transform: translateX(-30%) scale(0.95);
```
negative value will slide the image out of screen
