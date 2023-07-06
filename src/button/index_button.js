import Cursor from '../button/cursor';
import ButtonCtrl from '../button/buttonCtrl';

// initialize custom cursor
const cursor = new Cursor(document.querySelector('.button_cursor'));
const button = new ButtonCtrl(document.querySelector('.button'));

button.on('enter', () => cursor.enter());
button.on('leave', () => cursor.leave());