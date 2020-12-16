## 09 Dev Tools Domination
In this practice, we get familiar with various Dev Tools- Attribute modification and console tricks<br/>
.

### Notes:
#### JavaScript
1. Attributes Modification

Making a break point to see what's going on to the element.

2. Console Tricks
  - most commonly used `console.log();`
  - String Interpolation:
    - `%s`: string

      `console.log("Hi %s!", "Your Name"); // Hi Your Name!`

    - `%d`: integer

      `console.log("I am %d years old!", 18);  // I am 18 years old!`
    - `%f`: float

      `console.log("It's %f dollars.", 2.5);  // It's 2.5 dollars.`

    - `%o`: object

      `console.log("This is an object:  %o", {dogName: 'Jack',  age: 5});`

    - `%c`: for CSS styling
      `console.log('%c I am demonstrating embedding CSS style here', 'font-size:10px; background:salmon; color:blue')

- defaults of `console.log`
  - `console.warn` for warning message    

  - `console.error` for error message  

  - `console.info` for information message
   

- Testing with `assert()`
  - If the condition is met- it will not return anything. It will return th emessage we provided if the condition is not met/true

    `console.assert(1 === 1, "This message will not show as condition is true");` // No message displayed  

    `console.assert(1 === 0, "This message will show up!");` // This message will show up!

  - using `assert()` to check DOM element

    ```
    const p = document.querySelector('p');

    console.assert(p.classList.contains('randomm-class'), 'That is wrong!');
    ```


- Viewing DOM elements
  - `document.querySelector()` an element first
  - log out only a DOM tag of the element

    `console.log(p);`

  - use `console.dir()` to view the properties of the element

    `console.dir(p);`



- `console.table()`: Display array/NodeList in a better format as Table console.table()
 
- Grouping together

`group()`/`groupCollapsed` and `groupEnd()` will automatically grouping things up

```
 dogs.forEach(dog => {
      console.group(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });
``` 

    We can have groups shown collapsed by deafult in console by
```
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });
```

- Counting things

counts only contents inside of `console.count()`

  ```
  console.count('Cat');
    console.count('Cat');
    console.count('Dog');
    console.count('Dog');
    console.count('Cat');
    console.count('Dog');
    console.count('Cat');
    console.count('Dog');
    console.count('Dog');
    console.count('Dog');
    console.count('Dog');
    console.count('Dog');
  ```

- Processing times

`time('message')` controls the start point and `timeEnd('message')` controls the end point
- it shows how much time time elapsed between console.time() and console.timeEnd()
```
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

```

- `console.clear();` : to clear console 

