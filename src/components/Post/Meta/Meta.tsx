import React from "react";
import moment from "moment";
import styles from "./Meta.module.scss";

interface MetaProps {
  date: string;
}

const Meta: React.FunctionComponent<MetaProps> = ({ date }: MetaProps): React.ReactElement => (
  <div className={styles["meta"]}>
    <p className={styles["meta__date"]}>Published {moment(date).format("D MMM YYYY")}</p>
  </div>
);

export default Meta;
