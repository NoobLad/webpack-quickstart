import styles from './show-list-item.css';

module.exports = function () {
    return {
        restrict: 'E',
        bindToController: {
            show : "="
        },
        controllerAs: "vm",
        template: require('./shows-list-item.html'),
        controller: ShowsListItem
    };
};

class ShowsListItem {
    revealSummary() {
        this.summaryRevealed = true;
    }
    get styles() {
        return styles;
    }
}