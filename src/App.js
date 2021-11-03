import Container from "./components/Container/Container";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

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
