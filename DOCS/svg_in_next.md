npm install @svgr/webpack --save-dev

then create a file in the root folder called next.config.js
and include :

then you can import SVG like this for example:
import Node from "../src/svg/node.svg";

and use it like this <Node><Node>

module.exports = {
webpack(config) {
config.module.rules.push({
test: /\.svg\$/,
use: ["@svgr/webpack"],
});

    return config;

},
};
