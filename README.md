# Beginners-Webpack
Repo which concentrates only on the webpack configs.

Webpack config file contains the below: 

Loaders: Loaders are transformations that are applied on the source code of a module. They allow you to pre-process files as you import or “load” them. Thus, loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle front-end build steps. Loaders can transform files from a different language (like TypeScript) to JavaScript, or inline images as data URLs. Loaders even allow you to do things like import CSS files directly from your JavaScript modules!

1. **babel-loader**: To bundle the es6 code by transpiling it to vanila javascript.
2. **css-loader**: To bunlde the CSS.
3. **style-loader**: To update bundled CSS in a link.
4. **url-loader**: To load images, which requires **file-loader**.
5. **image-webpack-loader**: To bundle images.

Plugins: Plugins are the backbone of webpack. webpack itself is built on the same plugin system that you use in your webpack configuration!

1. *extract-text-webpack-plugin*: For saving the bundled CSS in a new file.

The `webpack.config.js` serves as a **generic config** for the most of es6 related projects. 
