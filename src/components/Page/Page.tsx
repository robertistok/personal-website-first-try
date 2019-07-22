import React, { useRef, useEffect } from "react";
import styles from "./Page.module.scss";

interface PageProps {
  title?: string;
  children?: React.ReactNode;
}

const Page: React.FunctionComponent<PageProps> = ({
  title,
  children
}: PageProps): React.ReactElement => {
  const pageRef = useRef(null);

  useEffect((): void => {
    pageRef.current.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles["page"]}>
      <div className={styles["page__inner"]}>
        {title && <h1 className={styles["page__title"]}>{title}</h1>}
        <div className={styles["page__body"]}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
