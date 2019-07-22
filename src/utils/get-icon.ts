import ICONS, { IconsType } from "../constants/Icons";

const getIcon = (name: string): IconsType[keyof IconsType] => {
  let icon: IconsType[keyof IconsType];

  switch (name) {
    case "twitter":
      icon = ICONS.TWITTER;
      break;
    case "github":
      icon = ICONS.GITHUB;
      break;
    case "vkontakte":
      icon = ICONS.VKONTAKTE;
      break;
    case "telegram":
      icon = ICONS.TELEGRAM;
      break;
    case "email":
      icon = ICONS.EMAIL;
      break;
    case "rss":
      icon = ICONS.RSS;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
