# `SchoolBuddy-master`

AngularJS Routing In Depth Course repository

## Getting Started

To get you started you can simply clone the `SchoolBuddy-master` repository and install the dependencies:

### Prerequisites

You need git to clone the `SchoolBuddy-master` repository..

We also use a number of Node.js tools to initialize and test `SchoolBuddy-master`. You must have Node.js
and its package manager (npm) installed.

### Clone `SchoolBuddy-master`

Clone the `SchoolBuddy-master` repository using git:

```
git clone https://github.com/raomukesh/SchoolBuddy-master.git
cd SchoolBuddy-master
```

If you just want to start a new project without the `SchoolBuddy-master` commit history then you can do:

```
git clone --depth=1 https://github.com/raomukesh/SchoolBuddy-master.git <your-project-name>
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].