var angular = require('angular');

var imports = [
    require('angular-route')
];
var app = angular.module('MyApp', imports);

app
    .directive('showsList', require('./directives/shows-list/ShowsList.js'))

    .config(function ($routeProvider) {
        $routeProvider.when('/shows', {
            template: '<shows-list></shows-list>'
        }).otherwise('/shows');
    });

angular.bootstrap(document, [app.name]);