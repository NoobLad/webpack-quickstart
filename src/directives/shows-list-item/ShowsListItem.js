require('./show-list-item.css');

module.exports = function () {
    return {
        restrict: 'E',
        bindToController: {
            show : "="
        },
        controllerAs: "vm",
        template: require('./shows-list-item.html'),
        controller: function() {
            var vm = this;

            vm.revealSummary = function() {
                vm.summaryRevealed = true;
            };
        }
    }
};