### 1.3.7 (November 30, 2015)

* Add imagemin-jpegoptim plugin to "images" gulp task

### 1.3.6 (October 21, 2015)

* Replace Yandex.Metrika and Google Analytics code from _footer.jade to separate jade-snippets and include them in _footer.jade
* Add 'scss-doc' gulp task for SCSS documentation generating

### 1.3.5 (October 21, 2015)

* Fix outdate cap wrapper and oppened classes

### 1.3.4 (October 19, 2015)

* Add fonts preload meta-tag in head

### 1.3.3 (October 19, 2015)

* Set jaguar template for jsDoc3

### 1.3.2 (October 18, 2015)

* add closing outdate modal by press Esc on keyboard (closeAMGOutdateBrowserModal.js)

### 1.3.1 (October 18, 2015)

* fix regexp in browser versions (getOutDateBrowserLink.js)

### 1.3.0 (October 17, 2015)

* add detect browser js (detectBrowser.js)
* add AStraMediaGroup outdate browser modal cap (for IE 7/8/9, Safari 7, Chrome/Opera 38,38,49, Firefox 40)

### 1.2.0 (October 16, 2015)

* delete much rules from .gitignore. It was mistake to add them
* delete svgmin from svg-sprite task
* add Async CSS Load (loadCSS.js)
* remove font-family from ./.csscomb.json (fonts did not working with it)
* change js load from async to defer in footer
* add jsdoc gulp task for JavaScript documentation generating

### 1.1.4 (October 7, 2015)

* change gulp tasks for svg and images for better optimisation

### 1.1.3 (October 5, 2015)

* remove svg-min and change it to imagemin in gulp/svg

### 1.1.2 (October 5, 2015)

* replace sass include font-face to _typography.scss
* fix example in main.js for lazyload

### 1.1.1 (October 4, 2015)

* add design folder to store .psd and over design files locally
* fix .csscomb.json

### 1.1.0 (October 4, 2015)

* fix project name on package.json
* replace gulp task to separated files (all tasks are in ./gulp folder)
* add .csscomb.json to configure css coding style formatter

### 1.0.4 (October 2, 2015)

* add project README.md and CHANGELOG.md
* add rules to ./.gitignore for ignoring all files not from template. Need to soft template update when working on any project
* replace amg-webstarter-kit README.md and CHANGELOG.md to current folder
* fix lazyload params in ./src/js/main.js
* move version to 1.0.4

### 1.0.3 (October 2, 2015)

* add CHANGELOG, README
* add ./.htaccess template
* add ./editorconfig template
* add Google Analytics template in src/jade/includes/_footer.jade
* add Yandex.Metrika template in src/jade/includes/_footer.jade
* update ./humans.txt 
* fix sass-mq vars in src/scss/includes/_variables.scss
* fix gulp 'txt' task src
* move version to 1.0.3
