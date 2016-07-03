(function() {
    window.addEventListener('load', function() {
        var editor;
        editor = ContentTools.EditorApp.get();
        editor.init('.js-editable', 'data-blockid');
        console.log('>>>>>>>>>>>>>>>>>> editor.js >>>>>>>>>>>>>>>>>>');
    });
});