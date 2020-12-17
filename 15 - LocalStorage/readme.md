## 15 Local Storage and Event Delegation
In this practice, the user can input a dish of choice and it will be added to the orderList. User can check or uncheck the dish item existing in the orderList. Also, the list data remains persistent even after the page reload/refresh without a backend storage. This i spossible by leveraging the local storage available in the browser.<br/>
We are provided with the HTML, CSS, necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. form.reset() : will reset the input fields of a form;

2. Leveraging API to use localStorage to make data persistent when refreshing the browser
    * localStorage.get(key);
    * localStorage.set(key, value); // It expects plain strings so if the value is an Object -> JSON.stringify(value)
    * localStorage.delete(key);


3. Event Delegation: To listen for an event on children which are dynamic, we add eventListener on parent instead and further check if the target of event is the children
    ```
    itemsList.addEventListener('click', updateCheckBoxStatus);
    ```

    ```
    function updateCheckBoxStatus(e){
    //following line is important
    if(!e.target.matches('input')) return;
    ....
    }
    ```

Here we add vent listener on `<ul>` instead of checkboxes.

4. We use data-index to bind the dynamic checkbox with the label
```
    <li> 
        <input type="checkbox" data-index = ${i} id ="item${i}" ${dish.done ? 'checked' :''} />
        <label for="item${i}">${dish.text}</label>
    </li>
```
5. Events 
    * submit - for form submission
    * click

#### CSS
1. To create custom checkboxes:
```
    // hide original boxes
    .plates input {
      display: none;
    }

    .plates input + label:before {
      content: '⬜️';
      margin-right: 10px;
    }

    .plates input:checked + label:before {
      content: '🌮';
    }
```