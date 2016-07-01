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
        templateUrl: 'partials/directives/rs-section.html',
        controller: 'rsSectionCtrl',
        controllerAs: 'vm'
    };

}

/**
 *
 * @param $rootScope
 */
function rsSectionCtrl($rootScope, $state, SETTING, sectionsService, $document, $sce) {
    var vm = this;
    var layoutPrefix = 'layout_'; 
    var params = {};
    var $template = $document[0].getElementById(layoutPrefix + vm.model.layout);
    var templateContent = $template.innerHTML;
    for (var i = 0; i < vm.model.blocks.items.length; i++) {
        params['title_block_' + i] = vm.model.blocks.items[i].title;
        params['content_block_' + i] = vm.model.blocks.items[i].content;
        params['id_block_' + i] = vm.model.blocks.items[i].id;
    }

    Mustache.parse(templateContent, ['!#', '#!']);
    var sectionContent = Mustache.render(templateContent, params);
    console.log($template.innerHTML, '<<<<<<<<<<<< $template / section');
    console.log(params, '<<<<<<<<<<<< params / section');
    console.log(sectionContent, '<<<<<<<<<<<< sectionContent / section');
    console.log(vm.model.blocks, '<<<<<<<<<<<< vm.model.blocks / section');

    vm.sectionContent = sectionContent;
    vm.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    }
} 

angular
    .module('/* @echo application_name */')
    .controller('rsSectionCtrl', rsSectionCtrl)
    .directive('rsSection', rsSection);