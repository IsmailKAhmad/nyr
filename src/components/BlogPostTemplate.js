import React from 'react';
import Content from '../components/Content';

import '../scss/BlogPost.module.scss';

const BlogPostTemplate = ({
  content, contentComponent, description, title, helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div styleName="article-wrap">
      { helmet || ''}

      <div styleName="article">
        <div styleName="category">
          Reviewing
        </div>
        <div styleName="article-date">
          December 12, 2017
        </div>
        <div styleName="article-header">
          <div styleName="article-title-divider" className="desktop-only" />
          <div className="panes">
            <div className="pane">
              <div className="_l">
                <div styleName="title-wrap">
                  <h1 styleName="title">Call Me By Your Name</h1>
                </div>
              </div>
            </div>
            <div className="pane">
              <div styleName="meta">
                <div>Year: <b>2017</b></div>
                <div>Directed by <b>Greta Gerwig</b></div>
                <div>Comedy | R | 1h 33m</div>
              </div>
            </div>
          </div>
        </div>
        <div styleName="content-wrap">
          <div styleName="content">
            <PostContent content={content} />

          </div>

          {/* <div styleName="sidebar-container" className="desktop-only">
            <div styleName="author">
              Words:
              <br />
              <b>Anthony Salazar</b>
            </div>
            <div styleName="share-container">
              <div className="_e">
                <div styleName="subscribe-title">
                  Share:
                </div>
              </div>
              <div className="icons">
                <div className="icon">
                    facebook
                </div>
                <div className="icon">
                    facebook
                </div>
                <div className="icon">
                    facebook
                </div>
                <div className="icon">
                    facebook
                </div>
              </div>
            </div>
            <div styleName="subscribe">
              <div className="_e">
                <div styleName="subscribe-title">
                  Subscribe
                </div>
              </div>

              <div styleName="subscribe-text">
                The New York Review newsletter is sent
                out once a month full of
                our recent reviews.
              </div>
              <form action="#">
                <div styleName="subscribe-input-wrap">
                  <input type="text" name="" value="" placeholder="Email" />
                  <button type="button" name="button" styleName="hidden" />
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogPostTemplate;
