import React, {Component} from 'react';

export default class Button extends Component{
  render(){
    const {href, children} = this.props;
    return(
      <a className="button" href={href}>{children}</a>
    );
  }
}
