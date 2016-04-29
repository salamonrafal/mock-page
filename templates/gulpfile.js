var gulp        = require('gulp'),
    include     = require('gulp-include');

gulp.task("build:html:editor", function() {
  console.log("-- gulp is running task 'scripts'");

  return gulp.src("sources/editor.html")
    .pipe(include())
      .on('error', console.log)
    .pipe(gulp.dest("client/"));
});

gulp.task("build:html:view", function() {
  console.log("-- gulp is running task 'scripts'");

  return gulp.src("sources/view.html")
    .pipe(include())
      .on('error', console.log)
    .pipe(gulp.dest("client/"));
});
 
gulp.task("default", ["build:html:view", "build:html:editor"]);