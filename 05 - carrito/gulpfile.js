const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

function css() {
  return gulp
    .src("scss/app.scss")
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(
      sass({
        outputStyle: "expanded", // nested, compact, compressed
      })
    )
    .pipe(gulp.dest("css"));
}

function watchFiles() {
  gulp.watch("scss/*.scss", css);
  gulp.watch("index.html");
}

// Registrar funciones como tareas
gulp.task("css", css);
gulp.task("watch", gulp.parallel(watchFiles));
/*   "gulp": "^3.9.1",
    "gulp-autoprefixer": "^5.0.0",
    "gulp-sass": "^3.2.1" */
