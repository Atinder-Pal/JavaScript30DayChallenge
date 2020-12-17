## 12 Key Sequence Detection
In this practice, the user can type anything but if he/she types 'atinder' (it can be any word of our choice), a random image (unicorn, rainbow etc) will appear on screen<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. To check the key pressed by the user, we can have keyup event listener on window and then `event.key` will give the key pressed.

2. [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - joins all elements of an array into a string
    * If an array is undefined or null, it is converted to the empty string.
    * syntax-
    ```
    array.join()
    array.join(seperator)   
    ```
    
3. To avoid collecting all pressed keys in array- we keep the length of array matching the length of our matchingWord and remove the keys from the start.
```
pressedKeys.splice(-matchingWord -1, pressedKeys.length - matchingWord.length);
```

4. [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
5. Events 
    * keyup
6. [cornify_add()](https://gist.github.com/philwinkle/9916577)- to add random images of unicorns, rainbow etc on screen
