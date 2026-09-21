import "./App.css";
import Card from "./components/Card";
const App = () => {
  return (
    <div>
      <h1>Great Video Games To Try! </h1>
      <div className="videoGameContainer">
        <Card title="Elden Ring" theme="RPG" image></Card>
      </div>
    </div>
  );
};

export default App;
