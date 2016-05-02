var gulp        = require('gulp'),
    include     = require('gulp-include'),
    preprocess = require('gulp-preprocess')
    
    themeVariables = {
		class_main: 'mp-container', 
		class_page: 'mp-default',
		class_edit: ''
	};

gulp.task("build:html:editor", function() {
  console.log("-- gulp is running task 'scripts'");

  themeVariables.class_edit = 'js-editable';
  themeVariables.class_page = 'mp-page-edit';
  
  return gulp.src("sources/editor.html")
    .pipe(include())
    .pipe(preprocess({context: themeVariables})) 
    .on('error', console.log)
    .pipe(gulp.dest("client/"));
});

gulp.task("build:html:view", function() {
  console.log("-- gulp is running task 'scripts'");

  themeVariables.class_page = 'mp-page-view';
  
  return gulp.src("sources/view.html")
    .pipe(include())
    .pipe(preprocess({context: themeVariables})) 
    .on('error', console.log)
    .pipe(gulp.dest("client/"));
});
 
gulp.task("default", ["build:html:view", "build:html:editor"]);