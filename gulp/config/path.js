import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}`,
    files: `${buildFolder}`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/**/*.*`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: buildFolder,
  rootFolder: buildFolder,
  //   probably i wil not need fyp
  //   ftp: ``,
};
