import _ from 'lodash';

function component(){
    var ele = document.createElement('div');
  
    // _.map 是 lodash 的函式
    ele.innerHTML = _.map(['Hello','webpackTest'], function(item){
      return item + ' ';
    });
  
    return ele;
  }
  
  document.body.appendChild(component());