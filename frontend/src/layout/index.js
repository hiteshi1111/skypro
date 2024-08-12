import React from 'react'
import Header from './header'
import Footer from './footer'
import FooterContact from './footerContact'
import FloatingAction from '../components/shared/floatingAction'

const Layout  = ({children}) => {
    return (
        <>
        <Header />
        {children}
        <FloatingAction/>
        <FooterContact/>
        <Footer/>
        </>
    )
}

export default Layout;