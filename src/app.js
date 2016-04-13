var angular = require('angular');
require('./app.css');

var imports = [
    require('angular-route'),
    require('angular-sanitize')
];
var app = angular.module('MyApp', imports);

app
    .directive('showsList', require('./directives/shows-list/ShowsList.js'))
    .directive('showsListItem', require('./directives/shows-list-item/ShowsListItem.js'))

    .config(function ($routeProvider) {
        $routeProvider.when('/shows', {
            template: '<shows-list></shows-list>'
        }).otherwise('/shows');
    });

angular.bootstrap(document, [app.name]);