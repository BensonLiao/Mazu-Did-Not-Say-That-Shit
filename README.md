# Mazu did not say that shit

# You can interact with it almost like a real Facebook post.

## How does it work:

Mocking page for a [Facebook post](https://www.facebook.com/themazhou/posts/307433766601772), which is inspire by [ididnotsaythatshit](https://weichiachang.github.io/ididnotsaythatshit/).
This project build from [create-react-app](https://facebook.github.io/create-react-app/), [redux](https://redux.js.org/) , [styled-components](https://www.styled-components.com/) and [typescript](https://www.typescriptlang.org/) to mock the style and provide some additional user interaction (eg. 按讚、留言、編輯、刪除或隱藏留言) of a Facebook post.

Data are also mocked as a static js object to simplify the page, and will be released a version of fully intergrated frontend & backend version of this page.

# Available interactions

1. 對貼文按讚

<img src="media/reactToPost.gif" alt="reactToPost" width="515" height="430">

2. 對留言按讚

<img src="media/reactToComment.gif" alt="reactToComment" width="515" height="430">

3. 留言

<img src="media/commentToPost.gif" alt="commentToPost" width="515" height="430">

4. 隱藏或取消隱藏留言

<img src="media/toggleCommentVisible.gif" alt="toggleCommentVisible" width="515" height="430">

5. 編輯留言

<img src="media/editComment.gif" alt="editComment" width="515" height="430">

6. 刪除留言

<img src="media/deleteComment.gif" alt="deleteComment" width="515" height="430">

Or

<img src="media/deleteCommentOnEdit.gif" alt="deleteCommentOnEdit" width="515" height="430">

# Demo

Demo page are available [here](https://bensonliao.github.io/Mazu-Did-Not-Say-That-Shit).

# Storybook

There's also a storybook to see how components works as standalone UI:

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://bensonliao.github.io/Mazu-Did-Not-Say-That-Shit-Storybook)

# Run at local

Clone and install dependencies

```
yarn install
```

Run project

```
yarn start
```

then you can access [http://localhost:3000](http://localhost:3000)

## Author

Benson Liao
