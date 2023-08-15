import replace from "gulp-replace"; // search and change
import plumber from "gulp-plumber"; // error handler
import notify from "gulp-notify"; // notification (hints
import browsersync from "browser-sync";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
};
