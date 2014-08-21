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

Event will be triggered each time on any ```keyup``` or ```click``` or ```focusin``` event for inputs with ```data-do-not-check-caret-change: true``` attribute, even if ```selectionStart``` and ```selectionEnd``` have not changed.


