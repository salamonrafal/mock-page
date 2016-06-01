function sectionsService($http, SETTING) {
    
    function getSections () {
        return $http
            .get(SETTING.services.getListSectionsURL)
            .then(function(response){
                console.log(response.data.data.sections);
                return response.data.data.sections;   
            }, function (reason) {
                return reason;
            });
    }
    
    return {
        "getSections": getSections
    };
} 
angular
    .module('/* @echo application_name */')
    .factory('sectionsService', sectionsService);