## 01 CSS Variables
In this practice, we will change value for CSS variables via JS and link their value to certain inputs in HTML<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS and CSS variables to add the functionality.

### Notes:
#### JavaScript
1. Events 
    * change
    * mousemove

#### HTML
1. <input type="color">[input type="color"](https://www.w3schools.com/html/html_form_input_types.asp#:~:text=Input%20Type%20Range.%20The%20%3Cinput%20type%3D%22range%22%3E%20defines%20a,accepted%20with%20the%20min%2C%20max%2C%20and%20step%20attributes%3A) 
    * To get the color picker on screen
2. <input type="range">input type="range"
    * To get slide controls on screen

#### CSS
1. Assigning CSS variables to a component.
    * Traditionally CSS variables are added to root
    ```
      :root {
      --base:#ffc600;
      --spacing: 10px;
      --blur: 10px
    }
    ```
2. Check this [article](https://davidwalsh.name/css-variables-javascript) on how to get and set value of [CSS variables](https://stackoverflow.com/questions/41725725/access-css-variable-from-javascript)