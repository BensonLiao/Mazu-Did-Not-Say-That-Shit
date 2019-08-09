# Mazu did not say that shit

## How it work

Mocking page for a [Facebook post](https://www.facebook.com/themazhou/posts/307433766601772), which is inspire by [ididnotsaythatshit](https://weichiachang.github.io/ididnotsaythatshit/).
This project build from [create-react-app](https://facebook.github.io/create-react-app/), [redux](https://redux.js.org/) , [styled-components](https://www.styled-components.com/) to mock the style and provide some additional user interaction (eg. 按讚、留言、編輯、刪除或隱藏留言) of a Facebook post.

Data are also mocked as a static js object to simplify the page, and will be released a version of fully intergrated frontend & backend version of this page.

# Available interactions

1. 對貼文按讚

<img src="media/reactToPost.gif" alt="reactToPost" width="515" height="430">

2. 對留言按讚

![reactToComment](media/reactToComment.gif)

3. 留言

![commentToPost](media/commentToPost.gif)

4. 隱藏或取消隱藏留言

![toggleCommentVisible](media/toggleCommentVisible.gif)

5. 編輯留言

![editComment](media/editComment.gif)

6. 刪除留言

![deleteComment](media/deleteComment.gif)

Or

![deleteCommentOnEdit](media/deleteCommentOnEdit.gif)

# Demo

Demo page are available [here](https://bensonliao.github.io/Mazu-Did-Not-Say-That-Shit).

# Storybook

There's also a storybook to see how components works as standalone UI:

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://bensonliao.github.io/Mazu-Did-Not-Say-That-Shit-Storybook)

# Run at local

Clone and run

```
npm install
```

Run

```
npm start
```

then you can access [http://localhost:3000](http://localhost:3000)

## Author

Benson Liao
