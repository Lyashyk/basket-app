import React from 'react';

import { storiesOf } from '@storybook/react';

import ProductStoreCard from './catalog-product-card';

storiesOf('Component', module).add('CatalogProductCard', () => {
  return (
    <div style={{ width: '600px' }}>
      <ProductStoreCard />
    </div>
  );
});
