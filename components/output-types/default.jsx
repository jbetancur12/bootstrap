import React from "react";
import PropTypes from "prop-types";
import getProperties from "fusion:properties";

//import "bootstrap/dist/css/bootstrap.css";
//import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"
// import "../utilities/bootstrap"

import "../features/global/_styles/custom.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import "../features/global/_styles/header.scss";
import "../features/global/_styles/_register.scss";

const DefaultOutputType = props => {
  const {
    arcSite = getProperties().sites[0],
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
          rel="stylesheet"
          href={deployment(
            `${contextPath}/resources/dist/${arcSite}/css/style.css`
          )}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={deployment(`${contextPath}/resources/favicon.ico`)}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div id="fusion-app" className="container-fluid">
          {children}
        </div>
        <Fusion />
      </body>
    </html>
  );
};

DefaultOutputType.propTypes = {
  arcSite: PropTypes.string,
  children: PropTypes.node,
  contextPath: PropTypes.string,
  deployment: PropTypes.func,
  CssLinks: PropTypes.object,
  Fusion: PropTypes.func,
  Libs: PropTypes.array,
  MetaTags: PropTypes.object
};

export default DefaultOutputType;
