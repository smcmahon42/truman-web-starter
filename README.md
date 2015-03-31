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

Packages can added to `bower.json` and installed using `bower install --save-dev [package-name]`. See the [Bower website](http://bower.io/) for more details.

## Getting Started - OS X

Note, the following makes use of a CLI and Git, among other things. If those are new to you, the following will be rough.

### Prerequisites

Before you can begin production, install the following:
* [Xcode](https://developer.apple.com/xcode/downloads/) - Apple software framework. It’s a whopping 6gb, make sure you have room.
* [Git](http://git-scm.com/) - Modern version control.
* [Homebrew](http://brew.sh/) - OS X package manager. Makes life easy.

### Installing Node

First make sure Homebrew is working properly. Run `$ brew doctor` Don’t proceed until you see “Your system is ready to brew.”

Now you’re ready to install [Node](https://nodejs.org/). Node is a platform for JavaScript-based workflow. Includes NPM (Node Package Manager).

`$ brew install node` - Follow inline instructions if you need to muscle through some snags.

To make sure Node and NPM are working properly, run `$ node -v` and `$ npm -v`. If successfully installed, this will return the versions.

### Beginning production

Every project starts with the Truman Web Starter.

`$ git clone https://github.com/TrumanDev/truman-web-starter.git`

If you don’t have access to the TrumanDev GitHub account, hit up @Coppa.

### Installing Gulp

Now you’re ready to install [Gulp](http://gulpjs.com/).

1. `$ npm config set prefix /usr/local` - To make sure you’re installing to your root and not your User directory.
2. `$ npm install -g gulp`