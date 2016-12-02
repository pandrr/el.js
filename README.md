# el.js
superminimal element dom helper in ~20 lines

### examples

Select element by ID
```
var ele=el('#hund');
```

Select elements by ClassName
```
var arrayOfStuff=el(".stuff");
```

el just returns DOM elements, use this to set HTML content or style etc...
```
el('#hund').innerHTML="katze";

el("#test").style.left="0px";
```

hide/show elements
```
el("#test").hide();
el("#test").show();
```

add listeners 
```
el('#hund').on("click",function(){ console.log("ok"); })
```


