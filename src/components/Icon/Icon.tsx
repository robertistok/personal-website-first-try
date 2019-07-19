import React from "react";
import styles from "./Icon.module.scss";
import { Icon as IconType } from "../../types";

type IconProps = {
  icon: IconType;
};

const Icon: React.FunctionComponent<IconProps> = ({ icon }) => (
  <svg className={styles["icon"]} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
