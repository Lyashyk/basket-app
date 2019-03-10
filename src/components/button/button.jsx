import React, { Component } from 'react';
import cn from 'classnames';

import './button.css';

class Button extends Component {
  render() {
    const { title, size, expanded } = this.props;

    return (
      <button
        className={cn('Button', `Button--size-${size}`, {
          'Button--expanded': expanded
        })}
      >
        {title}
      </button>
    );
  }
}

export default Button;
