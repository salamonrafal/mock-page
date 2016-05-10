var gulp        = require('gulp'),
    include     = require('gulp-include'),
    sass        = require('gulp-sass'),
    preprocess = require('gulp-preprocess');
    
    themeVariables = {
        class_main: 'mp-container', 
        class_page: 'mp-default',
        class_edit_flag: '',
        class_content_blocks: 'mp-content-blocks',
        class_content_blocks_table: 'mp-content-block-table',
        class_block_simple: 'mp-block-simple',
        class_block_2cell: 'mp-block-2cell',
        class_block_1cell: 'mp-block-1cell',
        class_block_50prec: 'mp-block-50prec',
        class_block_title: 'mp-block-title',
        class_header_container: 'mp-header-container',
        class_header_thubnail: 'mp-header-thubnail',
        class_wraper_blocks: 'mp-wraper-blocks',
        class_block_common: 'mp-block-common',
        class_block_content: 'mp-block-content'
    };

gulp.task("build:html:editor", function() {
    console.log("-- gulp is running task 'build:html:editor'");

    themeVariables.class_edit_flag = 'js-editable';
    themeVariables.class_page = 'mp-page-edit';
  
    return gulp.src("sources/editor.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/"));
});

gulp.task("build:html:view", function() {
    console.log("-- gulp is running task 'build:html:view'");

    themeVariables.class_page = 'mp-page-view';
  
    return gulp.src("sources/view.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/"));
});


gulp.task("sass", function() {
    console.log("-- gulp is running task 'sass'");
    return gulp.src('./client/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./client/theme/css'));
});

 
gulp.task("default", ["build:html:view", "build:html:editor"]);