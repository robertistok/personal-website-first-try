import React from "react";
import styles from "./Copyright.module.scss";

interface CopyrightProps {
  copyright: string;
}

const Copyright: React.FunctionComponent<CopyrightProps> = ({
  copyright
}: CopyrightProps): React.ReactElement => <div className={styles["copyright"]}>{copyright}</div>;

export default Copyright;
