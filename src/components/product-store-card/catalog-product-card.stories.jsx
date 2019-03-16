import React from 'react';

import { storiesOf } from '@storybook/react';

import ProductStoreCard from './catalog-product-card';

storiesOf('Modules|Product/CatalogProductCard', module).add('Default', () => {
  return (
    <div style={{ width: '600px' }}>
      <ProductStoreCard />
    </div>
  );
});
