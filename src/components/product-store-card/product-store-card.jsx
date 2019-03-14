import React, { Component } from 'react';

import Button from '../button/button';
import './product-store-card.css';

class ProductStoreCard extends Component {
  render() {
    return (
      <div className="ProductStoreCard">
        <div className="Product-closeButtton">
          <div className="Stub" />
        </div>
        <div className="ProductStoreCard-flexWrapper">
          <div className="ProductStoreCard-imageColumn">
            <img
              className="ProductStoreCard-image"
              src="https://cs8.pikabu.ru/post_img/2016/01/28/8/14539843261780265.jpg"
              alt=""
            />
          </div>
          <div className="ProductStoreCard-contentColumn">
            <div className="ProductStoreCard-textContent">
              <div className="ProductStoreCard-title">Картофель</div>
              <div className="ProductStoreCard-information">Количество: 10</div>
              <div className="ProductStoreCard-information">Цена: 1</div>
            </div>
            <div className="ProductStoreCard-buttonContent">
              <div className="ProductStoreCard-button">
                <Button title="Добавить в корзину" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductStoreCard;
