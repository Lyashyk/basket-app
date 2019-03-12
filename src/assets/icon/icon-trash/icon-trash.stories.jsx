import React from 'react';

import { storiesOf } from '@storybook/react';
import IconTrash from './icon-trash';

storiesOf('UI|Icon', module).add('IconTrash', () => {
  return (
    <div style={{ width: '100px' }}>
      <IconTrash />
    </div>
  );
});
