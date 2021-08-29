import React from "react";
import AuthProvider from "./AuthProvider";

const GlobalProvider = (props) => <AuthProvider>{props.children}</AuthProvider>;

export default GlobalProvider;