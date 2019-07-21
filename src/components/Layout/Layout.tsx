import React from "react";
import Helmet from "react-helmet";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title,
  description
}: LayoutProps): React.ReactElement => (
  <div className={styles["layout"]}>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>
    {children}
  </div>
);

export default Layout;
