import "./App.css";
import Card from "./components/Card";
import eldenRing from "./assets/eldenRing.avif";
import crossedSwords from "./assets/crossedSwords.png";
const App = () => {
  return (
    <div>
      <img id="crossed" src={crossedSwords}></img>
      <h1 className="pageTitle">Great Video Games To Try! </h1>
      <div className="videoGameContainer">
        <Card
          title="Elden Ring"
          theme="RPG"
          image={eldenRing}
          link="https://store.steampowered.com/app/1245620/ELDEN_RING/"
        ></Card>
      </div>
    </div>
  );
};

export default App;
