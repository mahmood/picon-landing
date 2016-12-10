import React, {Component} from 'react';
import Button from './button.jsx';

export default class Logo extends Component{
  render(){
    return(
      <div className="logo">
        <h1>Picon</h1>
        <span>Pure css icon Set.</span>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        <Button href="https://github.com/behanWeb/Picon">Picon on Github</Button>
        <Button href="https://github.com/behanWeb/Picon">Download</Button>
      </div>
    )
  }
}
