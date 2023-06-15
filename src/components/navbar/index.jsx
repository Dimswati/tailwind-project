import { NavHashLink } from "react-router-hash-link"
import NavButton from "./NavButton"
import NavElement from "./NavElement"
import { useLocation } from "react-router-dom"

export default function Navbar() {

  return (
        <div className="hidden sm:block mt-2 fixed top-0 right-0 left-0">
            <nav className="flex items-center justify-center gap-4">
            <NavButton>
              {(hash) => {
                return (
                  <NavElement hash={hash} linkname='about me' hashname='#about-me' path='/#about-me'/>
                )
              }}
            </NavButton>
            <NavButton>
              {(hash) => {
                return (
                  <NavElement hash={hash} linkname='services' hashname='#services' path='/#services'/>
                )
              }}
            </NavButton>
            <NavButton>
              {(hash) => {
                return (
                  <NavElement hash={hash} linkname='projects' path='/projects'/>
                )
              }}
            </NavButton>
            <NavButton>
              {(hash) => {
                return (
                  <NavElement hash={hash} linkname='my team' hashname='#my-team' path='/#my-team'/>
                )
              }}
            </NavButton>
            </nav>
        </div>
  )
}
