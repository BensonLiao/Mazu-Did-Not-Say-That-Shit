import cssesc from 'cssesc'
import commentMenu from '../assets/img/comment-menu.png'
import commentMenu2 from '../assets/img/comment-menu-2.png'

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

export const menuItemEditComment = `
  &:before {
    background-image: url(${cssesc(commentMenu2)});
    background-repeat: no-repeat;
    background-size: 49px 262px;
    background-position: 0 -228px;
    content: '';
    display: inline-block;
    height: 16px;
    margin-right: 5px;
    width: 16px;
  }
`

export const menuItemDeleteComment = `
  &:before {
    background-image: url(${cssesc(commentMenu)});
    background-repeat: no-repeat;
    background-size: 17px 34px;
    background-position: 0 -17px;
    content: '';
    display: inline-block;
    height: 16px;
    margin-right: 5px;
    width: 16px;
  }
`
