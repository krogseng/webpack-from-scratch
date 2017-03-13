<img src="https://cloud.githubusercontent.com/assets/478864/22186847/68223ce6-e0b1-11e6-8a62-0e3edc96725e.png" width=30> Webpack from Scratch
===

Create a basic react app that uses webpack and webpack-dev-server that you have configured and setup. 

Include npm scripts for:

* `build` - builds webpack to a specified (by you) directory
* `start` - starts the webpack dev server for dev mode

Your config should include:

* An outputted `index.html` file
* The following loaders:
  * babel for jsx
  * eslint preloader for linting
  * sass-loader, css-loader, and style-loader for using `.scss` files both at a global level 
  and component-specific css

## Rubric *10pts*
- webpack.config.js *2pts*
- output index.html with bundle in script *1pt*
- Handles React (linting and jsx build) *3pts*
- Handles global and component-level `scss` *4pts*

