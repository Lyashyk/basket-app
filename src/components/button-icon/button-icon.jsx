import React, { Component } from 'react';
import cn from 'classnames';

import './button-icon.css';

class ButtonIcon extends Component {
  render() {
    const { size, icon } = this.props;

    return (
      <button className={cn('ButtonIcon', `ButtonIcon--size-${size}`)}>
        <span className="ButtonIcon-Wrapper">{icon}</span>
      </button>
    );
  }
}

export default ButtonIcon;
