## 28 Video Speed Controller
In this practice, we will build a video speed controller bar on the side of the video window which will control the speed on mouse hover/>
We are provided with the HTML, CSS, and video clip necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. `e.pageY` returns the position of the mouse relative to the top edge of the document.

2. `this.offsetTop` returns the offset of the .speed-bar from the top of the document.

3. Important thing to note is how to map the calculation of mousemove to the percentage in playbackRate
```
    speed.addEventListener('mousemove', function(e){
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
  });
```

4. Events 
    * mousemove

