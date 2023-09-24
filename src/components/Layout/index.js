import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

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