/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const { renderToString } = require("react-dom/server");
const { ServerStyleSheet } = require("styled-components");

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(bodyComponent))
    replaceBodyHTMLString(html);
    setHeadComponents([sheet.getStyleElement()])
};