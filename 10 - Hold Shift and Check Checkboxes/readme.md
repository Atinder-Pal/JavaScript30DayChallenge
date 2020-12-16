## 10 Hold Shift and Check Checkboxes
In this practice, we try to imitate a common layout that can be found in many email clients. When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes will be checked.<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. How to get all checkboxes in JS
```
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
```
2. How to check if [shift key was down](http://www.java2s.com/Tutorials/Javascript/Event/Mouse/Check_if_Shift_key_is_pressed_during_the_mouse_click_in_JavaScript.htm) while clicking on checkbox:
```
if(e.shiftKey)
```

3. How to check if shift key was down while clicking on checkbox and checkbox is checked:
```
if(e.shiftKey && this.checked)
```
Rest is just the logic on how to determine what checkboxes are in between the two checkboxes.