## 11 Custom Video Player
In this practice, we will build custom video controls for a video.<br/>
We are provided with the HTML, CSS, and video clip necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. [querySelector() function](https://www.w3schools.com/jsref/met_document_queryselector.asp#:~:text=HTML%20DOM%20querySelector%20%28%29%20Method%201%20Definition%20and,attributes%2C%20values%20of%20attributes%2C%20etc.%20More%20items...%20)
    * Syntax:  document.querySelector(CSS selectors)
    * It not only works on document but any [HTML element](https://www.w3schools.com/jsref/met_element_queryselector.asp)
    * To get HTML elements based on their HTML attributes:
    ```
    const skipButtons = player.querySelectorAll('[data-skip]');
    ```

2. To change the play button icon to pause button icon, we swapped the icons using
```
function updateButton(){
    const buttonIcon = this.paused ?'►' : '❚ ❚'; 
    console.log("Time to update Button");
    toggle.textContent = buttonIcon;
}
```

3. To manipulate the video player, we used currentTime property of video
`video.currentTime= anyTimeWeWant`

4. To check if the video is playing or paused, we use video.paused property which will return true if its paused else false. Unfortunately, there is no property with video.playing to check if it is playing or not.

5. Methods for video:
```
video.play();
video.pause();
```
These can be executed as `video[methodName]`();

6. Properties of video:
```
video.duration
video.volume
video.playBackRate
```
7. Events 
    * mousemove
    * mouseup
    * mousedown
    * play - eventListener for video
    * pause- eventListener for video
    * timeupdate- eventListener for video- It is triggered when video is updating its time code
    * progress- eventListener for video-T It occurs when the browser is downloading the specified audio/video.
    
#### CSS
1. [flex-basis](https://www.w3schools.com/cssref/css3_pr_flex-basis.asp) : To update the length of progress bar, we manipulated its flex-basis value. 
`flex-basis = 20%` - A length unit, or percentage, specifying the length of the flexible item(s)

2. offsetX: To check how far along th eprogress bar has reached along x -axis- we checked its property offsetX which is a relative measure in pixels
3. offsetWidth: To get the total length of the progress bar- we get the progress div's offsetWidth property.