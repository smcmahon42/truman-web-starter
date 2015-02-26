# Overview

This is a front-end starter kit for websites and apps based on Bourbon and Neat, utilizing Gulp for the build process.

## Technology

* [Bower](http://bower.io/) - Front-end package management
* [Gulp](http://gulpjs.com/) - Streaming build system
* [Sass](http://sass-lang.com/) - Syntactically Awesome Style Sheets
* [Bourbon](http://bourbon.io/) - Lightweight mixin library for Sass
* [Neat](http://neat.bourbon.io/) - Lightweight semantic grid framework for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io/) - Scaffold styles, variables and structure for Bourbon projects

### Bower Packages

Bower packages are installed into the `_src/bower` folder. By default, the following packages are included as a reasonable starting point. Feel free to modify them for your project.

* `jquery`
* `bourbon`
* `neat`
* `normalize-scss`

Packages added to `bower.json` and installed using `bower install --save-dev [package-name]`. See the [Bower website](http://bower.io/) for more details.

## Getting Started

### Clone or Download the Repo

Either way, Clone or Download the zip to get the files.

### Edit the gulpfile.js

The gulpfile is set up to run right out of the box, but you will need to make a few adjustmets specific to your site. 

* Check line 93, replace http://local.trumanstarter.com with your local url.
* If desired, you can change your asset file destination. Currently all compiled files are placed in public/assets/ (js and css respectivly)

You may notice that the folder public/assets is missing. This is because the assets folder is generated through gulp. This folder will appear on your local setup once you run gulp.

### Edit your Bitters

#### Fonts

It's a good idea to get your fonts set up right away. Weather you are using TypeKit, Google Fonts, or anyting of the like, you will want to set up a variable at the top of 
scss>base>_variables.scss. Set a variable that will be used in a font-family attribute. I.E. $example-font: "example-font", sans-serif;

#### Grid Settings

You may need to adjust your Neat Settings in scss>base>_grid-settings.scss. Also within this file are variables set up with Neat's "new-breakpoint" function. [New Breakpoint](http://thoughtbot.github.io/neat-docs/latest/#new-breakpoint) is used with Neat's "[Media()](http://thoughtbot.github.io/neat-docs/latest/#media)" Mixin. I recommend leaving the $medium-screen-up and $large-screen-up variables set as-is. 

Example of usage that compiles to a media query where attribues within media() are visible on medium screens and larger ($medium-screen-up is defined in _grid-settings.scss)

        .element {
          @include media($medium-screen-up) {
            @include span-columns(4);
          }
        }

### Edit anything else you need

This is a starter package, so we hope it keeps us all on the same page and makes for easy startup of new projects

