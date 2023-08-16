import gulp from "gulp";
// path import
import { path } from "./gulp/config/path.js";
// tasks import
// import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { scripts } from "./gulp/tasks/scripts.js";
// plugins
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

function watcher() {
  //   gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.scripts, scripts);
}
//  main tasks
const mainTask = gulp.parallel(html, scss, scripts);
// gulp task execution scenario
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
// default task execution
gulp.task("default", dev);

// const gulp = require("gulp");
// const createGulpSass = require("gulp-sass");
// const sassEngine = require("sass");
// const sass = createGulpSass(sassEngine);
// const del = require("del");
// const concat = require("gulp-concat");
// const cleanCSS = require("gulp-clean-css");
// const uglifyJs = require("gulp-uglify");
// const autoprefixer = require("gulp-autoprefixer");
// const browserSync = require("browser-sync").create();
// const imagemin = require("gulp-imagemin");
// const purgeCss = require("gulp-purgecss");

// const compile = function () {
//   gulp.src("src/**/*.html").pipe(gulp.dest("./dist/"));
//   gulp
//     .src("./src/**/*.js")
//     .pipe(concat("scripts.min.js"))
//     .pipe(uglifyJs())
//     .pipe(gulp.dest("./dist/scripts/"));
//   return gulp
//     .src("./src/styles/styles.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(
//       autoprefixer({
//         cascade: false,
//       })
//     )
//     .pipe(cleanCSS({ compatibility: "ie8" }))
//     .pipe(gulp.dest("./dist/styles/"))
//     .pipe(browserSync.stream());
// };
// gulp.task("build", function () {
//   del.sync("dist");
//   gulp.src("./src/img/**").pipe(imagemin()).pipe(gulp.dest("./dist/img/"));
//   gulp.src("./src/styles/styles.scss").pipe(
//     purgeCss({
//       content: ["src/**/*.html"],
//     })
//   );
//   compile();
// });
// gulp.task("dev", function () {
//   browserSync.init({
//     server: "./dist",
//   });
//   compile();
//   gulp.watch(
//     ["./src/**/*.scss", "./src/**/*.js", "./src/*.html", "./src/img/*"],
//     compile
//   );
//   gulp.watch("./src/*.html").on("change", browserSync.reload);
// });
