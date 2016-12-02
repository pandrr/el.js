# el.js
superminimal element dom helper in ~20 lines

for people, who don't want to write ```document.getElemebtById()``` ,```document.getElemebtsByClassName()``` ,```element.addEventListener()```  all the time and also not use jquery because of that

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


