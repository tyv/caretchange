caretchange
===========

jQuery 'caretchange' event plugin for handling caret position change in inputs.

``>=IE9``

```
function myHandler(e) {
	console.log(e.caretchangeData)
}

$('.my-input').on('caretchange', myHandler);
```


