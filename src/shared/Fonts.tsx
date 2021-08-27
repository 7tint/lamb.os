import React from "react";

import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "DisposableDroidBB";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/DisposableDroidBB/Disposable-Droid-BB.ttf) format("truetype");
      }
      `}
  />
);

export default Fonts;
