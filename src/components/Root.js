import Header from "./Header"
import MainArea from "./OrderList"
import { Outlet } from "react-router-dom"

export default function Root() {

    return (
        <div>
            <Header />
            <main>
            <Outlet/>
            </main>
        </div>
    )
}