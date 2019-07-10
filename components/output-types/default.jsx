import React from "react";
import PropTypes from "prop-types";

const DefaultOutputType = props => {
  const {
    children,
    contextPath,
    deployment,
    CssLinks,
    Fusion,
    Libs,
    MetaTags
  } = props;
  return (
    <html>
      <head>
        <title>Fusion Article</title>
        <MetaTags />
        <Libs />
        <CssLinks />
        <link
          rel="icon"
          type="image/x-icon"
          href={deployment(`${contextPath}/resources/favicon.ico`)}
        />
      </head>
      <body>
        <div id="fusion-app">{children}</div>
        <Fusion />
      </body>
    </html>
  );
};

DefaultOutputType.propTypes = {
  children: PropTypes.node,
  contextPath: PropTypes.string,
  deployment: PropTypes.func,
  CssLinks: PropTypes.object,
  Fusion: PropTypes.func,
  Libs: PropTypes.array,
  MetaTags: PropTypes.object
};

export default DefaultOutputType;
