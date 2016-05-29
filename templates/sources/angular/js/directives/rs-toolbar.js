/**
 *
 * @returns {{restrict: string, replace: boolean, scope: {}, templateUrl: string, controller: string, controllerAs: string}}
 */
function rsToolbar() {

    return {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            model: '='
        },
        templateUrl: 'partials/directives/rs-toolbar.html',
        controller: 'rsToolbarCtrl',
        controllerAs: 'vm'
    };

}

/**
 *
 * @param $rootScope
 */
function rsToolbarCtrl($rootScope, $state) {
    var vm = this;
}

angular
    .module('/* @echo application_name */')
    .controller('rsToolbarCtrl', rsToolbarCtrl)
    .directive('rsToolbar', rsToolbar);