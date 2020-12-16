## 01 JS + CSS Clock
In this practice, we display aan analog clock using JS and CSS <br/>
We are provided with the HTML and basic CSS necessary to create this page/application. All we need is to add JS and CSS to rotate th ehands of clock to add the functionality.

### Notes:
#### JavaScript
1. Most important concept is to translate the seconds, minutes and hours into degrees of rotation for clock hands.
```
 const seconds = now.getSeconds();
const secondsDegrees = seconds * 6 + 90;
secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

const mins = now.getMinutes();
const minsDegrees = mins * 6 + 90;
minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

const hours = now.getHours();
const hoursDegrees = (hours /12)* 360 + 90;
hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
```

2. In the above code snippet,  90 is aded to the degrees as lag variable. We defined initial rotation of 90 degrees because the clock hands are positioned horizontally in HTML by default.



#### CSS
1. [CSS transitions](https://www.w3schools.com/css/css3_transitions.asp) allows you to change property values smoothly, over a given duration.
2. [transform](https://www.w3schools.com/cssref/css3_pr_transform.asp) Property
3. [transform-origin](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp) Property