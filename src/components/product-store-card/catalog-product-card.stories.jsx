import React from 'react';

import { storiesOf } from '@storybook/react';

import CatalogProductCard from './catalog-product-card';

storiesOf('Modules|Product/CatalogProductCard', module).add('Default', () => {
  return (
    <div style={{ width: '480px' }}>
      <CatalogProductCard
        product={{
          image:
            'https://cs8.pikabu.ru/post_img/2016/01/28/8/14539843261780265.jpg',
          title: 'Картофель',
          amount: '10',
          price: 'Цена: 1'
        }}
      />
    </div>
  );
});
