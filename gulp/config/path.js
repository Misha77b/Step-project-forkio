import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    images: `${buildFolder}/images`,
    scripts: `${buildFolder}/scripts`,
    css: `${buildFolder}/styles`,
    html: `${buildFolder}`,
    // files: `${buildFolder}`,
  },
  src: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
    scripts: `${srcFolder}/scripts/script.js`,
    svg: `${srcFolder}/images/**/*.svg`,
    scss: `${srcFolder}/styles/styles.scss`,
    html: `${srcFolder}/*.html`,
    // files: `${srcFolder}/**/*.*`,
  },
  watch: {
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    scripts: `${srcFolder}/scripts/**/*.js`,
    scss: `${srcFolder}/styles/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    // files: `${srcFolder}/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: buildFolder,
  rootFolder: buildFolder,
  //   probably i wil not need fyp
  //   ftp: ``,
};
