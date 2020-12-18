## 21 Geolocation based Speedometer and Compass
In this practice, we will see a compass and speed on browser which basically tells the direction of your current location( system on which you are using the app on browser) i.e how many degrees relative to North the device's current location is and what is the speed at which device is going.<br/>
We are provided with the HTML, CSSnecessary to create this page/application. All we need is to add JS to add the functionality.

---
In terms of getting location- latitude and longitude, you will be able to access it from your system but the speed and degrees relative to North will be returned null coz your system is staic. In order to simulate a moving device- we can install XCode only available for Apple devices- to simulate a device of our choice and simulate its speed.



### Notes:
#### JavaScript
1. [Navigator](https://www.w3schools.com/jsref/obj_navigator.asp): The navigator object contains information about the browser. It can be written as window.navigator or navigator (without th ewindow prefix).[More Info](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

2. [Navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation): It is read only property which returns a GeoLocation Object that offers location information like lattude, longitude, heading (which contains speed and direction-degrees relative to North) of a device.

3. [GeoLocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition): This method is used to register a handler function that will be called automatically periodically to get the current geographic location of a device.[More info](https://www.tutorialspoint.com/html5/geolocation_watchposition.htm) GeoLocation [API](https://www.w3schools.com/html/html5_geolocation.asp)

5. Data looks like this in console 
```
GeolocationPosition
​
coords: GeolocationCoordinates { latitude: 53.478531166666656, longitude: -113.38193191666663, altitude: 0, … }
​
timestamp: 1608230079647
​
<prototype>: GeolocationPositionPrototype { coords: Getter, timestamp: Getter, … }
```

