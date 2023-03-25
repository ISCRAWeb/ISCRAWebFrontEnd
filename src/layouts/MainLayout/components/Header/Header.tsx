// TODO: генерирование менюшки на основании интерфейса (мб нет) + отслеживание uk-active

import { DetailedHTMLProps, HTMLAttributes} from "react";
import styles from "./Header.module.css";
import cn from "classnames";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>{
};

export const Header = ({...props}: HeaderProps):JSX.Element => {
  return (
    <header {...props} className={cn("uk-container", "uk-flex-inline", "uk-width-1-1", "uk-flex-between", "uk-height-max-small")} >
      <img src="/logo.svg" data-uk-img data-alt="Logo" className={cn("uk-img", styles["Header_img"])}/>
      <nav className={cn("navbar-container")} data-uk-navbar>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active" ><a className={cn(styles["Header_nav_a"], "uk-text-large", "uk-text-normal")} href="#">О нас</a></li>
            <li><a className={styles["Header_nav_a"]} href="#">Мероприятия</a></li>
            <li><a className={styles["Header_nav_a"]} href="#">Курсы</a></li>
            <li><a className={styles["Header_nav_a"]} href="#">Новости</a></li>
          </ul>
        </div> 
      </nav>
    </header>);
};

