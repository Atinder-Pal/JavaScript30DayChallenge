## 07 Array Cardio Day 2
In this practice, we will get familiar with some more built-in methods for Arrays.<br/>
We are provided with the data necessary to create this page/application. All we need is to add JS to add the functionality of different methods.

### Notes:
#### JavaScript
1. [some](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
    * This method returns true if atleast one of the array elements satisfies the condition
2. [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
    * This method returns true if each and every element of array satisfies the condition
3. [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
    * This method returns the first element in the array which satisfies the condition
4. [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
    * This method returns index of the first element in the array which satisfies the condition
5. [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    * This method changes the content of an array by removing existing elements and/or adding new elements.

```
comments.splice(index, 1);
 ````
 This will change content of the original array

    
```
array.splice(start)
array.splice(start, deleteCount)
array.splice(start, deleteCount, item1, item2, ...)
```
        
        
- `start`: index at which to start changing the array (with origin 0)
  - if greater than the length of the array, actual starting index will be set to the length of the array.
  - if negative, will begin that many elements from the end of the array.
- `deleteCount`: an integer indicating the number of old array elements to remove.
  - if deleteCount is 0, no elements are removed. in this case, you should specify at least one new element.
  - if deleteCount is omitted, deleteCount will be equal to (arr.length - start)
- `item1, item2, ...`: the elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.

6. [slice](https://www.w3schools.com/jsref/jsref_slice_array.asp#:~:text=JavaScript%20Array%20slice%20%28%29%20Method%201%20Definition%20and,Technical%20Details%206%20More%20Examples%207%20Related%20Pages)
    * This method returns the selected elements in an array, as a new array object
    * Syntax-
```
arr.slice()
arr.slice(begin)
arr.slice(begin, end)
```

- `begin` (optional): zero-based index at which to begin extraction.
  - as a negative index, begin indicates an offset from the end of the sequence.
    - `slice(-2)` extracts the last two elements in the sequence.
  - if begin is undefined, slice begins from index 0.
- `end` (optional): zero-based index at which to end extraction. slice extracts up to but **NOT including end**.
  - `slice(1,4)` extracts the second element through the fourth element (elements indexed 1, 2, and 3).
  - as a negative index, end indicates an offset from the end of the sequence.
    - `slice(2,-1)` extracts the third element through the second-to-last element in the sequence.
  - if end is omitted, slice extracts through the end of the sequence (arr.length).
- returns a new array containing the extracted elements.
