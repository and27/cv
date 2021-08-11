import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container/Container";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
