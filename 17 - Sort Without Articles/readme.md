## 17 Sort Without Articles
In this practice, we will sort an array of band names but ignore the articles like"a, an, the" while comparing alphabetically
We are provided with the HTML, CSS, and array necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
1. To ignore the articles while comparing band names: we create a function stripArticles:
```
function stripArticles(bandname){
    return bandname.replace(/^(a|the|an)/i, '').trim();
}
```

2. To append the sorted array to HTML element
```
document.querySelector('#bands').innerHTML = sortedBandNames.map(band => `<li>${band}</li>`).join('');
```
