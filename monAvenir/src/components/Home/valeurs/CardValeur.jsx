/* eslint-disable react/prop-types */


const CardValeur = (props) => {
  return (
    <div>
      <div className="bloc">
        <div className="valeur">
          <div className="logo-container">
            <img src={props.image} />
          </div>
          <p className={`titre ${props.index % 2 === 0 ? 'titreEven' : 'titreOdd'}`}>{props.titre}</p>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardValeur