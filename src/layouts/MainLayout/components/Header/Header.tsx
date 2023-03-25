import { DetailedHTMLProps, HTMLAttributes} from "react";
import styles from "./Header.module.scss";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>{
};

export const Header = ({...props}: HeaderProps):JSX.Element => {
  return (
    <header {...props} data-uk-flex-center>
      <img src="/logo.svg" alt="Logo" className="" />
      <nav>
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Мероприятия</a></li>
          <li><a href="#">Курсы</a></li>
          <li><a href="#">Новости</a></li>
        </ul>
      </nav>
    </header>);
};

