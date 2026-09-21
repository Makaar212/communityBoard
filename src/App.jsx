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

        <Card
          title="Crimson Desert"
          theme="Adventure"
          image="https://cdn1.epicgames.com/spt-assets/f9616d900e1048a29ee9ffe9523c1594/crimson-desert-191ki.jpg"
          link="https://store.steampowered.com/app/3321460/Crimson_Desert_Enhanced/"
        ></Card>

        <Card
          title="RDR2"
          theme="Action-Adventure"
          image="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/red-dead-redemption-2-poster.jpg"
          link="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
        ></Card>

        <Card
          title="Portal 2"
          theme="Platform-Puzzle"
          image="https://tse2.mm.bing.net/th/id/OIP.M-dagBoDNRWMuMRUvsjFegAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          link="https://store.steampowered.com/app/620/Portal_2/"
        ></Card>

        <Card
          title="Prototype 2"
          theme="Action-Adventure"
          image="https://tse3.mm.bing.net/th/id/OIP.CMuoLWHY_d0J0WR-LueCCwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          link="https://store.steampowered.com/app/115320/Prototype_2/"
        ></Card>

        <Card
          title="Peak"
          theme="Adventure"
          image="https://assets-prd.ignimgs.com/2025/06/23/peak-1750699534248.jpg"
          link="https://store.steampowered.com/app/3527290/PEAK/"
        ></Card>

        <Card
          title="Control"
          theme="Supernatural-Action"
          image="https://tse3.mm.bing.net/th/id/OIP.nvJ1aWOgpUcYOMsf78cpEwHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          link="https://store.steampowered.com/app/870780/CONTROL_Ultimate_Edition/"
        ></Card>

        <Card
          title="Arkham Knight"
          theme="Action"
          image="https://www.giantbomb.com/a/uploads/scale_medium/8/82063/2606852-keyfull%209237457203.jpg"
          link="https://store.steampowered.com/app/208650/Batman_Arkham_Knight/"
        ></Card>

        <Card
          title="Terraria"
          theme="RPG"
          image="https://th.bing.com/th/id/R.58e3f24d692487efe7e20c5f1858403a?rik=qmHGH4o8gCLuMA&pid=ImgRaw&r=0"
          link="https://store.steampowered.com/app/105600/Terraria/"
        ></Card>

        <Card
          title="Doom"
          theme="Shooter"
          image="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg?t=1750784856"
          link="https://store.steampowered.com/app/379720/DOOM/"
        ></Card>

        <Card
          title="Arc Raiders"
          theme="Extraction Shooter"
          image="https://www.popularairsoft.com/sites/default/files/2024-08/arcraiders.jpg"
          link="https://store.steampowered.com/app/1808500/ARC_Raiders/"
        ></Card>

        <Card
          title="Shadow of War"
          theme="Action-Fantasy"
          image="https://image.api.playstation.com/cdn/UP1018/CUSA04439_00/OqChuTHT6ANrFH7PgjlOTelLPqmOBSMn.png"
          link="https://store.steampowered.com/app/356190/Middleearth_Shadow_of_War/"
        ></Card>
      </div>
    </div>
  );
};

export default App;
