## 06 Ajax Type Ahead
In this practice, we display suggestions of US city ans state with their respective population based on what is entered in the input field by the user. The suggestions are give real time and change as the user types in.<br/>
We are provided with the HTML, CSS necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. `change` & `keyup` events

`change` can also be an event in `addEventListener` for inputs, but the `change` only fires when we step outside that input. so we need to tie the element up with the `keyup` event as well. for better user experience.

```
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
```

2. Fetch API

[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides an interface for fetching resources(including across the network). It will seem familiar to anyone who has used [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), but the new API provides a more powerful and flexible feature set.

[fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) is one of GlobalFetch API method used to start the process of fetching a resource.

```
fetch(input, init).then(function(response) {...});
```

in [MDN's basic fetch example](https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch)(see `Examples` section)


3. RegExp

```
const regex = new RegExp(wordToMatch, 'gi');
```

`g` is for **global** and `i` is for **case insensitive**,

