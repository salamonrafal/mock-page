/**
 *
 * @returns {{restrict: string, replace: boolean, scope: {}, templateUrl: string, controller: string, controllerAs: string}}
 */
function rsSections($rootScope) {
    console.log($rootScope);
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: {
            model: '='
        },
        templateUrl: 'partials/directives/rs-sections.html',
        controller: 'rsSectionsCtrl',
        controllerAs: 'vm'
    };

}

/**
 *
 * @param $rootScope
 */
function rsSectionsCtrl($rootScope, $state, SETTING, sectionsService) {
    var vm = this;
}

angular
    .module('/* @echo application_name */')
    .controller('rsSectionsCtrl', rsSectionsCtrl)
    .directive('rsSections', rsSections);