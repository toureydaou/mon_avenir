import reussite from "../../assets/img/icons8-best-seller-48.png"
import academie from "../../assets/img/academie.png"
import collaboration from "../../assets/img/collaboration.png"
import integrite from "../../assets/img/integrite.png"
import communaute from "../../assets/img/communaute.png"
import respect from "../../assets/img/respect.png"
import CardValeur from "./valeurs/CardValeur"

const valeurs = [
    {
        image: academie,
        titre: 'Excellence Académique ',
        description: 'Nous nous engageons à fournir des programmes académiques exceptionnels qui inspirent la curiosité intellectuelle, favorisent la pensée critique et préparent nos élèves à relever les défis du monde moderne.'
    },
    {
        image: respect,
        titre: 'Respect et Inclusion ',
        description: "Chez nous, la diversité est célébrée, et chaque voix est valorisée. Nous cultivons un environnement où le respect mutuel et l'inclusion sont les fondements de relations harmonieuses au sein de la communauté éducative."
    },
    {
        image: integrite,
        titre: 'Intégrité',
        description: " Nous encourageons l'intégrité sous toutes ses formes, promouvant l'honnêteté, la responsabilité personnelle et le sens éthique. Nos élèves grandissent en leaders conscients de l'impact de leurs actions sur le monde qui les entoure."
    },
    {
        image: collaboration,
        titre: 'Collaboration',
        description: "La réussite éducative est le fruit d'une collaboration active entre élèves, enseignants, parents et personnel. Nous valorisons le pouvoir de travailler ensemble pour créer un environnement d'apprentissage stimulant."
    },
    {
        image: communaute,
        titre: 'Engagement Communautaire',
        description: 'Nous sommes fiers de notre engagement envers la communauté. Nos élèves sont encouragés à devenir des citoyens responsables et à contribuer de manière positive à la société..'
    },
    {
        image: reussite,
        titre: 'Épanouissement Personnel',
        description: "Au-delà des réussites académiques, nous valorisons le bien-être émotionnel et personnel de chaque élève. Nous encourageons l'épanouissement individuel et le développement de compétences sociales cruciales."
    },

]

const Valeurs = () => {



    return (
        <div>
            <div className="valeurs">
                <h3 className="section-title">Nos Valeurs Fondamentales</h3>
                <div className="valeurs-blocs">
                    {valeurs.map((valeur, index) => <CardValeur key={index} image={valeur.image} titre={valeur.titre} description={valeur.description} index={index} />)}
                </div>
            </div>
        </div>
    )
}

export default Valeurs