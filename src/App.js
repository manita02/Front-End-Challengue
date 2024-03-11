//import logo from './logo.svg';
//import './App.css';
import { useState } from "react";
import images from './assets/img/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [cards] = useState([
    {
      text: 'He engages in various activities to grow his own empire.',
      img: images.ch_cj,
      productName: 'CJ',
      badge: images.bd_minigun,
    },
    {
      text: 'He is an impulsive, ruthless individual with selfish ambitions.',
      img: images.ch_ryder,
      productName: 'Ryder',
      badge: images.bd_metralleta,
    },
    {
      text: 'He is known for his imposing size and insatiable appetite for fast food.',
      img: images.ch_bigSmoke,
      productName: 'Big Smoke',
      badge: images.bd_AK47,
    },
    {
      text: 'He is the older brother of CJ, leader of the Grove Street gang.',
      img: images.ch_sweet,
      productName: 'Sweet Johnson',
      badge: images.bd_M4,
    },
    {
      text: 'He is a member of the band Los Aztecas, a Mexican gang.',
      img: images.ch_cesar,
      productName: 'César Vialpando',
      badge: images.bd_escopeta,
    },
    {
      text: 'He is an aspiring rapper and member of the band Grove Street.',
      img: images.ch_ogLoc,
      productName: 'OG Loc',
      badge: images.bd_knife,
    },
    {
      text: 'She is an African American woman who lives in Ganton and is CJ neighbor.',
      img: images.ch_denisse,
      productName: 'Denise Robinson',
      badge: images.bd_golf,
    },
    {
      text: 'He is a German student who resides in San Fierro, the city based on San Francisco.',
      img: images.ch_hans,
      productName: 'Hans Oberlander',
      badge: images.bd_fuego,
    },
    {
      text: 'He is a lawyer with many connections in the world of Los Santos',
      img: images.ch_ken,
      productName: 'Ken Rosenberg',
      badge: images.bd_franco,
    },
    {
      text: 'He is a British musician who is part of the band "The Gurning Chimps".',
      img: images.ch_maccer,
      productName: 'Maccer',
      badge: images.bd_motosierra,
    },
    {
      text: 'He is the main rival of the Grove Street gang.',
      img: images.ch_balla,
      productName: 'Balla',
      badge: images.bd_puño,
    },
    {
      text: 'The Vagos have a rivalry with other gangs, such as the Grove Street Families and the Ballas.',
      img: images.ch_vago,
      productName: 'Vago',
      badge: images.bd_recortada,
    },
    {
      text: 'He is a US government agent who works for an intelligence agency.',
      img: images.ch_mike,
      productName: 'Mike Toreno',
      badge: images.bd_bazooka,
    },
    {
      text: 'He is a corrupt officer of the Los Santos Police Department.',
      img: images.ch_poli1,
      productName: 'Eddi Pulaski',
      badge: images.bd_pistola,
    },
    {
      text: 'He is a corrupt member of the Crime Control Unit that is involved in illegal activities.',
      img: images.ch_poli2,
      productName: 'Frank Tenpenny',
      badge: images.bd_silenciador,
    }

  ])
  return (
    <div>
      <section>
        <div className="container">
          <h1>GTA SA - Characters</h1>
          <div className="card-container">
            {
              cards.map((card, i) => (
                <div key={i} className="card">
                  {/* 
                  <div className="quantity">
                    <button className="btn minus" type="button">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input type="text" value="1" id="qtyInput"></input>
                    <button className="btn minus" type="button">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                  */}
                  <p className="on-sale">ON SALE</p>
                  <div className="point"></div>
                  <span className="stock-button">In stock</span>
                  <img src={card.img} className="img-product" alt="img" />
                  <p className="product-name">{card.productName}</p>
                  <img src={card.badge} className="badge" alt="badge" />
                  <span className="price">$480.23</span>
                  <span className="old-price">$900.00</span>
                  <p className="description">{ card.text }</p>
                  <div className="card-content">
                  <a href="" className="btn-details">DETAILS</a>
                  <a href="" className="btn-add">ADD</a>
                  <FontAwesomeIcon className="buy-card" icon={faShoppingCart} />
                    {/*<h3>{ card.title }</h3>
                    
                    <a href="" className="card-button">{card.button}</a>
                  */}
                  </div>
                </div>
              ))
            }    
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default App;
