(function($) {

var caretChange = $.event.special.caretchange = {

    setup: function() {

        $(this).bind('keydown click focusin', caretChange.handler);

    },

    teardown: function() {

        $(this).unbind('keydown click focusin', caretChange.handler);

    },

    handler: function(e) {

        var savedType = e.type;

        e.type = 'caretchange';

        $.event.handle.apply(this, arguments);

        e.type = savedType;
    }

};

})(jQuery);