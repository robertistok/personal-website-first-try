import React from "react";
import { getContactHref, getIcon } from "../../../utils";
import Icon from "../../Icon";
import styles from "./Contacts.module.scss";

interface ContactsProps {
  contacts: {
    [key: string]: string;
  };
}

const Contacts: React.FunctionComponent<ContactsProps> = ({
  contacts
}: ContactsProps): React.ReactElement => (
  <div className={styles["contacts"]}>
    <ul className={styles["contacts__list"]}>
      {Object.keys(contacts).map(
        (name): React.ReactElement => (
          <li className={styles["contacts__list-item"]} key={name}>
            <a
              className={styles["contacts__list-item-link"]}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon icon={getIcon(name)} />
            </a>
          </li>
        )
      )}
    </ul>
  </div>
);

export default Contacts;
