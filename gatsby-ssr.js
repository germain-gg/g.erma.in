/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(bodyComponent))
    replaceBodyHTMLString(html);
    setHeadComponents([sheet.getStyleElement()])
};