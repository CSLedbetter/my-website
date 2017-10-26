(function(){
    'use strict';

    angular
        .module('app.landing')
        .controller('LandingController', LandingController)

    LandingController.$inject = ['$location'];

    function LandingController($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
