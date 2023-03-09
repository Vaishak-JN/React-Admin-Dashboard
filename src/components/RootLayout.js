import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import SideBar from "./SideBar"


const RootLayout = () => {
    return (
        <div className="root">
            <SideBar />
            <main className="main">
                <NavBar />
                <Outlet />
            </main>

        </div>
    )
}

export default RootLayout