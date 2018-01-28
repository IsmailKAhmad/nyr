import React from 'react';
import '../scss/PostList.module.scss';


const PostList = ({ children }) => (
  <div styleName="container">
    <div styleName="content">
      <div styleName="post-list-title">Latest Stories</div>
    </div>
    <div styleName="post-list-wrap">
      {children}
    </div>
  </div>
);

export default PostList;
