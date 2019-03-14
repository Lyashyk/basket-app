import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import ButtonIcon from './button-icon';

const sizes = {
  Normal: 'normal',
  Small: 'small'
};

// storiesOf('UI|Button', module).add('ButtonIcon', () => {
//   return <ButtonIcon />;
// });

storiesOf('UI|Button', module)
  .addDecorator(withKnobs)
  .add('ButtonIcon', () => {
    const size = select('Size', sizes, 'normal');

    return <ButtonIcon size={size} />;
  });
