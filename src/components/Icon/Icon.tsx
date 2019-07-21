import React from "react";
import styles from "./Icon.module.scss";
import { Icon as IconType } from "../../types";

interface IconProps {
  icon: IconType;
}

const Icon: React.FunctionComponent<IconProps> = ({ icon }: IconProps): React.ReactElement => (
  <svg className={styles["icon"]} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

export default Icon;
