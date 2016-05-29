
function previewCtrl($rootScope, $state) {

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

  //  vm.people = people;

}

// resolve promises before Controller is instantiated
/* previewCtrl.resolve = {
    people: function(PeopleService){
        return PeopleService.getPeople();
    } 
};*/

angular
    .module('/* @echo application_name */') // getter method
    .controller('previewCtrl', previewCtrl); // pass InboxCtrl into .controller
