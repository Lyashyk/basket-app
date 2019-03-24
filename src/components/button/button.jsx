import React, { Component } from 'react';
import cn from 'classnames';

import './button.css';

class Button extends Component {
  static defaultProps = {
    size: 'normal'
  };

  render() {
    const { title, size, expanded, ...rest } = this.props;

    return (
      <button
        className={cn('Button', `Button--size-${size}`, {
          'Button--expanded': expanded
        })}
        {...rest}
      >
        {title}
      </button>
    );
  }
}

export default Button;
