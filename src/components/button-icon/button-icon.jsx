import React, { Component } from 'react';
import cn from 'classnames';

import './button-icon.css';
import IconTrash from '../../assets/icon/icon-trash/icon-trash';

class ButtonIcon extends Component {
  render() {
    const { size } = this.props;

    return (
      <button className={cn('ButtonIcon', `ButtonIcon--size-${size}`)}>
        <div className="ButtonIcon-Wrapper">
          <IconTrash />
        </div>
      </button>
    );
  }
}

export default ButtonIcon;
