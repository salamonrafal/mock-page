function editorService($http, SETTING, $sce) {

    function initEditor () {
        var editor;
        editor = ContentTools.EditorApp.get();
        editor.init('.js-editable', 'data-blockid');

        return editor;
    }


    return {
        "initEditor": initEditor
    };
} 
angular
    .module('/* @echo application_name */')
    .factory('editorService', editorService);