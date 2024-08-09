import Header from "./Header"
import MainArea from "./OrderList"
import { Outlet } from "react-router-dom"
import './Root.css'

export default function Root() {

    return (
        <div>
            <Header />
            <main className="main-content">
                <Outlet/>
            </main>
        </div>
    )
}