# ![icons8-react-a-javascript-library-for-building-user-interfaces-22](https://user-images.githubusercontent.com/122254160/228746247-4eb884d5-f445-481d-93ed-b7fbe0f08704.png) React-from-scratch

# **What is React** :question:

**React is an open-source JavaScript library used for building user interfaces. It was developed by Facebook and is widely used by developers for building single-page applications (SPAs) and mobile applications.**

**React allows developers to build reusable UI components, which can be used in multiple parts of an application. It uses a declarative approach to programming, which means that developers describe what they want the user interface to look like, and React takes care of updating the user interface when the data changes.**

**React is built on the concept of a virtual DOM, which is a lightweight representation of the actual DOM. When data changes, React updates the virtual DOM and then efficiently updates the actual DOM to reflect those changes, which can result in better performance compared to traditional web applications.**

**React has a large and active community of developers, which has led to the creation of many third-party libraries and tools that can be used with React. This has made it easier for developers to build complex applications quickly and efficiently.**

**Overall, React is a popular choice for building modern, dynamic, and interactive user interfaces in web and mobile applications.**

# ![icons8-setup-22](https://user-images.githubusercontent.com/122254160/228747100-6a4be653-0947-45f6-b0f6-dabe348633cb.png) React Setup From Scratch

### Downloading and installing Node.js and npm

To publish and install packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer. **We strongly recommend using a Node version manager like [nvm](https://github.com/nvm-sh/nvm) to install Node.js and npm.** We do not recommend using a Node installer, since the Node installation process installs npm in a directory with local permissions and can cause permissions errors when you run npm packages globally.

---

**NOTE :** to download the latest version of npm, on the command line, run the following command:

```
npm install -g npm
```

---

### Checking your version of npm and Node.js

To see if you already have Node.js and npm installed and check the installed version, run the following commands:

```
node -v
npm -v
```

### Using a Node installer to install Node.js and npm

If you are unable to use a Node version manager, you can use a Node installer to install both Node.js and npm on your system.

- [Node.js installer](https://nodejs.org/en/download)
- [NodeSource installer](https://github.com/nodesource/distributions)

If you use Linux, we recommend that you use a NodeSource installer.

### OS X or Windows Node installers

If you're using OS X or Windows, use one of the installers from the [Node.js download page.](https://nodejs.org/en/download) Be sure to install the version labeled **LTS**. Other versions have not yet been tested with npm.

### Linux or other operating systems Node installers

If you're using Linux or another operating system, use one of the following installers:

- [NodeSource installer](https://github.com/nodesource/distributions) (recommended)
- One of the installers on the [Node.js download page](https://nodejs.org/en/download)

Or see this page to install npm for Linux in the way many Linux developers prefer.

# Starting a new ReactJS Project

To initialize a new Node.js project and generate a `package.json` file with default values, without prompting the user for any information.

```
npm init -y
```

---

> **NOTE :** The -y flag stands for "yes", indicating that the user accepts all the default values.

---

A `package.json` file is created in the current directory with the following default values:

```
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1" // Later you have to change this line to "start": "webpack-dev-server --hot --open",
    "build": "webpack --config webpack.config.js --mode production" // You have to add this line
  },
  "author": "",
  "license": "ISC"
}
```

After the `package.json` is completely Install for installing the React library and the ReactDOM library as dependencies in your project you need to write belowed command.

```
npm install react react-dom
```

> **Note :** It will create two files 1. node_modules and 2. package-lock.json
>
> 1. node_modules : The `node_modules folder` contains all the dependencies that your Node.js project requires, including their sub-dependencies and versions. It includes JavaScript libraries, executable files, and other files that your project may need. It's managed by npm and you generally don't need to modify its contents directly.
>
> 2. package-lock.json : The `package-lock.json` file is a JSON file that's automatically generated by npm when you run the `npm install` command. It contains a complete record of the exact versions of all the dependencies that your project requires, as well as their sub-dependencies and their respective versions.

Installing the `react` and `react-dom` libraries as dependencies in your project will enable you to create dynamic and responsive user interfaces using React and ReactDOM.

**Now,** To write modern JavaScript code and JSX syntax and compile them into a format that can be understood by older browsers you have to write belowed command.

```
npm install @babel/core @babel/preset-env @babel/preser-react babel-loader
```

> **Note :** Here's what each package does:

> `@babel/core`: This package is the core of the Babel compiler. It's responsible for parsing your JavaScript code and transforming it into a format that can be understood by different environments.
>
> `@babel/preset-env`: This package is a preset that includes a set of plugins that allow you to use the latest JavaScript features while ensuring that your code is compatible with older browsers.
>
> `@babel/preset-react`: This package is a preset that includes a set of plugins that allow you to use JSX syntax in your JavaScript code.
>
> `babel-loader`: This package is a Webpack loader that allows you to use Babel with Webpack. It's responsible for compiling your JavaScript code using the Babel compiler when you build your project.

**Now,** For configuration file for the Babel JavaScript compiler Create a `.babelrc` file . It allows you to specify how Babel should transpile your JavaScript code and write belowed code in that file.

```
{
    "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

> **Note :**
>
> `@babel/preset-react`: This preset includes plugins that allow you to use JSX syntax in your JavaScript code.
>
> `@babel/preset-env`: This preset includes plugins that allow you to use the latest JavaScript syntax while ensuring that your code is compatible with older browsers.

**Now,** To use Webpack to bundle your JavaScript code and assets, and to serve your application locally during development you have to write belowed command

```
npm install webpack webpack-cli webpack-dev-server
```

Webpack is a powerful tool for modern web development, and it can help you optimize your application's performance and reduce load times by bundling your code and assets in an efficient way.

**After that,** You are able to use webpack bundle and Now you have to create a file named `webpack.config.js` and write belowed code into that file

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
```

> **Note :**
> This code configures Webpack to build a JavaScript application in development mode, with an entry point at `./src/index.js`, an output file named `bundle.[hash].js` in the `./dist` directory, and support for processing JavaScript, CSS, and image files. The generated HTML file is based on the template at `./src/index.html`.

#### Make file structure Like this

```
my-project/
├── node_modules
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.html
│   ├── index.js
│   └── index.js
├── .babelrc
├── package-lock.json
├── package.json
└── webpack.config.js
```

link:https://webpack-app-react.netlify.app/
