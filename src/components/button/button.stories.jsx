import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Button from './button';

const sizes = {
  Normal: 'normal',
  Small: 'small'
};

storiesOf('UI|Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const size = select('Size', sizes, 'normal');
    const expanded = boolean('Expanded', false);

    return (
      <Button title="Добавить в корзину" size={size} expanded={expanded} />
    );
  });
