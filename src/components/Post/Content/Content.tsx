import React from "react";
import styles from "./Content.module.scss";

interface ContentProps {
  body: string;
  title: string;
}

const Content: React.FunctionComponent<ContentProps> = ({
  body,
  title
}: ContentProps): React.ReactElement => (
  <div className={styles["content"]}>
    <h1 className={styles["content__title"]}>{title}</h1>
    <div className={styles["content__body"]} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
