import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import ButtonIcon from './button-icon';
import IconTrash from '../icons/icon-trash/icon-trash';

const sizes = {
  Normal: 'normal',
  Small: 'small'
};

storiesOf('UI|ButtonIcon', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const size = select('Size', sizes, 'normal');

    return <ButtonIcon size={size} icon={<IconTrash />} />;
  });
