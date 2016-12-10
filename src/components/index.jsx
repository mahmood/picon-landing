import React, {Component} from 'react';
import {Flex, Box, Grid} from 'reflexbox';
import IconBox from './iconBox.jsx';
import Logo from './logo.jsx';
import Icons from '../data/icons';

class Index extends Component {
  render() {
    return (
      <div>
        <Logo/>
        <Flex
          align="center"
          gutter={2}
          justify="flex-start"
          wrap
          col={12}
          p={2}
        >
          {Icons.map(({name, icon},index=0)=>{
            return <IconBox key={index++} name={name} icon={icon}/>
          })}
       </Flex>
      </div>
    );
  }
}

export default Index;
