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
      img: images.img1,
      productName: 'Ryder',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdnaksjdnaksdjnaskaksjdnakjsdansdjasndkjansdk',
      img: images.img1,
      productName: 'Alexia',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
    },
    {
      text: 'aksjndajksdjansdkasjdnasjdkasjdnasdjaakjsdjasndkajsdnakjsdna',
      img: images.img1,
      productName: 'Esteban',
      badge: images.gun,
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
