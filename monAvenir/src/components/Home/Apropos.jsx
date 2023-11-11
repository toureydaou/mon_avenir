/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import ahmed from "../../assets/img/ahmed.jpg"
import { useEffect } from "react";



const Apropos = () => {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const revealImage = document.getElementById('revealImage');

            //console.log('image ', revealImage.getBoundingClientRect().top)

            if (revealImage && revealImage.getBoundingClientRect().top < 550) {
                setIsVisible(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'event listener lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div>
            <div className="apropos">
                <h3 className="section-title">A propos de nous</h3>
                <div className="image-cadre">
                    <img className={`hidden-image ${isVisible ? 'image-visible' : ''}`} id="revealImage" src={ahmed} />
                </div>
                <div>
                    <p>
                        Le Complexe Mon Avenir n'est pas simplement une institution éducative; elle est le fruit d'une histoire riche et d'une vision partagée. Fondée en 1994 par Madame ISSA-TOURÉ Zénabou, notre école a émergé de la passion commune de visionnaires éducatifs qui rêvaient de créer un lieu où chaque élève pourrait s'épanouir.
                    </p>
                    <p>
                        Au fil des années, nous avons tissé une toile d'excellence académique, de dévouement enseignant et de réussites étudiantes. Chaque chapitre de notre histoire a été marqué par des moments significatifs, des évolutions pédagogiques et des témoignages inspirants de nos élèves.
                    </p>
                    <p>
                        Aujourd'hui, le Complexe Mon Avenir continue d'écrire son histoire, façonnée par une communauté engagée de parents, d'enseignants et d'élèves. Notre engagement envers l'éducation de qualité demeure ancré dans les valeurs qui ont guidé nos fondateurs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Apropos