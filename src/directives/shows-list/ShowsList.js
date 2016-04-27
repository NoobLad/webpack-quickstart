import styles from './shows-list.css';

module.exports = function () {
    return {
        restrict: 'E',
        template: require('./shows-list.html'),
        controllerAs: 'vm',
        controller: ShowsListController
    };
};

class ShowsListController {
    constructor($http) {
        "ngInject";

        $http.get("http://api.tvmaze.com/shows")
            .then((response) => {
                var shows = response.data;
                this.shows = shows;
            });
    }
    
    get styles() {
        return styles;
    }
}