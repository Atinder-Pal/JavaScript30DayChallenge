const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
        console.log(localMediaStream);
        //The below method to access camera from browser does nt work in Firefox
        //video.src = window.URL.createObjectURL(localMediaStream);

        //For firefox, we need to change code as following
        //Citation: https://stackoverflow.com/questions/52677448/typeerror-argument-1-is-not-valid-for-any-of-the-1-argument-overloads-of-url-cr
        video.src = localMediaStream;
        video.play();
    })
    .catch(error => {
        console.error('Can not access your web cam', error);
    });
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() =>{
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0,0,width, height);
        //pixels = redEffect(pixels);
        //console.log(pixels);
        //debugger;
        
        pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    // pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto(){
    //play sound
    snap.currentTime = 0;
    snap.play();
    //take data out of canvas
    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','beautiful');
    //link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="beautiful" />`;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels){
    for(let i=0; i < pixels.data.length; i+=4){
        pixels.data[i + 0] = pixels.data[i + 0] + 100;//red
        pixels.data[i + 1] = pixels.data[i + 1] - 50;//green
        pixels.data[i + 2] = pixels.data[i + 2] + 0.5;//blue        
    }
    return pixels;
}
function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; //red
      pixels.data[i + 500] = pixels.data[i + 1]; //green
      pixels.data[i - 550] = pixels.data[i + 2]; //blue    
    }
    return pixels;
  }
  
  function greenScreen(pixels) {
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }
  
    return pixels;
  }
  
getVideo();

video.addEventListener('canplay', paintToCanvas);