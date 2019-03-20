import React from 'react';

import { storiesOf } from '@storybook/react';

import IconTrash from './icon-trash';

storiesOf('UI|Icons', module).add('IconTrash', () => {
  return (
    <div style={{ width: '80px' }}>
      <IconTrash />
    </div>
  );
});
