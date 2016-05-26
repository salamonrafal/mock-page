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
        class_block_full: 'mp-block-full',
        class_block_title: 'mp-block-title',
        class_row_block: 'mp-row-block',
        class_branding_head_background: 'mp-branding-head-background',
        class_default_branding: 'mp-default-branding',
        class_header_container: 'mp-header-container',
        class_footer_container: 'mp-footer-container',
        class_disabled_branding: 'mp-disabled-branding',
        class_header_thubnail: 'mp-header-thubnail',
        class_header_block: 'mp-header-block',
        class_card_header: 'mp-card-header',
        class_card_footer: 'mp-card-footer',
        class_card_standard: 'mp-card-standard',
        class_block_common: 'mp-block-common',
        class_block_content: 'mp-block-content',
        class_footer_thubnail: 'mp-footer-thubnail',
        class_footer_company_links_xs: 'mp-footer-company-links-xs',
        class_footer_company_links_sm: 'mp-footer-company-links-sm',
        class_footer_company_profile: 'mp-footer-company-profile',
        class_footer_location: 'mp-footer-location',
        class_brand_bottom_background: 'mp-branding-bottom-background',
    	pageType: '',
    	application_name: 'ng-listingedit'
    };

gulp.task("build:html:editor", function() {
    console.log("-- gulp is running task 'build:html:editor'");

    themeVariables.class_edit_flag = 'js-editable';
    themeVariables.class_page = 'mp-page-edit';
    themeVariables.pageType = 'editor';
    
    return gulp.src("sources/editor.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/"));
});

gulp.task("build:html:editor_empty", function() {
    console.log("-- gulp is running task 'build:html:editor'");

    themeVariables.class_edit_flag = 'js-editable';
    themeVariables.class_page = 'mp-page-edit';
    themeVariables.pageType = 'editor';
    
    return gulp.src("sources/editor_empty_content.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/"));
});

gulp.task("build:html:view", function() {
    console.log("-- gulp is running task 'build:html:view'");

    themeVariables.class_page = 'mp-page-view';
    themeVariables.pageType = 'view';
    
    return gulp.src("sources/view.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/"));
});


gulp.task("sass", function() {
    console.log("-- gulp is running task 'sass'");
    return gulp.src('./sources/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./client/css/theme/'));
});

 
gulp.task("default", ["build:html:view", "build:html:editor", 'build:html:editor_empty', "sass"]);