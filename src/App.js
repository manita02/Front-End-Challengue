//import logo from './logo.svg';
//import './App.css';
import { useState } from "react";
import images from './assets/img/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [cards] = useState([
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdnaksjdnaksdjnaskaksjdnakjsdansdjasndkjansdk',
      img: images.ch_cj,
      productName: 'CJ',
      badge: images.bd_minigun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdnaksjdnaksdjnaskaksjdnakjsdansdjasndkjansdk',
      img: images.ch_ryder,
      productName: 'Ryder',
      badge: images.bd_metralleta,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_bigSmoke,
      productName: 'Big Smoke',
      badge: images.bd_AK47,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_sweet,
      productName: 'Sweet Jhonson',
      badge: images.bd_M4,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_cesar,
      productName: 'César Vialpando',
      badge: images.bd_escopeta,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_ogLoc,
      productName: 'Og Loc',
      badge: images.bd_knife,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_denisse,
      productName: 'Denisse',
      badge: images.bd_golf,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_hans,
      productName: 'Hans',
      badge: images.bd_fuego,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_ken,
      productName: 'Ken',
      badge: images.bd_franco,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_maccer,
      productName: 'Maccer',
      badge: images.bd_motosierra,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_balla,
      productName: 'Balla',
      badge: images.bd_puño,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_vago,
      productName: 'Vago',
      badge: images.bd_recortada,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_mike,
      productName: 'Mike Toreno',
      badge: images.bd_bazooka,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_poli1,
      productName: 'Poli1',
      badge: images.bd_pistola,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.ch_poli2,
      productName: 'Poli2',
      badge: images.bd_silenciador,
    }

  ])
  return (
    <div>
      <section>
        <div className="container">
          <h1>Responsive cards</h1>
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
