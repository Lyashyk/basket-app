import React, { Component } from 'react';
import cn from 'classnames';

import './remove-button.css';
import IconTrash from '../../assets/icon/icon-trash/icon-trash';

class RemoveButton extends Component {
  render() {
    const { size } = this.props;

    return (
      <button className={cn('RemoveButton', `RemoveButton--size-${size}`)}>
        <div className="RemoveButton-Wrapper">
          <IconTrash />
        </div>
      </button>
    );
  }
}

export default RemoveButton;
