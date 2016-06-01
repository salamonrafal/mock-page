/**
 *
 * @returns {{restrict: string, replace: boolean, scope: {}, templateUrl: string, controller: string, controllerAs: string}}
 */
function rsSection($rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            model: '='
        },
        // templateUrl: 'partials/directives/rs-section-layout-simple_block.html',
        controller: 'rsSectionsCtrl',
        controllerAs: 'vm'
    };

}

/**
 *
 * @param $rootScope
 */
function rsSectionCtrl($rootScope, $state, SETTING, sectionsService) {
    var vm = this;
}

angular
    .module('/* @echo application_name */')
    .controller('rsSectionCtrl', rsSectionCtrl)
    .directive('rsSection', rsSection);