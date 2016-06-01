
function previewCtrl($rootScope, $state, sections) {

    var vm = this;

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
