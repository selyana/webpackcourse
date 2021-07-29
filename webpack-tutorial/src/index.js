import React from "react";
import ReactDOM from "react-dom";

import { greet } from "./utils";

const element = React.createElement("h1", {}, greet("Artyom"));

ReactDOM.render(element, document.querySelector("#root"));
