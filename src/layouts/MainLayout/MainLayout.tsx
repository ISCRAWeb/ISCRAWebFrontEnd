import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "@/contexts/app.context";

import  { Header } from "./components/Header";


interface MainLayoutProps {
  children;
};

const MainLayout = ({ children }: MainLayoutProps):JSX.Element => {
  return (
    <div>
      <Header/>
      <div>
        {children}
      </div>
    </div>);
};

export const withMainLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withMainLayoutComponent(props: T): JSX.Element {
return (
      <AppContextProvider menu={props.menu}>
        <MainLayout>
          <Component {...props} />
          </MainLayout>
      </AppContextProvider>
    );
  }
}
