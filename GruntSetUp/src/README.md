# GRUNT BASICS
>Install grunt npm into the main subfolder where your source code is - npm init
>>That will create the json file

>Then touch a Gruntfile.js and input usage code:

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      watch: {
          scripts: {
              files: [
                  "./scripts/**/*.js",
                  "!node_modules/**/*.js"
              ],
              tasks: ["eslint"],
              options: {
                  spawn: false,
              },
          }
      },
      eslint: {
          src: [
              "./scripts/**/*.js",
              "!node_modules/**/*.js"
          ]
      }
  });
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-eslint");
  // Default task(s).
  grunt.registerTask("default", ["eslint", "watch"]);
};

>Add following code to package.json file:

{
  "name": "src",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",

"devDependencies": {
  "grunt": "^1.0.2",
  "grunt-contrib-uglify-es": "git://github.com/gruntjs/grunt-contrib-uglify.git#harmony",
  "grunt-contrib-watch": "^1.0.0",
  "grunt-eslint": "^20.1.0"
}
}


>After you paste code into package.json go to terminal and type (MAKE SURE YOU’RE IN YOUR SOURCE FILE)- npm install 


>Touch a .eslintrc file and input the following code:
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 0,
        "quotes": [
            "error",
            "double"
        ],
        "eqeqeq": 2,
        "no-trailing-spaces": 2
    }
}


>Then run “grunt” in terminal and BOOM

>Add a .gitignore file and add the following to it:
DS_store
node_modules
dist


# Browserify
> from your src file run: 
npm install grunt-browserify --save-dev

>Add the following code to your Gruntfile.js (add under the "Load the plugin that provides the "uglify" task" section:
grunt.loadNpmTasks('grunt-browserify');

> add the following code to the Gruntfile.js under eslint: {} section. Make sure to add a comma after eslint {}:

       browserify: {
            dist: {
                files: {
                    '../dist/bundle.js': ['scripts/**/*.js']
                }
            }
        }

>Add the following code under grunt.registerTask() right after "eslint",:
"browserify",

>Also under the watch section and the following code under tasks after "eslint",:
"browserify"


>Start http-server from dist folder. Manually copy over the index.html over to dist file:
cp index.html ../dist (from the src file in the terminal)

>Now you have to go into index.html file and change the script file link to ./bundle.js

> then run from src in terminal:
npm install grunt-contrib-copy --save-dev

> add the following code to Gruntfile.js in the "uglify" section:
grunt.loadNpmTasks("grunt-contrib-copy");

>Add the following new task to Gruntfile.js after browserify{}:
        copy: {
            main: {
                files: [
                    // includes files within path
                    { expand: true, src: ['index.html'], dest: '../dist/', filter: 'isFile' },
                ]
            }
        }

> Now under watch add the following under file:
"index.html",

>Add the following under watch under tasks:
"copy"

> Then add the following to grunt.registerTask:
"copy",

> Now need to make sure CSS is copied over as well...add the following into the copy area under files:
 { expand: true, src: ["styles/*.css"], dest: "../dist/", filter: "isFile" }

>Add the following line to the watch files list:
"./styles/**/*.css",

>Uglify code by pasting the following into the Gruntfile.js:
,
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */"
            },
            build: {
                files: [{
                    expand: true,
                    cwd: "../dist",
                    src: "bundle.js",
                    dest: "../dist",
                    ext: ".min.js"
                }]
            }
        }

>Put the following code in dev dependencies in Gruntfile.js:
grunt.loadNpmTasks("grunt-contrib-uglify-es");

> Under Gruntfile.js in the watch section, add "uglify" under the task section before "copy":
"uglify",

>Add the following into grunt.registerTask in Gruntfile.js:
"uglify",

>Change the script tag src in the html file to:
"./bundle.min.js"
