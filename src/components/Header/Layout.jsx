// Layout.js
import React from "react";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            {/* Optionally, you can include a footer component here */}
        </div>
    );
}

export default Layout;
