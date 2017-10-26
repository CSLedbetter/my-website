(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('landingFactory', landingFactory)

    landingFactory.$inject = ['$http'];

    function landingFactory($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();
