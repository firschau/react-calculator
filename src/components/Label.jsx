// ---------- Label.jsx ----------

import React, { Component } from "react";

class Label extends Component {
  render() {
    // Styling für das Label:
    let labelStyle = {
      backgroundColor: "#20232a",
      color: "#61dafb",
      fontSize: "15",
      fontFamily: "Roboto, sans-serif",
      padding: "3px",
      margin: "10px",
      width: "200px",
      borderRadius: "8px"
    };
    // Gib das gestylte Label zurück
    return <h2 style={labelStyle}>React Calculator</h2>;
  }
}

export default Label;
