import {ReactNode, useState } from 'react';
import Header from './header';
import Footer from './footer';

interface Props{
    children? : ReactNode
}

const Layout = ({children}: Props) => {
    return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
    )
}

export default Layout;