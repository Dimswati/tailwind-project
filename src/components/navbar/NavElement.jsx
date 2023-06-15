import { NavHashLink } from "react-router-hash-link"

export default function NavElement({ hash, hashname, linkname, path}) {

    const activeStyles = ({isActive}) => {
        if(isActive && hash === hashname){
            return 'bg-amber-100'
        }
        return 'hover:bg-amber-100/25'
    }

    return (
        <NavHashLink to={path} className={activeStyles}>{linkname}</NavHashLink>
    )
}

NavElement.defaultProps = {
    hashname: ''
}

