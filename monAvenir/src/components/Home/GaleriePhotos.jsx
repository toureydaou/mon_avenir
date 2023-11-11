import photo1 from '../../assets/img/ce1.jpg'
import photo2 from '../../assets/img/cm2.jpg'
import photo3 from '../../assets/img/primaire.jpg'
import photo4 from '../../assets/img/maternelle.jpg'
import photo5 from '../../assets/img/recreation.jpg'
import photo6 from '../../assets/img/recreation2.jpg'
import photo7 from '../../assets/img/recreation3.jpg'
import photo8 from '../../assets/img/recreation4.jpg'
import photo9 from '../../assets/img/petit.jpg'
import photo10 from '../../assets/img/maternelle.jpg'
import { useEffect, useState } from 'react'


const GaleriePhotos = () => {

    const [isVisible, setIsVisible] = useState([]);

    useEffect(() => {
        const images = document.querySelectorAll('.galerie img');

        function displayImagesProgressive() {
            const newVisibleStates = Array.from(images).map((image) => image.getBoundingClientRect().top < 600);
            setIsVisible(newVisibleStates);
        }

        window.addEventListener('scroll', displayImagesProgressive);

        return () => {
            window.removeEventListener('scroll', displayImagesProgressive);
        };
    }, []);

    const photos = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
        photo9,
        photo10
    ]

    return (
        <div>
            <div className="galerie">
                <h3 className="section-title">Galerie Photo</h3>
                <div className="photos">
                    {photos.map((photo, index) => <img key={index} className={`photo ${isVisible[index] ? 'display' : ''}`} src={photo} />)}
                </div>
            </div>
        </div>
    )
}

export default GaleriePhotos