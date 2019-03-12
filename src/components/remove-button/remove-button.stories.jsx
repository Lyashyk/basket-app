import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import RemoveButton from './remove-button';

const sizes = {
  Normal: 'normal',
  Small: 'small'
};

// storiesOf('UI|Button', module).add('RemoveButton', () => {
//   return <RemoveButton />;
// });

storiesOf('UI|Button', module)
  .addDecorator(withKnobs)
  .add('RemoveButton', () => {
    const size = select('Size', sizes, 'normal');

    return <RemoveButton size={size} />;
  });
