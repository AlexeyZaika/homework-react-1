import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends React.PureComponent {
  render() {
    return (
      <button type="button" className={`${this.props.className}` + ' button'}>{this.props.children}</button>
    );
  }
}

Button.defaultProps = {children: "Button", className: "black"};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Button;
