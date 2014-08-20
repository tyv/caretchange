(function($) {

var caretChange = $.event.special.caretchange = {

    setup: function() {

        $(this).bind('keyup click focusin', caretChange.handler);

    },

    teardown: function() {

        $(this).unbind('keyup click focusin', caretChange.handler);

    },

    handler: function(e) {

        var savedType = e.type;

        if (caretChange._isCaretChanged(e)) {

            e.type = 'caretchange';
            $.event.handle.apply(this, arguments);
            e.type = savedType;

        }
    },

    _isCaretChanged: function(e) {

        var result = false,
            $el = $(e.target),
            newPos = e.target.selectionStart;

        if (newPos != $el.data('last-pos')) {

            $el.data('last-pos', newPos);

            result = true;

        }

        return result;

    }

};

})(jQuery);