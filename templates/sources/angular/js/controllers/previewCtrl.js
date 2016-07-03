
function previewCtrl($rootScope, $state, sections, editorService) {
    var vm = this;

    $rootScope.$on('$viewContentLoaded', function() {
        var editor;

        var tlEditor  = setTimeout (function(){
            var $elements = angular.element('.js-editable');
            var countElements = $elements.length;
            
            if ( countElements > 0) {
                editor = editorService.initEditor();
                clearTimeout(tlEditor);
            }

        }, 1000);
        
        console.log(ContentTools);
        console.log('>>>>>>>>>>>>>>>>>> $viewContentLoaded >>>>>>>>>>>>>>>>>>');
    });

   /* $rootScope.$on('add.person', function (event, value){
        people.push(value);
    });
*/
   /* function goToTrash () {

        angular.forEach(vm.messages, function(message) {
            if (message.checked)  {
                message.intrash  =  true;
                console.log(message);
            }
        });

    }*/

    vm.sections = sections;
}

// resolve promises before Controller is instantiated
previewCtrl.resolve = {
    sections: function(sectionsService){
        return sectionsService.getSections();
    } 
    
};

angular
    .module('/* @echo application_name */') // getter method
    .controller('previewCtrl', previewCtrl); // pass InboxCtrl into .controller
