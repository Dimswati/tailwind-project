import { Outlet } from "react-router-dom"

import Navbar from "./navbar"
import Footer from "./Footer"

export default function MainLayout() {
  return(
    <div className="w-screen my-2 sm:w-[80vw] sm:my-0 mx-auto transition-all">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
