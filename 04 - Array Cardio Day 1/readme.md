## 04 Array Cardio Day 1
In this practice, we will get familair with in-built methods for Arrays in JS<br/>
We are provided with the data necessary to create this page/application. All we need is to add JS to add the functionality.

### Notes:
#### JavaScript
* Array Methods
1. [map](https://www.w3schools.com/jsref/jsref_map.asp)
2. [reduce](https://www.w3schools.com/jsref/jsref_reduce.asp)
3. [sort](https://www.w3schools.com/js/js_array_sort.asp)
4. [filter](https://www.w3schools.com/jsref/jsref_filter.asp)

When working with sort, we can sort in ascending order or descending order:

    Ascending: 1 indicates that corresponding element goes down in the array:
```
     arr.sort((a, b) => a > b ? 1 : -1);
```
    Descending: -1 indicates that corresponding element goes up in the array:
```
     arr.sort((a, b) => a > b ? -1 : 1);
```
When working with reduce, the key to be able to process different data types is to initialize value:
```
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ],
	sol = data.reduce((obj, item) => {
		if(!obj[item]) 
			obj[item] = 0;
		obj[item]++;
		return obj;
	}, {});
```