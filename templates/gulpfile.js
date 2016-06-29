var gulp        = require('gulp'),
    include     = require('gulp-include'),
    sass        = require('gulp-sass'),
    preprocess  = require('gulp-preprocess'),
    copy        = require('gulp-copy');
    
    
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
    	application_name: 'ng-listingedit',
        layout: {
            layout_1_block : {
                    blocks_1: {
                        content: "<h2>H2.  Consectetur adipiscing elit</h2><p class=\"mp-style-justify\">Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Maecenas leo sapien, egestas eu ante id, porttitor commodo est. Phasellus pellentesque luctus purus vel viverra. Morbi ornare pretium tempus. Proin a ullamcorper sem. In arcu ex, auctor id dui vel, tincidunt blandit neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer a venenatis purus. Sed posuere nisi eu mauris pharetra congue. Cras metus turpis, finibus id condimentum nec, pellentesque ut massa. Nunc tempus facilisis cursus.</p><h3>H3.  Consectetur adipiscing elit</h3><p class=\"mp-style-center\">Quisque eu convallis dolor. Donec pulvinar in est a mollis. Donec tristique lacus commodo lectus pharetra maximus. Sed id urna non tellus tincidunt condimentum. Donec quis lorem consectetur, gravida felis eget, cursus dui. Sed pretium tortor mauris, quis lobortis lectus vulputate pretium. Curabitur eleifend tortor dui. In et sapien condimentum risus ornare maximus. Nunc tortor nisl, hendrerit vitae dictum eu, pulvinar vitae lectus. Mauris aliquam quam tincidunt velit interdum egestas in ut turpis. Praesent consectetur volutpat dolor id tristique. Morbi nec augue quis nibh posuere euismod egestas id justo.</p><h4>H4.  Consectetur adipiscing elit</h4><p class=\"mp-style-justify\">Nam tincidunt, leo ac tempus mollis, nisl velit vehicula risus, at eleifend ipsum dui a nibh. Nam et lobortis lacus. Vestibulum a ligula quis arcu placerat ornare eget sodales justo. Etiam laoreet porttitor nulla nec ultrices. Phasellus condimentum turpis eget metus dignissim aliquet. Donec congue a ipsum sit amet congue. Vestibulum vestibulum ex vel purus molestie dignissim.</p><h5>H5.  Consectetur adipiscing elit</h5><p class=\"mp-style-justify\">Vestibulum facilisis faucibus mauris, vel ullamcorper urna viverra vel. Suspendisse pretium augue nec sapien venenatis fermentum. Praesent ullamcorper mauris at porta imperdiet. Nulla ut lorem ac magna pharetra dictum. Aenean a mi vitae est consectetur lobortis nec id nulla. Cras nec risus pellentesque, porttitor nisl in, dapibus justo. Curabitur a euismod nunc. Nullam ultricies, leo a viverra tincidunt, nisi libero molestie leo, at aliquam velit felis vel tellus. Maecenas auctor ipsum in fringilla rutrum. Aliquam sit amet lacus est. Praesent dictum orci eleifend, viverra libero nec, consectetur diam. Quisque posuere orci ac aliquam aliquet. Curabitur sit amet ipsum dignissim lorem sollicitudin mattis. Cras aliquam ex a dolor porta, et cursus nibh condimentum. Ut nec erat tellus.</p><h6>H6.  Consectetur adipiscing elit</h6><p class=\"mp-style-justify\">Donec venenatis imperdiet dapibus. Sed mollis metus facilisis lobortis condimentum. Mauris at quam sed lorem aliquet sodales et dapibus libero. Curabitur eget neque sollicitudin, fermentum risus sed, luctus nulla. Aenean pretium velit eget leo fringilla, a congue tellus convallis. Nunc quis scelerisque mauris. Fusce at porttitor magna. Cras quam erat, mollis in felis in, mollis sagittis arcu. Maecenas hendrerit at tortor non auctor.</p> ",
                        title: "Lorem ipsum dolor sit amet (1)",
                        name: "_block_1"
                }
            },
            
            layout_2_blocks: {
                blocks_1: {
                    content: "<p class=\"mp-style-justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo sapien, egestas eu ante id, porttitor commodo est. Phasellus pellentesque luctus purus vel viverra. Morbi ornare pretium tempus. Proin a ullamcorper sem. In arcu ex, auctor id dui vel, tincidunt blandit neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer a venenatis purus. Sed posuere nisi eu mauris pharetra congue. Cras metus turpis, finibus id condimentum nec, pellentesque ut massa. Nunc tempus facilisis cursus.</p> <p class=\"mp-style-justify\">Quisque eu convallis dolor. Donec pulvinar in est a mollis. Donec tristique lacus commodo lectus pharetra maximus. Sed id urna non tellus tincidunt condimentum. Donec quis lorem consectetur, gravida felis eget, cursus dui. Sed pretium tortor mauris, quis lobortis lectus vulputate pretium. Curabitur eleifend tortor dui. In et sapien condimentum risus ornare maximus. Nunc tortor nisl, hendrerit vitae dictum eu, pulvinar vitae lectus. Mauris aliquam quam tincidunt velit interdum egestas in ut turpis. Praesent consectetur volutpat dolor id tristique. Morbi nec augue quis nibh posuere euismod egestas id justo.</p>",
                    title: "Lorem ipsum dolor sit amet (1)",
                    name: "_block_1"
                }, 
                blocks_2: {
                    content: "<p class=\"mp-style-justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo sapien, egestas eu ante id, porttitor commodo est. Phasellus pellentesque luctus purus vel viverra. Morbi ornare pretium tempus. Proin a ullamcorper sem. In arcu ex, auctor id dui vel, tincidunt blandit neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer a venenatis purus. Sed posuere nisi eu mauris pharetra congue. Cras metus turpis, finibus id condimentum nec, pellentesque ut massa. Nunc tempus facilisis cursus.</p> <p class=\"mp-style-justify\">Quisque eu convallis dolor. Donec pulvinar in est a mollis. Donec tristique lacus commodo lectus pharetra maximus. Sed id urna non tellus tincidunt condimentum. Donec quis lorem consectetur, gravida felis eget, cursus dui. Sed pretium tortor mauris, quis lobortis lectus vulputate pretium. Curabitur eleifend tortor dui. In et sapien condimentum risus ornare maximus. Nunc tortor nisl, hendrerit vitae dictum eu, pulvinar vitae lectus. Mauris aliquam quam tincidunt velit interdum egestas in ut turpis. Praesent consectetur volutpat dolor id tristique. Morbi nec augue quis nibh posuere euismod egestas id justo.</p>",
                    title: "Lorem ipsum dolor sit amet (2)",
                    name: "_block_2"
                },
            },
            
             layout_3_blocks: { 
                blocks_1: {
                    content: "<p class=\"mp-style-justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo sapien, egestas eu ante id, porttitor commodo est. Phasellus pellentesque luctus purus vel viverra. Morbi ornare pretium tempus. Proin a ullamcorper sem. In arcu ex, auctor id dui vel, tincidunt blandit neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer a venenatis purus. Sed posuere nisi eu mauris pharetra congue. Cras metus turpis, finibus id condimentum nec, pellentesque ut massa. Nunc tempus facilisis cursus.</p> <p class=\"mp-style-justify\">Quisque eu convallis dolor. Donec pulvinar in est a mollis. Donec tristique lacus commodo lectus pharetra maximus. Sed id urna non tellus tincidunt condimentum. Donec quis lorem consectetur, gravida felis eget, cursus dui. Sed pretium tortor mauris, quis lobortis lectus vulputate pretium. Curabitur eleifend tortor dui. In et sapien condimentum risus ornare maximus. Nunc tortor nisl, hendrerit vitae dictum eu, pulvinar vitae lectus. Mauris aliquam quam tincidunt velit interdum egestas in ut turpis. Praesent consectetur volutpat dolor id tristique. Morbi nec augue quis nibh posuere euismod egestas id justo.</p>",
                    title: "Lorem ipsum dolor sit amet (1)",
                    name: "_block_1"
                }, 
                blocks_2: {
                    content: "<p class=\"mp-style-justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo sapien, egestas eu ante id, porttitor commodo est. Phasellus pellentesque luctus purus vel viverra. Morbi ornare pretium tempus. Proin a ullamcorper sem. In arcu ex, auctor id dui vel, tincidunt blandit neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer a venenatis purus. Sed posuere nisi eu mauris pharetra congue. Cras metus turpis, finibus id condimentum nec, pellentesque ut massa. Nunc tempus facilisis cursus.</p> <p class=\"mp-style-justify\">Quisque eu convallis dolor. Donec pulvinar in est a mollis. Donec tristique lacus commodo lectus pharetra maximus. Sed id urna non tellus tincidunt condimentum. Donec quis lorem consectetur, gravida felis eget, cursus dui. Sed pretium tortor mauris, quis lobortis lectus vulputate pretium. Curabitur eleifend tortor dui. In et sapien condimentum risus ornare maximus. Nunc tortor nisl, hendrerit vitae dictum eu, pulvinar vitae lectus. Mauris aliquam quam tincidunt velit interdum egestas in ut turpis. Praesent consectetur volutpat dolor id tristique. Morbi nec augue quis nibh posuere euismod egestas id justo.</p>",
                    title: "Lorem ipsum dolor sit amet (2)",
                    name: "_block_2"
                }, 
                blocks_3: {
                    content: "<p class=\"mp-style-justify\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas leo sapien, egestas eu ante id, porttitor commodo est. Phasellus pellentesque luctus purus vel viverra. Morbi ornare pretium tempus. Proin a ullamcorper sem. In arcu ex, auctor id dui vel, tincidunt blandit neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer a venenatis purus. Sed posuere nisi eu mauris pharetra congue. Cras metus turpis, finibus id condimentum nec, pellentesque ut massa. Nunc tempus facilisis cursus. <a href=\"#\">Tes les main</a></p> ",
                    title: "Lorem ipsum dolor sit amet (3)",
                    name: "_block_3"
                }
             }  
        }
    };
    
    
/**
 * 
 * 
 */
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


/**
 * 
 * 
 */
gulp.task("build:html:editor_empty", function() {
    console.log("-- gulp is running task 'build:html:editor'");

    themeVariables.class_edit_flag = 'js-editable';
    themeVariables.class_page = 'mp-page-edit';
    themeVariables.pageType = 'editor';
    
    themeVariables.layout.layout_1_block.blocks_1.content = "!#content_block_0#!";
    themeVariables.layout.layout_1_block.blocks_1.title = "!#title_block_0#!";
    
    themeVariables.layout.layout_2_blocks.blocks_1.content = "!#content_block_0#!";
    themeVariables.layout.layout_2_blocks.blocks_1.title = "!#title_block_0#!";
    themeVariables.layout.layout_2_blocks.blocks_2.content = "!#content_block_1#!";
    themeVariables.layout.layout_2_blocks.blocks_2.title = "!#title_block_1#!";
    
    
    themeVariables.layout.layout_3_blocks.blocks_1.content = "!#content_block_0#!";
    themeVariables.layout.layout_3_blocks.blocks_1.title = "!#title_block_0#!";
    themeVariables.layout.layout_3_blocks.blocks_2.content = "!#content_block_1#!";
    themeVariables.layout.layout_3_blocks.blocks_2.title = "!#title_block_1#!";
    themeVariables.layout.layout_3_blocks.blocks_3.content = "!#content_block_2#!";
    themeVariables.layout.layout_3_blocks.blocks_3.title = "!#title_block_2#!";
    
    return gulp.src("sources/editor_empty_content.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/"));
});

/**
 * 
 * 
 */
gulp.task("build:html:layouts_sections", function() {
    console.log("-- gulp is running task 'build:html:layouts_sections'");

    themeVariables.class_edit_flag = 'js-editable';
    themeVariables.class_page = 'mp-page-edit';
    themeVariables.pageType = 'editor';
    
    themeVariables.layout.layout_1_block.blocks_1.content = "!#content_block_0#!";
    themeVariables.layout.layout_1_block.blocks_1.title = "!#title_block_0#!";
    
    themeVariables.layout.layout_2_blocks.blocks_1.content = "!#content_block_0#!";
    themeVariables.layout.layout_2_blocks.blocks_1.title = "!#title_block_0#!";
    themeVariables.layout.layout_2_blocks.blocks_2.content = "!#content_block_1#!";
    themeVariables.layout.layout_2_blocks.blocks_2.title = "!#title_block_1#!";
    
    
    themeVariables.layout.layout_3_blocks.blocks_1.content = "!#content_block_0#!";
    themeVariables.layout.layout_3_blocks.blocks_1.title = "!#title_block_0#!";
    themeVariables.layout.layout_3_blocks.blocks_2.content = "!#content_block_1#!";
    themeVariables.layout.layout_3_blocks.blocks_2.title = "!#title_block_1#!";
    themeVariables.layout.layout_3_blocks.blocks_3.content = "!#content_block_2#!";
    themeVariables.layout.layout_3_blocks.blocks_3.title = "!#title_block_2#!";
    
    
    
    gulp.src("sources/partials/common/sections/_layout_1_block.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/partials/layouts/sections/"));

    
    gulp.src("sources/partials/common/sections/_layout_2_blocks.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/partials/layouts/sections/"));

    
    return gulp.src("sources/partials/common/sections/_layout_3_blocks.html")
        .pipe(include())
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("client/partials/layouts/sections/"));
});


/**
 * 
 * 
 */
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


/**
 * 
 * 
 */
gulp.task("build:angular:app", function(){
    console.log("-- gulp is running task 'build:angular:app'");
    
    themeVariables.class_edit_flag = 'js-editable';
    themeVariables.class_page = 'mp-page-edit';
    themeVariables.pageType = 'editor';
    
    return gulp.src("./sources/angular/**")
        .pipe(preprocess({context: themeVariables})) 
        .on('error', console.log)
        .pipe(gulp.dest("./client/"));
});

/**
 * 
 * 
 */
gulp.task("build:vendors", function(){
    console.log("-- gulp is running task 'build:vendors'");
    
    gulp.src("./sources/resources/css/**")
    .pipe(copy("./client/css/", { "prefix": 3}));
    
    return gulp.src("./sources/resources/js/**")
        .pipe(copy("./client/js/", { "prefix": 3}));
});



/**
 * 
 * 
 */
gulp.task("sass", function() {
    console.log("-- gulp is running task 'sass'");
    return gulp.src('./sources/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./client/css/theme/'));
});

 
gulp.task("default", [
    "build:html:view", 
    "build:html:editor", 
    "build:html:editor_empty",
    "build:html:layouts_sections",
    "build:angular:app", 
    "build:vendors", 
    "sass"
]);