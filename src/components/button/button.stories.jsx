import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

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
    const disabled = boolean('Disabled', false);

    return (
      <Button
        title="Добавить в корзину"
        size={size}
        expanded={expanded}
        disabled={disabled}
        onClick={action('Click')}
      />
    );
  });
