import React, { Component } from 'react';

import Button from '../button/button';

import './catalog-product-card.css';

class CatalogProductCard extends Component {
  render() {
    const { product, onClick } = this.props;
    return (
      <div className="CatalogProductCard">
        <div className="CatalogProductCard-grid">
          <div className="CatalogProductCard-imageColumn">
            <img
              className="CatalogProductCard-image"
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="CatalogProductCard-contentColumn">
            <div className="CatalogProductCard-content">
              <h2 className="CatalogProductCard-title">{product.title}</h2>
              <div className="CatalogProductCard-amount">
                Количество: {product.amount}
              </div>

              <div className="CatalogProductCard-price">
                Цена: {product.price}
              </div>
            </div>

            <div className="CatalogProductCard-action">
              <div className="CatalogProductCard-button">
                <Button title="Добавить в корзину" onClick={onClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogProductCard;
