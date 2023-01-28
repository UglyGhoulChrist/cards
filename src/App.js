import "./App.css";
import Card from "./components/Card";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <Card title="Карточка с картинкой">
        <Image />
      </Card>
      <Card title="Карточка без картинки" />
    </div>
  );
}

export default App;
