import  "../assets/css/home.css";
import Apropos from "../components/Home/Apropos";
import Entete from "../components/Home/Entete";
import Valeurs from "../components/Home/Valeurs";


const Home = () => {
  return (
    <div>
      <h1 className="page-title">Complexe Privé Laïque Mon Avenir</h1>
      <Entete />
      <Apropos />
      <Valeurs />
    </div>
  )
}

export default Home