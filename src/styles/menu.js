import cssesc from 'cssesc'
import commentMenu from '../assets/img/comment-menu.png'

export const menuItemHideComment = `
  &:before {
    background-image: url(${cssesc(commentMenu)});
    background-repeat: no-repeat;
    background-size: 17px 34px;
    background-position: 0 0;
    content: '';
    display: inline-block;
    height: 16px;
    margin-right: 5px;
    width: 16px;
  }
`
