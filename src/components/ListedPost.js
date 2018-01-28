import React from 'react';
import Link from 'gatsby-link';

import '../scss/ListedPost.module.scss';

const ListedPost = ({ post }) => (
  <div
    styleName="wrap"
    key={post.id}
  >
    <div styleName="listed-post">
      <Link to={post.frontmatter.path}>
        <div styleName="title">
          {post.frontmatter.title}
        </div>
      </Link>
      <div styleName="date">
        {post.frontmatter.date}
      </div>

      <div styleName="excerpt">
        {post.excerpt}
      </div>
      <div styleName="readmore">
        <Link to={post.frontmatter.path}>
          <div styleName="readmore-inner">
            Keep Reading
          </div>
        </Link>
      </div>
    </div>

  </div>
);

export default ListedPost;
