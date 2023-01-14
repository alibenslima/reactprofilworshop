import { Children } from "react";
import "./App.css";
import DetailProfil from "./profil/DetailProfil/DetailProfil";

const personne = {
  id: Math.random(),
  fullName: "Salah",
  bio: "Sport Men",
  profession: "football player",
};

const handleName = (nameuser) =>
  alert(`the name of the profile user is ${nameuser}`);
function App() {
  return (
    <div
      className="App"
      style={{
        display: "wrap",
        width: "450px",
        height: "450px",
        borderRadius: "100%",
        alignItems: "center",
        marginLeft: "650px",
      }}
    >
      <DetailProfil per={personne} clicfunc={handleName}>
        <img
          src="https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png"
          alt="ahmed"
          style={{ width: "140px", height: "140px", borderRadius: "100%" }}
        />
      </DetailProfil>
    </div>
  );
}

export default App;
