'use strict'

let months = prompt('Enter month please');

switch(months){
    case'december':
    case'january':
    case'februray':
    alert('its Winter');
    break;
    case'march':
    case'april':
    case'may':
    alert('its Spring');
    break;
    
    case'jun':
    case'july':
    case'august':
    alert('its Summer');
    break;
    case'september':
    case'october':
    case'november':
    alert('its Atumn');
    break;
    default:
    alert('sorry there is no month like you enter')
    
}