/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import { Themes } from "./types";

const App = () => {
  const [theme, setTheme] = useState<Themes>(Themes.default);

  return <div className={theme}>Hello</div>;
};

export default App;
