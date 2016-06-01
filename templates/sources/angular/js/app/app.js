/*
 * Bootstarp application
 */

function Decorate($provide) {
    $provide.decorator('rs-sectionDirective', function($delegate) {
      var directive = $delegate[0];
      
      console.log(directive);
     // directive.templateUrl = "partials/directives/rs-section-layout-2_blocks.html";
      
      return $delegate;
    });
}

angular.module('/* @echo application_name */', [
    'ui.router',
    'ngMessages',
    'ui.bootstrap',
    'ngCookies'
]);