import React from 'react';

import { storiesOf } from '@storybook/react';

import CatalogProductCard from './catalog-product-card';

const product = {
  image: 'https://43.img.avito.st/640x480/3224217543.jpg',
  title: 'Картофель',
  amount: 10,
  price: 1
};

storiesOf('Modules|Product/CatalogProductCard', module).add('Default', () => {
  return (
    <div style={{ width: '480px' }}>
      <CatalogProductCard
        product={product}
        onClick={() => console.log('Click')}
      />
    </div>
  );
});
