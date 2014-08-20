(function($) {

var caretChange = $.event.special.caretchange = {

    setup: function() {

        $(this).bind('keyup click focusin', caretChange.handler);

    },

    teardown: function() {

        $(this).unbind('keyup click focusin', caretChange.handler);

    },

    handler: function(e) {

        var savedType = e.type,
            $el = $(e.target),
            lastStartPos = $el.data('lastStartPos'),
            lastEndPos = $el.data('lastEndPos'),
            newStartPos = e.target.selectionStart,
            newEndPos = e.target.selectionEnd;

        if (newStartPos != lastStartPos || newEndPos != lastEndPos) {

            e.type = 'caretchange';

            e.caretchangeData = {
                currentStartPos: newStartPos,
                currentEndPos: newEndPos,
                prevSelStart: lastStartPos,
                prevSelEnd: lastEndPos
            };

            $el.data({
                lastStartPos: newStartPos,
                lastEndPos: newEndPos
            });

            // http://stackoverflow.com/questions/15653917/jquery-1-9-1-event-handle-apply-alternative
            $.event.handle = $.event.handle || $.event.dispatch;
            $.event.handle.apply(this, arguments);

            e.type = savedType;

        }
    }

};

})(jQuery);