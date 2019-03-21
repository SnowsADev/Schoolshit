let ModuleTemplate = (function ($) {
    var _configMap = {};

    //initialize function
    var initModule = function () {
        return true;
    }

    return {
        initModule: initModule
    };
})(jQuery);

let SPA = (function ($) {
    var _configMap = {};

    //initialize function
    var initModule = function () {
        return true;
    }

    return {
        initModule: initModule
    };
})(jQuery);

SPA.Data = (function ($) {
    var _configMap = {};

    //initialize function
    var initModule = function () {
        return true;
    }

    return {
        initModule: initModule
    };
})(jQuery);

SPA.Model = (function ($) {
    var _configMap = {};

    //initialize function
    var initModule = function () {
        return true;
    }

    return {
        initModule: initModule
    };
})(jQuery);

SPA.Reversi = (function ($) {
    var _configMap = {};

    //initialize function
    var initModule = function () {
        return true;
    }

    return {
        initModule: initModule
    };
})(jQuery);

SPA.feedbackModule = (function () {
    var _configMap = {};

    //initialize function
    var initModule = function () {
        return true;
    }

    var toonSuccesBericht = function () {
        var message = "Mike wil deelnemen aan jouw spel.Geef akkoord.";
        popup_widget.show("succes", message)
    }
    var toonErrorBericht = function (type) {
        var message = "Er is iets fout gegaan!";
        popup_widget.show(type, message)
    }


    return {
        toonSuccesBericht: toonSuccesBericht,
        toonErrorBericht: toonErrorBericht,
        initModule: initModule
    }
})();