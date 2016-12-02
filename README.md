# el.js
superminimal dom element helper in ~20 lines

for people, who like vanilla js, but don't want to type ```document.getElementById()```, ```document.getElementsByClassName()``` or ```element.addEventListener()```  all the time.

### examples

Select element by ID
```js
var ele=el('#hund');
```

Select elements by ClassName
```js
var arrayOfStuff=el(".stuff");
```

el just returns DOM elements, use this to set HTML content or style etc...
```js
el('#hund').innerHTML="katze";

el("#test").style.left="0px";
```

hide/show elements
```js
el("#test").hide();
el("#test").show();
```

add listeners 
```js
el('#hund').on("click",function(){ console.log("ok"); })
```


