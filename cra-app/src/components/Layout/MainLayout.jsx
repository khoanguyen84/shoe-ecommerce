import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
    // const { children } = props
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout;