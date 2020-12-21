## 29 Countdown Timer
In this practice, we will build a countdown clock which will show a timer on screen plus tell us when the imer will stop.<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. Easiest way seems to be decereasing time per second in setInterval method. But sometimes browsers stop running setnterval if we scroll down or if we are away for a longer period.

2. Date.now(): gives current timestamp in milliseconds

3. To convert a timestamp into date: new Date(timestamp);

4. When we get values from HTML attributes e.g data attributes n thi scase- they will be in string format. We will then have to parse them into number to use them.

5. If an HTML element has "name" attribute to it, it is easy to grab that in JS (no need to use document.querySelector() or document.getElementByID():
```
document.customForm.addEventListener('submit', function(e));
```
Here `customForm` is name of the HTML form element
```
<form name="customForm" id="custom">
    <input type="text" name="minutes" placeholder="Enter Minutes">
</form>
``` 

6. Events 
    * click
    * submit
    
