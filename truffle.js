module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.scss"
    ],
    "images/": "images/",
    "semantic/": "semantic/",
    "fullpage.js/": "fullpage.js/",
    "jquery-3.1.0.min.js": "jquery-3.1.0.min.js"
  },
  deploy: [
    "ShareAccount"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
