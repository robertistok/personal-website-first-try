import React from "react";
import { Link } from "gatsby";
import styles from "./Tags.module.scss";

interface TagsProps {
  tags: string[];
  tagSlugs: string[];
}

const Tags: React.FunctionComponent<TagsProps> = ({
  tags,
  tagSlugs
}: TagsProps): React.ReactElement => (
  <div className={styles["tags"]}>
    <ul className={styles["tags__list"]}>
      {tagSlugs &&
        tagSlugs.map(
          (slug, i): React.ReactElement => (
            <li className={styles["tags__list-item"]} key={tags[i]}>
              <Link to={slug} className={styles["tags__list-item-link"]}>
                {tags[i]}
              </Link>
            </li>
          )
        )}
    </ul>
  </div>
);

export default Tags;
