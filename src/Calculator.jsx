// --------- Calculator.jsx ----------

import React, { Component } from "react";
// Importiere die Kind-Komponenten:
import Label from "./components/Label.jsx";
import Result from "./components/Result.jsx";
import Keypad from "./components/Keypad.jsx";

class Calculator extends Component {
  // Initialisiere den state im Konstruktor:
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }
  // Rufe, je nachdem welchen Wert der gedrückte Button hat, die entsprechende Hilfsfunktion auf:
  handleKeyClick(keyValue) {
    switch (keyValue) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.reset();
        break;
      case "CE":
        this.backspace();
        break;
      default:
        // Füge den Wert des gedrückten Buttons zum Eingabe-String im state hinzu:
        this.setState({
          result: this.state.result + keyValue
        });
    }
  }
  // Hilsfunktion: Berechnen
  calculate() {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
        // die oder-Verknüpfung verhindert, dass bei leerer Eingabe "undefined" in den state geschrieben wird
        // die String-Konkatenation verhindert, dass nach Auswertung eine bloße Zahl im result steht und die Anwendung der slice-Funktion im backspace fehlschlägt
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  }
  // Hilfsfunktion: Zurücksetzen
  reset() {
    this.setState({
      result: ""
    });
  }

  // Hilfsfunktion: Letzte Stelle löschen
  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1) //slice-Funktion: Start bei 0 und Ende bei -1 --> letzte Stelle entfernt
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if ("error" === this.state.result) {
      //falls: error wird im Result-Bereich angezeigt
      return !("error" === nextState.result); //dann: erneutes Anzeigen von error verhindern
    } else {
      return true; //sonst: Komponente soll neu gerendert werden
    }
  }
  componentWillUnmount() {
    let endDate = new Date();
    let diffDate = endDate - this.date;
    this.setState({
      result: diffDate
    });
    setTimeout(function() {
      // Verzögerung von 2 Sekunden
    }, 5000);
  }
  // render()-Funktion
  render() {
    // Styling für den Hintergrund des Taschenrechners:
    let backgroundStyle = {
      backgroundColor: "#20232a",
      width: "250px",
      height: "545px",
      margin: "50px 0",
      border: "4px solid #61dafb",
      borderRadius: "8px"
    };
    // Gib alle 4 Komponenten, vereint in einem div-Element, zurück:
    return (
      <center>
        <div style={backgroundStyle}>
          <img
            src={require("./logo.svg")}
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
          <Label />
          <Result value={this.state.result} />
          <Keypad onKeyClick={e => this.handleKeyClick(e)} />
        </div>
      </center>
    );
  }
}

export default Calculator;
