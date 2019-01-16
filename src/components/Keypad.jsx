// ---------- Keypad.jsx ----------

import React, { Component } from "react";

class Keypad extends Component {
  // Rufe über die props die onKeyClick()-Funktion des jeweiligen Event-Auslösers (= Button) auf
  handleClick(e) {
    this.props.onKeyClick(e.target.value);
  }

  render() {
    // Styling für die Buttons:
    let keyStyle = {
      backgroundColor: "#20232a",
      color: "#61dafb",
      border: "2px solid #61dafb",
      padding: "3px",
      margin: "5px",
      borderRadius: "8px",
      width: "50px",
      height: "50px",
      fontFamily: "Roboto, sans-serif"
    };
    // Array, das die Werte der Buttons enthält:
    let keyValues = [
      "(",
      "CE",
      ")",
      "C",
      "1",
      "2",
      "3",
      "+",
      "4",
      "5",
      "6",
      "-",
      "7",
      "8",
      "9",
      "*",
      ".",
      "0",
      "=",
      "/"
    ];
    // Deklariere ein leeres Array zur Speicherung der fertigen Buttons
    var keyArray = [];
    // Für jeden Eintrag des Werte-Arrays...
    for (var i = 0; i <= 19; i++) {
      // ... füge einen neuen Button mit dem entsprechenden Wert aus dem Werte-Array zum Button-Array hinzu
      keyArray.push(
        <button
          value={keyValues[i]}
          style={keyStyle}
          onClick={e => this.handleClick(e)}
        >
          {keyValues[i]}
        </button>
      );
    }
    // Verpacke das Button-Array in einen div und gebe es zurück
    return <div>{keyArray}</div>;
  }
}

export default Keypad;
