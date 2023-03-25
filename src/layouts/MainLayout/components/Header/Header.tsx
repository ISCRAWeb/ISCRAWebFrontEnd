import { DetailedHTMLProps, HTMLAttributes} from "react";
import styles from "./Header.module.scss";
import UIkit from "uikit";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
};

export const Header = ({...props}: HeaderProps):JSX.Element => {
  return (<div {...props}>
     Header
    </div>);
};

