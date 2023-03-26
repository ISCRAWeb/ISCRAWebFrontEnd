import { MenuItem } from "@/interfaces/menu.interface";
import {createContext, useState, PropsWithChildren} from "react";

export interface IAppContext {
  menu: MenuItem[];
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [], 
});

export const AppContextProvider = ({
  menu,
  children
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  return <AppContext.Provider value={{
      menu: menuState,
      setMenu
  }}>
    {children}
    </AppContext.Provider>;
};
