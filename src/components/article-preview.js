import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./article-preview.module.css";

export default ({ article }) => (
  <div>
    <Link to={`/blog/${article.slug}`}>
      <div className={styles.preview}>
        <div style={{ width: 180, height: 100, marginRight: 20 }}>
          <Img
            className={styles.previewImg}
            alt=""
            fluid={article.heroImage.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>
        <div className={styles.previewContents}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <h3 className={styles.previewTitle}>{article.title}</h3>
            <small className={styles.publishDate}>{article.publishDate}</small>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Link>
  </div>
);
