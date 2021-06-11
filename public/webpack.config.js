const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: "index.js",
  output: {
    // Set the path and filename for the output bundle (hint: You will need to use "__dirname")
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      // inject: false,
      name: 'My Progressive Budget',
      short_name: 'MyPB',
      description: 'My awesome Progressive Budget App!',
      background_color: "#01579b",
      theme_color: "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve('public/icons/icon-512x512.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join("assets", "icons")

        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]

  }
}
module.exports = config;
