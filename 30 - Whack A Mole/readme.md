## 30 Whack A Mole
In this practice, we will build a basic game of Whack-a -mole<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. Get random time between provided min duration and maximum duration: 
```
function randomTime(min,max){
    return Math.round(Math.random() * (max - min) + min);
}
```

2. [event.isTrusted](https://www.w3schools.com/jsref/event_istrusted.asp) : The isTrusted event property returns a Boolean value indicating whether the event is trusted or not.

Note: In Chrome, Firefox and Opera, the event is trusted if it is invoked by the user, and not trusted if it is invoked by a script. In IE, all events are trusted except those that are created with the createEvent() method.

