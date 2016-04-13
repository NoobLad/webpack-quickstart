require('./shows-list.css');

module.exports = function () {
    return {
        restrict: 'E',
        template: require('./shows-list.html'),
        controllerAs: 'vm',
        controller: function ($http) {
            var vm = this;
            
            $http.get("http://api.tvmaze.com/shows")
                .then(function (response) {
                    var shows = response.data;
                    console.log(shows);
                    vm.shows = shows;
                });
            
            vm.revealSummary = function(show) {
                show.summaryRevealed = true;
            };
        }
    }
};