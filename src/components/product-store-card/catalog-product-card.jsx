import React, { Component } from 'react';

import Button from '../button/button';

import './catalog-product-card.css';

class CatalogProductCard extends Component {
  render() {
    return (
      <div className="CatalogProductCard">
        <div className="Product-closeButtton">
          <div
            className="Stub"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: '#e3e3e3'
            }}
          />
        </div>

        <div className="CatalogProductCard-grid">
          <div className="CatalogProductCard-imageColumn">
            <img
              className="CatalogProductCard-image"
              src="https://cs8.pikabu.ru/post_img/2016/01/28/8/14539843261780265.jpg"
              alt=""
            />
          </div>

          <div className="CatalogProductCard-contentColumn">
            <div className="CatalogProductCard-content">
              <h2 className="CatalogProductCard-title">Картофель</h2>
              <div className="CatalogProductCard-amount">Количество: 10</div>
              <div className="CatalogProductCard-price">Цена: 1</div>
            </div>
            <div className="CatalogProductCard-action">
              <div className="CatalogProductCard-button">
                <Button title="Добавить в корзину" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogProductCard;
