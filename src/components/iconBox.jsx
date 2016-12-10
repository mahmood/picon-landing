import React, {Component} from 'react';
import {Box} from 'reflexbox';

export default class IconBox extends Component{
  render() {
    const {icon, name} = this.props;
    return (
      <Box sm={3} lg={1} px={1} py={2} align="center">
        <div className="icon">
          <div className="icon__wrap"><i className={`picon-${icon}`}/></div>
          <div className="icon__name">{name}</div>
        </div>
      </Box>
    )
  }
}
