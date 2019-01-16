// ---------- Result.jsx ----------

import React, { Component } from "react";

class Result extends Component {
  render() {
    // Styling für das Display:
    let resultStyle = {
      backgroundColor: "#20232a",
      color: "#61dafb",
      border: "2px solid #61dafb",
      margin: "10px",
      borderRadius: "8px",
      width: "200px",
      height: "50px",
      fontFamily: "Roboto, sans-serif",
      textAlign: "center",
      padding: "10px 0",
      overflow: "auto"
    };
    // Übergebe dem zurückzugebenden Display den aktuellen Wert der Berechnung, also der Wert des state, über die props und lass diesen Wert vom Display anzeigen:
    return <p style={resultStyle}>{this.props.value}</p>;
  }
}

export default Result;
