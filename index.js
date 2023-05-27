import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css'


var a = new Date();
var b = a.getHours();
const cssStyle = {};
if(b>=1 && b<12){
    b = "good morning"; 
    cssStyle.color='green'
}
else if(b>=1 && b<19){
     b = "good afternoon"
     cssStyle.color='orange'
}

else{
  b = "good night"
  cssStyle.color='black'
}


ReactDOM.render(<>
   <div>
       <h1>Hello sir, <span style={cssStyle}>{b}</span></h1>
  </div>
</>,document.getElementById('root'));
