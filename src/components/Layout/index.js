import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./Layout.scss"

function Layout() {
    return (
        <>
            <div className="layout">
                <Header />
                <main className="main">
                    <div className="container">
                        <Outlet />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout