import React from 'react';

import { storiesOf } from '@storybook/react';

import ProductStoreCard from './product-store-card';

storiesOf('Component', module).add('ProductStoreCard', () => {
  return (
    <div style={{ width: 600 + 'px' }}>
      <ProductStoreCard />
    </div>
  );
});
