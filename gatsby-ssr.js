/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { renderToString } from require("react-dom/server");
import { ServerStyleSheet } from require("styled-components");

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(bodyComponent))
    replaceBodyHTMLString(html);
    setHeadComponents([sheet.getStyleElement()])
};