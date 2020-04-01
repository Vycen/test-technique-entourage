import React from "react";

import logo from "../../icons/logo.svg";
import './spinner.css';
import styles from "./Spinner.styles";

export default function Spinner(props) {
  return (
    <div style={styles}>
      <img src={logo} className="spinner" alt="logo"/>
    </div>
  );
}